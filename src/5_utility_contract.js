
// The UTIL contract had been deployed to MUMBAI

const { ethers } = require("ethers");

const ADDR = "0xf1cEb7004f708De6B92BD4B8D78CE9226160B6A4";   // your contract address
const ABI = ethers.utils.Interface([
    // Query ERC20 infos Functions
    "function getBalances(address _ownerAddress, address[] memory _contractsAdress) public view returns (ERC20Infos[] memory infos)",
]); 

const ADDRESS = "0x0eAe9dF620744EB26ED3e73E3CCa3EBeDDa79485"; // some wallet address with token balance
const TOKENS = [
	"0x0d8B79753caD9eFd4cfD8bE6633ad7BfEc952c5c",
	"0x42baB7e0A8822eA2fb5ccE63eCbD095915c66aAa",
    "0xBA2F45b3106176661A4c5eb88bC0Bf3D18a9eCff",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
console.log(process.env.MUMBAI_RPC);
const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_RPC);
// console.log(providers.getNetwork());

const test = async () => {
	
    const contract = new ethers.Contract(ADDR, ABI, provider);

    // console.log(await contract.getValue(ADDRESS));
    console.log(await contract.getBalances(ADDRESS, TOKENS));
	
	return balances;
};

test().then(console.log);