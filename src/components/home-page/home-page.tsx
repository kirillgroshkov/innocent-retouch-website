import { imagesPrefix } from '@src/cnst/images'
import { ImgData } from '@src/components/app-images/app-images'
import { storeService } from '@src/srv/store.service'
import { Component, Prop, State } from '@stencil/core'

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class HomePage {
  @Prop() segment = ''
  @State() imgs: ImgData[] = []

  componentWillLoad () {
    storeService.data$.subscribe(data => {
      this.imgs = [...this.getImgData(data, this.segment)]
      // console.log('home data$ imgs', this.imgs)
    })
  }

  render () {
    // console.log('home render', this.imgs)
    return (
      <div class='container-fluid'>
        <div class='row'>
          <div class='col'>
            <app-images imgs={this.imgs} maxHeight={800} />
          </div>
        </div>
      </div>
    )
  }

  private getImgData (data: any, segment: string): ImgData[] {
    const ig = data.imageGroups.find(i => i.id === segment)
    if (!ig) return []

    return ig.images.map(i => {
      const wh = i.res.split('x')
      return {
        imgPart: `${i.filename}`,
        full: `${imagesPrefix}/q_auto:best/${i.filename}`,
        small: `${imagesPrefix}/w_2800,h_1600,c_fit,q_auto:best/${i.filename}`, // :best
        fullw: wh[0],
        fullh: wh[1],
        alt: i.alt || '',
      }
    })
  }
}
