import { ImgData } from '@src/cnst/images'
import { env, extendEnvironment, logEnvironment, setEnv } from '@src/environment/environment'
import { apiService } from '@src/srv/api.service'
import { ioService } from '@src/srv/io.service'
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
  @State() pages: any[] = []

  async componentWillLoad () {
    if (this.isServer) {
      setEnv('server')
    }
    logEnvironment()

    apiService.data$.subscribe(data => {
      this.pages = [...data.pages]
    })

    apiService.init() // async

    // alert('The component is about to be rendered');
    // async
    const getDataPromise = apiService.getData().then(() => {
      // console.log('DATA', DATA)
      this.loading = false
    })

    // If SSR - wait for api result to come
    if (env().server) await getDataPromise
  }

  componentDidLoad () {
    // alert('The component did load');
    // googleImageLayout()
  }

  render () {
    if (this.loading) return <pre>loading...</pre>

    // console.log(items)

    return (
      <div>
        <app-header />

        <stencil-router>
          {this.pages.map(p => (
            <stencil-route url={p.url} component={p.component} componentProps={{ segment: p.segment }} exact={true} />
          ))}
        </stencil-router>

        <app-footer />
      </div>
    )
  }
}
