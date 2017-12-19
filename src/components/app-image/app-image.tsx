import { Component, Element, Prop, State } from '@stencil/core'
import cloudinary from 'cloudinary-core'
import { ImgData } from '../../cnst/images'

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.scss',
})
export class AppImage {
  @Element() el: HTMLElement
  @Prop() imgData: ImgData
  @State() imgSrc: string

  private cl = new cloudinary.Cloudinary({
    cloud_name: 'kirill',
    secure: true,
  })

  componentWillLoad (): void {
    const srcSmall = this.cl.url(this.imgData.imgPart, {
      width: 40,
      // width: i.wbr,
      // width: 'auto',
      crop: 'fit',
      fetchFormat: 'auto',
      // dpr: 'auto',
      quality: 'auto:best',
      // effect: 'blur',
    })
    // console.log(srcSmall)

    const srcBig = this.cl.url(this.imgData.imgPart, {
      width: this.imgData.wbr,
      crop: 'fit',
      fetchFormat: 'auto',
      quality: 'auto:best',
    })
    // console.log(srcBig)

    const imgSmall = new Image()
    imgSmall.src = srcSmall
    imgSmall.onload = () => {
      const imgBig = new Image()
      imgBig.src = srcBig
      imgBig.onload = () => {
        // small.classList.add('loaded');
        // console.log('loaded!')
        this.imgSrc = srcBig
        setTimeout(() => {
          this.el.querySelector('img').classList.add('loaded')
        }, 1000)
      }
    }
  }

  render () {
    const i = this.imgData
    // console.log(i)

    return (
      <span>
        <img
          src={this.imgSrc}
          style={{ width: `${i.w}px`, height: `${i.h}px` }}
          alt={i.alt}
        />
      </span>
    )
  }
}
