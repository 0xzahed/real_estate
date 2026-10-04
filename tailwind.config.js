/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F172A',
          soft: '#334155',
        },
        accent: {
          DEFAULT: '#C9A227',
          dark: '#A8871D',
          light: '#F5ECD0',
          soft: '#FBF7E8',
        },
        canvas: '#F8FAFC',
        line: '#E2E8F0',
        muted: '#64748B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.05), 0 8px 24px -12px rgba(15,23,42,0.18)',
        card: '0 2px 8px rgba(15,23,42,0.06), 0 16px 32px -16px rgba(15,23,42,0.18)',
        lift: '0 12px 32px -12px rgba(15,23,42,0.28)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
