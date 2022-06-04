// https://eth-goerli.alchemyapi.io/v2/R3kA2O_ouA0Dwu8eAt19nOVS0zokN5VZ

// plugin za buildovanje smart contracts testove
require('@nomiclabs/hardhat-waffle')

module.exports = {

  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/R3kA2O_ouA0Dwu8eAt19nOVS0zokN5VZ',
      accounts: ['2afff2e8d3de572667a2310600f2c0229a49dfdeb8b223116121197bbd01c251'] //privatekey
    }
  }
}

// contractAddress = '0x285Cd74bcaf4d735Fe1890caE910Cf4b62D34b78'