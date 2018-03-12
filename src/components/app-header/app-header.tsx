import { routes } from '@src/cnst/routes'
import { Data, MenuItem, storeService } from '@src/srv/store.service'
import { Component, State } from '@stencil/core'

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  @State() menus: MenuItem[] = []

  componentWillLoad () {
    storeService.data$.subscribe(data => {
      this.menus = [...this.getTopMenuItems(data)]
    })
  }

  render () {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <div class='header'>
              <stencil-route-link class='nostyle header__title' activeClass='active' exact={true} url='/'>
                <span class='header__title1'>Innocent </span>
                <span class='header__title2'>retouch</span>
              </stencil-route-link>

              <div class='header__menu'>
                {this.menus.map(m => (
                  <stencil-route-link class='header__menuItem' activeClass='active' exact={true} url={m.url}>
                    {m.label}
                  </stencil-route-link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  private getTopMenuItems (data: Data): MenuItem[] {
    const topMenu = data.menus.find(m => m.id === 'top')
    if (!topMenu || !topMenu.items) return []
    return topMenu.items.filter(m => m.pub)
  }
}
