/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      fontFamily:
      {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      backgroundImage: {
        'hero-bg': "url('https://res.cloudinary.com/dgvslio7u/image/upload/v1721104405/qq6btartjixtlwfbuf1o.jpg')",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
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