////////////////////////////////////////////////////////////
const getUserOffer=function(ua,n){if(badAddr(ua))return;;userSelling(ua,n,_sellingDone,_sellingTpe,_sellingVol,_sellingNum);};
const getUserRequest=function(ua,n){if(badAddr(ua))return;;userBuying(ua,n,_buyingDone,_buyingTpe,_buyingVol,_buyingNum);};
////////////////////////////////////////////////////////////
const getOwnOffer=function(n){userSelling(sender,n,_sellDone,_sellTpe,_sellVol,_sellNum);};
const getOwnRequest=function(n){userBuying(sender,n,_buyDone,_buyTpe,_buyVol,_buyNum);};
////////////////////////////////////////////////////////////
const userBuying=function(ua,n,divD,divP,divV,divN){xuteng.methods.userBuying(ua,n-1).call(function(err,result){if(!result||err){alert(hi_alert_data);result=POSTITEM;}dw(divD,w2s(result.traded));dw(divP,w2s(result.ppe));dw(divV,w2s(result.trading));dw(divN,n2s(result.count));});};
const userSelling=function(ua,n,divD,divP,divV,divN){xuteng.methods.userSelling(ua,n-1).call(function(err,result){if(!result||err){alert(hi_alert_data);result=POSTITEM;}dw(divD,w2s(result.traded));dw(divP,w2s(result.ppe));dw(divV,w2s(result.trading));dw(divN,n2s(result.count));});};
////////////////////////////////////////////////////////////