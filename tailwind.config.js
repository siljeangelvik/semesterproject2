/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.{html,css,js}",
        "./src/**/*.{html,css,js}",
        "./dist/*.{html,css,js}",
        "./dist/**/*.{html,css,js}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
