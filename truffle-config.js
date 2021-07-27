var HDWalletProvider = require("truffle-hdwallet-provider");
const path = require("path");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = "b33e244c7e2f486bb0252feb96b73b7d";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraKey}`
        );
      },

      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          "f31a0fb40aae450e6f5c2152651b5fef2d9ce9b6156dd8324a3d7fb2e8a14466",
          "https://kovan.infura.io/v3/d70678b4d4dc4f3f87f77bab6cd9104d"
        ),
      network_id: 42, // kovan's id
      gas: 3000000, // Ropsten has a lower block limit than mainnet
      gasPrice: 10000000000,
      //confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    develop: {
      host: "localhost",
      port: 7545,
      network_id: "5777",
    },
    bsc_testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc_mainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: { etherscan: "KABVKBFMEJ93S65P78CQ1WG71IX5YJYYJJ" },

  compilers: {
    solc: {
      version: "0.5.16", // A version or constraint - Ex. "^0.5.0"
      // Can also be set to "native" to use a native solc // Use a version obtained through docker
      parser: "solcjs", // Leverages solc-js purely for speedy parsing
      settings: {
        evmVersion: "istanbul", // Default: "petersburg"
      },
    },
  },
};
