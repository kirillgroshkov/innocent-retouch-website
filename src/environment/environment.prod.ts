export class EnvironmentProd {
  name = 'prod'
  prod = true
  dev = false
  server = false

  loginUrl = 'https://kg-backend.now.sh/login'
  apiUrl: string | undefined = 'https://kg-backend.now.sh/editor'
  // apiUrl: string | undefined = undefined
  ioUrl = 'https://kg-backend.now.sh'
}

export type Environment = EnvironmentProd

export default new EnvironmentProd()
