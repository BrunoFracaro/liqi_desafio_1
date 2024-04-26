import exchangeApi from '../utils/exchangeApi.js'

// test excahange api enpoint

describe('api', () => {

  it('should be able to reach exchange api', async () => {
    const response = await exchangeApi()

    expect(response.result).toBe('success')
  })

  it('should be able to get value of REAIS', async () => {
    const response = await exchangeApi()

    expect(response.conversion_rates.BRL).toBeGreaterThan(0)
  })

  it('should be able to get value of currency determined by user', async () => {
    const response = await exchangeApi()
    const currency = 'AED'

    expect(response.conversion_rates[currency]).toBeGreaterThan(0)
  })

})