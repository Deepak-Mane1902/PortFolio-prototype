module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
      },
    },
  },
}
