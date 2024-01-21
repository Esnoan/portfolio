/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-background': '#151618',
        'dark-foreground': '#21232C',
        'dark-text': '#e6e6e6',
        background: '#F4F6FF',
        foreground: '#ffffff'
      }
    }
  },
  plugins: []
}
