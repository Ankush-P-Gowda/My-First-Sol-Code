const path = require('path');
const fs = require('fs');
const solc = require('solc');

const namePath = path.resolve(__dirname, 'contracts', 'program1.sol');
const source = fs.readFileSync(namePath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Name'];