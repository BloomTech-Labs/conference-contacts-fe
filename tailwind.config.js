module.exports = {
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        '96': '24rem',
        '128': '32rem',
        '11': '2.8rem',
      },
    },
    screens: {
      mdcustom: { min: '700px' },
      smcustom: { max: '699px' },
      desktop: { min: '1000px' },
      mobile: { max: '1000px' },
    },
  },
  variants: {},
  plugins: [],
};
