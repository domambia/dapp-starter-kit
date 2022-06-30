// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {config as dotEnv }  from  "dotenv"
import {node_url, accounts}  from  "./utils/network"
// setup .env.local file and load all env variables
dotEnv({path: "./../../.env.local"})

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },

  networks: {
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
      gas: 1000000
    },
    goerli: {
      url: node_url('goerli'),
      accounts: accounts('goerli'),
      gas: 500000
    },
    localhost: {
      url: node_url('localhost'),
      accounts: accounts('localhost'),
      gas: 1000000
    },
  },
  paths: {
    sources: "src"
  },
  solidity: {
    compilers: [{ version: "0.8.4", settings: {} }],
  },
};
export default config;
