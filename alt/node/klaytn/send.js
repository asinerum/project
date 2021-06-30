const apiNode = "https://node-api.klaytnapi.com/v1/klaytn"; // "https://api.baobab.klaytn.net:8651" for Baobab testnet
const chainId = "8217"; // "1001" for Baobab testnet
const sepline = "/////////////////////////////";
const input =
[
  {
    name: "endpoint",
    description: "API Endpoint (ENTER for default value)",
    default: apiNode,
    required: true,
  },
  {
    name: "chainid",
    description: "Chain ID (ENTER for default value)",
    default: chainId,
    required: true,
  },
  {
    name: "address",
    description: "Sender's wallet address",
    message: "A wallet address must be Ethereum valid",
    pattern: /^0x([a-fA-F0-9]{40})$/,
    required: true,
  },
  {
    name: "privateKey",
    description: "Sender's private key",
    message: "A private key must be Ethereum valid",
    pattern: /^0x([a-f0-9]{64})$/,
    required: true,
    hidden: true,
    replace: "*",
  },
  {
    name: "accessKeyId",
    description: "API access key (ENTER for none)",
    default: "",
  },
  {
    name: "secretAccessKey",
    description: "API secret key (ENTER for none)",
    default: "",
    hidden: true,
    replace: "*",
  },
];
const send =
[
  {
    name: "recipient",
    description: "Recipient's wallet address",
    message: "A wallet address must be Ethereum valid",
    pattern: /^0x([a-fA-F0-9]{40})$/,
    required: true,
  },
  {
    name: "amount",
    description: "Amount of coins to be sent",
    pattern: /^[0-9]*\.?[0-9]*$/,
    required: true,
  },
  {
    name: "gas",
    description: "Gas limit (ENTER for default value)",
    default: 25000,
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
require("./decoder.js")();
const Caver = require("caver-js");
const prompt = require("prompt");
const fs = require("fs");
const log = function(data){
  console.log(data.toString());
  fs.appendFileSync("log.txt",Date()+"\r\n"+data+"\r\n");
};
let caver;
let server;
let sender;
let account;
let recipient;
let amount;
let gas;
prompt.start();
prompt.get(input,function(err,result){
  if(err){return(console.log(err.toString()))}
  try{
    if(result.accessKeyId){
      const option = {
        headers: [
        {name: 'Authorization', value: 'Basic '+Buffer.from(result.accessKeyId+':'+result.secretAccessKey).toString('base64')},
        {name: 'x-chain-id', value: result.chainid}, ]};
      caver = new Caver(new Caver.providers.HttpProvider(result.endpoint,option));
    }else{
      caver = new Caver(result.endpoint);
    }
    account = caver.wallet.newKeyring(result.address,result.privateKey);//~caver.wallet.add(account);
    sender = account.address;
    server = result.endpoint;
    caver.klay.getBalance(sender).then(result=>{
      console.log(sepline);
      console.log("Server:",server);
      console.log("Sender:",sender);
      console.log("Balance:",caver.utils.convertFromPeb(result));
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
            const rtx = new caver.transaction.valueTransfer({
            from: sender,
            to: recipient,
            gas: 25000,
            value: caver.utils.convertToPeb(String(amount))});
            caver.wallet.sign(sender,rtx).then(signed=>caver.rpc.klay.sendRawTransaction(signed).then(r=>{log("transactionHash:\t"+r.transactionHash)}).catch(log));
          });
        });
      });
    }).catch(log);
  }catch(err){return(log(err))}
});
