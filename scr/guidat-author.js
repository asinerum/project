////////////////////////////////////////////////////////////
const author_buyFromSeller=function(){if(bad_buyFromSeller())return;;;buyFromSeller(gv(_sellerAddress),g2(_sellerPostNum)-1,gn(_sellingNum),gv(_eth2send));send(null,'_buyfrom_hash','_buyfrom_status');};
const author_sellToBuyer=function(){if(bad_sellToBuyer())return;;;sellToBuyer(gv(_buyerAddress),g2(_buyerPostNum)-1,gn(_buyingNum),gv(_xut2send));send(null,'_sellto_hash','_sellto_status');};
////////////////////////////////////////////////////////////
const author_userStopBuy=function(t){t=g2(_buyPostNum);if(bad_userStopBuy(t))return;;;userStopBuy(t-1);send(null,null,'_buying_status');};
const author_userStopSell=function(t){t=g2(_sellPostNum);if(bad_userStopSell(t))return;;;userStopSell(t-1);send(null,null,'_selling_status');};
////////////////////////////////////////////////////////////
const author_userSetBuy=function(){if(bad_userSetBuy())return;;;userSetBuy(gv(_buyrate),gv(_eth2pay));send(null,'_tobuy_hash','_tobuy_status');};
const author_userSetSell=function(){if(bad_userSetSell())return;;;userSetSell(gv(_xut2sell),gv(_sellrate));send(null,'_tosell_hash','_tosell_status');};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const author_setFee=function(){do_setFee('_personal_status');};
const author_regs2sys=function(){do_register(contractAddress,gv(_reglev),'_register_status');};
const author_regs2usr=function(){do_register(gv(_user),gv(_regmem),'_user_status');};
////////////////////////////////////////////////////////////