const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const taxRouter = require('./controllers/tax')

app.use(bodyParser.json())
app.use('/', taxRouter)

module.exports = app
