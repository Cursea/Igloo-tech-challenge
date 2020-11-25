const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('when an invalid request is sent', () => {
  test('server should reject empty requests', async () => {
    await api.post('/').send().expect(400)
  })
})

describe('when a valid gross salary request is sent', () => {
  test('server response returned as json', async () => {
    const salaryRequest = { grossSalary: 35000 }

    await api
      .post('/')
      .send(salaryRequest)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('server responds with a net salary value', async () => {
    const salaryRequest = { grossSalary: 35000 }
    const response = await api
      .post('/')
      .send(salaryRequest)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.NetSalary).toEqual(expect.any(Number))
  })

  test('income below personal allowance is not taxed', async () => {
    const salaryRequest = { grossSalary: 11000 }
    const response = await api
      .post('/')
      .send(salaryRequest)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.NetSalary).toEqual(11000)
  })

  test('income tax calculation is correct on £40k', async () => {
    const salaryRequest = { grossSalary: 40000 }
    const response = await api
      .post('/')
      .send(salaryRequest)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.NetSalary).toEqual(30842)
  })
})
