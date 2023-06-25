import * as express from 'express'

class IndexController {
  public path = '/'
  public router = express.Router()

  constructor () {
    this.initializeRoutes()
  }

  public initializeRoutes (): void {
    this.router.get(this.path, this.get)
  }

  get = (request: express.Request, response: express.Response): void => {
    const httpCode = 200
    response.status(httpCode).json({ message: 'Hello World !' })
  }
}

export default IndexController
