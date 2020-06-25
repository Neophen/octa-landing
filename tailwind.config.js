module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      'display': ["Merriweather", 'serif'],
      'body': ["Source Sans Pro", 'sans-serif'],
    },
    extend: {
      borderRadius: {
        large: '20px',
        modal: '40px',
      },
      colors: {
        'gray-100': 'var(--var-gray-100)',
        'gray-500': 'var(--var-gray-500)',
        'gray-600': 'var(--var-gray-600)',
        'primary-400': 'var(--var-primary-400)',
        'primary-500': 'var(--var-primary-500)',
        'primary-600': 'var(--var-primary-600)',
        'primary-700': 'var(--var-primary-700)',
        'cream-500': 'var(--var-cream-500)',
        'grey-500': 'var(--var-grey-500)',
        'teal-shadow': 'var(--teal-shadow)'
      }
    },
    boxShadow: {
      'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
      'none': 'none',
      'card': '0px 0px 10px rgba(0, 0, 0, 0.15);',
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-fluid')({
      textSizes: {
        h2: {
          min: '20px',
          max: '40px',
          minvw: '320px',
          maxvw: '1280px'
        }
      },
    }),
  ]
}
