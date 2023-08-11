////////////////////////////////////////////////////////////
const confirmPositiveInt=function(elem,msg,fn=positiveInt){confirmElement(fn,true,elem,msg)};
const checkTokenAllowed=function(elem,msg,fn=tokenAllowed){checkElement(fn,true,elem,msg)};
const checkPositiveNum=function(elem,msg){checkPositiveInt(elem,msg,positiveStr)};
const checkPositiveInt=function(elem,msg,fn=positiveInt){checkElement(fn,true,elem,msg)};
const checkNumsInRange=function(elem,msg,min,max,fn=numsInRange,fp=s2n){checkElement(fn,true,elem,msg,[min,max,fp])};
////////////////////////////////////////////////////////////
const checkElement=function(cfunc,cbool,elem,msg,more=[],afunc=alert){if(cfunc(gv(elem),...more)!==cbool)throw(afunc(msg))};
const confirmElement=function(cfunc,cbool,elem,msg,more=[],mfunc=confirm){if(cfunc(gv(elem),...more)!==cbool||!mfunc(msg))throw(CANCELED)};
////////////////////////////////////////////////////////////
const checkLogin=function(){return(!disable());};
const checkRole=function(r){return(!userBan()&&!noRoled(r));};
////////////////////////////////////////////////////////////
const badPass=function(){return(!prt(hi_prompt_pwd,'OK'+password.substr(0,1),0));};
const stopReg=function(){return(!reask(userRegs>0,hi_alert_notregs));};//SysRegistry
////////////////////////////////////////////////////////////
const disable=function(){return(noLogin()||noEther());};
const disBuys=function(){return(notTran()||notBuys());};
const disSell=function(){return(notTran()||notSell());};
const noEther=function(){return(wrong(nlarge(userEth,0),hi_alert_noether));};
const noLogin=function(){return(wrong(senderPte,hi_alert_nologin));};
const notBuys=function(){return(wrong(buyAllowed,hi_alert_notbuys));};
const notExch=function(){return(wrong(exchangeAllowed,hi_alert_notexch));};
const notSell=function(){return(wrong(sellAllowed,hi_alert_notsell));};
const notTran=function(){return(wrong(transferAllowed,hi_alert_nottran));};
const yesTran=function(){return(wrong(notTran(),hi_alert_yestran));};
const noneReg=function(){return(wrong(userReg,hi_alert_nonereg));};//DocTypeRegistry
const userBan=function(){return(wrong(userRole!=ROLES['BANNED'],hi_alert_userban));};
const noOwner=function(){return(noRoled(ROLES['owner']));};
const noAdmin=function(){return(noRoled(ROLES['admin']));};
const noModer=function(){return(noRoled(ROLES['moderator']));};
const noAUser=function(){return(noRoled(ROLES['user']));};
const noRoled=function(r){return(wrong(userRole>=r,hi_alert_usernot));};
const badAddr=function(a){return(wrong(avalid(a),hi_alert_address));};
const badXEth=function(e){return(wrong(nvalid(e,xutEth),hi_alert_ethfund));};
const badXXut=function(x){return(wrong(nvalid(x,xutXut),hi_alert_xutfund));};
const badEths=function(e){return(badVals(e,userEth));};
const badXuts=function(x){return(badVals(x,userXut));};
const noIBuys=function(i){return(noIndex(i,userBuysCount));};
const noISell=function(i){return(noIndex(i,userSellCount));};
const badNumb=function(n){return(lessVal(n,0));};
const badVals=function(n,b){return(wrong(nvalid(n,b),hi_alert_balance));};
const lessVal=function(n,s){return(lessNum(n,s,hi_alert_lessval));};
const moreVal=function(n,b){return(moreNum(n,b,hi_alert_moreval));};
const lessAmt=function(n,s){return(lessNum(n,s,hi_alert_lessamt));};
const moreAmt=function(n,b){return(moreNum(n,b,hi_alert_moreamt));};
const noIndex=function(i,a){return(moreNum(i,a,hi_alert_noindex));};//[i=1++;a=len]
const badPair=function(s,b){return(moreSon(s,b,hi_alert_badpair));};
const noCheck=function(chk){return(wrong(chk,hi_alert_nocheck));};
////////////////////////////////////////////////////////////
const moreNum=function(n,b,msg){return(wrong(nsmall(n,b),msg));};//0<n<=b
const lessNum=function(n,s,msg){return(wrong(nlarge(n,s),msg));};//n>s>=0
const moreSon=function(s,b,msg){return(wrong(nmidle(s,b),msg));};//0<s<b
////////////////////////////////////////////////////////////