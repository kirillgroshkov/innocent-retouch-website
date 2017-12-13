import { Component, Prop } from '@stencil/core'
import { getImgData, images, imageSizes, imagesPrefix } from '../../cnst/images'
import { googleImageLayout } from '../../lib/googleImageLayout'

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class MyName {
  @Prop() segment = 'fashion-beauty'

  render () {
    const imgs = getImgData(this.segment)

    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <app-images imgs={imgs} maxHeight={800} />
          </div>
        </div>
      </div>
    )
  }
}
