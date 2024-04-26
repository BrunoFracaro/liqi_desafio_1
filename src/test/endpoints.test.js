import app from "../../app"
import request from 'supertest'

// test user endpoints

describe('endpoints', () => {

  it('should connect with server and recieve code 200', async() => {

    const response = await request(app).post("/convert").send({
      value: 1000,
      from: "USD",
      to: "BRL"
    })
    expect(response.statusCode).toBe(200)
    
  })

  it.todo('should recieve error messsage if body is missing')

  it.todo('should recieve error messsage if currency does not exist')

  it.todo('should recieve correct exchange rate')

})