const bookModel = require('./../models/book')

const book = {
  async create (book) {
    let result = await bookModel.create(book)
    return result
  },

  async getBooks () {
    let result = await bookModel.getBooks()
    return result
  }
}

module.exports = book