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
getTransactionCount:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_getTransactionCount&address=${addr}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getContractDecimals:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=0x313ce567&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getContractCreation:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=contract&action=getcontractcreation&contractaddresses=${addr}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getTokenTotalSupply:function(addr,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=0x18160ddd&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getUserTokenBalance:function(addr,acc,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=account&action=tokenbalance&contractaddress=${addr}&address=${acc}&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getUserEtherBalance:function(acc,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=account&action=balance&address=${acc}&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
sendToSmartContract:function(addr,data,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=${data}&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
sendRawTransaction:function(hex,ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_sendRawTransaction&hex=${hex}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getGasPrice:function(ncid=MAINNET){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_gasPrice&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
setApiKey:function(key,ncid=MAINNET){EXCHAINS[ncid].token=key}}];
////////////////////////////////////////////////////////////
const BROXIES=[
{/*https://www.blockcypher.com/dev/bitcoin/#introduction*/
getTransactionList:function(addr,ncid=BITCOIN){return(`${BXCHAINS[ncid].api}addrs/${addr}?token=${BXCHAINS[ncid].token?BXCHAINS[ncid].token:BLANK}`)},
sendRawTransaction:function(hex,ncid=BITCOIN){return(`curl\u0020-d\u0020"{\\"tx\\":\\"${hex}\\"}"\u0020${BXCHAINS[ncid].api}txs/push?token=${BXCHAINS[ncid].token?BXCHAINS[ncid].token:BLANK}`)},
setApiKey:function(key,ncid=BITCOIN){BXCHAINS[ncid].token=key}}];
////////////////////////////////////////////////////////////