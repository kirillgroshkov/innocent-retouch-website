import { routes } from '@src/cnst/routes'
import { apiService, MenuItem } from '@src/srv/api.service'
import { Component, State } from '@stencil/core'

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  @State() menus: MenuItem[] = []

  componentWillLoad () {
    apiService.data$.subscribe(data => {
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

  private getTopMenuItems (data): MenuItem[] {
    const topMenu = data.menus.find(m => m.id === 'top')
    const items = (topMenu ? topMenu.items : []).filter(m => m.pub)

    return items
  }
}
