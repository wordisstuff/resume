// /** @type {import('tailwindcss').Config} */
// export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
// export const theme = {
//     extend: {},
// };
// export const plugins = [];
// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ocean: '#05445E',
                babyblue: '#D4F1F4',
                bluegren: '#75E6DA',
                bluegrotto: '#189AB4',
            },
        },
    },
    plugins: [],
};
