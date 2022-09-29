const hre = require("hardhat")
const { ethers } = require("hardhat")
const fs = require("fs");

function toWei(n) {
  return ethers.utils.parseUnits(n)
}
async function main() {

  const NFT = await ethers.getContractFactory("NFT")
  const nft = await NFT.deploy()
  await nft.deployed()

  console.log("NFT ADDRESS: ", nft.address)


  const contractArtifact = artifacts.readArtifactSync("NFT");


  fs.writeFileSync('./config.js', `
  export const nft = "${nft.address}"
  export const nftjson = ${JSON.stringify(contractArtifact, null, 2)}
  `)


  // fs.writeFileSync(
  //   contractsDir + `/${name}.json`,
  //   JSON.stringify(contractArtifact, null, 2)
  // );

}


// function saveFrontendFiles(contract, name) {
//   const fs = require("fs");
//   const contractsDir = __dirname + "/contractsData";

//   if (!fs.existsSync(contractsDir)) {
//     fs.mkdirSync(contractsDir);
//   }

//   fs.writeFileSync(
//     contractsDir + `/${name}-address.json`,
//     JSON.stringify({ address: contract.address }, undefined, 2)
//   );

//   const contractArtifact = artifacts.readArtifactSync(name);

//   fs.writeFileSync(
//     contractsDir + `/${name}.json`,
//     JSON.stringify(contractArtifact, null, 2)
//   );
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})
