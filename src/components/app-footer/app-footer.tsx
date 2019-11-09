import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="footer" />
          </div>
        </div>
      </div>
    )
  }
}
