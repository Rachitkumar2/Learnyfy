// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // vite ke liye ye structure hona chahiye
  ],
  theme: {
    extend: {
      fontSize: {
        '': '2.5rem',  // Customize as needed
        'home-heading-large': '4.5rem',
      },
    },
  },
  plugins: [],
};
