////////////////////////////////////////////////////////////
const author_buyFromSeller=function(out='_buyfrom_hash',status='_buyfrom_status'){if(bad_buyFromSeller())return;;;buyFromSeller(gv(_sellerAddress),g2(_sellerPostNum)-1,gn(_sellingNum),gv(_eth2send));send(null,out,status);};
const author_sellToBuyer=function(out='_sellto_hash',status='_sellto_status'){if(bad_sellToBuyer())return;;;sellToBuyer(gv(_buyerAddress),g2(_buyerPostNum)-1,gn(_buyingNum),gv(_xut2send));send(null,out,status);};
////////////////////////////////////////////////////////////
const author_userStopBuy=function(out='_hash',status='_buying_status',t=0){t=g2(_buyPostNum);if(bad_userStopBuy(t))return;;;userStopBuy(t-1);send(null,out,status);};
const author_userStopSell=function(out='_hash',status='_selling_status',t=0){t=g2(_sellPostNum);if(bad_userStopSell(t))return;;;userStopSell(t-1);send(null,out,status);};
////////////////////////////////////////////////////////////
const author_userSetBuy=function(out='_tobuy_hash',status='_tobuy_status'){if(bad_userSetBuy())return;;;userSetBuy(gv(_buyrate),gv(_eth2pay));send(null,out,status);};
const author_userSetSell=function(out='_tosell_hash',status='_tosell_status'){if(bad_userSetSell())return;;;userSetSell(gv(_xut2sell),gv(_sellrate));send(null,out,status);};
////////////////////////////////////////////////////////////
const author_setFee=function(status='_personal_status'){do_setFee(status);};
const author_regs2sys=function(status='_register_status'){do_register(contractAddress,gv(_reglev),status);};
const author_regs2usr=function(status='_user_status'){do_register(gv(_user),gv(_regmem),status);};
////////////////////////////////////////////////////////////