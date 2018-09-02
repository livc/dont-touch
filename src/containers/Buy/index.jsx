import React from 'react'
import './buy.css'
import nervos from '../../nervos'
import { transaction, URLBidContract } from '../../URLBid'

class Buy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            maxMoneyNow: 0,
            showTips: "tips_hidden"
        }
        this.getMaxMoney();
    }

    //get the latest maxMoney
    getMaxMoney=()=>{
        let amount = 0;
        nervos.appchain
        .getBlockNumber()
        .then(current => {
          const tx = {
            ...transaction,
            validUntilBlock: +current + 88,
          }
          return URLBidContract.methods.getPrice().call({ from:transaction.from,}) // tx hash
        })
        .then(res => {
            // console.log('233');
            console.log(res); //price
        this.setState({maxMoneyNow: res})
        })
        .catch(err => {
            console.log(err)
        //   this.setState({ errorText: JSON.stringify(err) })
        })
        this.state.maxMoneyNow = amount;
    }

    checkUrl(url) {
        var strReg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/ig;
        var re = new RegExp(strReg);
        if(!re.test(url)) {
            return false;
        } else {
            return true;
        }
    }

    submitBuy=()=>{
        this.setState({ showTips: "tips_show" });
        //bid
        if(this.refs.newPrice.value<this.state.maxMoneyNow/Math.pow(10,18)+0.01){
            alert("your bids are not enough")
            this.refs.newPrice.value = this.state.maxMoneyNow/Math.pow(10,18)+0.01
        }else{
            //http
            if(!this.checkUrl(this.refs.yourlink.value)){
                alert("your link has some format error, for example ")
            }else{
                const timeFormatter = time => ('' + time).padStart(2, '0')
                let newPrice = this.refs.newPrice.value*Math.pow(10,18)
                console.log(this.refs.newPrice.value);
                let tx1 = {
                    from: nervos.appchain.accounts.wallet[0].address,
                    privateKey: nervos.appchain.accounts.wallet[0].privateKey,
                    nonce: 999999,
                    quota: 1000000,
                    chainId: 1,
                    version: 0,
                    validUntilBlock: 999999,
                    value: newPrice.toString(16)
                };

                nervos.appchain
                    .getBlockNumber()
                    .then(current => {
                        const tx = {
                            ...tx1,
                            validUntilBlock: +current + 88,
                        }
                        console.log('233')
                        let date = new Date()
                        //   return URLBidContract.methods.addbid('qq.com', date).send(tx) // tx hash
                        return URLBidContract.methods.addbid(this.refs.yourlink.value, Date.parse(date)).send(tx) // tx hash
                    })
                    .then(res => {
                        console.log(res);
                        if (res.hash) {
                            return nervos.listeners.listenToTransactionReceipt(res.hash)
                        } else {
                            throw new Error('No Transaction Hash Received')
                        }
                    })
                    .then(receipt => {
                        console.log(receipt)
                        if (!receipt.errorMessage) {
                            alert("buy succeed");
                            this.props.history.push('/')
                        } else {
                            throw new Error(receipt.errorMessage)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        alert("something is error!")
                        //   this.setState({ errorText: JSON.stringify(err) })
                    })
            }
        }
    }


    render(){
        let max = this.state.maxMoneyNow
        let newprice = max/Math.pow(10,18)+0.01
        return(
        <div>
            <div className="buy-container">
                <div className="buy-main">
                    <div id="price">
                        <span>HEARTBEAT FEELING PRICE IS
                            <span id="record" className="green"> {this.state.maxMoneyNow/Math.pow(10,18)}</span>
                        </span>
                    </div>
                    <div className="lbl">The link
                        <div className="expl">The Heart will open for your link until somebody outbids you.</div>
                    </div>
                    <input type="text" ref="yourlink" id="yourlink" className="b--r" placeholder="I want the Heart to lead people to..." autofocus required />
                    <div className="lbl">The bid</div>
                    <span id="currencyinput"><input ref="newPrice" type="number" id="amount_general" class="green b--r" pattern="\d*" step="0.01" />  NOS</span>
                    <div className={this.state.showTips}>you need to wait for some seconds after buy the heart</div>
                    <div id="buttons">
                        <button id="ccrypto" className="paybuttons" form="cryptoform" onClick={this.submitBuy} >Buy</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Buy