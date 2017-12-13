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

  componentDidLoad (): void {
    // alert('The component did load APP');
    // console.log('The component did load APP')
    this.update()
  }

  breakpoint (m: number, threshold = 50): number {
    return Math.round(m / 50) * 50
  }

  @Listen('window:resize')
  update (): void {
    // console.log(window.devicePixelRatio)
    // console.log('resized')
    // if (!this.el) return
    const imagesEl = this.el.querySelector('div.images')
    // if(!imagesEl) return
    // console.log(node)
    const cw = imagesEl.clientWidth
    // console.log('cw:' + cw)

    if (!this.imgs) return // for SSR
    doImageLayout(cw, this.maxHeight, 8, this.imgs) // mutates this.imgs
    this.layoutImgs = [...this.imgs]
    // console.log(this.layoutImgs)
    // this.layoutImgs = [...this.layoutImgs] // force update
  }

  render () {
    // console.log('render!')
    const dpr = window.devicePixelRatio || 1
    // const dpr = 1
    const qProfile = dpr >= 2 ? 'low' : 'best'

    this.layoutImgs.forEach(img => {
      Object.assign(img, {
        // wbr: this.breakpoint(img.w * dpr),
        wbr: img.w * dpr,
        // hbr: this.breakpoint(img.h * dpr),
      })
    })

    return (
      <div class="images">
        {this.layoutImgs.map(i => (
          <a
            href={`${imagesPrefix}/q_auto:best/${i.imgPart}`}
            target="_blank"
            rel="noopener"
          >
            <img
              src={`${imagesPrefix}/w_${i.wbr},c_fit,f_auto,q_auto:${
                qProfile
              }/${i.imgPart}`}
              style={{ width: `${i.w}px`, height: `${i.h}px` }}
              alt={i.alt}
            />
          </a>
        ))}
      </div>
    )
  }
}