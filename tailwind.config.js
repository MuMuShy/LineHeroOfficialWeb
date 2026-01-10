/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: ['"Cinzel"', 'serif'],
      },
      colors: {
        hero: {
          dark: '#111216',
          panel: '#1a1b23',
          gold: '#FFD700',
          'gold-glow': '#ffec8b',
          green: '#06C755',
          'neon-green': '#00ff9d',
          red: '#ef4444',
          secondary: '#4f46e5',
          'neon-purple': '#b026ff',
          'neon-cyan': '#00f3ff',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        'shine-fast': 'shine 1.5s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(100%)' },
          '50%': { opacity: '0.8', filter: 'brightness(150%) blur(2px)' },
        },
      },
    },
  },
  plugins: [],
};
