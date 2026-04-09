/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
    './src/**/*.{astro,ts,tsx,html,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Zen Kaku Gothic New"',
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
        display: ['"Zen Kaku Gothic New"', '"Noto Sans TC"', 'sans-serif'],
        en: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        kanji: ['"Shippori Mincho B1"', '"Shippori Mincho"', 'serif'],
      },
      colors: {
        hero: {
          dark: '#0a0b10',
          panel: '#14151c',
          gold: '#FFD700',
          'gold-glow': '#ffec8b',
          green: '#06C755',
          'neon-green': '#00ff9d',
          red: '#ef4444',
          secondary: '#4f46e5',
          'neon-purple': '#b026ff',
          'neon-cyan': '#00f3ff',
          neon: '#00f3ff',
          magic: '#bc13fe',
          crimson: '#ff003c',
          sakura: '#ff5a7a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        'shine-fast': 'shine 1.5s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'matrix-slide': 'matrix-slide 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'tilt-in': 'tilt-in 0.9s cubic-bezier(.2,.9,.3,1) both',
        'slide-in-l': 'slide-in-l 0.9s cubic-bezier(.2,.9,.3,1) both',
        'slide-in-r': 'slide-in-r 0.9s cubic-bezier(.2,.9,.3,1) both',
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'tilt-in': {
          '0%': { opacity: '0', transform: 'translateY(30px) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0)' },
        },
        'slide-in-l': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-r': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
