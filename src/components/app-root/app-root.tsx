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
    await apiService.getData()

    console.log(DATA)
    this.loading = false
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
          <stencil-route
            url="/"
            component="home-page"
            componentProps={{ segment: 'fashion-beauty' }}
            exact={true}
          />
          <stencil-route
            url="/still-life"
            component="home-page"
            componentProps={{ segment: 'still-life' }}
            exact={false}
          />
          <stencil-route
            url="/interior"
            component="home-page"
            componentProps={{ segment: 'interior' }}
            exact={false}
          />
          <stencil-route
            url="/contact"
            component="contact-page"
            exact={false}
          />
        </stencil-router>

        <app-footer />
      </div>
    )
  }
}
