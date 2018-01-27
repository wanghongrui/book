/**
 * 路由
 */

const router = require('koa-router')()
const bookController = require('../controllers/book')
const userController = require('../controllers/user')

const routers = router
  .get('/book/all', bookController.getBooks)
  .post('/book/add', bookController.addBook)
  .delete('/book/:id', bookController.deleteBook)
  .post('/user', userController.signIn)
  .get('/user/all', userController.getUsers)
  .delete('/user/:id', userController.deleteUser)

module.exports = routers