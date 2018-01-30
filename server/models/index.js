const mongoose = require('../utils/db-util').mongoose

const Schema = mongoose.Schema

const userSchema = new Schema({
  openid: {type: String, required: true},
  reading: Array,
  wish: Array,
  read: Array,
})

const bookSchema = new Schema({
  isbn: {type: String, required: true},
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