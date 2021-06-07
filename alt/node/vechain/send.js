const endpoint = "https://mainnet.veblocks.net";
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
    pattern: /^0x([a-f0-9]{64})$/,
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
    description: "Amount of coins to be sent",
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
let thorify;
let Web3;
let web3;
let server;
let sender;
let recipient;
let amount;
let gas;
const prompt = require("prompt");
prompt.start();
prompt.get(input,function(err,result){
  if(err){return(console.log(err.toString()))}
  thorify = require("thorify").thorify;
  try{
    Web3 = require("web3");
    web3 = thorify(new Web3(),result.endpoint);
    web3.eth.accounts.wallet.add(result.privateKey);
    sender = web3.eth.accounts.wallet[0].address;
    server = result.endpoint;
    web3.eth.getBalance(sender).then(result=>{
      console.log(sepline);
      console.log("Server:",server);
      console.log("Sender:",sender);
      console.log("Balance:",web3.utils.fromWei(result));
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
            web3.eth.sendTransaction({
            from: sender,
            to: recipient,
            gas: gas,
            value: web3.utils.toWei(String(amount))})
            .then(console.log)
            .catch(err=>console.log(err.toString()));
          });
        });
      });
    });
  }catch(err){return(console.log(err.toString()))}
});
