
import { ethers } from "hardhat";

async function main() {
    
    // Deploy Util
    let util_contract = await ethers.getContractFactory("UTIL");
    let util = await util_contract.deploy();
    await util.deployed();
    console.log("Util address:", util.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});
