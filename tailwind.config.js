/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                'xs': ['1.1rem', { lineHeight: '1.4rem' }],
                'sm': ['1.2rem', { lineHeight: '1.5rem' }],
                'base': ['1.35rem', { lineHeight: '1.7rem' }],
                'lg': ['1.5rem', { lineHeight: '1.9rem' }],
                'xl': ['1.7rem', { lineHeight: '2.1rem' }],
                '2xl': ['1.9rem', { lineHeight: '2.3rem' }],
                '3xl': ['2.2rem', { lineHeight: '2.6rem' }],
                '4xl': ['2.7rem', { lineHeight: '3.1rem' }],
                '5xl': ['3.4rem', { lineHeight: '3.9rem' }],
            }
        },
    },
    plugins: [],
}
