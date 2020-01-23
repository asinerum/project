////////////////////////////////////////////////////////////
const mmresult=function(err,hash,fname){if(err){err=ERROR+errCode(err);lastTxHash[fname]=BLANK;}else{err=OK+hash;lastTxHash[fname]=hash;};mw(lastTxHashClass,err);dw(fname,err);};
const mmsender=function(eth){return({from:sender,to:contractAddress,value:(eth?s2w(eth):0),gasPrice:gtoWei(txgwei),gas:maxgas});};
////////////////////////////////////////////////////////////
const mm_buy=function(eth){;;lastTxHashId=funcName();xuteng.methods.buy().send(mmsender(eth),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_sell=function(xut){;;lastTxHashId=funcName();xuteng.methods.sell(s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_transfer=function(ua,xut){;;lastTxHashId=funcName();xuteng.methods.transfer(ua,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
////////////////////////////////////////////////////////////
const mm_setFee=function(xut){;;lastTxHashId=funcName();xuteng.methods.setFee(s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_setUser=function(ua,num){;;lastTxHashId=funcName();xuteng.methods.setUser(ua,num).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_setHolder=function(oa,ua){;;lastTxHashId=funcName();xuteng.methods.setHolder(oa,ua).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_setDomain=function(d,j,eth){;;lastTxHashId=funcName();xuteng.methods.setDomain(d,j).send(mmsender(eth),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_transferFor=function(to,xut,re){;;lastTxHashId=funcName();xuteng.methods.transferFor(to,s2w(xut),re).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_pennyPayout=function(to,oa,xut){;;lastTxHashId=funcName();xuteng.methods.pennyPayout(to,oa,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
////////////////////////////////////////////////////////////
const mm_postContent=function(j,co,to,exp,pip,bid,typ){;;lastTxHashId=funcName();xuteng.methods.postContent(j,co,to,exp,s2w(pip),s2w(bid),typ).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_pub=function(oa,typ){;;lastTxHashId=funcName();xuteng.methods.pub(oa,typ).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_ping=function(h,typ){;;lastTxHashId=funcName();xuteng.methods.ping(h,typ).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_notify=function(h,to){;;lastTxHashId=funcName();xuteng.methods.notify(h,to).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_txjoin=function(oa,h,typ,xut){;;lastTxHashId=funcName();xuteng.methods.txjoin(oa,h,typ,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_conjoin=function(oa,j,xut){;;lastTxHashId=funcName();xuteng.methods.conjoin(oa,j,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_releaseCoholding=function(oa,x){;;lastTxHashId=funcName();xuteng.methods.releaseCoholding(oa,x).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
////////////////////////////////////////////////////////////
const mm_userSetSell=function(xut,tpe){;;lastTxHashId=funcName();xuteng.methods.userSetSell(s2w(xut),s2w(tpe)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_userSetBuy=function(tpe,eth){;;lastTxHashId=funcName();xuteng.methods.userSetBuy(s2w(tpe)).send(mmsender(eth),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_userStopSell=function(i){;;lastTxHashId=funcName();xuteng.methods.userStopSell(i).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_userStopBuy=function(i){;;lastTxHashId=funcName();xuteng.methods.userStopBuy(i).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_buyFromSeller=function(ua,i,c,eth){;;lastTxHashId=funcName();xuteng.methods.buyFromSeller(ua,i,c).send(mmsender(eth),function(err,hash){mmresult(err,hash,lastTxHashId);});};
const mm_sellToBuyer=function(ua,i,c,xut){;;lastTxHashId=funcName();xuteng.methods.sellToBuyer(ua,i,c,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,lastTxHashId);});};
////////////////////////////////////////////////////////////