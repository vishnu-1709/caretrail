// Design tokens from docs/MASTER_PROMPT.md, Section 9. Light theme only.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F7F9FB',
        ink: '#1F2937',
        muted: '#6B7280',
        line: '#E5E7EB',
        primary: {
          DEFAULT: '#0F766E',
          hover: '#0D5F59',
          soft: '#E6F4F2',
        },
        // Red is only for allergies and major warnings.
        danger: {
          DEFAULT: '#DC2626',
          soft: '#FEF2F2',
        },
        // Amber is for cautions and low-confidence fields.
        caution: {
          DEFAULT: '#D97706',
          soft: '#FFFBEB',
        },
        // Green is for "confirmed" and "healthy range".
        good: {
          DEFAULT: '#16A34A',
          soft: '#F0FDF4',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(31, 41, 55, 0.04), 0 4px 12px rgba(31, 41, 55, 0.06)',
      },
      minHeight: {
        tap: '48px',
      },
    },
  },
  plugins: [],
}
