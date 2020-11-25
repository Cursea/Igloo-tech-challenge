const express = require('express')
const app = express()
const taxRouter = require('./controllers/tax')

app.use('/', taxRouter)

const taxBrackets = [
  {rate: 0, floor: 0, ceiling: 12500 },
  { rate: 0.2, floor: 12501, ceiling: 50000 },
  { rate: 0.4, floor: 50001, ceiling: 150000 },
  { rate: 0.45, floor: 150001, ceiling: Infinity }
]

let tax = 0



module.exports = app
