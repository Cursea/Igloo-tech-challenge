const express = require('express')
const app = express()
const router = require('express').Router()
const taxRouter = require('./controllers/tax')

app.use('/', taxRouter)

module.exports = app
