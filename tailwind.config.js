/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container : {
        center : true,
        padding : '15px',
      },
    screens : {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
      },
      fontFamily:{
        primary: ['var(--font-dmSans)', 'sans-serif'],
        secondary: ['var(--font-barlow)', 'sans-serif'],
      },
    extend: {
      colors: {
        primary: '#002d72',
        secondary: '#666666',
        accent: '#d4af37',
        border: '#d7d7d7'
      },
      boxShadow:{
        'custom-light': '0 4px 54px a0px rgba(18, 19, 21, 0.06)',
      },
      backgroundImage: {
        hero: "url(/hero.jpeg)",
      },
    },
  },
  plugins: [],
}

