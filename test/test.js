const { expect } = require("chai");
const { ethers } = require("hardhat");
const { formatEther } = require("ethers/lib/utils");

function toWei(n) {
  return ethers.utils.parseUnits(n);
}

describe("Real Estate:", function () {
  let owner, a1, a2, a3, nft;

  it("Deploy :", async function () {
    [owner, a1, a2, a3] = await ethers.getSigners();

    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy();
    await nft.deployed();
        
  });

});
