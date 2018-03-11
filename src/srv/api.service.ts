import { ioService } from '@src/srv/io.service'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subject } from 'rxjs/Subject'
// import { D } from '../data/data'
import { env } from '../environment/environment'
import { FetchService } from './fetch.service'

export interface MenuItem {
  url: string
  pub: boolean
  label: string
}

interface DataUpdatedEvent {
  collection: string
  data: any
}

class ApiService extends FetchService {
  // cached last DATA of data$
  DATA: any = {}
  data$ = new BehaviorSubject<any>({
    pages: [],
    imageGroups: [],
    menus: [],
  })

  async init (): Promise<void> {
    this.data$.subscribe(data => {
      console.log('data$ updated', data)
      this.DATA = data
    })

    await ioService.connect()
    ioService.socket.on('dataUpdated', (e: DataUpdatedEvent) => {
      console.log('io: dataUpdated', e)
      this.data$.next({
        ...this.DATA,
        [e.collection]: e.data,
      })
    })
  }

  async fetch<T> (method: string, _url: string, _opt: RequestInit = {}): Promise<T> {
    const url = `${env().apiUrl}/innocent${_url}`
    return super.fetch<T>(method, url, _opt)
  }

  async getData (): Promise<void> {
    if (!env().apiUrl) return

    const dataPromise = this.get('/allData').then(data => {
      this.data$.next(data)
      localStorage.setItem('data', JSON.stringify(data))
    })

    const dataLS = localStorage.getItem('data')
    if (dataLS) {
      this.data$.next(JSON.parse(dataLS))
      return
    }
    return dataPromise

    /*
    try {
      DATA = await this.get('/allData')
    } catch (err) {
      if (err && err.response && err.response.status === 401) {
        location.href = `${env().loginUrl}?autoLogin=1&return=${location.href}`
        return
      }
      throw err
    }*/
  }
}

export const apiService = new ApiService()
