import { EnvironmentProd } from './environment.prod'

export class EnvironmentServer extends EnvironmentProd {
  name = 'server'
  server = true

  apiUrl = undefined
}

export default new EnvironmentServer()
