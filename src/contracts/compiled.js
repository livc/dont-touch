const bytecode = "608060405234801561001057600080fd5b5073d220df39bc1c3c992c9d84d98ea93ba1a5986f3e600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506109d0806100e06000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631bc32f92146100885780633129e773146100df578063942b765a1461018c57806398d5fdca146101f85780639d1b464a14610223578063d86063a21461024e578063e08cf07c146102b4575b600080fd5b34801561009457600080fd5b5061009d610344565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100eb57600080fd5b5061010a6004803603810190808035906020019092919050505061036a565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610150578082015181840152602081019050610135565b50505050905090810190601f16801561017d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561019857600080fd5b506101a161043e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101e45780820151818401526020810190506101c9565b505050509050019250505060405180910390f35b34801561020457600080fd5b5061020d610496565b6040518082815260200191505060405180910390f35b34801561022f57600080fd5b506102386104a0565b6040518082815260200191505060405180910390f35b6102b2600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506104a6565b005b3480156102c057600080fd5b506102c96107e1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103095780820151818401526020810190506102ee565b50505050905090810190601f1680156103365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080600084815260200190815260200160002060010160008085815260200190815260200160002060020154818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561042e5780601f106104035761010080835404028352916020019161042e565b820191906000526020600020905b81548152906001019060200180831161041157829003601f168201915b5050505050915091509150915091565b6060600180548060200260200160405190810160405280929190818152602001828054801561048c57602002820191906000526020600020905b815481526020019060010190808311610478575b5050505050905090565b6000600254905090565b60025481565b662386f26fc10000600254013410151515610529576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f596f757220626964206973206e6f7420656e6f7567682100000000000000000081525060200191505060405180910390fd5b6060604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281525060008034815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906105d092919061087f565b50604082015181600201559050506001349080600181540180825580915050906001820390600052602060002001600090919290919091505550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051600060405180830381858888f19350505050158015610674573d6000803e3d6000fd5b50600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc60025434039081150290604051600060405180830381858888f193505050501580156106e1573d6000803e3d6000fd5b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503460028190555081600390805190602001906107409291906108ff565b507f8f35e06635969ca7e70e060e1980c50a0021e50496bfe94552d483853d0f2d15826040518080602001828103825283818151815260200191508051906020019080838360005b838110156107a3578082015181840152602081019050610788565b50505050905090810190601f1680156107d05780820380516001836020036101000a031916815260200191505b509250505060405180910390a15050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108775780601f1061084c57610100808354040283529160200191610877565b820191906000526020600020905b81548152906001019060200180831161085a57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108c057805160ff19168380011785556108ee565b828001600101855582156108ee579182015b828111156108ed5782518255916020019190600101906108d2565b5b5090506108fb919061097f565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061094057805160ff191683800117855561096e565b8280016001018555821561096e579182015b8281111561096d578251825591602001919060010190610952565b5b50905061097b919061097f565b5090565b6109a191905b8082111561099d576000816000905550600101610985565b5090565b905600a165627a7a7230582031ac2a22bff149511ebe5f344983e5b3d1a42968b8aa3d3544f3f2475accb8f10029"

const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "currentBider",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "t",
				"type": "uint256"
			}
		],
		"name": "getItem",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getList",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "bidUrl",
				"type": "string"
			},
			{
				"name": "receiveTime",
				"type": "uint256"
			}
		],
		"name": "addbid",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentUrl",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_text",
				"type": "string"
			}
		],
		"name": "Sucessed",
		"type": "event"
	}
]

module.exports = {
  abi,
  bytecode
}