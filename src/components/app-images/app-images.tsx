import { Component, Element, Listen, Prop, State } from '@stencil/core'
import {
  getImgData,
  images,
  imageSizes,
  imagesPrefix,
  ImgData,
} from '../../cnst/images'
import { googleImageLayout } from '../../lib/googleImageLayout'
import { doImageLayout } from '../../lib/imageLayout'

@Component({
  tag: 'app-images',
  styleUrl: 'app-images.scss',
})
export class AppImages {
  @Element() el: HTMLElement
  @Prop() imgs: ImgData[]
  @Prop() maxHeight = 120
  @State() layoutImgs: ImgData[] = []

  componentDidLoad () {
    // alert('The component did load APP');
    // console.log('The component did load APP')
    this.update()
  }

  @Listen('window:resize')
  update () {
    // console.log('resized')
    // if (!this.el) return
    const imagesEl = this.el.querySelector('div.images')
    // if(!imagesEl) return
    // console.log(node)
    const cw = imagesEl.clientWidth
    // console.log('cw:' + cw)

    doImageLayout(cw, this.maxHeight, 8, this.imgs) // mutates this.imgs
    this.layoutImgs = [...this.imgs]
    // console.log(this.layoutImgs)
    // this.layoutImgs = [...this.layoutImgs] // force update
  }

  render () {
    // console.log('render!')

    return (
      <div class="images">
        {this.layoutImgs.map(i => (
          <a href={i.full} target="_blank">
            <img
              src={i.small}
              style={{ width: `${i.w}px`, height: `${i.h}px` }}
            />
          </a>
        ))}
      </div>
    )
  }
}
