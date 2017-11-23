exports.config = {
  bundles: [
    {
      components: [
        'app-root',
        'app-header',
        'app-footer',
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
