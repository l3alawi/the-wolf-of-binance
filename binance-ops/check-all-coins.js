// binance api
const binance = require('.')

const getAllcoinsWithBase = (baseAsset) =>
  binance
    .get(`/api/v3/exchangeInfo`)
    .then((response) => {
      // console.log(response.data.symbols)
      return response.data.symbols
        .filter((symbol) => {
          return symbol.symbol.includes(baseAsset)
        })
        .map((symbol) => symbol.symbol)
    })
    .catch((err) => {
      console.log(err)
      console.log('err')
    })

module.exports = getAllcoinsWithBase
