import { Component } from '@stencil/core'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  componentWillLoad () {
    // alert('The component is about to be rendered');
  }

  componentDidLoad () {
    // alert('The component did load');
    // googleImageLayout()
  }

  render () {
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
