// tslint:disable
class GoogleImageLayout {
  private HEIGHTS = []
  private margin = 8

  private turnObjToArray(obj) {
    return [].map.call(obj, function(element) {
      return element
    })
  }

  /**
   * Get the height that make all images fit the container
   *
   * width = w1 + w2 + w3 + ... = r1*h + r2*h + r3*h + ...
   *
   * @param  {[type]} images the images to be calculated
   * @param  {[type]} width  the container witdth
   * @param  {[type]} margin the margin between each image
   *
   * @return {[type]}        the height
   */
  private _getHeigth(images, width, margin) {
    width -= images.length * margin

    let r = 0,
      img

    for (let i = 0; i < images.length; i++) {
      img = images[i]
      r +=
        parseInt(img.getAttribute('data-width')) /
        parseInt(img.getAttribute('data-height'))
    }

    return width / r //have to round down because Firefox will automatically roundup value with number of decimals > 3
  }

  private _setHeight(images, height) {
    this.HEIGHTS.push(height)
    // console.log('set height ' + this.HEIGHTS.length)

    for (let i = 0; i < images.length; i++) {
      const img = images[i]
      img.style.width =
        height *
          parseInt(img.getAttribute('data-width')) /
          parseInt(img.getAttribute('data-height')) +
        'px'
      img.style.height = height + 'px'
      img.style.marginRight = this.margin + 'px' // -4 is the negative margin of the inline element
      img.style.marginBottom = this.margin + 'px'
      img.classList.add('layout-completed')
    }
  }

  init(): void {
    this.HEIGHTS = []
    const nodes = document.querySelectorAll('div[data-google-image-layout]')
    const length = nodes.length
    let elem

    for (let i = 0; i < length; i++) {
      elem = nodes[i]
      this.align(elem)
    }
    // console.log('aligned')
  }

  private align(elem): void {
    //get the data attribute

    const containerWidth = elem.clientWidth
    const maxHeight = parseInt(elem.getAttribute('data-max-height') || 120)

    let imgNodes = this.turnObjToArray(elem.querySelectorAll('img'))

    w: while (imgNodes.length > 0) {
      let slice
      let h

      for (let i = 1; i <= imgNodes.length; i++) {
        slice = imgNodes.slice(0, i)
        h = this._getHeigth(slice, containerWidth, this.margin)

        if (h < maxHeight) {
          this._setHeight(slice, h)
          imgNodes = imgNodes.slice(i)
          continue w
        }
      }

      this._setHeight(slice, Math.min(maxHeight, h))
      break
    }
  }
}

const i = new GoogleImageLayout()
export const googleImageLayout = () => i.init()
// ; (window as any).googleImageLayout = googleImageLayout
