module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'varela-round': ['"Varela Round"', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#413F42',
      'secondary': '#191919',
      'tertiary': '#413F42',
      'instagram': '#bc2a8d',
      'whatsapp': '#25D366',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#FFFFFF',
    }),
    extend: {
      colors: {
        'logo-yellow': '#E1B335',
      },
      keyframes: {
        fade: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        }
      },
      animation: {
        fade: 'fade 0.2s normal linear'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// Other colour pallette: 
// Yellow: #FEE715
// Black: #101820