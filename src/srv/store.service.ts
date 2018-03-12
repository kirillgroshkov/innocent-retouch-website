import { D } from '@src/data/data'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export interface Data {
  menus: Menu[]
  pages: Page[]
  imageGroups: ImageGroup[]
}

export interface ImageGroup {
  id: string
  images: Img[]
}

export interface Img {
  filename: string
  res: string
  alt: string
}

export interface Page {
  id: string
  url: string
  component: string
  segment: string
}

export interface Menu {
  id: string
  items: MenuItem[]
}

export interface MenuItem {
  url: string
  pub: boolean
  label: string
}

class StoreService {
  admin$ = new BehaviorSubject<boolean>(false)

  data$ = new BehaviorSubject<Data>(D)

  init (): void {}
}

export const storeService = new StoreService()
