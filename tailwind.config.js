const { colors, flex, borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    borderRadius: {
      0: '0',
      4: '4px',
      15: '15px',
      25: '25px',
    },
    flex: {
      ...flex,
      0: '0 0',
    },
    colors: {
      black: '#111017',
      white: '#FFFFFF',
      gray: {
        ...colors.gray,
        '100': '#F4F4F4',
      },
    },
  },
  variants: {},
  plugins: [],
};
