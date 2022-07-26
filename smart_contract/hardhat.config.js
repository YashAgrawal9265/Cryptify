require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/KlRq7EnQp0jHWAiBykax9G2up-0_ePf8',
      accounts: ['40855899d0e47aa564ba525e358439dbe5a5c53f0f8db9feda77b9ab5e00526a'],
    },
  },
};