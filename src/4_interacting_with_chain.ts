
import 'dotenv/config';
import { ethers } from 'ethers';

const swthAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
];


// setup node RPC provider according to its prefix
// support ws://, wss://, http://, and https://
function setupProvider(rpcURL: string): ethers.providers.BaseProvider {
    if (rpcURL.substring(0, 5) == 'ws://' || rpcURL.substring(0, 6) == 'wss://') {
        return new ethers.providers.WebSocketProvider(rpcURL);
    }
    else if (rpcURL.substring(0, 8) == 'https://' || rpcURL.substring(0, 7) == 'http://') {
        return new ethers.providers.JsonRpcProvider(rpcURL);
    }
    else {
        throw new Error("Unsuppported RPC URL");
    }
}


async function main() {

    const provider = setupProvider(process.env.NODE_RPC_URL || "");
    const swth = new ethers.Contract(swthAddress, abi, provider);

    console.log(`Block number to lookup: ${await provider.getBlockNumber()}`);

    await readBalance(swth, "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430");
    await readBalance(swth, "0x0020c5222a24e4a96b720c06b803fb8d34adc0af");
    await readBalance(swth, "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392");
}

async function readBalance(swth: ethers.Contract, addr: string) {

    console.log(`${addr} ${(await swth.balanceOf(addr)).toString()}`);
}

main()
.then(() => process.exit(0))
.catch((err) => console.error(err));
