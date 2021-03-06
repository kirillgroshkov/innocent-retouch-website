import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        // 'src/scss/bootstrap.scss',
        // 'src/scss/global.scss',
      ]
    }),
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://innocentretouch.se',
      serviceWorker: null,
    }
  ],
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
};
