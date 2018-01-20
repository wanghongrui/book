const router = require('koa-router')()
const bookController = require('./../controllers/book')

console.log(bookController)

const routers = router.get('/book', bookController.getBooks)

module.exports = routers