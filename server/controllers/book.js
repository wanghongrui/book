/**
 * 操作层， 逻辑层
 */

const bookService = require('../services/book')

class BookController {
  static async getBooks (ctx) {
    let content = await bookService.getBooks()
    ctx.success({content})
  }

  static async addBook (ctx) {
    let content = await bookService.addBook(ctx.request.body)

    ctx.success({content})
  }
  
  static async deleteBook (ctx) {
    let id = ctx.params.id
    await bookService.deleteBook(id)
  
    ctx.success({content: '删除成功！'})
  }

  static async getBook (ctx) {
    let isbn = ctx.params.isbn
    let content = await bookService.getBook(isbn)
      
    ctx.success({content})
  }
}

module.exports = BookController
