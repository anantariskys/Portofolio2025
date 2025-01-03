/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#f8f9fa',
        tertiary: '#6c757d',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      center: true,
    },
    fontFamily: {
      varela: ['Varela Round', 'sans-serif'],
    },
  },
  plugins: [],
}

