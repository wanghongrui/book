const router = require('koa-router')()
const bookController = require('../controllers/book')
const userController = require('../controllers/user')

const routers = router
  .get('/book', bookController.getBooks)
  .post('/user', userController.signIn)
  .post('/user/create', userController.signUp)
  .post('/user/online', userController.online)

module.exports = routers