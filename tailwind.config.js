/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        teal: {
          DEFAULT: 'hsl(var(--teal))',
          dark: 'hsl(var(--teal-dark))',
        },
        cyan: {
          DEFAULT: 'hsl(var(--cyan))',
          light: 'hsl(var(--cyan-light))',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-teal': 'linear-gradient(135deg, hsl(var(--teal-dark)), hsl(var(--teal)))',
        'gradient-card': 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--muted)))',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px hsl(var(--cyan) / 0.3)',
        'glow': '0 0 30px -5px hsl(var(--cyan) / 0.4)',
        'glow-lg': '0 0 40px -5px hsl(var(--cyan) / 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px -5px hsl(var(--cyan) / 0.3)' },
          '50%': { boxShadow: '0 0 40px -5px hsl(var(--cyan) / 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
