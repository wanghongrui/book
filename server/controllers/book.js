const bookService = require('../services/book')

module.exports = {
  async getBooks (ctx) {
    let result = await bookService.getBooks()
    ctx.body = result
  }
}