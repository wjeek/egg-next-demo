module.exports = app => {
  app.config.middleware.unshift('nextFilter')
  app.next.prepare()
}
