/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-light': '#f5f5f5',
        'brand-gold': '#c0a062',
        'brand-gray': '#8c8c8c'
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite'
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      }
    }
  },
  plugins: []
}
