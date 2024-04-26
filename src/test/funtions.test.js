import conversionRate from '../utils/conversionRate.js'

// test utils function

describe('function', () => {

  it('function should return correct conversion rate', () => {

    const value = 100
    const from = 1
    const to = 2

    const result = conversionRate(value, from, to)

    expect(result).toBe(200)
  })

})