import { imagesPrefix, ImgData } from '@src/cnst/images'
import { doImageLayout } from '@src/lib/imageLayout'
import { Component, Element, h, Listen, Prop, State } from '@stencil/core'

@Component({
  tag: 'app-images',
  styleUrl: 'app-images.scss',
})
export class AppImages {
  @Element() el: HTMLElement
  @Prop({ context: 'isServer' })
  private isServer: boolean
  @Prop() imgs: ImgData[]
  @Prop() maxHeight = 120
  @State() layoutImgs: ImgData[] = []

  componentDidLoad(): void {
    if (this.isServer) return
    // alert('The component did load APP');
    // console.log('The component did load APP')
    this.update()
  }

  breakpoint(m: number, threshold = 50): number {
    return Math.round(m / 50) * 50
  }

  @Listen('resize', { target: 'window' })
  update(): void {
    // console.log(window.devicePixelRatio)
    // console.log('resized')
    // if (!this.el) return
    const imagesEl = this.el.querySelector('div.images')
    // if(!imagesEl) return
    // console.log(node)
    const cw = imagesEl.clientWidth
    // console.log('cw:' + cw)

    // if (!this.imgs) return // for SSR
    doImageLayout(cw, this.maxHeight, 8, this.imgs) // mutates this.imgs
    this.layoutImgs = [...this.imgs]
    // console.log(this.layoutImgs)
    // this.layoutImgs = [...this.layoutImgs] // force update
  }

  render() {
    console.log('render! isServer=' + this.isServer)
    const dpr = window.devicePixelRatio || 1
    // const dpr = 1
    // const qProfile = dpr >= 2 ? 'eco' : 'best'
    const qProfile = 'best'

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
          <a href={`${imagesPrefix}/q_auto:best/${i.imgPart}`} target="_blank" rel="noopener">
            <img
              src={`${imagesPrefix}/w_${i.wbr},c_fit,f_auto,q_auto:${qProfile}/${i.imgPart}`}
              style={{ width: `${i.w}px`, height: `${i.h}px` }}
              alt={i.alt}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    )
  }
}
