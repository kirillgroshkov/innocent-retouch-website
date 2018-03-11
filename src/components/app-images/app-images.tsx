import { imagesPrefix, ImgData } from '@src/cnst/images'
import { env } from '@src/environment/environment'
import { doImageLayout } from '@src/lib/imageLayout'
import { Component, Element, Listen, Prop, State, Watch } from '@stencil/core'

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
    if (env().server) return
    // alert('The component did load APP');
    // console.log('The component did load APP')
    this.update()
  }

  breakpoint (m: number, threshold = 50): number {
    return Math.round(m / 50) * 50
  }

  @Watch('imgs')
  imgsWatch (v: any) {
    this.update()
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

    // if (!this.imgs) return // for SSR
    doImageLayout(cw, this.maxHeight, 8, this.imgs) // mutates this.imgs
    this.layoutImgs = [...this.imgs]
    // console.log(this.layoutImgs)
    // this.layoutImgs = [...this.layoutImgs] // force update
  }

  render () {
    // console.log('render! isServer=' + env().server)
    const dpr = window.devicePixelRatio || 1
    // const dpr = 1
    // const qProfile = dpr >= 2 ? 'eco' : 'best'
    const qProfile = 'best'

    /*this.layoutImgs.forEach(img => {
      Object.assign(img, {
        // wbr: this.breakpoint(img.w * dpr),
        wbr: img.w * dpr,
        // hbr: this.breakpoint(img.h * dpr),
      })
    })*/

    const images = this.layoutImgs.map(i => {
      return {
        href: `${imagesPrefix}/q_auto:best/${i.imgPart}`,
        src: `${imagesPrefix}/w_${i.w * dpr},c_fit,f_auto,q_auto:${qProfile}/${i.imgPart}`,
        style: {
          width: `${i.w}px`,
          height: `${i.h}px`,
          // display: 'inline-block',
        },
        alt: i.alt,
      }
    })

    return (
      <div class='images'>
        {images.map(i => (
          <a href={i.href} target='_blank' rel='noopener'>
            <lazy-img src={i.src} alt={i.alt} style={i.style} />
          </a>
        ))}
      </div>
    )
  }
}
