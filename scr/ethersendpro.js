////////////////////////////////////////////////////////////
const mmresult=function(err,hash,fname){if(err){err=ERROR+errCode(err);lastTxHash[fname]=BLANK;}else{err=hash;lastTxHash[fname]=hash;};mw(lastTxHashClass,err);dw(fname,err);};
const mmsender=function(eth,to=contractAddress,ref=null){if(ref){ref=toHex(ref);}else{ref=OxOO;};return({from:sender,to:to,value:(eth?s2w(eth):0),gasPrice:gtoWei(txgwei),gas:maxgas,data:ref});};
const mmdeploy=function(status,abi,code,args=[],gas=3000000,eth=0){showLoad(status);window.currentgas=maxgas;maxgas=gas;_Contract(abi).deploy({data:code,arguments:args}).send(mmsender(eth,null)).then(r=>{showOkay(status);console.warn(r);maxgas=window.currentgas}).catch(e=>{showError(status);console.error(e)})};
const mm_sendeth=function(to,eth,ref=null,n){;;if(!n)n=funcName();web3.eth.sendTransaction(mmsender(eth,to,ref),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_buy=function(eth,n){;;if(!n)n=funcName();xuteng.methods.buy().send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_sell=function(xut,n){;;if(!n)n=funcName();xuteng.methods.sell(s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_transfer=function(ua,xut,n){;;if(!n)n=funcName();xuteng.methods.transfer(ua,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_setFee=function(xut,n){;;if(!n)n=funcName();xuteng.methods.setFee(s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_setUser=function(ua,num,n){;;if(!n)n=funcName();xuteng.methods.setUser(ua,num).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_setHolder=function(oa,ua,n){;;if(!n)n=funcName();xuteng.methods.setHolder(oa,ua).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_setDomain=function(d,j,eth,n){;;if(!n)n=funcName();xuteng.methods.setDomain(d,j).send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_transferFor=function(to,xut,re,n){;;if(!n)n=funcName();xuteng.methods.transferFor(to,s2w(xut),re).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_pennyPayout=function(to,oa,xut,n){;;if(!n)n=funcName();xuteng.methods.pennyPayout(to,oa,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_postContent=function(j,co,to,exp,pip,bid,typ,n){;;if(!n)n=funcName();xuteng.methods.postContent(j,co,to,exp,s2w(pip),s2w(bid),typ).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_pub=function(oa,typ,n){;;if(!n)n=funcName();xuteng.methods.pub(oa,typ).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_ping=function(h,typ,n){;;if(!n)n=funcName();xuteng.methods.ping(h,typ).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_notify=function(h,to,n){;;if(!n)n=funcName();xuteng.methods.notify(h,to).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_txjoin=function(oa,h,typ,xut,n){;;if(!n)n=funcName();xuteng.methods.txjoin(oa,h,typ,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_conjoin=function(oa,j,xut,n){;;if(!n)n=funcName();xuteng.methods.conjoin(oa,j,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_releaseCoholding=function(oa,x,n){;;if(!n)n=funcName();xuteng.methods.releaseCoholding(oa,x).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_userSetSell=function(xut,tpe,n){;;if(!n)n=funcName();xuteng.methods.userSetSell(s2w(xut),s2w(tpe)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_userSetBuy=function(tpe,eth,n){;;if(!n)n=funcName();xuteng.methods.userSetBuy(s2w(tpe)).send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_userStopSell=function(i,n){;;if(!n)n=funcName();xuteng.methods.userStopSell(i).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_userStopBuy=function(i,n){;;if(!n)n=funcName();xuteng.methods.userStopBuy(i).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_buyFromSeller=function(ua,i,c,eth,n){;;if(!n)n=funcName();xuteng.methods.buyFromSeller(ua,i,c).send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_sellToBuyer=function(ua,i,c,xut,n){;;if(!n)n=funcName();xuteng.methods.sellToBuyer(ua,i,c,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////