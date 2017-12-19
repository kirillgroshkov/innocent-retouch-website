exports.config = {
  bundles: [
    {
      components: [
        'app-root',
        'app-header',
        'app-footer',
        'app-images',
        'app-image',
        'home-page',
        'contact-page',
      ],
    },
  ],
  collections: [{ name: '@stencil/router' }],
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
