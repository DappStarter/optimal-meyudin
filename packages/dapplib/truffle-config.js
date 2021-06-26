require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth remain quality install cash fortune gauge'; 
let testAccounts = [
"0x307f2a93a7a687c6435dd353934076ce579e33d8636ae316684d8bd316333e9c",
"0xddb67280b6eaef4c13f8a914ee9bc7bf69a06ba8854b08ffc309e8c59c662317",
"0x5c22e0fae7686422a39c94027307e0c3bbcc557fe037e2d496fd2e030d7dd381",
"0x5a40f4ed2e844cbb1b2c760932762f6f3654c9b84e407ae1b9aa4e572d30f2a0",
"0xe9125b065f40e8770c79acfeb2077c92860831d8dd3f7cd20e4b0d0ab0f75a97",
"0x202f3abf35321e5062344507b3c654f26eebddeb1243c93b0f4fe1da2ada2451",
"0x2aa230ce3fb4bc6c481090c11ae5c95ce7161c019a6e5c17f3013424e9b12c5a",
"0x30774c608d7d52e4e408f1d4b11ad67b8902cf6ecc7dc7a4681a9cc88358eb4c",
"0xc86c5b005eac9caf50229a7ac6d5585d674c1f37232515a8f67f368339e9cb0b",
"0xf0bcbb6365adc1a422d7653b29e16a9cfbb69f0103080166df042d22a40f0684"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

