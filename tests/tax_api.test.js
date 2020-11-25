const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('when an invalid request is sent', () => {
  test('server should reject empty requests', async () => {
    await api.post('/').expect(400)
  })
})

describe('when a valid gross salary request is sent', () => {
  test('server response returned as json', async () => {
    const salaryRequest = { grossSalary: 35000 }

    await api
      .post('/')
      .send(salaryRequest)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  })

  test('server responds with a net salary value', async () => {
    const salaryRequest = { grossSalary: 35000 }
    const response = await api
      .post('/')
      .send(salaryRequest)
      .expect(201)
      .expect('Content-Type', /application\/json/)
    
    expect(typeof(response.body.NetSalary)).toBe(Number)
  })
})
