pragma solidity 0.4.24;

contract URLBid {

    struct Bid {
	    address bider;
	    string url;
	    uint256 time;
    }

	mapping (uint => Bid) private history;
	uint[] bids;
    
    event Sucessed(string _text);

    uint public currentPrice;
    string public currentUrl;
    address public currentBider;
    address private god;
    
    constructor() public {
        god = 0xd220DF39BC1c3c992C9D84D98eA93ba1A5986F3E;
        currentBider = god;
        currentPrice = 0;
    }
  
    function addbid(string bidUrl, uint256 receiveTime) public payable{
		require( msg.value >= currentPrice + 10000000000000000, "Your bid is not enough!");		
		history[msg.value] = Bid({
			bider: msg.sender,
			url: bidUrl,
			time: receiveTime
		});
		bids.push(msg.value);
	    currentBider.transfer(currentPrice);
	    god.transfer(msg.value - currentPrice);
	    currentBider = msg.sender;
	    currentPrice = msg.value;
	    currentUrl = bidUrl;
	    emit Sucessed(bidUrl);
    }

	function getPrice() public view returns (uint){
        return currentPrice;
    }


	function getList() public view returns (uint[]){
		return bids;
	}

	function getItem(uint t) public view returns (string, uint256){
		return (history[t].url, history[t].time);
	}
}