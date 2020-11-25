const taxRouter = require('express').Router()
const calculator = require('../logic/taxCalculator')

taxRouter.get('/', (request, response) => {
  response.send('Income tax calculator')
})

taxRouter.post('/', (request, response) => {
  const body = request.body
  const grossSalary = body.grossSalary

  response.json(calculator(grossSalary))
})

module.exports = taxRouter
