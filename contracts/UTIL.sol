// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "hardhat/console.sol";

contract UTIL {

    struct ERC20Infos {
        string name;
        string symbol;
        uint256 balance;
        uint8 decimals;
    }

    constructor() { }

    function getBalances(address _ownerAddress, address[] memory _contractsAdress) 
        public view
        returns (ERC20Infos[] memory infos)
    {
        infos = new ERC20Infos[](_contractsAdress.length);

        for (uint64 i = 0; i < _contractsAdress.length; i++) {
            
            ERC20 erc20 = ERC20(_contractsAdress[i]);

            infos[i].name = erc20.name();
            infos[i].symbol = erc20.symbol();
            infos[i].balance = erc20.balanceOf(_ownerAddress);
            infos[i].decimals = erc20.decimals();
        }
    }
}
