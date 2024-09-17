/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Barlow", "sans-serif"],
                barlow: [
                    'url("/src/assets/fonts/Barlow-Bold.ttf") format("truetype") bold',
                    'url("/src/assets/fonts/Barlow-Italic.ttf") format("truetype") italic',
                    'url("/src/assets/fonts/Barlow-Regular.ttf") format("truetype")',
                    'url("/src/assets/fonts/Barlow-SemiBold.ttf") format("truetype") semibold',
                ],
            },
        },
    },
    plugins: [],
};
