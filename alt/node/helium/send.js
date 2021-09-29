const sepline = "/////////////////////////////";
const input =
[
  {
    name: "mnemonic",
    description: "Sender's mnemonic phrase (12 seed words separated by spaces)",
    message: "A mnemonic phrase must be BIP39 valid", // https://github.com/helium/helium-js/blob/master/packages/crypto/src/wordlists/english.json
    required: true,
  },
];
const send =
[
  {
    name: "recipient",
    description: "Recipient's wallet address",
    message: "A wallet address must be Helium valid",
    pattern: /^([a-zA-Z0-9]{51})$/,
    required: true,
  },
  {
    name: "amount",
    description: "Amount of HNT coins to be sent",
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
let balance;
let amount;
let nonce;
let client;
let account;
const {Keypair, Address, Mnemonic} = require("@helium/crypto");
const {PaymentV1, Transaction} = require("@helium/transactions");
const {Balance, CurrencyType} = require("@helium/currency");
const {Client} = require("@helium/http");
const fs = require("fs");
const log = function(data){
  fs.appendFileSync("log.txt",Date()+"\r\n"+data+"\r\n");
};
const prompt = require("prompt");
prompt.start();
prompt.get(input,function(err,result){
  if(err){return(console.log(err.toString()))}
  try{
    client = new Client();
    server = client.network.endpoint;
    client.vars.get()
    .then(dat=>{Transaction.config(dat);return(Keypair.fromWords(result.mnemonic.replace(/\s+/g,",").split(",")))})
    .then(acc=>{account=acc;return(client.accounts.get(account.address.b58))})
    .then(acc=>{
      sender = acc.address;
      nonce = acc.speculativeNonce;
      balance = acc.balance.floatBalance;
      console.log(sepline);
      console.log("Server:",server);
      console.log("Sender:",sender);
      console.log("HNT Balance:",balance);
      console.log("Account Nonce:",nonce);
      console.log(sepline);
      prompt.get(wait,function(err,result){
        if(err){return(console.log(err.toString()))}
        prompt.get(send,function(err,result){
          if(err){return(console.log(err.toString()))}
          recipient = result.recipient;
          amount = result.amount;
          console.log(sepline);
          console.log("Recipient:",recipient);
          console.log("HNT Amount:",amount);
          console.log(sepline);
          prompt.get(wait,function(err,result){
            if(err){return(console.log(err.toString()))}
            console.log("Waiting...");
            let signedPaymentTxn;
            let txn = new PaymentV1({
              payer: account.address,
              payee: Address.fromB58(recipient),
              amount: amount*10**8,
              nonce: nonce+1,
            });
            txn.sign({payer:account})
            .then(sig=>{signedPaymentTxn=sig;return(client.transactions.submit(signedPaymentTxn.toString()))})
            .then(res=>{
              console.log("Transaction Fee:",txn.fee);
              console.log("Transaction Raw:",signedPaymentTxn.toString());
              console.log(res);
              log(res.hash);
            }).catch(err=>{log(err.toString());console.log(err.toString())})
          });/*prompt*/
        });/*prompt*/
      });/*prompt*/
    }).catch(err=>{console.log(err.toString())});
  }catch(err){return(console.log(err.toString()))}
});
