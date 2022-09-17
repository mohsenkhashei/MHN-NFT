require('dotenv').config();

const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(process.env.ALCHEMY_URL);

const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');
const contractAddress = process.env.CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
	const nounce = await web3.eth.getTransactionCount(
		process.env.WALLET_PUBLIC_KEY,
		'latest'
	);
	const tx = {
		from: process.env.WALLET_PUBLIC_KEY,
		to: contractAddress,
		nounce: nounce,
		gas: 500000,
		maxPriorityFeePerGas: 1999999987,
		data: nftContract.methods
			.mintNFT(process.env.WALLET_PUBLIC_KEY, tokenURI)
			.encodeABI(),
	};

	//signing transaction
	const signedTx = await web3.eth.accounts.signTransaction(
		tx,
		process.env.WALLET_PRIVATE_KEY
	);
	const transactionReceipt = await web3.eth.sendSignedTransaction(
		signedTx.rawTransaction
	);

	console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
}

mintNFT(
process.env.IMAGE_OF_NFT
);
