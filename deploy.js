//部署智能合约到真实的rankeby网络
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "shadow note swear barely boss ensure exercise float inmate lesson sock under";
const provider = new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/36a3fbc090bd447b9b9d75c4748f4171");
const web3 = new Web3(provider);

deploy =async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    const result =await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data:bytecode
        }).send({
            from:accounts[0],
            gas:'3000000'
        });
    console.log('address:'+result.options.address);
    console.log('------------------');
    console.log(interface);
};
deploy();