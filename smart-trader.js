const getWalletInfo = require('./binance-ops/get-wallet-info')

const startProgram = async () => {
  const walletInfo = await getWalletInfo()
}

startProgram()
