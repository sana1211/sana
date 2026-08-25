/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A12',
        surface: '#14141F',
        surface2: '#1B1B29',
        paper: '#F4F2FF',
        magenta: '#FF3E9A',
        amber: '#FFC93C',
        mint: '#2EE6A6',
        violet: '#8B5CF6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
