require('dotenv').config()
const axios = require('axios')
const url = `https://api.binance.com`

const binance = axios.create({
  baseURL: `${url}`,
  headers: {
    Authorization: '1234',
    'Content-Type': 'application/json',
    Accept: '*/*',
    Connection: 'keep-alive',
    'X-MBX-APIKEY': process.env.API_KEY,
  },
})

module.exports = binance
