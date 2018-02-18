const sass = require('@stencil/sass')

exports.config = {
  plugins: [sass()],
  serviceWorker: false,
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
