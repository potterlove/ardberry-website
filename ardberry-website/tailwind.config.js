module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        p15: '15%',
      },
      colors: {
        themeGolden: '#b1967b',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      padding: ['hover'],
    },
  },
  plugins: [],
}
