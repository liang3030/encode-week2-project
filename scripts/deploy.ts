import { BigNumber, ethers } from "ethers";
import * as dotenv from "dotenv";
import { Ballot__factory } from "../typechain-types";

dotenv.config()

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];
const bytes32Strings = PROPOSALS.map(proposal => ethers.utils.formatBytes32String(proposal));

const main = async () => { 
  console.info('start to deploy contract');
  const provider = ethers.getDefaultProvider('goerli');

  const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC?? "")
  const signer = wallet.connect(provider);

  const BallotFactory = new Ballot__factory(signer);
  const ballotContract = await BallotFactory.deploy(bytes32Strings);
  await ballotContract.deployed()
  console.info(`Ballot contract was deployed to the address ${ballotContract.address}`)
}

main().catch(error => { 
  console.error(error);
  process.exitCode = 1;
})


