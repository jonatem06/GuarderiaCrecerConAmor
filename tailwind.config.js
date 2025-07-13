/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#4DAA57',
        'secundario': '#FFF6E0',
        'seccionDestacada': '#FDE3A7',
        'acento': '#D95C3B',
        'textoPrincipal': '#333333',
      },
    },
  },
  plugins: [],
}
