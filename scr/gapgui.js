////////////////////////////////////////////////////////////
const bad_register=function(to,xut,div){if(disable()||badAddr(to)||badXuts(xut)||notTran()||stopReg())return(true);return(false);};
const bad_setFee=function(div){if(disable()||noAUser())return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_userStopBuy=function(t){if(disable()||userBan()||noIBuys(t))return(true);return(false);};
const bad_userStopSell=function(t){if(disable()||userBan()||noISell(t))return(true);return(false);};
const bad_buyFromSeller=function(){if(disable()||userBan()||noneReg()||notBuys()||badAddr(gv(_sellerAddress))||badEths(gv(_eth2send))||badVals(gv(_xut2gain),gn(_sellingVol)))return(true);return(false);};
const bad_sellToBuyer=function(){if(disable()||userBan()||noneReg()||notSell()||badAddr(gv(_buyerAddress))||badXuts(gv(_xut2send))||badVals(gv(_eth2gain),gn(_buyingVol)))return(true);return(false);};
const bad_userSetBuy=function(){if(disable()||userBan()||noneReg()||notBuys()||badEths(gv(_eth2pay)))return(true);return(false);};
const bad_userSetSell=function(){if(disable()||userBan()||noneReg()||notSell()||badXuts(gv(_xut2sell))||badNumb(gv(_eth2recv)))return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_transfer=function(){if(disable()||badAddr(gv(_transTo))||badXuts(gv(_transVal))||notTran())return(true);return(false);};
const bad_transfer2xut=function(){if(disable()||badXuts(gv(_transThis))||badXEth(gv(_ethThis))||disSell())return(true);return(false);};
const bad_transfer2admin=function(){if(disable()||badXuts(gv(_transVal))||notTran())return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_sendeth=function(){if(disable()||badAddr(gv(_sendTo))||badEths(gv(_sendVal))||userBan())return(true);return(false);};
const bad_sendeth2xut=function(){if(disable()||badEths(gv(_sendThis))||badXXut(gv(_xutThis))||disBuys())return(true);return(false);};
const bad_sendeth2sys=function(){if(disable()||badEths(gv(_sendThis))||badXXut(gv(_xutThis))||disBuys())return(true);return(false);};
const bad_sendeth2admin=function(){if(disable()||badEths(gv(_sendVal))||userBan())return(true);return(false);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const bad_setPenny=function(){if(disable()||noOwner()||badPair(gv(_tpeSell),gv(_tpeBuy))||yesTran())return(true);return(false);};
const bad_setAllow=function(){if(disable()||noOwner())return(true);return(false);};
const bad_setRole=function(){if(disable()||noModer()||badAddr(gv(_roleTo)))return(true);return(false);};
const bad_setTick=function(){if(disable()||noModer()||badAddr(gv(_tickTo)))return(true);return(false);};
const bad_setType=function(){if(disable()||noAdmin())return(true);return(false);};
const bad_setTypePrice=function(){if(disable()||noOwner())return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_setName=function(){if(disable()||noOwner()||userBan())return(true);return(false);};
const bad_setOwner=function(){if(disable()||noOwner()||badAddr(gv(_refex))||userBan())return(true);return(false);};
const bad_changeOwner=function(){if(disable()||noOwner()||badAddr(gv(_owner))||userBan()||badPass())return(true);return(false);};
const bad_mintPenny=function(){if(disable()||noOwner()||badAddr(gv(_mintTo))||lessVal(gv(_mintVal),0)||userBan()||badPass())return(true);return(false);};
const bad_pennyPush=function(){if(disable()||noOwner()||badXuts(gv(_pushVal))||notTran())return(true);return(false);};
const bad_pennyTransfer=function(){if(disable()||noOwner()||badAddr(gv(_xutTo))||badXXut(gv(_xutVal))||notTran())return(true);return(false);};
const bad_weiTransfer=function(){if(disable()||noOwner()||badAddr(gv(_ethTo))||badXEth(gv(_ethVal))||userBan())return(true);return(false);};
////////////////////////////////////////////////////////////