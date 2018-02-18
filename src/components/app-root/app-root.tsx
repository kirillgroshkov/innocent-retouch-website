import { Component, Prop, State } from '@stencil/core'
import '@stencil/router'
import { ImgData } from '../../cnst/images'
import {
  env,
  extendEnvironment,
  logEnvironment,
  setEnv,
} from '../../environment/environment'
import { apiService, DATA } from '../../srv/api.service'

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
      console.log(DATA)
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

    return (
      <div>
        <app-header />

        <stencil-router>
          {DATA.menus
            .filter(m => m.pub)
            .map(m => (
              <stencil-route
                url={m.page}
                component={m.component}
                componentProps={{ segment: m.segment }}
                exact={true}
              />
            ))}
        </stencil-router>

        <app-footer />
      </div>
    )
  }
}
