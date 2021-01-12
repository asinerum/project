////////////////////////////////////////////////////////////
const ETHERSCAN={
api:{
rinkeby:'https://api-rinkeby.etherscan.io/api?module=proxy',
ropsten:'https://api-ropsten.etherscan.io/api?module=proxy',
mainnet:'https://api.etherscan.io/api?module=proxy'},
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
getTransactionCount:function(addr,ncid=MAINNET){return(`${ETHERSCAN.api[ncid]}&action=eth_getTransactionCount&address=${addr}`)},
getContractDecimals:function(addr,ncid=MAINNET){return(`${ETHERSCAN.api[ncid]}&action=eth_call&to=${addr}&data=0x313ce567&tag=latest`)},
sendToSmartContract:function(addr,data,ncid=MAINNET){return(`${ETHERSCAN.api[ncid]}&action=eth_call&to=${addr}&data=${data}&tag=latest`)},
sendRawTransaction:function(hex,ncid=MAINNET){return(`${ETHERSCAN.api[ncid]}&action=eth_sendRawTransaction&hex=${hex}`)},
getGasPrice:function(ncid=MAINNET){return(`${ETHERSCAN.api[ncid]}&action=eth_gasPrice`)}}];
////////////////////////////////////////////////////////////