module.exports = {
  purge: [
  './src/**/*.html',
  './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}

// module.exports = {
//     plugins: [require('@tailwindcss/forms'),]
// };

