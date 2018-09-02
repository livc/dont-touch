const { default: Nervos } = require('@nervos/chain')            // 引入 Nervos 实例

const config = require('./config')

// if (typeof window.nervos !== 'undefined') {                     // 检测当前浏览器环境 window 中是否有 nervos 实例，如果有的话，用window.nervos 中的currentProvider 实例化 Nervos
//     window.nervos = Nervos(window.nervos.currentProvider);
//     window.nervos.currentProvider.setHost("localhost:1337");    // 由于存在多链的情况，需要 DApp 指明当前 AppChain 的节点IP地址信息，对于单链 DApp 只需要指定一次即可。
// } else {
//     console.log('No nervos? You should consider trying Neuron!')// 如果当前浏览器环境 window 中没有 nervos 实例，则需要手动提供节点IP地址，并完成实例化
//     window.nervos = Nervos(config.chain);
// }
// var nervos = window.nervos

const nervos = Nervos(config.chain) 
const account = nervos.appchain.accounts.privateKeyToAccount(config.privateKey) // create account by private key from config

nervos.appchain.accounts.wallet.add(account) // add account to nervos
// console.log(nervos.appchain.accounts.wallet[0].address)

module.exports = nervos