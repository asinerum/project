////////////////////////////////////////////////////////////
const defiProgJoin=function(status,divAmount,token=0,eth=0,tlim=ZERO,elim=ZERO,a){
showLoad(status);a=s2n(gv(divAmount));if(!positiveNum(a)||!window.trader||!window.trader.ppe)return(dw(status,_errInput));if(!window.trader.ppe.gt(0)||!window.trader.value.gt(0))return(dw(status,_errValue));if(window.trader.buytoken!=BUYTOKEN)return(dw(status,_errItNon));if(window.trader.time>0&&window.trader.time<nowDate())return(dw(status,_errInvst));if(BUYTOKEN){token=a;tlim=fromWei(window.trader.value.w2p(window.trader.ppe));elim=fromWei(window.trader.value)}else{eth=a/fromWei(window.trader.ppe);tlim=fromWei(window.trader.value);elim=fromWei(window.trader.value.p2w(window.trader.ppe))};console.warn('INPUT_DATA',{token,eth,tlim,elim});if(token>tlim||eth>elim)return(dw(status,_errValim));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_BALANCE',w2s(res,9));if(fromWei(res)<token)return(dw(status,_errDepos));
ercCoin(sender,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_COIN_BALANCE_'+COIN,w2s(res,9));if(fromWei(res)<eth)return(dw(status,_errCoins));/*CoinOnly*/
ercSend(xutengFemt,MPROGPAY,[window.trader.refno,s2w(token)],eth,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADERS_TRANSACTION_RECEIPT',res);});});});};
////////////////////////////////////////////////////////////
const defiProgStop=function(status,divId,half=true,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADING_DATA',res);if(res.buytoken!=BUYTOKEN)return(dw(status,_errItNon));if(res.maker==ZEROADDR)return(dw(status,_errItNot));if(!twoHexEqual(res.maker,sender))return(dw(status,_errOwner));if(res.time>=nowDate())return(dw(status,_errXTime));if(res.value===ZERO)return(dw(status,_errValue));
ercSend(xutengFemt,MPROGSTP,[i],0,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADERS_CANCELLATION_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgRead=function(status,divId,divRate,divAge,divAmount,divOwner,dec=5,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));iniProgData(i);
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADING_DATA',res);if(res.buytoken!=BUYTOKEN)return(dw(status,_errItNon));getProgData(res);dz(divRate,w2s(res.ppe,dec*2));db(divAmount,w2s(res.value,dec));db(divOwner,showAddrUrl(res.maker));db(divAge,showItemAge(res.time,false));});};
////////////////////////////////////////////////////////////
const defiProgOpen=function(status,divId,divRate,divAge,divAmount,token=0,eth=0,i,r,t,a){
showLoad(status);i=Number(gv(divId));r=s2n(gv(divRate));t=s2n(gv(divAge));a=s2n(gv(divAmount));t=t<=0?0:daysToStamp(t);if(!positiveInt(i)||!positiveNum(r)||!positiveNum(a))return(dw(status,_errInput));if(BUYTOKEN){eth=a/r}else{token=a};
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADING_DATA',res);if(res.maker!=ZEROADDR)return(dw(status,_errIdNot));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_BALANCE',w2s(res,9));if(fromWei(res)<token)return(dw(status,_errDepos));
ercCoin(sender,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_COIN_BALANCE_'+COIN,w2s(res,9));if(fromWei(res)<eth)return(dw(status,_errCoins));/*CoinOnly*/
ercSend(xutengFemt,MPROGRAM,[i,s2w(token),s2w(r),t],eth,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADERS_CREATION_RECEIPT',res);});});});});};
////////////////////////////////////////////////////////////
const iniProgData=function(uint){window.trader={};window.trader.refno=uint;};
const getProgData=function(data){window.trader.ppe=data.ppe;window.trader.time=data.time;window.trader.value=data.value;window.trader.maker=data.maker;window.trader.buytoken=data.buytoken;};
////////////////////////////////////////////////////////////
window.menu.onDefiProgJoin=function(){defiProgJoin('form_status','pro_gemt');}
window.menu.onDefiProgOpen=function(){defiProgOpen('form_status','pro_id','pro_apr','pro_age','pro_gemt');}
window.menu.onDefiProgRead=function(){defiProgRead('form_status','pro_id','pro_apr','pro_age','pro_gemt');}
window.menu.onDefiProgRecv=function(){defiProgRead('form_status','pro_id','pro_apr','pro_age','pro_conv');}
window.menu.onDefiProgReId=function(){defiProgRead('form_status','pro_id','pro_apr','pro_age','pro_sum','pro_own');}
window.menu.onDefiProgStop=function(){if(positiveInt(gv('pro_id'))&&confirm(_warnPrgStop))return(defiProgStop('form_status','pro_id'));}
////////////////////////////////////////////////////////////
window.menu.goDefiProgIdno=function(){if(!positiveInt(gv('pro_id')))return(alert(_warnPrgIdno));}
window.menu.goDefiProgInit=function(){if(!positiveNum(s2n(gv('pro_gemt'))))return(alert(_warnPrgInit));}
window.menu.goDefiProgGemt=function(){if(!positiveNum(s2n(gv('pro_gemt'))))return(alert(_warnPrgInit));db('pro_conv',n2s(gv('pro_gemt').t2e(gv('pro_apr')),6))}
window.menu.goDefiProgConv=function(){if(!positiveNum(s2n(gv('pro_conv'))))return(alert(_warnPrgInit));db('pro_gemt',n2s(gv('pro_conv').e2t(gv('pro_apr')),6))}
window.menu.goDefiProgRate=function(){if(!positiveNum(s2n(gv('pro_apr'))))return(alert(_warnPrgPrix));db('pro_rev',n2s(1/s2n(gv('pro_apr')),6))}
window.menu.goDefiProgRvrt=function(){if(!positiveNum(s2n(gv('pro_rev'))))return(alert(_warnPrgPrvt));db('pro_apr',n2s(1/s2n(gv('pro_rev')),6))}
window.menu.goDefiProgSAge=function(){if(!positiveNum(s2n(gv('pro_age')))&&s2n(gv('pro_age'))!=0)return(alert(_warnPrgSAge));}
window.menu.goDefiProgInst=window.menu.goDefiProgInit;
window.menu.goDefiProgReId=window.menu.onDefiProgReId;
////////////////////////////////////////////////////////////