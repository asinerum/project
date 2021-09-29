const sepline = "/////////////////////////////";
const {Keypair} = require("@helium/crypto");
const bip39 = require("bip39");
var mnemonic = bip39.generateMnemonic();
console.log(sepline);
console.log("Mnemonic Phrase:");
console.log(mnemonic);
console.log("Helium Wallet Address:");
Keypair.fromWords(mnemonic.replace(/\s+/g,",").split(","))
.then(account=>{console.log(account.address.b58);console.log(sepline)}).catch(err=>console.log(err.toString()));
