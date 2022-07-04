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
      'primary': '#313131',
      'secondary': '#414141',
      'tertiary': '#525252',
      'logo-red': '#fb2414',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#fff',
      'logo-red': '#fb2414',
    }),
    extend: {
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
