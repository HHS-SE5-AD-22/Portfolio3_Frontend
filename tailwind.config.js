module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      green: '#9FA400',
      gray: {
        100: '#E4E6EA',
        200: '#CBCDD4',
        300: '#B3B7C0',
        400: '#9DA1AC',
        500: '#878D99',
        600: '#727A87',
        700: '#5F6876',
        800: '#4E5865',
        900: '#223343',
      },
      blue: '#00B2CD',
      orange: '#FFBA00',
      red: '#CA433C',
    },
    fontSize: {
      sm: ['.8rem', {
        lineHeight: '.5rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
      base: ['1.225rem', {
        lineHeight: '.8rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      xl: ['1.5rem', {
        lineHeight: '1rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '2xl': ['1.875rem', {
        lineHeight: '1.225rem',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
      '3xl': ['2rem', {
        lineHeight: '1.225rem',
        letterSpacing: '-0.02em',
        fontWeight: '600',
      }],
      '4xl': ['2.5rem', {
        lineHeight: '1.225rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      '5xl': ['3rem', {
        lineHeight: '1.225rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
    extend: {},
  },
  plugins: [],
};
