const LowBit = artifacts.require("LowBit");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = util.promisify(fs.writeFile);

module.exports = async function (deployer) {
  const lowbit = await deployer.deploy(
    LowBit,
    0xabb4b0608749e72a3016e424b87af56846f939dc
  );

  console.log("LowBit address: ", LowBit.address);
  // const addresses = {
  //   tokenAddress: CryptoHerosToken.address
  // };

  // await writeFile(
  //   path.join(__dirname, "..", "dapp", "src", "addresses.json"),
  //   JSON.stringify(addresses)
  // );
};

// https://github.com/ensdomains/ens/blob/master/migrations/2_deploy_contracts.js
