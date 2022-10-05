/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001D3D",
        yellow: "#FFC300",
        lightgrey: "#D9D9D9"
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 2s ease-in ',
        slide: 'fadeIn 2s ease-in',
      },

      // that is actual animation
      keyframes: {
        fadeOut: {
          '0%': {
            left: "100%"
          },
          '100%': {
            left: "0%"
          }
        },
        fadeIn: {
          '0%': {
            left: "100%"
          },
          '100%': {
            left: "0%"
          }
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
