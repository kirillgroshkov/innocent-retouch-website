import { getImgData } from '@src/cnst/images'
import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class MyName {
  @Prop() segment = 'fashion-beauty'

  render () {
    const imgs = getImgData(this.segment)

    return (
      <div class='container-fluid'>
        <div class='row'>
          <div class='col'>
            <app-images imgs={imgs} maxHeight={800} />
          </div>
        </div>
      </div>
    )
  }
}
