import { ImgData } from '@src/cnst/images'
import {
  env,
  extendEnvironment,
  logEnvironment,
  setEnv,
} from '@src/environment/environment'
import { apiService, DATA } from '@src/srv/api.service'
import { Component, Prop, State } from '@stencil/core'
import '@stencil/router'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  @Prop({ context: 'isServer' })
  private isServer: boolean
  @State() loading = true

  async componentWillLoad () {
    if (this.isServer) {
      setEnv('server')
    }
    logEnvironment()
    // alert('The component is about to be rendered');
    // async
    const r = apiService.getData().then(() => {
      console.log('DATA', DATA)
      this.loading = false
    })

    // If SSR - wait for api result to come
    if (env().server) await r
  }

  componentDidLoad () {
    // alert('The component did load');
    // googleImageLayout()
  }

  render () {
    if (this.loading) return <pre>loading...</pre>

    const pages = apiService.getPages()

    // console.log(items)

    return (
      <div>
        <app-header />

        <stencil-router>
          {pages.map(p => (
            <stencil-route
              url={p.url}
              component={p.component}
              componentProps={{ segment: p.segment }}
              exact={true}
            />
          ))}
        </stencil-router>

        <app-footer />
      </div>
    )
  }
}
