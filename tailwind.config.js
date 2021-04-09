module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: {
        regular: '#7C5DFA',
        light: '#9277FF',
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
      black: "#141625",
      white: '#FFFFFF',
      green: '#33D69F',
      orange: '#FF8F00',
      gray: '#373B53'
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
