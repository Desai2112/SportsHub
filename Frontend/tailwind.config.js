/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      backgroundImage: {
        'hero-bg': "url('https://res.cloudinary.com/dgvslio7u/image/upload/v1720879370/v0j0idif3jpq3ix2qwnp.png')",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out forwards',
        'fade-in': 'fadeIn 2s ease-in forwards',
      },
      transform: ['hover', 'focus'],
      scale: ['hover', 'focus'],
      opacity: ['hover'],
      shadow: ['hover'],
    },
  },
  plugins: [],
}