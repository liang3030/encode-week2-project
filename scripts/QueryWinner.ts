import * as ethers from "ethers";
import * as dotenv from "dotenv";
//import ballotJson from "./Ballot.json";

var fs = require("fs");
var ballotJson = JSON.parse(
  fs.readFileSync("./artifacts/contracts/Ballot.sol/Ballot.json", "utf8")
);

dotenv.config()

const BALLOT_ADDRESS = "Insert here the deployed contract address"; // TODO: Replace contract address

const main = async () => { 

  const options = {
    alchemy: process.env.ALCHEMY_API_KEY,
    infura: process.env.INFURA_API_KEY,
  };

  const provider = ethers.getDefaultProvider("goerli", options);
  
 
  const ballotJsonABI = ballotJson.abi;
  const ballotJsonBytecode = ballotJson.bytecode;
  const wallet =  ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
  const signer = wallet.connect(provider);
  console.log(`Using address ${wallet.address}`);

  // Check if connect contract successful
  const ballotContractFactory = new ethers.ContractFactory(ballotJsonABI, ballotJsonBytecode, signer);
  const ballotContract = ballotContractFactory.attach(BALLOT_ADDRESS);
  //const chairpersion = await ballotContract.chairperson()
  //console.log(chairpersion);

  // Check if there is enough balance:
  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));
  console.log(balance);
  if(balance < 0.01) {
    throw new Error("Not enough ether");
  }

  console.log("Winning Proposal Name: " + ethers.utils.parseBytes32String(await ballotContract.winnerName()));
  console.log("Winning Proposal Vote Count: " + await ballotContract.winningProposal());

}

main().catch(error => console.error(error))

