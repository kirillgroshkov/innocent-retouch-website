import { Component } from '@stencil/core'
import { DATA } from '../../srv/api.service'

@Component({
  tag: 'contact-page',
  // styleUrl: 'my-name.scss',
})
export class ContactPage {
  render () {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col'>Contact page</div>

          {DATA.menus.map(m => <p>{m.label}</p>)}
        </div>
      </div>
    )
  }
}
