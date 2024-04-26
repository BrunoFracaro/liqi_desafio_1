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

  it('should recieve error messsage if body is missing', async() => {

    const response = await request(app).post("/convert").send({
      value: 1000,
    })

    expect(response.statusCode).toBe(400)
  })

  it('should recieve error messsage if currency does not exist', async() => {

    const response = await request(app).post("/convert").send({
      value: 1000,
      from: "USD",
      to: "XXX"
    })

    const message = JSON.parse(response.text).Error
    
    expect(message).toBe("Currency does not exist")
    expect(response.statusCode).toBe(400)
  })

  it.todo('should recieve correct exchange rate')

})