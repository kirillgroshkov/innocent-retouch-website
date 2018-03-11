// import { D } from '../data/data'
import { env } from '../environment/environment'
import { FetchService } from './fetch.service'

export let DATA: any

export interface MenuItem {
  url: string
  pub: boolean
  label: string
}

class ApiService extends FetchService {
  async fetch<T> (method: string, _url: string, _opt: RequestInit = {}): Promise<T> {
    const url = `${env().apiUrl}/innocent${_url}`
    return super.fetch<T>(method, url, _opt)
  }

  async getData (): Promise<void> {
    if (!env().apiUrl) return

    try {
      DATA = await this.get('/allData')
    } catch (err) {
      if (err && err.response && err.response.status === 401) {
        location.href = `${env().loginUrl}?autoLogin=1&return=${location.href}`
        return
      }
      throw err
    }
  }

  getTopMenuItems (): MenuItem[] {
    const topMenu = DATA.menus.find(m => m.id === 'top')
    const items = (topMenu ? topMenu.items : []).filter(m => m.pub)

    return items
  }

  getPages (): any[] {
    return DATA.pages
  }
}

export const apiService = new ApiService()
