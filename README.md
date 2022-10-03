
# Solidity Bootcamp Project - Week2: Ballot contract

The project aims to develop and interact with the Ballot.sol smart contract.

The development environment tests smart contract functions (Give voting rights, cast votes, delegate votes and query the results) locally through the use of scripts developed in Typescript and interaction with public blockchains.

Each function corresponds to a script.ts.

The project contains the following scripts:

* ```deploy.ts``` 
* ```Vote.ts```
* ```Delegate.ts```
* ```GiveVotingRight.ts```
* ```QueryWinner.ts```

Additional information is available within the individual files.





## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ALCHEMY_API_KEY`

`INFURA_API_KEY`

`MNEMONIC` (12 seed phrase)



## Deployment

To deploy this project run

```bash
yarn install
yarn hardhat compile 
yarn hardhat run .\scripts\ -insert selected script-.ts
```

