module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      violet: '#7C5DFA',
      lightViolet: '#9277FF',
      darkViolet: '#1E2139',
      veryDarkViolet: '#252945',
      lightBlue: '#DFE3FA',
      blue: '#888EB0',
      darkBlue: '#7E88C3',
      veryDarkBlue: '#0C0E16',
      danger: '#EC5757',
      dangerLight: '#FF9797',
      background: '#F8F8FB',
      black: "#141625"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
