const networkId = "1"; // "333":testnet
const endpoint = "https://api.zilliqa.com/"; // "https://dev-api.zilliqa.com/":testnet
const gasLimit = "2000";
const GASLIMIT = "50";
const sepline = "/////////////////////////////";
const input =
[
  {
    name: "chainId",
    description: "Network ID (ENTER for default value)",
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
  {
    name: "gasLimit",
    description: "Limit gas price in Li (ENTER for default value)",
    default: gasLimit,
    required: true,
  },
];
const send =
[
  {
    name: "recipient",
    description: "Recipient's wallet address",
    message: "A wallet address must be Zilliqa valid",
    pattern: /^zil([a-zA-Z0-9]{39})$/,
    required: true,
  },
  {
    name: "amount",
    description: "Amount of ZIL coins to be sent",
    pattern: /^[0-9]*\.?[0-9]*$/,
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
let server;
let sender;
let recipient;
let privateKey;
let minPrice;
let gasPrice;
let txnprice;
let sysprice;
let address;
let balance;
let nonce;
let info;
let amount;
let chainId;
let VERSION;
let zilliqa;
const msgVersion = 1;
const {Zilliqa} = require("@zilliqa-js/zilliqa");
const {BN,Long,bytes,units} = require("@zilliqa-js/util");
const {toBech32Address,getAddressFromPrivateKey} = require("@zilliqa-js/crypto");
const fs = require("fs");
const log = function(data){
  fs.appendFileSync("log.txt",Date()+"\r\n"+data+"\r\n");
};
const prompt = require("prompt");
prompt.start();
prompt.get(input,function(err,result){
  if(err){return(console.log(err.toString()))}
  try{
    chainId = result.chainId;
    server = result.endpoint;
    gasPrice = result.gasLimit;//String:Li
    VERSION = bytes.pack(chainId,msgVersion);
    zilliqa = new Zilliqa(result.endpoint);
    privateKey = result.privateKey;
    zilliqa.wallet.addByPrivateKey(privateKey);
    address = getAddressFromPrivateKey(privateKey);
    sender = toBech32Address(address);
    zilliqa.blockchain.getBalance(address)
    .then(dat=>{info=dat.result;return(zilliqa.blockchain.getMinimumGasPrice())})
    .then(dat=>{
      nonce = info.nonce;
      balance = info.balance;
      sysprice = new BN(dat.result);
      minPrice = units.fromQa(sysprice,units.Units.Li);//String:Li
      txnprice = units.toQa(gasPrice,units.Units.Li);//BN:Qa
      if(!txnprice.gte(sysprice))throw("Limit gas price was set too low, program stopped");
      console.log(sepline);
      console.log("Server:",server);
      console.log("Sender:",sender);
      console.log("ZIL Balance:",units.fromQa(new BN(balance),units.Units.Zil));
      console.log("Account Nonce:",nonce);
      console.log("Min Gas Price (Li):",minPrice);
      console.log("Set Gas Price (Li):",gasPrice);
      console.log(sepline);
      prompt.get(wait,function(err,result){
        if(err){return(console.log(err.toString()))}
        prompt.get(send,function(err,result){
          if(err){return(console.log(err.toString()))}
          recipient = result.recipient;
          amount = result.amount;
          console.log(sepline);
          console.log("Recipient:",recipient);
          console.log("ZIL Amount:",amount);
          console.log(sepline);
          prompt.get(wait,function(err,result){
            if(err){return(console.log(err.toString()))}
            console.log("Waiting...");
            let txn = zilliqa.transactions.new({
              version: VERSION,
              toAddr: recipient,
              amount: new BN(units.toQa(amount,units.Units.Zil)),
              gasPrice: txnprice,
              gasLimit: Long.fromNumber(GASLIMIT),
            },false);
            zilliqa.blockchain.createTransaction(txn)
            .then(res=>{
              console.log("TXHASH:",res.hash);
              console.log(res.receipt);
              log(res.hash);
            }).catch(err=>{log(err.toString());console.log(err.toString())})
          });/*prompt*/
        });/*prompt*/
      });/*prompt*/
    }).catch(err=>{console.log(err.toString())});
  }catch(err){return(console.log(err.toString()))}
});
