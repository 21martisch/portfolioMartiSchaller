/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#F6F1EC',
          card: '#EDE5DC',
          surface: '#FAF7F2',
          dark: '#24211E',
          muted: '#6A645F',
          terracotta: '#944627',
          'terracotta-hover': '#7E3B20',
          olive: '#525A4D',
          'olive-dark': '#424A3D',
          sand: '#EAE2D7',
          border: '#E3D8CC',
        }
      }
    },
  },
  plugins: [],
}

