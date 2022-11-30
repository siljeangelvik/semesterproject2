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
                // profile: resolve(root, 'profile', 'index.html'),
                ganttchart: resolve(root, 'ganttchart', 'index.html')
            }
        }
    }
})
/*
import { defineConfig } from "vite";
const path = require("path");

export default defineConfig({
    base: '/',
    root: path.resolve(__dirname, "./src"),
     publicDir: '',
    build: {
        outDir: './dist',
    },
    server: {
        port: 8080,
        host: true,
    },
});


const path = require("path");

export default {
    // Deploying to https://<USERNAME>.github.io/<REPO>/
    // for example your repository is at:
    // https://github.com/<USERNAME>/<REPO>/
    // set base to: ' /<REPO>/ '
    // base: "/semesterproject2/",

    // Deploying to https://<USERNAME>.github.io/
    base: "/",
    root: path.resolve(__dirname, "./"),
    resolve: {
        alias: {
            "~tailwind": path.resolve(__dirname, "node_modules/tailwindcss"),
            // "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        },
    },
    server: {
        port: 8080,
        host: true,
    },

    build: {
        outDir: "./dist",
    },
};
*/