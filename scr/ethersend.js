////////////////////////////////////////////////////////////
const buy=function(eth){setSending(xuteng.methods.buy(),eth);};
const sell=function(xut){setSending(xuteng.methods.sell(s2w(xut)),0);};
const transfer=function(ua,xut){setSending(xuteng.methods.transfer(ua,s2w(xut)),0);};
////////////////////////////////////////////////////////////
const setFee=function(xut){setSending(xuteng.methods.setFee(s2w(xut)),0);};
const setUser=function(ua,num){setSending(xuteng.methods.setUser(ua,num),0);};
const setHolder=function(oa,ua){setSending(xuteng.methods.setHolder(oa,ua),0);};
const setDomain=function(d,j,eth){setSending(xuteng.methods.setDomain(d,j),eth);};
const transferFor=function(to,xut,re){setSending(xuteng.methods.transferFor(to,s2w(xut),re),0);};
const pennyPayout=function(to,oa,xut){setSending(xuteng.methods.pennyPayout(to,oa,s2w(xut)),0);};
////////////////////////////////////////////////////////////
const postContent=function(j,co,to,exp,pip,bid,typ){setSending(xuteng.methods.postContent(j,co,to,exp,s2w(pip),s2w(bid),typ),0);};
const pub=function(oa,typ){setSending(xuteng.methods.pub(oa,typ),0);};
const ping=function(h,typ){setSending(xuteng.methods.ping(h,typ),0);};
const notify=function(h,to){setSending(xuteng.methods.notify(h,to),0);};
const txjoin=function(oa,h,typ,xut){setSending(xuteng.methods.txjoin(oa,h,typ,s2w(xut)),0);};
const conjoin=function(oa,j,xut){setSending(xuteng.methods.conjoin(oa,j,s2w(xut)),0);};
const releaseCoholding=function(oa,x){setSending(xuteng.methods.releaseCoholding(oa,x),0);};
////////////////////////////////////////////////////////////
const userSetSell=function(xut,tpe){setSending(xuteng.methods.userSetSell(s2w(xut),s2w(tpe)),0);};
const userSetBuy=function(tpe,eth){setSending(xuteng.methods.userSetBuy(s2w(tpe)),eth);};
const userStopSell=function(i){setSending(xuteng.methods.userStopSell(i),0);};
const userStopBuy=function(i){setSending(xuteng.methods.userStopBuy(i),0);};
const buyFromSeller=function(ua,i,c,eth){setSending(xuteng.methods.buyFromSeller(ua,i,c),eth);};
const sellToBuyer=function(ua,i,c,xut){setSending(xuteng.methods.sellToBuyer(ua,i,c,s2w(xut)),0);};
////////////////////////////////////////////////////////////
const weiTransfer=function(ua,eth){setSending(xuteng.methods.weiTransfer(ua,s2w(eth)),0);};
const mintPenny=function(ua,xut){setSending(xuteng.methods.mintPenny(ua,s2w(xut)),0);};
const setAllow=function(b,s,t,e){setSending(xuteng.methods.setAllow(b,s,t,e),0);};
const setPenny=function(sat,bat){setSending(xuteng.methods.setPenny(s2w(sat),s2w(bat)),0);};
const setRole=function(ua,num){setSending(xuteng.methods.setRole(ua,num),0);};
const setTick=function(ua,num){setSending(xuteng.methods.setTick(ua,num),0);};
const setType=function(dt,reg,ban,pub){setSending(xuteng.methods.setType(dt,reg,ban,pub),0);};
const setTypePrice=function(dt,pit,pie){setSending(xuteng.methods.setTypePrice(dt,s2w(pit),s2w(pie)),0);};
const setName=function(s){setSending(xuteng.methods.setName(s),0);};
const setOwner=function(xa){setSending(xuteng.methods.setOwner(xa),0);};
const changeOwner=function(ua){setSending(xuteng.methods.changeOwner(ua),0);};
////////////////////////////////////////////////////////////
const pennyPush=function(xut){sell(xut);};//ReservedSellFunctionForAdmin;
const pennyTransfer=function(to,xut){pennyPayout(to,contractAddress,xut);};
const setSending=function(func,eth){sendingFunc=func;sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;};
////////////////////////////////////////////////////////////
const webProvider=function(rpc){return(web3.eth.setProvider(rpc))};
const webAccount=function(key){return(web3.eth.accounts.wallet.add(keyAccount(key)))};
const webDeploy=function(from,data,gas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){return(webSend(from,null,0,data,gas,gasPrice,cbf))};
const webSend=function(from,to,value='0'/*WEI:DECIMAL*/,data=HEXINIT,gas=maxgas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){return(web3.eth.sendTransaction({from,to,gas,gasPrice,value,data},cbf))};
const webSign=function(from,to,value='0'/*WEI:DECIMAL*/,data=HEXINIT,gas=maxgas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){for(acc of Object.values(web3.eth.accounts.wallet)){if(acc.address==from){return(acc.signTransaction({from,to,gas,gasPrice,value,data},cbf))}};return(cbf(FAILED,null))};
const webRaws=function(from,to,value='0'/*WEI:DECIMAL*/,data=HEXINIT,gas=maxgas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){webSign(from,to,value,data,gas,gasPrice,function(err,res){if(res){return(cbf(res.rawTransaction))};return(cbf(err.toString()))})};
////////////////////////////////////////////////////////////
const txRaw=function(nonce){return(txraw(sendingAbi,nonce,sendingEth,0))};
const txGas=function(){return(sendingFunc.estimateGas({from:sender,value:s2wHex(sendingEth)}))};/*promise*/
const txCount=function(){return(web3.eth.getTransactionCount(sender))};/*promise*/
const txSSend=function(tx){return(web3.eth.sendSignedTransaction(tx))};/*promise*/
////////////////////////////////////////////////////////////
const send=function(divG,divH,divS,cbf=console.log){showLoad(divS);txsend(divG,divH,divS,cbf);};
const txSend=function(divG,divF,divS,cbf=console.log,cfm=true){return(txGas().then(gas=>{estgas=gas;gasfee=fromGwei(estgas*txgwei);dw(divG,estgas);dw(divF,gasfee);if(cfm&&!accepted(divS))return(null);console.warn('GAS',estgas,'FEE',gasfee);return(txCount())}).then(nonce=>{nonce=nonce.toString(16);console.warn('NONCE',nonce);return(txSSend(txRaw(nonce)))}))};
const txsend=function(divG,divH,divS,cbf=console.log,cfm=true,run=true,x){txGas().then(gas=>{estgas=gas;gasfee=fromGwei(estgas*txgwei);if(cfm&&!accepted(divS))return;txCount().then(nonce=>{nonce=nonce.toString(16);x=txRaw(nonce);if(!run)return(cbf(null,x));txSSend(x).on(RECEIPT,receipt=>{txreceipt=receipt;if(cbf)cbf(null,txreceipt);console.log(txreceipt);dw(divG,txreceipt.gasUsed);dw(divH,txreceipt.transactionHash);dw(divS,txreceipt.status);}).then(res=>{dw(divS,OK);}).catch(err=>{if(cbf)cbf(err,null);dw(divG,BLANK);dw(divH,BLANK);dw(divS,ERROR+errCode(err));});});});};
const sendeth=function(to,eth,divH,divS,cbf=console.log,abi=OxOO,run=true,x){if(abi!=OxOO)abi=toHex(abi);showLoad(divS);estgas=BASEGAS;gasfee=fromGwei(estgas*txgwei);if(!accepted(divS))return;txCount().then(nonce=>{nonce=nonce.toString(16);x=txraw(abi,nonce,eth,to);if(!run)return(cbf(null,x));txSSend(x).on(RECEIPT,receipt=>{txreceipt=receipt;if(cbf)cbf(null,txreceipt);console.log(txreceipt);dw(divH,txreceipt.transactionHash);}).then(res=>{dw(divS,OK);}).catch(err=>{if(cbf)cbf(err,null);dw(divS,ERROR+errCode(err));});});};
const sendeth2sys=function(eth,divH,divS,cbf=console.log){sendeth(contractAddress,eth,divH,divS,cbf);};
////////////////////////////////////////////////////////////
const rawtx=function(abi,nonce,eth=0,to=null,d){d={data:abi,nonce:HEXINIT+nonce,value:s2wHex(eth),gasPrice:g2wHex(txgwei),gasLimit:toHex(maxgas),from:sender,chainId:CONTRACT[network].ncid};if(to)d.to=to;d=_Transaction(d);d.sign(_Buffer(senderPte));return(HEXINIT+d.serialize().toString(HEX))};
const xsend=function(abi,gas,eth=0,to=null,divS=TEST,cbf=console.log,run=true,x){showLoad(divS);maxgas=gas;estgas=gas;gasfee=fromGwei(estgas*txgwei);txCount().then(nonce=>{nonce=nonce.toString(16);x=rawtx(abi,nonce,eth,to);if(!run)return(cbf(null,x));txSSend(x).on(RECEIPT,receipt=>{txreceipt=receipt;if(cbf)cbf(null,txreceipt,_hash,receipt.transactionHash,_address,receipt.contractAddress);console.log(txreceipt);}).then(res=>{dw(divS,OK);}).catch(err=>{if(cbf)cbf(err,null);dw(divS,ERROR+errCode(err))})})};
const deploy=function(abi,code,args=[],gas){xsend(_Contract(abi).deploy({data:code,arguments:args}).encodeABI(),gas)};
const deploi=function(bytecode,gas=3000000,divS=TEST,cbf=console.log){xsend(bytecode,gas,0,null,divS,cbf)};
////////////////////////////////////////////////////////////
const txraw=function(abi,nonce,eth,to,d,p,t,r){
;d={nonce:HEXINIT+nonce,value:s2wHex(eth),gasPrice:g2wHex(txgwei),gasLimit:toHex(maxgas),from:sender,to:(to?to:contractAddress),chainId:CONTRACT[network].ncid};if(abi!=OxOO)d.data=abi;
;p=_Buffer(senderPte,HEX);
;t=_Transaction(d);console.log(d);t.sign(p);
;r=HEXINIT+t.serialize().toString(HEX);console.log(r);return(r);};
////////////////////////////////////////////////////////////