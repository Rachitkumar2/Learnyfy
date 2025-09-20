/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // vite ke liye ye structure hona chahiye
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'Outfit', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'course-details-heading-small':['26px','36px'],
        'course-details-heading-large':['36px','44px'],
        'home-heading-small':['28px','34px'],
        'home-heading-large':['48px','px'],

      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
};
