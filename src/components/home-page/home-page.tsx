import { images, imagesAlt, imageSizes, imagesPrefix, ImgData } from '@src/cnst/images'
import { apiService } from '@src/srv/api.service'
import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class HomePage {
  @Prop() segment = ''

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

function getImgData (segment: string): ImgData[] {
  const ig = apiService.getImageGroup(segment)
  if (!ig) return []

  return ig.images.map(i => {
    const wh = i.res.split('x')
    return {
      imgPart: `${segment}/${i.filename}`,
      full: `${imagesPrefix}/q_auto:best/${i.filename}`,
      small: `${imagesPrefix}/w_2800,h_1600,c_fit,q_auto:best/${i.filename}`, // :best
      fullw: wh[0],
      fullh: wh[1],
      alt: i.alt || '',
    }
  })
}
