import { EnvironmentProd } from './environment.prod'

export class EnvironmentServer extends EnvironmentProd {
  name = 'server'
  server = true

  apiUrl = 'http://localhost:8000/editor'
  // apiUrl = undefined
}

export default new EnvironmentServer()
