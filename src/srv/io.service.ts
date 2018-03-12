import { memo } from '@src/decorators/memo.decorator'
import { env } from '@src/environment/environment'
import { scriptUtil } from '@src/srv/script.util'

class IOService {
  socket: SocketIOClient.Socket

  @memo()
  private async loadScript (): Promise<void> {
    await scriptUtil.load('https://unpkg.com/socket.io-client@2.0.4/dist/socket.io.slim.js')
  }

  // @memo()
  async connect (): Promise<void> {
    if (this.socket) return // already connected

    await this.loadScript()

    this.socket = (window as any).io(env().ioUrl, {
      transports: ['websocket'],
    })
  }

  async disconnect (): Promise<void> {
    if (!this.socket) return // nothing to disconnect
    this.socket.disconnect()
    this.socket = undefined
  }
}

export const ioService = new IOService()
