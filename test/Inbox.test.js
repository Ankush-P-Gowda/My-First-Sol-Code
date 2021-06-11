const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let Name;
const INITIAL_VALUE = 'Ankush';

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    Name = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITIAL_VALUE] })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('Name', () => {
    it('deploys a contracts', () => {
        assert.ok(Name.options.address);
    });

    it('default name', async () => {
        const message = await Name.methods.name().call();
        assert.equal(message, INITIAL_VALUE);
    });

    it('changed name', async () => {
        await Name.methods.setName('Kajol').send({ from: accounts[0] });
        const message = await Name.methods.name().call();
        assert.equal(message, 'Kajol');
    });
});