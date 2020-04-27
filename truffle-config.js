require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note soccer pumpkin harvest local fun gaze'; 
let testAccounts = [
"0xe1fb041b647c1de0b751f8a33e5be7ef160938caa3824709d2c4c0654c8aa377",
"0x08470b0adde826bd3cab35fd54a16391921d80b77e6e3bb3d433a3ae797161b2",
"0x0b83ca75f0edcc8c7365a19a5fbd9f87fa05118d382c11e032a1c8e0add093d0",
"0x9ef56417527d8180dbb1eb1f3a4bc34777995fe470838b893e55c6a13405e467",
"0x4020e5b2e9111c93b7f0ec69ff9f732d8ca38074b08b35dfb3e4d118d053040e",
"0x62c1a2f1d22dc19ae19f8aa8e47e7ca96dfe05db1915fc51014929331d573b1d",
"0xfaa284de7836606369b9f82edd2136cd108c84b593d518b3158eaf6025ead693",
"0x513b65556193ad58165728b4633cb1fb93fef91f7bda8266515b4064576cbbb6",
"0xce09f0ce9b5ae32ca784948227e9774343a63275c097f03960bb99d94e5eaa2c",
"0xffc8771e299f58aad1af1d1b7c6bf325478473b35ca0ebadb226e01dae1c13cd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
