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
          green: '#06C755',
          red: '#ef4444',
          secondary: '#4f46e5',
          neon: '#00f3ff',   // Cyberpunk Cyan
          magic: '#bc13fe',  // Magic Purple
          crimson: '#ff003c',// Aggressive Red
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 2s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'matrix-slide': 'matrix-slide 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))' },
        },
        'matrix-slide': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 2s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'matrix-slide': 'matrix-slide 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
