/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'big':'1475px',
      'desktop': '1220px',
      'middle':'1160px',
      'laptop': '1024px',
      'min-tablet':'768px',
      'tablet': '640px', 

    },
    extend: {},
  },
  plugins: [],
}

