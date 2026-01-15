import { fontFamily } from 'tailwindcss/defaultConfig';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        soft: {
          bg: '#ffffff', // white
          surface: '#f9fafb', // light gray
          text: '#1f2937', // dark gray
          muted: '#6b7280', // medium gray
          accent: '#3b82f6', // soft blue
        },
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0, 0, 0, 0.08)',
        subtle: '0 1px 2px rgba(0, 0, 0, 0.04)',
        md: '0 4px 6px rgba(0, 0, 0, 0.07)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      }
    }
  },
  plugins: [],
}
