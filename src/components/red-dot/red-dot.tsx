import { storeService } from '@src/srv/store.service'
import { Component, State } from '@stencil/core'

@Component({
  tag: 'red-dot',
  styleUrl: 'red-dot.scss',
})
export class RedDot {
  @State() admin: boolean

  componentWillLoad (): void {
    storeService.admin$.subscribe(admin => (this.admin = admin))
  }

  render () {
    const style = {
      display: this.admin ? 'block' : 'none',
    }

    return <div class='red-dot' style={style} />
  }
}
