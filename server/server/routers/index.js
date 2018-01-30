/**
 * 接口层，路由
 */

const router = require('koa-router')()
const bookController = require('../controllers/book')
const userController = require('../controllers/user')

const routers = router
  .get('/book', bookController.getBooks)
  .post('/book', bookController.addBook)
  .get('/book/:isbn', bookController.getBook)
  .delete('/book/:id', bookController.deleteBook)
  .get('/user', userController.getUsers)
  .post('/user', userController.signIn)
  .delete('/user/:id', userController.deleteUser)

module.exports = routers