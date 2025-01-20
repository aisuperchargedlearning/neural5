/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8B4513', // Saddle brown
          secondary: '#654321', // Dark brown
          accent: '#DEB887', // Burlywood
          light: '#F5DEB3', // Wheat
          dark: '#3E2723', // Dark brown almost black
        },
      },
    },
  },
  plugins: [],
};