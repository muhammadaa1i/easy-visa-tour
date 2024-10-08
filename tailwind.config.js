/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1270px',
      'laptop': '1024px',
      'min-tablet':'768px',
      'tablet': '640px'
    },
    extend: {},
  },
  plugins: [],
}

