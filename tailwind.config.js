/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'person-pattern':"url('/resim.jpg')",
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
