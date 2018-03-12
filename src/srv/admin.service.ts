import { D } from '@src/data/data'
import { apiService } from '@src/srv/api.service'
import { ioService } from '@src/srv/io.service'
import { storageUtil } from '@src/srv/storageUtil'
import { Data, storeService } from '@src/srv/store.service'
import { Subscription } from 'rxjs/Subscription'

interface DataUpdatedEvent {
  collection: string
  // data: any
  id: string
  value: any
}

class AdminService {
  private dataSubscription?: Subscription

  init (): void {
    const admin = storageUtil.getItem('cmsmode') === '1'
    if (admin) storeService.admin$.next(admin)

    storeService.admin$.subscribe(admin => {
      storageUtil.setItem('cmsmode', admin ? '1' : '0')
      admin ? this.adminEnter() : this.adminExit()
    })
  }

  onKeyPress (e: KeyboardEvent): void {
    // Ctrl+Alt+Shift+L
    if (e.altKey && e.ctrlKey && e.shiftKey && e.keyCode === 12) {
      // toggle admin
      storeService.admin$.next(!storeService.admin$.getValue())
    }
  }

  private async adminEnter (): Promise<void> {
    console.log('adminEnter')

    const lsData = storageUtil.getItem('data')
    if (lsData) {
      storeService.data$.next(JSON.parse(lsData))
    }

    const data = await apiService.get<Data>('/allData')
    storeService.data$.next(data)

    this.dataSubscription = storeService.data$.subscribe(data => {
      console.log('data$ updated', data)
      storageUtil.setItem('data', JSON.stringify(data))
    })

    await ioService.connect()
    ioService.socket.on('dataUpdated', e => this.onDataUpdated(e))
  }

  private async adminExit (): Promise<void> {
    if (!this.dataSubscription) return // never entered admin

    console.log('adminExit')

    this.dataSubscription.unsubscribe()
    this.dataSubscription = undefined

    storeService.data$.next(D)
    await ioService.disconnect()
  }

  private onDataUpdated (e: DataUpdatedEvent): void {
    console.log('io: dataUpdated', e)

    const updatedCollection: any[] = [...storeService.data$.getValue()[e.collection]]
    const index = updatedCollection.findIndex(i => i.id === e.id)
    if (index !== undefined) {
      // replace
      if (e.value === undefined) {
        // delete
        updatedCollection.splice(index)
      } else {
        // update
        updatedCollection[index] = e.value
      }
    } else {
      // new item
      updatedCollection.push(e.value)
    }

    storeService.data$.next({
      ...storeService.data$.getValue(),
      [e.collection]: updatedCollection,
    })
  }
}

export const adminService = new AdminService()
