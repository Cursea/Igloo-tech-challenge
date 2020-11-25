const taxRouter = require('express').Router()

taxRouter.get('/', (request, response) => {
  response.send('INCOME TAX!!!')
})

module.exports = taxRouter
