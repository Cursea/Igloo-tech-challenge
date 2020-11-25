const taxRouter = require('express').Router()
const calculator = require('../app')

taxRouter.get('/', (request, response) => {
  response.send('Income tax calculator')
})

taxRouter.post('/', (request, response) => {
  const body = request.body
  console.log(body)

  //const grossSalary = body.grossSalary
})

module.exports = taxRouter
