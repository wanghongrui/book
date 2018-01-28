/**
 * 操作层， 逻辑层
 */

const bookService = require('../services/book')

class BookController {
  static async getBooks (ctx) {
    let result = await bookService.getBooks()
    ctx.body = result
  }

  static async addBook (ctx) {
    let result = {
      success: false,
      message: null,
      content: null
    }

    let book = await bookService.add(ctx.request.body)

    if (book) {
      result.success = true
      result.content = book
    } else {
      result.message = e
    }
    
    ctx.body = result
  }
  
  static async deleteBook (ctx) {
    let result = {
      success: false,
      message: null,
      content: null
    }

    let id = ctx.params.id
    try {
      await bookService.deleteById(id)
      result.success = true
    } catch (e) {
      result.success = false
      result.message = e
    }
    
    ctx.body = result
  }

  static async getBook (ctx) {
    let result = {
      success: false,
      message: null,
      content: null
    }

    try {
      let isbn = ctx.params.isbn
      result.content = await bookService.getBook(isbn)
      result.success = true
    } catch (e) {
      result.message = e
    }
    ctx.body = result
  }
}

module.exports = BookController
