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
        'home-heading-large': '4rem',
        'home-heading-small': '2.5rem',
      },
    },
  },
  plugins: [],
};
