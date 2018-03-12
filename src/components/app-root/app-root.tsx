import { env, extendEnvironment, logEnvironment, setEnv } from '@src/environment/environment'
import { adminService } from '@src/srv/admin.service'
import { apiService } from '@src/srv/api.service'
import { ioService } from '@src/srv/io.service'
import { Page, storeService } from '@src/srv/store.service'
import { Component, Listen, Prop, State } from '@stencil/core'
import '@stencil/router'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  @Prop({ context: 'isServer' })
  private isServer: boolean
  @State() pages: Page[] = []

  async componentWillLoad () {
    if (this.isServer) {
      setEnv('server')
    }
    logEnvironment()

    storeService.init()

    adminService.init()

    storeService.data$.subscribe(data => {
      this.pages = [...data.pages]
    })
  }

  @Listen('window:keypress')
  onKeyPress (e: KeyboardEvent): void {
    adminService.onKeyPress(e)
  }

  render () {
    return (
      <div>
        <app-header />

        <stencil-router>
          {this.pages.map(p => (
            <stencil-route url={p.url} component={p.component} componentProps={{ segment: p.segment }} exact={true} />
          ))}
        </stencil-router>

        <app-footer />
        <red-dot />
      </div>
    )
  }
}
