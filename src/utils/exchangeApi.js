import 'dotenv/config'

export default exchangeApi = async () => {

  const url = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/USD`

  const response = await fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

  return response
}