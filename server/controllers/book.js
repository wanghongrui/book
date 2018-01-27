/**
 * 操作层
 */

const bookService = require('../services/book')

module.exports = {
  async getBooks (ctx) {
    let result = await bookService.getBooks()
    ctx.body = result
  },

  async addBook (ctx) {
    let result = {
      success: false,
      message: null,
      content: null
    }

    let book = await bookService.addBook(ctx.request.body)

    if (book) {
      result.success = true
      result.content = book
    } else {
      result.message = e
    }
    
    ctx.body = result
  },
  
  async deleteBook (ctx) {
    let result = {
      success: false,
      message: null,
      content: null
    }

    let id = ctx.params.id
    try {
      await bookService.deleteBook(id)
      result.success = true
    } catch (e) {
      result.success = false
      result.message = e
    }
    
    ctx.body = result
  } 
}