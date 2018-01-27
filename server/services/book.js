/**
 * 业务层， 实现数据层model到操作层controllers的耦合封装
 */

const BookModel = require('../models/index').BookModel

module.exports = {
  async getBooks () {
    return await BookModel.find().exec()
  },

  async addBook (options) {
    let book = new BookModel(options)
    try {
      book = await book.save()
    } catch (e) {
      book = null
    }
    return book
  },

  async deleteBook (id) {
    try {
      await BookModel.remove({_id: id}, (err) => {
        if (err) {
          throw err
        }
      })
    } catch (err) {
      throw err
    }
  }
}