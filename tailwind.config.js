const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: '#cb1d1f',
        base: '#fafafa',
      },
    },
  },
  variants: {},
  plugins: [],
};
