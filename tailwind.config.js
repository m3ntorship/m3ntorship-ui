module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        test: '#215487'
      }
    },
  },
  variants: {},
  plugins: [],
};
