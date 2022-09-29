const hre = require("hardhat")
const { ethers } = require("hardhat")

function toWei(n) {
  return ethers.utils.parseUnits(n)
}
async function main() {

  const NFT = await ethers.getContractFactory("NFT")
  const nft = await NFT.deploy()
  await nft.deployed()

  console.log("NFT ADDRESS: ", nft.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})
