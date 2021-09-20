const networkId = "HmyMainnet"; //"HmyTestnet"
const endpoint = "https://api.s0.t.hmny.io";
const shardId = 0; //Mandatory
const gwPrice = 1; //Gwei
const sepline = "/////////////////////////////";
const input =
[
  {
    name: "network",
    description: "Harmony Network (ENTER for default value)",
    default: networkId,
    required: true,
  },
  {
    name: "endpoint",
    description: "API Endpoint (ENTER for default value)",
    default: endpoint,
    required: true,
  },
  {
    name: "privateKey",
    description: "Sender's private key",
    message: "A private key must be Ethereum valid",
    pattern: /^0x([a-fA-F0-9]{64})$/,
    required: true,
    hidden: true,
    replace: "*",
  },
];
const send =
[
  {
    name: "recipient",
    description: "Recipient's wallet address",
    message: "A wallet address must be Harmony valid",
    pattern: /^one([a-z0-9]{39})$/,
    required: true,
  },
  {
    name: "amount",
    description: "Amount of ONE coins to be sent",
    pattern: /^[0-9]*\.?[0-9]*$/,
    required: true,
  },
  {
    name: "gas",
    description: "Gas limit (ENTER for default value)",
    default: 21000,
    pattern: /^[0-9]*$/,
    required: true,
  },
];
const wait =
[
  {
    name: "enter",
    description: "Press ENTER to continue, CTRL+C to cancel",
  },
];
let hmy;
let eth;
let server;
let sender;
let recipient;
let amount;
let gas;
let txn;
const {Harmony} = require("@harmony-js/core");
const {ChainID,ChainType,hexToNumber,numberToHex,fromWei,Units,Unit} = require("@harmony-js/utils");
const fs = require("fs");
const log = function(data){
  fs.appendFileSync("log.txt",Date()+"\r\n"+data+"\r\n");
};
const prompt = require("prompt");
prompt.start();
prompt.get(input,function(err,result){
  if(err){return(console.log(err.toString()))}
  try{
    server = result.endpoint;
    hmy = new Harmony(server,{chainType:ChainType.Harmony,chainId:ChainID[result.network]});
    hmy.wallet.addByPrivateKey(result.privateKey);
    eth = hmy.wallet.accountMap.keys().next().value;
    sender = hmy.wallet.accountMap.get(eth).shards.get(shardId).address.split("-")[0];
    hmy.blockchain.getBalance({address:sender}).then(result=>{
      console.log(sepline);
      console.log("Server:",server);
      console.log("Sender:",sender);
      console.log("Address:",eth);
      console.log("Balance:",fromWei(hexToNumber(result.result),Units.one));
      console.log(sepline);
      prompt.get(wait,function(err,result){
        if(err){return(console.log(err.toString()))}
        prompt.get(send,function(err,result){
          if(err){return(console.log(err.toString()))}
          recipient = result.recipient;
          amount = result.amount;
          gas = result.gas;
          console.log(sepline);
          console.log("Recipient:",recipient);
          console.log("Amount:",amount);
          console.log("Gas:",gas);
          console.log(sepline);
          prompt.get(wait,function(err,result){
            if(err){return(console.log(err.toString()))}
            console.log("Waiting...");
            txn = hmy.transactions.newTx({
              to: recipient,
              value: new Unit(amount).asOne().toWei(),
              gasLimit: gas,
              shardID: shardId,
              toShardID: shardId,
              gasPrice: new hmy.utils.Unit(gwPrice).asGwei().toWei(),
            });
            hmy.wallet.signTransaction(txn).then(signed=>{return(hmy.blockchain.sendTransaction(signed))})
            .then(txhash=>{if(txhash.error)return(console.log(txhash.error.message));log(txhash.result);console.log(txhash)})
            .catch(err=>{log(err.toString());console.log(err.toString())});
          });
        });
      });
    });
  }catch(err){return(console.log(err.toString()))}
});
