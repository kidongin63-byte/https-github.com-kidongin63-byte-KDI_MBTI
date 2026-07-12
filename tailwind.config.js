/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                'xs': ['1.3rem', { lineHeight: '1.6rem' }],
                'sm': ['1.45rem', { lineHeight: '1.8rem' }],
                'base': ['1.65rem', { lineHeight: '2.1rem' }],
                'lg': ['1.85rem', { lineHeight: '2.3rem' }],
                'xl': ['2.1rem', { lineHeight: '2.6rem' }],
                '2xl': ['2.35rem', { lineHeight: '2.8rem' }],
                '3xl': ['2.7rem', { lineHeight: '3.2rem' }],
                '4xl': ['3.3rem', { lineHeight: '3.8rem' }],
                '5xl': ['4.2rem', { lineHeight: '4.8rem' }],
            }
        },
    },
    plugins: [],
}
