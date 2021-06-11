const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'clay perfect stairs lake person slot license flip afraid winner bike dress',
    'https://rinkeby.infura.io/v3/d2297671e52649e681305bf4ccc49480'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Ankush'] })
        .send({ from: accounts[0], gas: '1000000' });
    console.log('Contract deployed to', result.options.address);
};
deploy();