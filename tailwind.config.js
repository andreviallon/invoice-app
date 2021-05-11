module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  purge: {
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './src/customHooks/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './customHooks/**/*.{js,ts,jsx,tsx}'
    ]
  },
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'h2': '1.25rem',
      'h1': '2rem',
      'jumbotron': '7.5rem'
    },
    screens: {
      'sm': '740px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: {
        regular: '#7C5DFA',
        light: '#9277FF',
        veryLight: '#F9FAFE',
        dark: '#1E2139',
        veryDark: '#252945'
      },
      secondary: {
        regular: '#888EB0',
        light: '#DFE3FA',
        dark: '#7E88C3',
        veryDark: '#0C0E16'
      },
      danger: {
        regular: '#EC5757',
        light: '#FF9797'
      },
      background: '#F8F8FB',
      dark: "#141625",
      white: '#FFFFFF',
      green: '#33D69F',
      orange: '#FF8F00',
      gray: '#373B53',
      disabled: '#D4D4D4',
      disabledDark: '#B4B4B4'
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif']
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    }
  },
  plugins: []
}
