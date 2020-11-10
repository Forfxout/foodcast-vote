module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'Times New Roman']
      }
    }
  },
  variants: {},
  plugins: []
}
