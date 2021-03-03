////////////////////////////////////////////////////////////
const BSCSCAN={
api:{
mainnet:'https://api.bscscan.com/api?'},
push:{
mainnet:'https://bscscan.com/pushtx'}};
////////////////////////////////////////////////////////////
const ETHERSCAN={
api:{
rinkeby:'https://api-rinkeby.etherscan.io/api?',
ropsten:'https://api-ropsten.etherscan.io/api?',
mainnet:'https://api.etherscan.io/api?'},
push:{
rinkeby:'https://rinkeby.etherscan.io/pushTx',
ropsten:'https://ropsten.etherscan.io/pushTx',
mainnet:'https://etherscan.io/pushTx'}};
////////////////////////////////////////////////////////////
const TXDECODERS=[
'https://www.ethereumdecoder.com/',
'https://live.blockcypher.com/eth/decodetx/'];
////////////////////////////////////////////////////////////
const PROXIES=[
{/*https://etherscan.io/apis#proxy*/
getTransactionCount:function(addr,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=proxy&action=eth_getTransactionCount&address=${addr}`)},
getContractDecimals:function(addr,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=proxy&action=eth_call&to=${addr}&data=0x313ce567&tag=latest`)},
getTokenTotalSupply:function(addr,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=proxy&action=eth_call&to=${addr}&data=0x18160ddd&tag=latest`)},
getUserTokenBalance:function(addr,acc,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=account&action=tokenbalance&contractaddress=${addr}&address=${acc}&tag=latest`)},
getUserEtherBalance:function(acc,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=account&action=balance&address=${acc}&tag=latest`)},
sendToSmartContract:function(addr,data,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=proxy&action=eth_call&to=${addr}&data=${data}&tag=latest`)},
sendRawTransaction:function(hex,ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=proxy&action=eth_sendRawTransaction&hex=${hex}`)},
getGasPrice:function(ncid=MAINNET,proxy=ETHERSCAN){return(`${proxy['api'][ncid]}module=proxy&action=eth_gasPrice`)},
setApiKey:function(key,ncid=MAINNET,proxy=ETHERSCAN){proxy['api'][ncid]+=`apikey=${key}&`}}];
////////////////////////////////////////////////////////////