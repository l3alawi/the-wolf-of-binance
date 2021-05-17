const getWalletInfo = require('./binance-ops/get-wallet-info')
const checkAllCoins = require('./binance-ops/check-all-coins')

// import the army of traders
const trader = require('./trader')

const startProgram = async () => {
  // const walletInfo = await getWalletInfo()
  // console.log(walletInfo)

  const allCoins = await checkAllCoins('EUR')
  const coinTraders = allCoins.map((symbol) => trader({ symbol }))
  coinTraders.forEach((trader) => trader.listener())

  setTimeout(() => {
    coinTraders.forEach((trader) => trader.stopListener())
  }, 20000)
}

startProgram()
