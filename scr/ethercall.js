////////////////////////////////////////////////////////////
const xutengCall=function(method,args=[],status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);xuteng.methods[method].apply(this,args).call().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const xutengSend=function(method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);xuteng.methods[method].apply(this,args).send(mmsender(eth)).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const xutengRaws=function(method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log){showLoad(status);sendingFunc=xuteng.methods[method].apply(this,args);sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;txsend(0,out,status,cbf);};
////////////////////////////////////////////////////////////
const getCoin=function(ua,div=TEST){web3.eth.getBalance(ua,function(err,result){if(err)return;result=w2s(result);if(ua==sender)userEth=result;dw(div,result);});};
const getData=function(ua,dt){contType=dt;;xuteng.methods.getData(ua,dt).call((err,result)=>{if(err)return;showData(result);cloneData(result);cloneBalance(result);})};
const getUserData=function(ua,dt,cbf){if(badAddr(ua))return;;xuteng.methods.getData(ua,dt).call((err,result)=>{if(result)showUserData(result);if(cbf)cbf(err,result);})};
const getAliasData=function(ua,dt,cb1){if(avalid(ua)){getUserData(ua,dt);return(cb1(ua));}xutengUserRedirect(ua).then(ua=>{if(ua!=ZEROADDR)getUserData(ua,dt);cb1(ua);});};
////////////////////////////////////////////////////////////
const showData=function(result){
dw('_symbol',(SYMBOL));
dw('_decimals',(DECIMALS));
dw('_name',(result.xname));
dw('_owner',(result.xowner));
dc('_buyAllowed',(result.utrset[BUYALLOWED]));
dc('_exchangeAllowed',(result.utrset[EXCHANGEALLOWED]));
dc('_sellAllowed',(result.utrset[SELLALLOWED]));
dc('_transferAllowed',(result.utrset[TRANSFERALLOWED]));
dc('_typeBanned',(result.typset[TYPEBANNED]));
dc('_typePublic',(result.typset[TYPEPUBLIC]));
dc('_typeRegReq',(result.typset[TYPEREGREQ]));
dw('_buyingCount',n2s(result.utrlen[BUYINGCOUNT]));
dw('_exchangeCount',n2s(result.utrlen[EXCHANGECOUNT]));
dw('_sellingCount',n2s(result.utrlen[SELLINGCOUNT]));
dw('_pteDocs',n2s(result.objlen[CONTENTSOF]));
dw('_pteMsgs',n2s(result.objlen[HASHESOF]));
dw('_pubDocs',n2s(result.objlen[PUBSOF]));
dw('_typDocs',n2s(result.objlen[TYPEDCONTENTSOF]));
dw('_pteBuys',n2s(result.objlen[USERBUYING]));
dw('_pteSell',n2s(result.objlen[USERSELLING]));
dw('_pteJoin',n2s(result.objlen[JOINSOF]));
dw('_pteUser',n2s(result.objlen[USERSOF]));
dw('_adminsCount',n2s(result.admlen[ADMINLIST]));
dw('_sysRegCount',n2s(result.admlen[MEMBERSOFXUT]));
dw('_sysRnkCount',n2s(result.admlen[TICKERLIST]));
dw('_pteRegCount',n2s(result.admlen[MEMBERSOFUSER]));
dw('_pteExpt',wrdExpt(result.admlen[MEMBERSHIPOF]));
dw('_pteRole',wrdRole(result.admset[ADMINS]));
dw('_pteLevl',wrdRegs(result.admset[ANOSMEMBERSHIPOF]));
dw('_pteTick',wrdTick(result.admset[TICKERS]));
db('_buyAtTpe',w2s(result.prices[BUYATPPE]));
db('_sellAtTpe',w2s(result.prices[SELLATPPE]));
db('_typePIT',w2s(result.prices[TYPEPIP]));
db('_typePIE',w2s(result.prices[TYPEPIW]));
db('_sysFee',w2s(result.prices[MEMBERFEEOFXUT]));
db('_pteFee',w2s(result.prices[MEMBERFEEOFUSER]));
dw('_ethers',w2s(result.objdat[ETHBALANCE]));
dw('_xuteng',w2s(result.objdat[BALANCEOF]));
dw('_income',w2s(result.objdat[INCOMEOF]));
dw('_minted',w2s(result.objdat[MINTEDOF]));
dw('_ethersOfXut',w2s(result.xutdat[ETHBALANCEOFXUT]));
dw('_xutengOfXut',w2s(result.xutdat[BALANCEOFXUT]));
dw('_totalSupply',w2s(result.xutdat[TOTALSUPPLY]));};
////////////////////////////////////////////////////////////
const showUserData=function(result){
dw('_pteDocs_user',n2s(result.objlen[CONTENTSOF]));
dw('_pteMsgs_user',n2s(result.objlen[HASHESOF]));
dw('_pubDocs_user',n2s(result.objlen[PUBSOF]));
dw('_typDocs_user',n2s(result.objlen[TYPEDCONTENTSOF]));
dw('_pteBuys_user',n2s(result.objlen[USERBUYING]));
dw('_pteSell_user',n2s(result.objlen[USERSELLING]));
dw('_pteRole_user',wrdRole(result.admset[ADMINS]));
dw('_pteLevl_user',wrdRegs(result.admset[ANOSMEMBERSHIPOF]));
dw('_pteTick_user',wrdTick(result.admset[TICKERS]));
dw('_ethers_user',w2s(result.objdat[ETHBALANCE]));
dw('_xuteng_user',w2s(result.objdat[BALANCEOF]));
dw('_income_user',w2s(result.objdat[INCOMEOF]));
dw('_minted_user',w2s(result.objdat[MINTEDOF]));
dw('_pteRegCount_user',n2s(result.admlen[MEMBERSOFUSER]));
db('_pteFee_user',w2s(result.prices[MEMBERFEEOFUSER]));};
////////////////////////////////////////////////////////////
const cloneData=function(result){
mc('class_buyAllowed',(result.utrset[BUYALLOWED]));
mc('class_exchangeAllowed',(result.utrset[EXCHANGEALLOWED]));
mc('class_sellAllowed',(result.utrset[SELLALLOWED]));
mc('class_transferAllowed',(result.utrset[TRANSFERALLOWED]));
mc('class_typeBanned',(result.typset[TYPEBANNED]));
mc('class_typePublic',(result.typset[TYPEPUBLIC]));
mc('class_typeRegReq',(result.typset[TYPEREGREQ]));
mw('class_ethersOfXut',w2s(result.xutdat[ETHBALANCEOFXUT]));
mw('class_xutengOfXut',w2s(result.xutdat[BALANCEOFXUT]));
mw('class_ethers',w2s(result.objdat[ETHBALANCE]));
mw('class_xuteng',w2s(result.objdat[BALANCEOF]));
mw('class_income',w2s(result.objdat[INCOMEOF]));
mw('class_minted',w2s(result.objdat[MINTEDOF]));
mw('class_pteBuys',n2s(result.objlen[USERBUYING]));
mw('class_pteSell',n2s(result.objlen[USERSELLING]));
mw('class_pteLevl',wrdRegs(result.admset[ANOSMEMBERSHIPOF]));
mw('class_buyAtTpe',w2s(result.prices[BUYATPPE]));
mw('class_sellAtTpe',w2s(result.prices[SELLATPPE]));
mw('class_typePIT',w2s(result.prices[TYPEPIP]));
mw('class_typePIE',w2s(result.prices[TYPEPIW]));
mw('class_sysFee',w2s(result.prices[MEMBERFEEOFXUT]));
mw('class_pteFee',w2s(result.prices[MEMBERFEEOFUSER]));};
////////////////////////////////////////////////////////////
const cloneBalance=function(result){
buyTpe=w2s(result.prices[BUYATPPE]);
sellTpe=w2s(result.prices[SELLATPPE]);
typePriceXut=w2s(result.prices[TYPEPIP]);
typePriceEth=w2s(result.prices[TYPEPIW]);
sysRegFee=w2s(result.prices[MEMBERFEEOFXUT]);
pteRegFee=w2s(result.prices[MEMBERFEEOFUSER]);
userEth=w2s(result.objdat[ETHBALANCE]);
userXut=w2s(result.objdat[BALANCEOF]);
userBuysCount=result.objlen[USERBUYING];
userSellCount=result.objlen[USERSELLING];
userReg=result.typset[CHECKREGISTER];///
buyAllowed=result.utrset[BUYALLOWED];
exchangeAllowed=result.utrset[EXCHANGEALLOWED];
sellAllowed=result.utrset[SELLALLOWED];
transferAllowed=result.utrset[TRANSFERALLOWED];
xutEth=w2s(result.xutdat[ETHBALANCEOFXUT]);
xutXut=w2s(result.xutdat[BALANCEOFXUT]);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const ethersOf=function(ua,div=TEST){web3.eth.getBalance(ua,function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
const xutengOf=function(ua,div=TEST){xuteng.methods.balanceOf(ua).call(function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
const incomeOf=function(ua,div=TEST){xuteng.methods.incomeOf(ua).call(function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
const mintedOf=function(ua,div=TEST){xuteng.methods.mintedOf(ua).call(function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
////////////////////////////////////////////////////////////