module.exports = {
  content: ['*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    fontFamily: {
      serif: ['Outfit'],
    },
    fontSize: {
      base: ['15px', '24px'],
      '2xl': ['24px', '32px'],
    },
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        white: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
  variants: {},
}
