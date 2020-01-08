////////////////////////////////////////////////////////////
const do_signmess=function(t){if(noLogin())return;;dv(_signature,BLANK);t=signmess(gv(_smessage),senderPte);if(!t)return;dv(_signature,t[SIGNATURE]);};
const do_smverify=function(t){if(badAddr(gv(_signatory)))return;;t=srecover(gv(_smessage),gv(_signature));if(t==gv(_signatory)){dw(_accverify,OK);}else{ww(_accverify,ERROR);}};
const do_srecover=function(t){dw(_accverify,BLANK);t=srecover(gv(_smessage),gv(_signature));if(!t)return;dw(_accverify,t);};
////////////////////////////////////////////////////////////
const do_register=function(to,xut,div){if(disable()||badAddr(to)||badXuts(xut)||notTran()||stopReg())return;;transferFor(to,xut,REFREG);send(null,null,div);};
const do_setFee=function(div){if(disable()||noAUser())return;;setFee(gv(_levels));if(!div)div='_setRegisterLevel_status';send(null,null,div);};
////////////////////////////////////////////////////////////
const do_setPenny=function(){if(disable()||noOwner()||badPair(gv(_tpeSell),gv(_tpeBuy))||yesTran())return;;setPenny(gv(_tpeSell),gv(_tpeBuy));send(null,null,'_setPenny_status');};
const do_setAllow=function(){if(disable()||noOwner())return;;setAllow(gc(_setBA),gc(_setSA),gc(_setTA),gc(_setEA));send(null,null,'_setAllow_status');};
const do_setRole=function(){if(disable()||noModer()||badAddr(gv(_roleTo)))return;;setRole(gv(_roleTo),gv(_roleVal));send(null,null,'_setRegisterLevel_status');};
const do_setTick=function(){if(disable()||noModer()||badAddr(gv(_tickTo)))return;;setTick(gv(_tickTo),gv(_tickVal));send(null,null,'_setRegisterLevel_status');};
const do_setType=function(){if(disable()||noAdmin())return;;setType(getDType(0),gc(_setTR),gc(_setTB),gc(_setTP));send(null,null,'_setType_status');};
const do_setTypePrice=function(){if(disable()||noOwner())return;;setTypePrice(getDType(0),gv(_setPT),gv(_setPE));send(null,null,'_setType_status');};
////////////////////////////////////////////////////////////
const do_setName=function(){if(disable()||noOwner()||userBan())return;;setName(gv(_name));send(null,null,'_setName_status');dv(_name,BLANK);};
const do_setOwner=function(){if(disable()||noOwner()||badAddr(gv(_refex))||userBan())return;;setOwner(gv(_refex));send(null,null,'_setOwner_status');};
const do_changeOwner=function(){if(disable()||noOwner()||badAddr(gv(_owner))||userBan()||badPass())return;;changeOwner(gv(_owner));send(null,null,'_setOwner_status');};
const do_mintPenny=function(){if(disable()||noOwner()||badAddr(gv(_mintTo))||lessVal(gv(_mintVal),0)||userBan()||badPass())return;;mintPenny(gv(_mintTo),gv(_mintVal));send(null,null,'_setup_status');dv(_mintTo,OxOO);;};
const do_pennyPush=function(){if(disable()||noOwner()||badXuts(gv(_pushVal))||notTran())return;;pennyPush(gv(_pushVal));send(null,null,'_setup_status');dv(_pushVal,0);};
const do_pennyTransfer=function(){if(disable()||noOwner()||badAddr(gv(_xutTo))||badXXut(gv(_xutVal))||notTran())return;;pennyTransfer(gv(_xutTo),gv(_xutVal));send(null,null,'_revenue_status');dv(_xutVal,0);};
const do_weiTransfer=function(){if(disable()||noOwner()||badAddr(gv(_ethTo))||badXEth(gv(_ethVal))||userBan())return;;weiTransfer(gv(_ethTo),gv(_ethVal));send(null,null,'_revenue_status');dv(_ethVal,0);};
////////////////////////////////////////////////////////////
const do_transfer=function(){if(disable()||badAddr(gv(_transTo))||badXuts(gv(_transVal))||notTran())return;;transfer(gv(_transTo),gv(_transVal));send(null,'_transfer_hash','_transfer_status');dv(_transTo,OxOO);;};
const do_transfer2xut=function(){if(disable()||badXuts(gv(_transThis))||badXEth(gv(_ethThis))||disSell())return;;sell(gv(_transThis));send(null,'_transfer2xut_hash','_transfer2xut_status');dv(_transThis,0);};
const do_transfer2admin=function(){if(disable()||badXuts(gv(_transVal))||notTran())return;;transfer(gv(_transToAdmin),gv(_transVal));send(null,'_transfer_hash','_transfer_status');};
////////////////////////////////////////////////////////////
const do_sendeth=function(){if(disable()||badAddr(gv(_sendTo))||badEths(gv(_sendVal))||userBan())return;;sendeth(gv(_sendTo),gv(_sendVal),'_sendeth_hash','_sendeth_status');dv(_sendTo,OxOO);;};
const do_sendeth2xut=function(){if(disable()||badEths(gv(_sendThis))||badXXut(gv(_xutThis))||disBuys())return;;buy(gv(_sendThis));send(null,'_sendeth2xut_hash','_sendeth2xut_status');dv(_sendThis,0);};
const do_sendeth2sys=function(){if(disable()||badEths(gv(_sendThis))||badXXut(gv(_xutThis))||disBuys())return;;sendeth2sys(gv(_sendThis),'_sendeth2xut_hash','_sendeth2xut_status');dv(_sendThis,0);};
const do_sendeth2admin=function(){if(disable()||badEths(gv(_sendVal))||userBan())return;;sendeth(gv(_sendToAdmin),gv(_sendVal),'_sendeth_hash','_sendeth_status');};
////////////////////////////////////////////////////////////