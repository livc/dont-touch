const nervos = require('./nervos')
const { abi } = require('./contracts/compiled.js')
const { contractAddress } = require('./config')

const transaction = require('./contracts/transaction')
const URLBidContract = new nervos.appchain.Contract(abi, contractAddress)
module.exports = {
  transaction,
  URLBidContract
}