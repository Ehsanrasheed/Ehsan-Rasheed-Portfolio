/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          bg: '#f8fafc', // slate-50
          surface: '#ffffff',
          text: '#0f172a', // slate-900
          muted: '#334155', // slate-700
          accent: '#475569', // slate-600
        },
      },
      boxShadow: {
        soft: '0 2px 10px rgba(15, 23, 42, 0.06)',
        subtle: '0 1px 4px rgba(15, 23, 42, 0.05)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: [],
}
