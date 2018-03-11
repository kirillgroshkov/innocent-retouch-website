import { memo } from '@src/decorators/memo.decorator'

class ScriptUtil {
  @memo()
  async load (url: string): Promise<void> {
    return new Promise<void>(resolve => {
      // Adding the script tag to the head as suggested before
      const head = document.getElementsByTagName('head')[0]
      const script: any = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url

      script.onreadystatechange = resolve
      script.onload = resolve

      head.appendChild(script)
    })
  }
}

export const scriptUtil = new ScriptUtil()
