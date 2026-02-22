/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom color palette - Dark Oceanic theme with bioluminescent accents
      colors: {
        // Dark mode colors (default)
        background: {
          DEFAULT: '#0a0f1a',
          light: '#f9fafb',
        },
        surface: {
          DEFAULT: '#111827',
          light: '#ffffff',
        },
        primary: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
          dark: '#0891b2',
          glow: 'rgba(6, 182, 212, 0.2)',
        },
        border: {
          DEFAULT: '#1f2937',
          light: '#e5e7eb',
        },
        // Bioluminescent accent colors
        bio: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          magenta: '#d946ef',
          coral: '#f472b6',
          electric: '#818cf8',
          green: '#4ade80',
        },
      },
      // Custom font families
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      // Custom animations
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'bio-shimmer': 'bioShimmer 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.3)' },
        },
        bioShimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Custom box shadows with glow effect
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
        'glow-xl': '0 0 60px rgba(6, 182, 212, 0.5), 0 0 100px rgba(6, 182, 212, 0.2)',
        'bio-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
        'bio-magenta': '0 0 30px rgba(217, 70, 239, 0.5)',
        'bio-coral': '0 0 30px rgba(244, 114, 182, 0.5)',
        'bio-teal': '0 0 30px rgba(20, 184, 166, 0.5)',
        'bio-electric': '0 0 30px rgba(129, 140, 248, 0.5)',
        'bio-green': '0 0 30px rgba(74, 222, 128, 0.5)',
      },
    },
  },
  plugins: [],
}
