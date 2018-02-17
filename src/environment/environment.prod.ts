export class EnvironmentProd {
  name = 'prod'
  prod = true
  dev = false
  server = false

  // apiUrl: string | undefined = 'https://kg-backend.now.sh/editor'
  apiUrl: string | undefined = undefined
}

export type Environment = EnvironmentProd

export default new EnvironmentProd()
