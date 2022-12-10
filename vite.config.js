import { resolve } from 'path';
import { defineConfig } from "vite";

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    plugins: [],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                register: resolve(root, 'register', 'index.html'),
                login: resolve(root, 'login', 'index.html'),
                profile: resolve(root, 'profile', 'index.html'),
                ganttchart: resolve(root, 'ganttchart', 'index.html')
            }
        }
    }
})