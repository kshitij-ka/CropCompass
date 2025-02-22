/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Change this based on your needs
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'plant': "url('/home/atharva/public/images/plant-1573.svg')",
      }
    },
  },
  plugins: [],
};
