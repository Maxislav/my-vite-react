import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({mode}) => {

    const isDev = mode === 'development'
    return {
        resolve: {
            alias: {
                // При импорте '@env-config' вы получите нужный файл
                '@env-config': isDev
                    ? path.resolve(__dirname, './src/environment/env-dev.ts')
                    : path.resolve(__dirname, './src/environment/env-prod.ts'),
            },
        },
        build: {
            outDir: './dist',
            minify: false,
        },
        base: process.env.APP_BASE || './',
        //base: '/my-vite-react/',

        plugins: [react()],
        server: {
            port: 3000, // Change this to your preferred port
            open: true,
            // strictPort: true, // Optional: Force Vite to fail if the port is already in use
        },
        ssr: {
            noExternal: ['react-router-dom', 'react-router'],
        },
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true, // Разрешает inline JavaScript в less файлах
                },
            },
        },
    }
})
