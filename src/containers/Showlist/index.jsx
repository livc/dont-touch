import React from 'react'
import './showlist.css'
import nervos from '../../nervos'
import { transaction, URLBidContract } from '../../URLBid'

class SHowlist extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        bids_data:[],
        list_data: [],
        tbody_items: []
    }
}

getLocaltime(ns){
  // return new Date(parseInt(ns)).toLocaleDateString().replace(/:\d{1,2}$/,' ')
  return new Date(parseInt(ns)).toLocaleDateString().substr(0, 17)
}

  componentWillMount(){
    //request to blockchain for the data
    URLBidContract.methods
    .getList()
    .call({
      from:transaction.from,
    })
    .then(bids => {
      bids.reverse()
      this.setState({ bids_data: bids })
      console.log(this.state.bids_data)
      return Promise.all(bids.map(bid => URLBidContract.methods.getItem(bid).call({ from:transaction.from })))
    })
    .then(texts => {
      console.log(texts)
      this.setState({ list_data:texts })

      //set the data
      let tbody_item = [];
      for (let i = 0; i < this.state.bids_data.length; i++) {

        tbody_item.push(
          <tr>
            <td className="table-text">{i+1}</td>
            <td className="table-text">{this.state.bids_data[i]/Math.pow(10,18)}</td>
            <td className="table-text"><a href={this.state.list_data[i][0]}>{this.state.list_data[i][0]}</a></td>
            <td className="table-text">{this.getLocaltime(this.state.list_data[i][1])}</td>
          </tr>
        );
      }
      this.setState({tbody_items: tbody_item})
    })
    .catch(console.error)

    
  }

  render=()=>{
    return(
      <div>
        <div className="showlist-container">
            <div className="showlist-main">
              <div className="showlist-title">
                History
              </div>
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Price</th>
                    <th>Link</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tbody_items}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    )
  }
}

export default SHowlist