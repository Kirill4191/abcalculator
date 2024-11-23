/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Added fallback font
      },
      fontSize: {
        'h1': ['57.3px', '64px'],
        'h2': ['47.8px', '56px'],
        'h3': ['39.8px', '48px'],
        'h4': ['33.18px', '40px'],
        'h5': ['27.6px', '32px'],
        'h6': ['23px', '28px'],
        'p-lg': ['19.2px', '28px'],
        'p-md': ['16px', '24px'],
        'p-sm': ['13.3px', '20px'],
      },
    },
  },
  plugins: [],
}