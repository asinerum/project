////////////////////////////////////////////////////////////
const author_buyFromSeller=function(){if(disable()||userBan()||noneReg()||notBuys()||badAddr(gv(_sellerAddress))||badEths(gv(_eth2send))||badVals(gv(_xut2gain),gn(_sellingVol)))return;;buyFromSeller(gv(_sellerAddress),g2(_sellerPostNum)-1,gn(_sellingNum),gv(_eth2send));send(null,'_buy1_hash','_buy1_status');};
const author_sellToBuyer=function(){if(disable()||userBan()||noneReg()||notSell()||badAddr(gv(_buyerAddress))||badXuts(gv(_xut2send))||badVals(gv(_eth2gain),gn(_buyingVol)))return;;sellToBuyer(gv(_buyerAddress),g2(_buyerPostNum)-1,gn(_buyingNum),gv(_xut2send));send(null,'_sell1_hash','_sell1_status');};
////////////////////////////////////////////////////////////
const author_userStopBuy=function(t){t=g2(_buyPostNum);if(disable()||userBan()||noIBuys(t))return;;userStopBuy(t-1);send(null,null,'_buying_status');};
const author_userStopSell=function(t){t=g2(_sellPostNum);if(disable()||userBan()||noISell(t))return;;userStopSell(t-1);send(null,null,'_selling_status');};
////////////////////////////////////////////////////////////
const author_userSetBuy=function(){if(disable()||userBan()||noneReg()||notBuys()||badEths(gv(_eth2pay)))return;;userSetBuy(gv(_buyrate),gv(_eth2pay));send(null,'_tobuy_hash','_tobuy_status');};
const author_userSetSell=function(){if(disable()||userBan()||noneReg()||notSell()||badXuts(gv(_xut2sell))||badNumb(gv(_eth2recv)))return;;userSetSell(gv(_xut2sell),gv(_sellrate));send(null,'_tosell_hash','_tosell_status');};
////////////////////////////////////////////////////////////
const author_setFee=function(){do_setFee('_personal_status');};
const author_regs2sys=function(){do_register(XUTENG[network][_addr],gv(_reglev),'_register_status');};
const author_regs2usr=function(){do_register(gv(_user),gv(_regmem),'_personal_user_status');};
////////////////////////////////////////////////////////////