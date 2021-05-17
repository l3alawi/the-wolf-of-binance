const WebSocket = require('ws')

const trader = ({ symbol }) => ({
  symbol,
  ws: new WebSocket(
    `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@trade/${symbol.toLowerCase()}@ticker`
  ),
  bigestTrade: 0,
  numberOfTrades: 0,
  priceChange: 0,
  listener() {
    this.ws.on('message', (payload) => {
      const jsonData = JSON.parse(payload)
      const { data } = jsonData
      switch (data.e) {
        case 'trade':
          this.followTrades(data)
          break
        case '24hrTicker':
          this.followPrice(data)
      }
    })
  },
  followTrades(payload) {
    let { q, p } = payload
    const tradeValue = q * 1 * (p * 1)
    if (tradeValue > this.bigestTrade) {
      this.bigestTrade = tradeValue
    }
    this.numberOfTrades += 1
  },
  followPrice(payload) {
    const { p } = payload
    this.priceChange += p * 1
  },
  stopListener() {
    console.log({
      symbol: this.symbol,
      bigestTrade: this.bigestTrade,
      numberOfTrades: this.numberOfTrades,
      priceChange: this.priceChange,
    })
    this.ws.close()
  },
})

module.exports = trader
