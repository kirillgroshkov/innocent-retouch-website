import { memo } from '@src/decorators/memo.decorator'
import { env } from '@src/environment/environment'
import { scriptUtil } from '@src/srv/script.util'

class IOService {
  socket: SocketIOClient.Socket

  // @memo()
  async connect (): Promise<void> {
    await scriptUtil.load('https://unpkg.com/socket.io-client@2.0.4/dist/socket.io.slim.js')
    // return ioFunc(env().ioUrl)
    // console.log('loaded!')
    const io = (window as any).io
    this.socket = io(env().ioUrl, {
      transports: ['websocket'],
    })
    this.socket.on('yohoho', p => {
      console.log('yohoho2!', p)
    })
  }

  async emit (): Promise<void> {
    this.socket.emit('hejj', { a: 'b' })
  }
}

export const ioService = new IOService()
