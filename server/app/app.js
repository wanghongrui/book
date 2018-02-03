const path = require('path')
const Koa = require('koa')
const https = require('https')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')

const session = require('koa-session-minimal')
const SessionStore = require('koa-mysql-session')

const config = require('../config')

const response = require('./middlewares/reponse')
const error = require('./middlewares/error')

const routers = require('./routers/index')

const app = new Koa()

let options = {
  key: fs.readFileSync('./cert/214473338220060.key'),
  cert: fs.readFileSync('./cert/214473338220060.crt')
} 

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
app.use(error)

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log(`listening at port ${config.port}`)
})

https.createServer(options, app.callback()).listen(443)
