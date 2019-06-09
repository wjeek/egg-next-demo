'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { req, res } = ctx
    res.statusCode = 200
    ctx.body = await this.app.next.render(req, res, '/index')
  }
}

module.exports = HomeController
