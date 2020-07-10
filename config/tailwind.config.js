module.exports = {
  purge: [
    'src/**/*.html',
  ],
  theme: {    
    boxShadow: {
      // xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      // sm: '0 1px 1px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.04)',
      // default: '0 1px 1px rgba(0,0,0,0.06), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.04)',
      // md: '0 1px 1px rgba(0,0,0,0.05), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.04), 0 8px 8px rgba(0,0,0,0.04)',
      // lg: '0 1px 1px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.04), 0 8px 8px rgba(0,0,0,0.04), 0 16px 16px rgba(0,0,0,0.04)',
      // xl: '0 2px 2px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.04), 0 8px 8px rgba(0,0,0,0.04), 0 16px 16px rgba(0,0,0,0.04), 0 32px 32px rgba(0,0,0,0.04)',
      // '2xl': '0 4px 4px rgba(0,0,0,0.04), 0 8px 8px rgba(0,0,0,0.04),0 16px 16px rgba(0,0,0,0.04),0 32px 32px rgba(0,0,0,0.04),0 64px 64px rgba(0,0,0,0.04)',
      // inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      // outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      // none: 'none',
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 1px rgba(0,0,0,0.03), 0 2px 2px rgba(0,0,0,0.05)',
      default: '0 1px 1px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.06)',
      md: '0 1px 2px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.06)',
      lg: '0 1px 2px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.06)',
      xl: '0 1px 2px rgba(0,0,0,0.01),0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.05),0 32px 64px rgba(0,0,0,0.06)',
      '2xl': '0 1px 2px rgba(0,0,0,0.01),0 2px 4px rgba(0,0,0,0.01), 0 4px 8px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.04),0 32px 64px rgba(0,0,0,0.05),0 64px 128px rgba(0,0,0,0.06)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(255, 255, 255, 0.3)',
      none: 'none',
    },
    extend: {
      // screens: {
      //   xs: '480px'
      // },
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        }        
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%'
      },      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%'
      },      
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },      
      customForms: theme => ({
        default: {
          'input, textarea, multiselect, select, checkbox, radio': {
            backgroundColor: 'transparent',
            borderColor: theme('colors.gray.700'),
            borderRadius: theme('borderRadius.sm'),
            '&:focus': {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme('colors.gray.500'),
            },
          },
          'input, textarea, multiselect, select': {
            backgroundColor: 'transparent',
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme('spacing.3'),
            paddingRight: theme('spacing.4'),
            paddingBottom: theme('spacing.3'),
            paddingLeft: theme('spacing.4'),
          },
          'input, textarea': {
            '&::placeholder': {
              color: theme('colors.gray.500'),
            }
          },
          select: {
            paddingRight: theme('spacing.10'),
            iconColor: theme('colors.gray.500'),
          },
          'checkbox, radio': {
            color: theme('colors.purple.600'),
            backgroundColor: 'transparent',
          },
        },
      })      
    }  
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]  
}
