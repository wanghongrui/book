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
    try {
      book = await book.save()
    } catch (e) {
      book = null
    }
    return book
  }

  static async deleteBook (_id) {
    try {
      await BookModel.remove({_id}, (err) => {
        if (err) {
          throw err
        }
      })
    } catch (err) {
      throw err
    }
  }

  static async getBook (isbn) {
    let resp = await fetch(`https://api.douban.com/v2/book/isbn/${isbn}`)
    let result = resp.json()
    return result
  }
}

module.exports = BookService