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
      },
      colors: {
        orange: '#FF5D2E',
        gray: '#F9F9F9'
      }
    }
  },
  variants: {},
  plugins: []
}
