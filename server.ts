import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import express from 'express'
import {JSDOM} from 'jsdom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'
const root = process.cwd()

async function createServer() {
    const app = express()
    let vite: any

    if (!isProd) {
        // Development mode: Use Vite dev server
        const {createServer: createViteServer} = await import('vite')
        vite = await createViteServer({
            server: {middlewareMode: true},
            appType: 'custom'
        })
        app.use(vite.middlewares)
    } else {
        // Production mode: Serve static files from dist/client
        const compression = (await import('compression')).default
        app.use(compression())

        // Use / as the mount point for static files
        app.use('/', express.static(path.join(root, 'dist/client'), {
            index: false,
        }))

    }

    // app.get(/.+/, (req: any, res) => {
    //     // Весь путь будет доступен в req.params.resource
    //     const fullPath = req.params.resource;
    //     console.log(fullPath);
    //
    //     res.send(`Вы запросили путь: ${fullPath}`);
    // });
    app.get(/.+/, async (req, res) => {
        try {
            const url = req.originalUrl
            let template, render

            if (!isProd) {
                // Dev: Read template from root and use Vite's module loader
                template = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8')
                template = await vite.transformIndexHtml(url, template)
                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
            } else {
                // Prod: Read template from dist/client and use built server entry
                template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
                // @ts-expect-error - this file is generated after build
                render = (await import('./dist/server/entry-server.js')).render
            }

            const {html: appHtml} = await render(url)

            // const parser = new DOMParser();
            const indexTpl = new JSDOM(template);
            const rootEl = indexTpl.window.document.querySelector('#root');
            if (rootEl) {
                rootEl.innerHTML = appHtml;
            }

            const html = indexTpl?.serialize()

            res.status(200).set({'Content-Type': 'text/html'}).end(html)


        } catch (e: any) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            !isProd && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })

    app.listen(5173, () => console.log('Server running at http://localhost:5173'))
}

createServer()