const taxRouter = require('express').Router()
const calculator = require('../app')

taxRouter.get('/', (request, response) => {
  response.send('Income tax calculator')
})

taxRouter.post('/', (request, response) => {
  const body = request.body
  console.log(body)

  //const grossSalary = body.grossSalary

  /*if (grossSalary > 10000) {
    response.send('higher than 10000')
  }
  */
})

module.exports = taxRouter