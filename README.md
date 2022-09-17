# Sample NFT Creation Project With Hardhat

This project demonstrates a create NFT with deploying and minting with help Alchemy and goerli ethereum testnet and pinata as IPFS for image of NFT's .

### Reference:

[Hardhat](https://hardhat.org)

[Alchemy](https://www.alchemy.com/)

[Goerli Faucet](https://goerlifaucet.com/) |
[Goerli Mining Faucet](https://goerli-faucet.pk910.de/)

[Pinata](https://www.pinata.cloud/)

### Usage:

```shell
npm install

# edit .env.example file with yours 

npx hardhat compile

# now you get deployed nft contract address 
npx hardhat run scripts/deploy.js --network goerli

# minting NFT
node scripts/mintNFT.js 


```
