////////////////////////////////////////////////////////////
const defiProgGain=function(status,divId,i){
showLoad(status);i=Number(gv(divId));if(!window.investor||window.investor.refno!=i)return(dw(status,_errInput));if(window.investor.amount.le(0)||window.investor.amount.ge(window.investor.value))return(dw(status,_errClear));
ercSend(xutengFemt,MPROGWDR,[i],0,status,null,function(err,res){checkResult(err,res,status);console.warn('WITHDRAWAL_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiProgJoin=function(status,divAmount,a){
showLoad(status);a=s2n(gv(divAmount));if(!positiveNum(a)||!window.investor)return(dw(status,_errInput));if(window.investor.start!=0||window.investor.value.le(0))return(dw(status,_errInvst));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('INVESTOR_BALANCE',w2s(res,9));if(fromWei(res)<a)return(dw(status,_errDepos));
ercSend(xutengFemt,MPROGPAY,[window.investor.refno,s2w(a)],0,status,null,function(err,res){checkResult(err,res,status);console.warn('INVESTMENT_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgRead=function(status,divId,divRate,divAmount,divAge,divOwner,divInvest,divInAge,dec=5,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));window.investor={};window.investor.refno=i;
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);db(divRate,bPetriToApr(res.petri));db(divAmount,w2s(res.value,dec));db(divAge,showItemAge(res.open));db(divOwner,showAddrUrl(res.maker));window.investor.value=res.value;console.warn('PROGRAM_DATA',res);
ercCall(xutengFemt,MPROGINV,[i,sender],status,null,function(err,res){checkResult(err,res,status);db(divInvest,w2s(res.amount));db(divInAge,showItemAge(res.start));window.investor.amount=res.amount;window.investor.start=res.start;console.warn('INVEST_DATA',res);});});};
////////////////////////////////////////////////////////////
const defiProgStop=function(status,divId,half=true,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_DATA',res);if(res.maker==ZEROADDR)return(dw(status,_errItNot));if(!twoHexEqual(res.maker,sender))return(dw(status,_errOwner));if(res.value===ZERO)return(dw(status,_errValue));
ercSend(xutengFemt,MPROGSTP,[i,half],0,status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_STOP_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgOpen=function(status,divId,divRate,divAmount,eth=0,i,r,a){
showLoad(status);i=Number(gv(divId));r=s2n(gv(divRate));a=s2n(gv(divAmount));if(!positiveInt(i)||!positiveNum(a)||!numsInRange(r,PROGMINRATE,PROGMAXRATE))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_DATA',res);if(res.maker!=ZEROADDR)return(dw(status,_errIdNot));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAMER_BALANCE',w2s(res,9));if(fromWei(res)<a)return(dw(status,_errDepos));
ercSend(xutengFemt,MPROGRAM,[i,bAprToPetri(r),s2w(a)],s2w(eth),status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_CREATION_RECEIPT',res);});});});};
////////////////////////////////////////////////////////////
const bAprToPetri=function(apr){return(Math.round(10**9*apr/100/YEARSECONDS));};
const bPetriToApr=function(spr){return(YEARSECONDS*100*spr/10**9);};
////////////////////////////////////////////////////////////
window.menu.onDefiProgDraw=function(){if(positiveInt(gv('pro_id'))&&confirm(_warnPrgDraw))return(defiProgStop('form_status','pro_id',true));}
window.menu.onDefiProgGain=function(){defiProgGain('form_status','pro_id');}
window.menu.onDefiProgJoin=function(){defiProgJoin('form_status','pro_gemt');}
window.menu.onDefiProgOpen=function(){defiProgOpen('form_status','pro_id','pro_apr','pro_gemt');}
window.menu.onDefiProgRead=function(){defiProgRead('form_status','pro_id','pro_apr','pro_gemt');}
window.menu.onDefiProgReId=function(){defiProgRead('form_status','pro_id','pro_apr','pro_sum','pro_age','pro_own','pro_amt','pro_agi');}
window.menu.onDefiProgStop=function(){if(positiveInt(gv('pro_id'))&&confirm(_warnPrgStop))return(defiProgStop('form_status','pro_id',false));}
////////////////////////////////////////////////////////////
window.menu.goDefiProgIdno=function(){if(!positiveInt(gv('pro_id')))return(alert(_warnPrgIdno));}
window.menu.goDefiProgInit=function(){if(!positiveNum(s2n(gv('pro_gemt'))))return(alert(_warnPrgInit));}
window.menu.goDefiProgRate=function(){if(!numsInRange(s2n(gv('pro_apr')),PROGMINRATE,PROGMAXRATE))return(alert(_warnPrgRate));}
window.menu.goDefiProgInst=window.menu.goDefiProgInit;
window.menu.goDefiProgReId=window.menu.onDefiProgReId;
////////////////////////////////////////////////////////////