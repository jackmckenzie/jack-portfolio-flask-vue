import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        jost: ['Jost', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: ({ theme }) => ({
        header: `0 0 1px 0 ${theme('colors.emerald.500')}`
      }),
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [typography]
}
