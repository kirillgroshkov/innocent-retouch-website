import { Component } from '@stencil/core'
import { DATA } from '../../srv/api.service'

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
})
export class AppHeader {
  render () {
    const menus = DATA.menus
      .filter(m => m.pub)
      .sort((a, b) => a.order > b.order)

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
                    url={m.page}
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
