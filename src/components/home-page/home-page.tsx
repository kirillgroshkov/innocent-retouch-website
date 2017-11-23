import { Component, Prop } from '@stencil/core'
import { images, imageSizes, imagesPrefix } from '../../cnst/images'
import { googleImageLayout } from '../../lib/googleImageLayout'

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class MyName {
  @Prop() segment = 'fashion-beauty'

  componentDidLoad () {
    // alert('The component did load');
    googleImageLayout()
  }

  render () {
    // console.log('render: ' + this.segment)

    const imgs = images[this.segment].map(i => {
      const wh = imageSizes[i].split('x')
      return {
        full: `${imagesPrefix}/q_auto:best/${i}`,
        small: `${imagesPrefix}/w_2800,h_1600,c_fit,q_auto:best/${i}`, // :best
        w: wh[0],
        h: wh[1],
      }
    })

    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div
              class="photos google-image-layout"
              data-google-image-layout=""
              data-max-height="800"
            >
              {imgs.map(i => (
                <a href={i.full} target="_blank">
                  <img src={i.small} data-width={i.w} data-height={i.h} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
