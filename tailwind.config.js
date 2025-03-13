import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        secondary: {
          300: '#3663AD',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-display-3xl': {
          fontSize: '3.75rem',
          lineHeight: '4.5rem',
        },
        '.text-display-2xl': {
          fontSize: '3rem',
          lineHeight: '3.75rem',
        },
        '.text-display-xl': {
          fontSize: '2.5rem',
          lineHeight: '3.75rem',
          letterSpacing: '-0.02em',
        },
        '.text-display-lg': {
          fontSize: '2.25rem',
          lineHeight: '2.75rem',
          letterSpacing: '-0.02em',
        },
        '.text-display-md': {
          fontSize: '2rem',
          lineHeight: '2.5rem',
        },
        '.text-display-sm': {
          fontSize: '1.75rem',
          lineHeight: '2.375rem',
        },
        '.text-display-xs': {
          fontSize: '1.5rem',
          lineHeight: '2.25rem',
        },
        // text
        '.text-base-xl': {
          fontSize: '1.25rem',
          lineHeight: '2.125rem',
        },
        '.text-base-lg': {
          fontSize: '1.125rem',
          lineHeight: '2rem',
        },
        '.text-base-md': {
          fontSize: '1rem',
          lineHeight: '1.875rem',
        },
        '.text-base-sm': {
          fontSize: '0.875rem',
          lineHeight: '1.75rem',
        },
        '.text-base-xs': {
          fontSize: '0.75rem',
          lineHeight: '1.5rem',
        },
      })
    }),
  ],
}
