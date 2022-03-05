require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/04zEAT5xDoeAJ_x4yD8sTX5FBS8QFw1-",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
