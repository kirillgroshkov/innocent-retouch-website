import { routes } from '@src/cnst/routes'
import { apiService, DATA } from '@src/srv/api.service'
import { Component } from '@stencil/core'

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  render () {
    const menus = apiService.getTopMenuItems()

    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header">
              <stencil-route-link
                class="nostyle header__title"
                activeClass="active"
                exact={true}
                url="/"
              >
                <span class="header__title1">Innocent </span>
                <span class="header__title2">retouch</span>
              </stencil-route-link>

              <div class="header__menu">
                {menus.map(m => (
                  <stencil-route-link
                    class="header__menuItem"
                    activeClass="active"
                    exact={true}
                    url={m.url}
                  >
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
}
