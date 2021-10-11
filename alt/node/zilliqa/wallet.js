const {
  schnorr,
  toBech32Address,
  getPubKeyFromPrivateKey,
  getAddressFromPrivateKey,
} = require("@zilliqa-js/crypto");
const sepline = "/////////////////////////////";
console.log(sepline);
let privateKey = "0x"+schnorr.generatePrivateKey();
let address = getAddressFromPrivateKey(privateKey);
let publicKey = getPubKeyFromPrivateKey(privateKey);
let zilAddress = toBech32Address(address);
console.log("Private Key:",privateKey);
console.log("Public Key:",publicKey);
console.log("Hex Address:",address);
console.log("Zilliqa Wallet Address:",zilAddress);
console.log(sepline);
