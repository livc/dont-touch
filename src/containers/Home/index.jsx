import React from 'react'
import './home.css'
import nervos from '../../nervos'
import { transaction, URLBidContract } from '../../URLBid'

class Home extends React.Component{

  constructor(props) {
    super(props);
  }

  //click the door
  handleClick=()=>{
    console.log("test");
    let url = "";
    URLBidContract.methods
    .getList()
    .call({
      from:transaction.from,
    })
    .then(bids => {
      bids.reverse()
      return Promise.all(bids.map(bid => URLBidContract.methods.getItem(bid).call({ from:transaction.from })))
    })
    .then(texts => {
      console.log(texts);
      url = texts[0][0];
      window.location.href=url
    })
    .catch(console.error)
    
    //get the latest href
    
  }

  gotoBuy=()=>{
    console.log(this.props.history);
    this.props.history.push('/buy');
  }

  gotoHistory=()=>{
    this.props.history.push('/showlist');
  }

  render(){
    return(
      <div>
        <div className="home__logo--container">
            <span className="home__logo--text"><span>Do Not</span> <span>Touch!</span></span>
          <div className="parent">
            <div className="heart" onClick={this.handleClick}>
              <span>&hearts;</span>
            </div>
          </div>

		      {/* <img id="btn" src="https://button.do/img/Button.png" alt="" onClick={this.handleClick}/> */}
        </div>
        <div className="home__slogan--container">
          <a className="home__slogan--text" id="buy_door" onClick={this.gotoBuy}>Buy the Heart</a>
          <p className="home__slogan--text" onClick={this.gotoHistory}>Show the History</p>

        </div>
      </div>
    )
  }
}

export default Home