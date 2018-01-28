const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const config = require('../config')

const response = require('./middlewares/reponse')

const session = require('koa-session-minimal')
const SessionStore = require('koa-mysql-session')

const  app = new Koa()

const sessionStoreConfig = {
  user: config.database.username,
  password: config.database.password,
  database: config.database.database,
  host: config.database.host
}

app.use(session({
  key: 'SESSION_ID',
  store: new SessionStore(sessionStoreConfig)
}))

app.use(bodyParser())

app.use(response)

const routers = require('./routers/index')
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log(`listening at port ${config.port}`)
})