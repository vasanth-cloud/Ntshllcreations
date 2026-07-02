/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1020',
        navy: '#111827',
        electric: '#2563eb',
        violet: {
          DEFAULT: '#7c3aed',
        },
        cyan: {
          DEFAULT: '#06b6d4',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(37, 99, 235, 0.22)',
      },
    },
  },
  plugins: [],
};
