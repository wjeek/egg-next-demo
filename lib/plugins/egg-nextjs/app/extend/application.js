const next = require('next')
const NEXT = Symbol('Application#next')

module.exports = { 
  get next() {
    if (!this[NEXT]) {
      this[NEXT] = next(this.config.next)
    }
    return this[NEXT]
  },
}
