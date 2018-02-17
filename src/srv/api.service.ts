import { D } from '../data/data'
import { env } from '../environment/environment'
import { FetchService } from './fetch.service'

export let DATA: any = D

class ApiService extends FetchService {
  async fetch<T> (
    method: string,
    _url: string,
    _opt: RequestInit = {},
  ): Promise<T> {
    const url = `${env().apiUrl}/innocent${_url}`
    return super.fetch<T>(method, url, _opt)
  }

  async getData (): Promise<void> {
    if (env().server) return

    DATA = await this.get('/allData')
  }
}

export const apiService = new ApiService()
