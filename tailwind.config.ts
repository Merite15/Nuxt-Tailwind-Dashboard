/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './App.{js,ts,vue}',
        './app.{js,ts,vue}',
        './Error.{js,ts,vue}',
        './error.{js,ts,vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Poppins'],
                secondary: ['Roboto']
            },
            colors: {
            },
        },
    },
    plugins: [],
}