/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,css,scss,js,jsx,ts,tsx}",
        "./src/*.{html,css,scss,js,jsx,ts,tsx}",
        './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            maxWidth: {
                'readable': '70ch',
            },
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}