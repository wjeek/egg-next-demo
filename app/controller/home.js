'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { req, res } = ctx
    ctx.body = await this.app.next.render(req, res, '/index')
  }
}

module.exports = HomeController
