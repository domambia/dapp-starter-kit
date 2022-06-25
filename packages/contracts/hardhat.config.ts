// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import {config as dotEnv }  from  "dotenv"
// setup .env.local file and load all env variables
dotEnv({path: "./../../.env.local"})

const PRIVATE_KEY  = process.env.PRIVATE_KEY!
const INFURA_API_KEY  = process.env.INFURA_API_KEY!

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${{INFURA_API_KEY}}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://rinkeby.infura.io/v3/${{INFURA_API_KEY}}`,
      accounts: [`${PRIVATE_KEY}`],
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
