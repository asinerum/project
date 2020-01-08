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
const send=function(divG,divH,divS){showLoad(divS);txsend(divG,divH,divS);};
const txsend=function(divG,divH,divS){sendingFunc.estimateGas({from:sender,value:s2wHex(sendingEth)}).then((gas)=>{estgas=gas;gasfee=fromGwei(estgas*txgwei);if(!accepted(divS))return;console.log('gas:'+gas.toString(16));web3.eth.getTransactionCount(sender).then(nonce=>{nonce=nonce.toString(16);console.log('nonce:'+nonce);web3.eth.sendSignedTransaction(txraw(sendingAbi,nonce,sendingEth,0)).on(RECEIPT,receipt=>{txreceipt=receipt;console.log(txreceipt);dw(divG,txreceipt[_gasUsed]);dw(divH,txreceipt[_transactionHash]);dw(divS,txreceipt[_status]);}).then((res)=>{dw(divS,OK);}).catch((err)=>{dw(divG,BLANK);dw(divH,BLANK);dw(divS,ERROR+errCode(err));});});});};
const sendeth=function(to,eth,divH,divS){showLoad(divS);estgas=BASEGAS;gasfee=fromGwei(estgas*txgwei);if(!accepted(divS))return;web3.eth.getTransactionCount(sender).then(nonce=>{nonce=nonce.toString(16);web3.eth.sendSignedTransaction(txraw(OxOO,nonce,eth,to)).on(RECEIPT,receipt=>{txreceipt=receipt;dw(divH,txreceipt[_transactionHash]);}).then((res)=>{dw(divS,OK);}).catch((err)=>{dw(divS,ERROR+errCode(err));});});};
const sendeth2sys=function(eth,divH,divS){sendeth(contractAddress,eth,divH,divS);};
////////////////////////////////////////////////////////////
const txraw=function(abi,nonce,eth,to){
let dk={nonce:HEXINIT+nonce,value:s2wHex(eth),gasPrice:g2wHex(txgwei),gasLimit:toHex(maxgas),from:sender,to:(to?to:contractAddress),chainId:networkChainId};if(abi!=OxOO)dk['data']=abi;
let pk=new ethereumjs.Buffer.Buffer(senderPte,HEX);
let tx=new ethereumjs.Tx(dk);console.log(dk);tx.sign(pk);
let rx=HEXINIT+tx.serialize().toString(HEX);console.log(rx);return(rx);};
////////////////////////////////////////////////////////////