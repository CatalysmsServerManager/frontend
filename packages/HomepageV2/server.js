require('dotenv').config()
const Koa = require('koa')
const app = new Koa()

// modules
const serve = require('koa-static')
const logger = require('koa-logger')

app.use(logger()) // auto logging
app.use(serve(__dirname + '/dist'))
console.log(__dirname + '/dist')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening on port %s', PORT))
