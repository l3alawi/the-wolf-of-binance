// binance api
const crypto = require('crypto')
const binance = require('.')

const getWalletInfo = () => {
  const timestamp = new Date().getTime()

  let signature = crypto
    .createHmac('sha256', process.env.SECRETS)
    .update(`timestamp=${timestamp}`)
    .digest('hex')

  return binance
    .get(
      `/sapi/v1/capital/config/getall?timestamp=${timestamp}&signature=${signature}`
    )
    .then((response) => {
      return response.data.filter((elm) => parseInt(elm.free) > 0)
    })
    .catch((err) => {
      console.log(err)
      console.log('err')
    })
}

module.exports = getWalletInfo
