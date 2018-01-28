const mongoose = require('../utils/db-util').mongoose

const Schema = mongoose.Schema

const userSchema = new Schema({
  openid: String,
  reading: Array,
  wish: Array,
  read: Array,
})

const bookSchema = new Schema({
  isbn: String,
  status: {type: String, default: '未借出'},
  remark: String,
  date: { type: Date, default: Date.now }
})

const UserModel = mongoose.model('user', userSchema)
const BookModel = mongoose.model('book', bookSchema)

module.exports = {
  UserModel,
  BookModel
}