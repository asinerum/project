////////////////////////////////////////////////////////////
const BSCSCAN={
api:{
mainnet:EXCHAINS.binance.api},
push:{
mainnet:EXCHAINS.binance.push}};
////////////////////////////////////////////////////////////
const ETHERSCAN={
api:{
rinkeby:EXCHAINS.rinkeby.api,
ropsten:EXCHAINS.ropsten.api,
mainnet:EXCHAINS.mainnet.api},
push:{
rinkeby:EXCHAINS.rinkeby.push,
ropsten:EXCHAINS.ropsten.push,
mainnet:EXCHAINS.mainnet.push}};
////////////////////////////////////////////////////////////
const TXDECODERS=[
'https://www.ethereumdecoder.com/',
'https://live.blockcypher.com/eth/decodetx/'];
////////////////////////////////////////////////////////////
const PROXIES=[
{/*https://etherscan.io/apis#proxy*/
getTransactionCount:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_getTransactionCount&address=${addr}`)},
getContractDecimals:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=0x313ce567&tag=latest`)},
getTokenTotalSupply:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=0x18160ddd&tag=latest`)},
getUserTokenBalance:function(addr,acc,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=account&action=tokenbalance&contractaddress=${addr}&address=${acc}&tag=latest`)},
getUserEtherBalance:function(acc,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=account&action=balance&address=${acc}&tag=latest`)},
sendToSmartContract:function(addr,data,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=${data}&tag=latest`)},
sendRawTransaction:function(hex,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_sendRawTransaction&hex=${hex}`)},
getGasPrice:function(ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_gasPrice`)},
setApiKey:function(key,ncid=MAINNET){EXCHAINS[ncid].api+=`apikey=${key}&`}}];
////////////////////////////////////////////////////////////