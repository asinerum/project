////////////////////////////////////////////////////////////
const tokenAllowed=function(token){return([_progMoney,_martMoney,_rareMoney].includes(token))};
////////////////////////////////////////////////////////////
const defiProgJoinMine=function(status,divToken,divId,k,i){
showLoad(status);k=gv(divToken);i=s2n(gv(divId));if(!tokenAllowed(k))return(dw(status,_errInput));
if(!positiveNum(i))return(mint(0,function(tokens){window.menu.onDefiProgLoad();console.warn('TOKENS',tokens)},xutengFemt,ercTokens,alert,mmsender(),true,10,kek));
ercSend(xutengFemt,MPROGRAM,[i],0,status,null,function(err,res){checkResult(err,res,status);window.menu.onDefiProgLoad();console.warn('TRANSACTION_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiProgJoin=function(status,divToken,divId,k,i){
showLoad(status);k=gv(divToken);i=s2n(gv(divId));if(!tokenAllowed(k)||!positiveNum(i))return(dw(status,_errInput));
ercSend(xutengFemt,MPROGRAM,[i],0,status,null,function(err,res){checkResult(err,res,status);window.menu.onDefiProgLoad();console.warn('TRANSACTION_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiProgLoad=function(status,divToken,outBalance,outSupply,dec=5,k){
showLoad(status);k=gv(divToken);if(!tokenAllowed(k))return(dw(status,_errInput));if(k==_progMoney)startGemt();if(k==_martMoney)startNemt();if(k==_rareMoney)startRemt();
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);db(outBalance,w2s(res,dec));});
ercCall(xutengFemt,MTSUPPLY,[],status,null,function(err,res){checkResult(err,res,status);db(outSupply,w2s(res,dec));});};
////////////////////////////////////////////////////////////
window.menu.onDefiProgJoinMine=function(){defiProgJoinMine('form_status','pro_token','pro_id_mine');}
window.menu.onDefiProgJoin=function(){defiProgJoin('form_status','pro_token','pro_id');}
window.menu.onDefiProgLoad=function(){defiProgLoad('form_status','pro_token','pro_amt','pro_sum');}
////////////////////////////////////////////////////////////
window.menu.goDefiProgIdno=function(){if(!positiveInt(gv('pro_id')))return(alert(_warnPrgIdno));}
window.menu.goDefiProgLoad=function(){if(!tokenAllowed(gv('pro_token')))return(alert(_warnPrgCoin));window.menu.onDefiProgLoad()}
////////////////////////////////////////////////////////////