const taxRouter = require('express').Router()
const calculator = require('../logic/taxCalculator')

taxRouter.get('/', (request, response) => {
  response.send('Income tax calculator')
})

taxRouter.post('/', (request, response) => {
  const body = request.body
  const grossSalary = body.grossSalary

  if (!grossSalary && grossSalary !== 0) {
    response.status(400).json({
      error: 'Request does not contain a Gross salary value',
    })
    return
  }

  response.json(calculator(grossSalary))
})

module.exports = taxRouter
