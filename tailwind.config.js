module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      'heading': ["Merriweather", 'serif'],
      'text': ["Source Sans Pro", 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1850px',
    },
    extend: {
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      borderRadius: {
        small: '10px',
        large: '20px',
        modal: '40px',
      },
      spacing: {
        '7': '1.75rem',
        '13': '3.125rem',
        'nav': '72px',
        '44': '11.25rem',
      },
      colors: {
        'gray-100': 'var(--var-gray-100)',
        'gray-500': 'var(--var-gray-500)',
        'gray-600': 'var(--var-gray-600)',
        'primary-400': 'var(--var-primary-400)',
        'primary-500': 'var(--var-primary-500)',
        'primary-600': 'var(--var-primary-600)',
        'primary-700': 'var(--var-primary-700)',
        'img-overlay': 'var(--var-primary-img)',
        'cream-500': 'var(--var-cream-500)',
        'cream-600': '#FAF1D5',
        'blue-300': '#C9FAFE',
        'grey-500': 'var(--var-grey-500)',
        'teal-shadow': 'var(--teal-shadow)'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        '90-cream' : 'linear-gradient(90deg, #FAEBE2 84.18%, #FDF5F2 100%)',
        '90-blue' : 'linear-gradient(90deg, #A6F3F9 84.18%, #C9FAFE 100%)',
      }),
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
      'video': '0px 0px 10px rgba(0, 0, 0, 0.1);',
      'video-hover': '0px 0px 4px rgba(0, 0, 0, 0.1);',
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
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
