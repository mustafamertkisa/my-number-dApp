import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider)

const contractAddress = "0x4A8e405E9472d4fbc3FE8589858e89e26932AF8C"
const contractABI = [
	{
		"inputs": [],
		"name": "myNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_myNumber",
				"type": "uint256"
			}
		],
		"name": "setMyNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export const myContract = new web3.eth.Contract(contractABI, contractAddress)