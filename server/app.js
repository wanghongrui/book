const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const config = require('../config')

const  app = new Koa()

// app.use(async (ctx) => {
//   ctx.body = '欢迎来到，我的小站'
// })

app.use(bodyParser())


const routers = require('./routers/index')


app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log(`listening at port ${config.port}`)
})