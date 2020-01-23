////////////////////////////////////////////////////////////
const promm_sendeth2xut=function(){if(bad_sendeth2xut())return;;;mm_buy(gv(_sendThis));;dv(_sendThis,0);};
const promm_transfer2xut=function(){if(bad_transfer2xut())return;;;mm_sell(gv(_transThis));;dv(_transThis,0);};
////////////////////////////////////////////////////////////
const promm_buyFromSeller=function(){if(bad_buyFromSeller())return;;;mm_buyFromSeller(gv(_sellerAddress),g2(_sellerPostNum)-1,gn(_sellingNum),gv(_eth2send));;};
const promm_sellToBuyer=function(){if(bad_sellToBuyer())return;;;mm_sellToBuyer(gv(_buyerAddress),g2(_buyerPostNum)-1,gn(_buyingNum),gv(_xut2send));;};
////////////////////////////////////////////////////////////
const promm_userStopBuy=function(t){t=g2(_buyPostNum);if(bad_userStopBuy(t))return;;;mm_userStopBuy(t-1);;};
const promm_userStopSell=function(t){t=g2(_sellPostNum);if(bad_userStopSell(t))return;;;mm_userStopSell(t-1);;};
////////////////////////////////////////////////////////////
const promm_userSetBuy=function(){if(bad_userSetBuy())return;;;mm_userSetBuy(gv(_buyrate),gv(_eth2pay));;};
const promm_userSetSell=function(){if(bad_userSetSell())return;;;mm_userSetSell(gv(_xut2sell),gv(_sellrate));;};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const promm_setFee=function(){if(bad_setFee())return;;;mm_setFee(gv(_levels));;};
const promm_regs2sys=function(to,xut){to=contractAddress;xut=gv(_reglev);if(bad_register(to,xut))return;;;mm_transferFor(to,xut,REFREG);;};
const promm_regs2usr=function(to,xut){to=gv(_user);xut=gv(_regmem);if(bad_register(to,xut))return;;;mm_transferFor(to,xut,REFREG);;};
////////////////////////////////////////////////////////////