// binance api
const binance = require('.')

const getAllcoinsWithBase = (baseAsset) => {
  binance
    .get(`/api/v3/exchangeInfo`)
    .then((response) =>
      response.data.symbols
        .filter((symbol) => symbol.baseAsset === baseAsset)
        .map((symbol) => symbol.symbol)
    )
    .catch((err) => {
      console.log(err)
      console.log('err')
    })
}

module.exports = getAllcoinsWithBase
