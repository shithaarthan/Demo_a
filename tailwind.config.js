/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scans all JS/TS/JSX/TSX files in src
    './src/components/**/*.{js,ts,jsx,tsx}', // Specifically include components
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-darker': '#121212', // Added a darker shade for depth
        'brand-light': '#f5f5f5',
        'brand-gold': '#c0a062',
        'brand-gray': '#8c8c8c',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      boxShadow: {
        luxury: '0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
