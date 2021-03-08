////////////////////////////////////////////////////////////
const rawTransfer=function(acc,pte,to,amt,scid,price,gas,status=TEST,out=TEST,eth=0){if(!EXTOKENS[scid])return(dw(status,INVALID));showLoad(status);getUserNonce(acc,network,function(err,nonce){if(err)return(dw(status,err));Transfer(to,amt,EXTOKENS[scid]().dec,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},scid,eth,price,gas,nonce,acc,pte,true,false);});};
const rawPayEther=function(acc,pte,to,eth,msg,price,gas,status=TEST,out=TEST){showLoad(status);getUserNonce(acc,network,function(err,nonce){if(err)return(dw(status,err));PayEther(to,eth,msg,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},price,gas,nonce,acc,pte,true,false);});};
////////////////////////////////////////////////////////////
const rawTokenSum=function(addr=XUTENG[network].addr,cbf=console.log){axios.get(PROXIES[0].getTokenTotalSupply(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*pennies*/
const rawAccToken=function(addr=XUTENG[network].addr,acc=sender,cbf=console.log){axios.get(PROXIES[0].getUserTokenBalance(addr,acc,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*pennies*/
const rawAccEther=function(acc=sender,cbf=console.log){axios.get(PROXIES[0].getUserEtherBalance(acc,network)).then(r=>{cbf(null,fromWHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*ethers*/
////////////////////////////////////////////////////////////
const rawDecimals=function(addr=XUTENG[network].addr,cbf=console.log){axios.get(PROXIES[0].getContractDecimals(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};
const rawGetNonce=function(addr=sender,cbf=console.log){axios.get(PROXIES[0].getTransactionCount(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};
const rawGetPrice=function(cbf=console.log){axios.get(PROXIES[0].getGasPrice(network)).then(r=>{cbf(null,fromHex(r.data.result)/1000000000)}).catch(e=>{cbf(e,null)});};
////////////////////////////////////////////////////////////