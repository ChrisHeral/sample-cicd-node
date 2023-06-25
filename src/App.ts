import express from 'express'
import IndexController from './indexController'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', new IndexController().get)
    this.express.use('/', router)
  }
}

export default new App().express
