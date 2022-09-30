import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config()



const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];
const bytes32Strings = PROPOSALS.map(proposal => ethers.utils.formatBytes32String(proposal));

const main = async () => { 
  console.info('start to deploy contract');
  


}

main().catch(error => { 
  console.error(error);
  process.exitCode = 1;
})


