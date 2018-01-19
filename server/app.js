const path = require('path')
const Koa = require('koa')

const  app = new Koa()

app.use(async (ctx) => {
  ctx.body = '欢迎来到，我的小站'
})

app.listen(3000, () => {
  console.log('listening at port 3000')
})