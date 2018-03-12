class StorageUtil {
  constructor () {
    try {
      if ('localStorage' in window && typeof window.localStorage !== 'undefined') {
        this.ls = window.localStorage
        this.ls.setItem('testKey', '1')
        this.ls.removeItem('testKey')
      }
    } catch (err) {
      // this.ls = undefined
    }

    if (!this.ls) console.warn('localStorage is not supported!')
  }

  private readonly ls?: Storage

  getItem (k: string): string | undefined {
    if (!this.ls) return undefined
    return this.ls.getItem(k) || undefined
  }

  setItem (k: string, v: any): void {
    if (!this.ls) return undefined
    this.ls.setItem(k, v)
  }
}

export const storageUtil = new StorageUtil()
