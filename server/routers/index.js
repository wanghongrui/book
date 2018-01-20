const router = require('koa-router')()
const bookController = require('./../controllers/book')
const userController = require('./../controllers/user')

const routers = router
  .get('/book', bookController.getBooks)
  .get('/user', userController.getUses)

module.exports = routers