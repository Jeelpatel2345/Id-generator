/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39FF14',
        neonSoft: '#7CFF66',
        cyan: '#00F5D4',
        cyanLight: '#00E5FF',
        dark: '#04070D',
        card: '#0A0F1A',
        cardAlt: '#111827',
        neonBorder: 'rgba(57,255,20,0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(57,255,20,0.5), 0 0 20px rgba(57,255,20,0.3)',
        neonLg: '0 0 15px rgba(57,255,20,0.6), 0 0 30px rgba(57,255,20,0.4)',
        neonSm: '0 0 5px rgba(57,255,20,0.4)',
        soft: '0 4px 20px rgba(0,0,0,0.3)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 10px rgba(57,255,20,0.2)' },
          '50%': { opacity: .7, boxShadow: '0 0 20px rgba(57,255,20,0.5)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}