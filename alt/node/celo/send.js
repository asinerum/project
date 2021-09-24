const endpoint = "https://forno.celo.org"; // "https://alfajores-forno.celo-testnet.org"
const sepline = "/////////////////////////////";
const input =
[
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
    message: "A wallet address must be Ethereum valid",
    pattern: /^0x([a-fA-F0-9]{40})$/,
    required: true,
  },
  {
    name: "amount",
    description: "Amount of CELO coins to be sent (ENTER for none)",
    pattern: /^[0-9]*\.?[0-9]*$/,
    default: "0",
    required: true,
  },
  {
    name: "dollar",
    description: "Amount of CELO'USD to be sent (ENTER for none), excluding fees",
    pattern: /^[0-9]*\.?[0-9]*$/,
    default: "0",
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
let web3;
let kit;
let goldtoken;
let stabletoken;
let server;
let sender;
let recipient;
let amount;
let dollar;
const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");
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
    web3 = new Web3(server);
    kit = ContractKit.newKitFromWeb3(web3);
    kit.connection.addAccount(result.privateKey);
    let celo = "0";
    let cusd = "0";
    sender = kit.connection.wallet.accountSigners.keys().next().value;
    kit.contracts.getGoldToken().then(r=>{goldtoken=r;return(kit.contracts.getStableToken())})
    .then(r=>{stabletoken=r;return(goldtoken.balanceOf(sender))})
    .then(r=>{celo=web3.utils.fromWei(r.toString());return(stabletoken.balanceOf(sender))})
    .then(r=>{
      cusd = web3.utils.fromWei(r.toString());
      console.log(sepline);
      console.log("Server:",server);
      console.log("Sender:",sender);
      console.log("CELO Balance:",celo);
      console.log("cUSD Balance:",cusd);
      console.log(sepline);
      prompt.get(wait,function(err,result){
        if(err){return(console.log(err.toString()))}
        prompt.get(send,function(err,result){
          if(err){return(console.log(err.toString()))}
          recipient = result.recipient;
          amount = result.amount;
          dollar = result.dollar;
          console.log(sepline);
          console.log("Recipient:",recipient);
          console.log("CELO Amount:",amount);
          console.log("cUSD Amount:",dollar);
          console.log(sepline);
          prompt.get(wait,function(err,result){
            if(err){return(console.log(err.toString()))}
            console.log("Waiting...");
            if(Number(amount))goldtoken.transfer(recipient,web3.utils.toWei(amount.toString())).send({from:sender}).then(tx=>{return(tx.waitReceipt())}).then(receipt=>{log("STATUS:"+receipt.status+";HASH:"+receipt.transactionHash);console.log("CELO",receipt)}).catch(err=>{log(err.toString());console.log(err.toString())});
            if(Number(dollar))stabletoken.transfer(recipient,web3.utils.toWei(dollar.toString())).send({from:sender,feeCurrency:stabletoken.address}).then(tx=>{return(tx.waitReceipt())}).then(receipt=>{log("STATUS:"+receipt.status+";HASH:"+receipt.transactionHash);console.log("cUSD",receipt)}).catch(err=>{log(err.toString());console.log(err.toString())});
            if(!Number(amount)&&!Number(dollar))console.log("None transferred");
          });/*prompt*/
        });/*prompt*/
      });/*prompt*/
    }).catch(err=>{console.log(err.toString())});
  }catch(err){return(console.log(err.toString()))}
});
