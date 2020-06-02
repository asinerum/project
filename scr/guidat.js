////////////////////////////////////////////////////////////
const do_signmess=function(t){if(noLogin())return;;dv(_signature,BLANK);t=signmess(gv(_smessage),senderPte);if(!t)return;dv(_signature,t[SIGNATURE]);};
const do_smverify=function(t){if(badAddr(gv(_signatory)))return;;t=srecover(gv(_smessage),gv(_signature));if(t==gv(_signatory)){dw(_accverify,OK);}else{ww(_accverify,ERROR);}};
const do_srecover=function(t){dw(_accverify,BLANK);t=srecover(gv(_smessage),gv(_signature));if(!t)return;dw(_accverify,t);};
////////////////////////////////////////////////////////////
const do_register=function(to,xut,div='_register_status'){if(bad_register(to,xut))return;;;transferFor(to,xut,REFREG);send(null,null,div);};
const do_setFee=function(div='_setRegisterLevel_status'){if(bad_setFee())return;;;setFee(gv(_levels));send(null,null,div);};
////////////////////////////////////////////////////////////
const do_setPenny=function(div='_setPenny_status'){if(bad_setPenny())return;;;setPenny(gv(_tpeSell),gv(_tpeBuy));send(null,null,div);};
const do_setAllow=function(div='_setAllow_status'){if(bad_setAllow())return;;;setAllow(gc(_setBA),gc(_setSA),gc(_setTA),gc(_setEA));send(null,null,div);};
const do_setRole=function(div='_setRegisterLevel_status'){if(bad_setRole())return;;;setRole(gv(_roleTo),gv(_roleVal));send(null,null,div);};
const do_setTick=function(div='_setRegisterLevel_status'){if(bad_setTick())return;;;setTick(gv(_tickTo),gv(_tickVal));send(null,null,div);};
const do_setType=function(div='_setType_status'){if(bad_setType())return;;;setType(getDType(0),gc(_setTR),gc(_setTB),gc(_setTP));send(null,null,div);};
const do_setTypePrice=function(div='_setType_status'){if(bad_setTypePrice())return;;;setTypePrice(getDType(0),gv(_setPT),gv(_setPE));send(null,null,div);};
////////////////////////////////////////////////////////////
const do_setName=function(div='_setName_status'){if(bad_setName())return;;;setName(gv(_name));send(null,null,div);dv(_name,BLANK);};
const do_setOwner=function(div='_setOwner_status'){if(bad_setOwner())return;;;setOwner(gv(_refex));send(null,null,div);};
const do_changeOwner=function(div='_setOwner_status'){if(bad_changeOwner())return;;;changeOwner(gv(_owner));send(null,null,div);};
const do_mintPenny=function(div='_setup_status'){if(bad_mintPenny())return;;;mintPenny(gv(_mintTo),gv(_mintVal));send(null,null,div);dv(_mintTo,OxOO);;};
const do_pennyPush=function(div='_setup_status'){if(bad_pennyPush())return;;;pennyPush(gv(_pushVal));send(null,null,div);dv(_pushVal,0);};
const do_pennyTransfer=function(div='_revenue_status'){if(bad_pennyTransfer())return;;;pennyTransfer(gv(_xutTo),gv(_xutVal));send(null,null,div);dv(_xutVal,0);};
const do_weiTransfer=function(div='_revenue_status'){if(bad_weiTransfer())return;;;weiTransfer(gv(_ethTo),gv(_ethVal));send(null,null,div);dv(_ethVal,0);};
////////////////////////////////////////////////////////////
const do_transfer=function(out='_transfer_hash',status='_transfer_status'){if(bad_transfer())return;;;transfer(gv(_transTo),gv(_transVal));send(null,out,status);dv(_transTo,OxOO);;};
const do_transfer2xut=function(out='_transfer2xut_hash',status='_transfer2xut_status'){if(bad_transfer2xut())return;;;sell(gv(_transThis));send(null,out,status);dv(_transThis,0);};
const do_transfer2admin=function(out='_transfer_hash',status='_transfer_status'){if(bad_transfer2admin())return;;;transfer(gv(_transToAdmin),gv(_transVal));send(null,out,status);};
////////////////////////////////////////////////////////////
const do_sendeth=function(out='_sendeth_hash',status='_sendeth_status'){if(bad_sendeth())return;;;sendeth(gv(_sendTo),gv(_sendVal),out,status);dv(_sendTo,OxOO);;};
const do_sendeth2admin=function(out='_sendeth_hash',status='_sendeth_status'){if(bad_sendeth2admin())return;;;sendeth(gv(_sendToAdmin),gv(_sendVal),out,status);};
////////////////////////////////////////////////////////////
const do_sendeth2xut=function(out='_sendeth2xut_hash',status='_sendeth2xut_status'){if(bad_sendeth2xut())return;;;buy(gv(_sendThis));send(null,out,status);dv(_sendThis,0);};
const do_sendeth2sys=function(out='_sendeth2xut_hash',status='_sendeth2xut_status'){if(bad_sendeth2sys())return;;;sendeth2sys(gv(_sendThis),out,status);dv(_sendThis,0);};
////////////////////////////////////////////////////////////