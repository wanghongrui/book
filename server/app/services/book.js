/**
 * 业务层， 实现数据层model到操作层controllers的耦合封装
 */

const BookModel = require('../models/index').BookModel

class BookService {
  static async getBooks () {
    return await BookModel.find().exec()
  }

  static async addBook (options) {
    let book = new BookModel(options)    
    return await book.save()
  }

  static async deleteBook (_id) {
    await BookModel.remove({_id})
  }

  static async getBook (isbn) {
    console.log(fetch)
    let resp = await fetch(`https://api.douban.com/v2/book/isbn/${isbn}`)
    let result = resp.json()
    return result
  }
}

module.exports = BookService