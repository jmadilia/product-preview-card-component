import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-cyan': '#3c8067',
        'cream': '#f2ebe3',
        'very-dark-blue': '#1c232b',
        'dark-grayish-blue': '#6c7289',
        'very-dark-emerald': '#022c22',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        fraunces: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [],
}
export default config