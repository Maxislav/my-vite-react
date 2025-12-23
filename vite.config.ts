import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    build: {
        outDir: './dist',
        minify: false,
    },
    // base: './',
    base: '/my-vite-react/',

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
})
