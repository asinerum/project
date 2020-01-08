////////////////////////////////////////////////////////////
const showLoad=function(div){dw(div,'<img\tsrc="loading.gif"/>');};
const accepted=function(divS){if(confirm(hi_prompt_fee+NEWLINE+gasfee+SPACE+COIN))return(true);dw(divS,CANCELED);return(false);};
const bodyStyle=function(nid){network=nid;changeNet();startXuteng(network);setStyle('body',networkStyle);};
const changeNet=function(){contractAddress=XUTENG[network][_addr];networkChainId=XUTENG[network][_ncid];networkStyle=XUTENG[network][_bcls];contractScanner=XUTENG[network][_scan]+contractAddress;mr('bgxutengscan',contractScanner);};
////////////////////////////////////////////////////////////
const wrdExpt=function(v){userExpt=v;if(!v||v==0)return(HYPHEN);return(fromDate(v));};
const wrdRegs=function(v){userRegs=v;v=wrd(REGIS,userRegs);if(!v)return(HYPHEN);return(v);};
const wrdRole=function(v){userRole=v;v=wrd(ROLES,userRole);if(!v)return(HYPHEN);return(v);};
const wrdTick=function(v){userTick=v;v=wrd(TICKS,userTick);if(!v)return(HYPHEN);return(v);};
const wrdType=function(v){contType=v;v=wrd(TYPES,contType);if(!v)return(contType);return(v);};
////////////////////////////////////////////////////////////
const showMaxGas=function(t){t=BLANK;Object.keys(MAXGASES).forEach(function(key){t+='<option\tvalue="'+MAXGASES[key]+'">'+key+':&nbsp;'+n2s(MAXGASES[key])+'</option>';});dw(_maxgas,t);};
const showTxGwei=function(t){t=BLANK;Object.keys(TXGWEIS).forEach(function(key){t+='<option\tvalue="'+TXGWEIS[key]+'">'+key+':&nbsp;'+TXGWEIS[key]+'&nbsp;GWEI</option>';});dw(_txgwei,t);};
////////////////////////////////////////////////////////////
const showNetwork=function(t){t=BLANK;Object.keys(XUTENG).forEach(function(key){t+='<option\tvalue="'+key+'">'+key+'</option>';});dw(_network,t);};
const showAccount=function(t){t=BLANK;Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+key+'">'+key+'</option>';});dw(_account,t);};
const optnAccount=function(t){t=BLANK;Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+ADDRESSES[key]+'">'+key+':&nbsp;'+ADDRESSES[key]+'</option>';});return(t);};
const retrAccount=function(t){network=gv(_network);senderId=gv(_account);try{t=getv3key(gv(_password),0);}catch(err){dw('_keystore_status',err.message);alert(hi_alert_data);return(0);};sender=t[_address];senderPte=t[_privateKey].substr(2);};
const takeAccount=function(){showLoad('_keystore_status');setTimeout(function(){retrAccount(0);dw('_keystore_status',senderId+':&nbsp;'+sender);},2000);};
////////////////////////////////////////////////////////////
const getDType=function(t){t=gv(_setType);return(t?t:TYPES['token_trading']);};
const showRole=function(t){t=BLANK;Object.keys(ROLES).forEach(function(key){t+='<option\tvalue="'+ROLES[key]+'">'+key+'</option>';});dw(_roleVal,t);};
const showTick=function(t){t=BLANK;Object.keys(TICKS).forEach(function(key){t+='<option\tvalue="'+TICKS[key]+'">'+key+'</option>';});dw(_tickVal,t);};
const showDTyp=function(t){t=BLANK;Object.keys(TYPES).forEach(function(key){t+='<option\tvalue="'+TYPES[key]+'">'+key+'</option>';});dw(_refType,t);};
const showAccs=function(){dw(_ethTo,accountOptions);dw(_xutTo,accountOptions);dw(_owner,accountOptions);dw(_sendToAdmin,accountOptions);dw(_transToAdmin,accountOptions);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const jrecover=function(j){return(srecover(j[MESSAGE],j[SIGNATURE]));};
const srecover=function(tm,s){try{tm=web3.eth.accounts.recover(tm,s);}catch(err){alert(err.message);return(0);};return(tm);};
const signmess=function(tm,k){try{tm=web3.eth.accounts.sign(tm,HEXINIT+k);}catch(err){alert(err.message);return(0);};return({message:tm[MESSAGE],signature:tm[SIGNATURE]});};
const keystore=function(pw,t){t=Object.assign({},V3KEYSTORE);Object.keys(V3KEYSTORE).forEach(function(key){t[key]=web3.eth.accounts.decrypt(V3KEYSTORE[key],pw);});return(t);};
const getv3key=function(pw,t){t=web3.eth.accounts.decrypt(V3KEYSTORE[senderId],pw);if(t)password=pw;return(t);};
const keyparam=function(pw){netkeys=keystore(pw,0);Object.keys(netkeys).forEach(function(key){accounts[key]=netkeys[key][_address];keypairs[netkeys[key][_address]]=netkeys[key][_privateKey].substr(2);});};
////////////////////////////////////////////////////////////
const getAccount=function(t){network=gv(_network);senderId=gv(_account);try{t=gettextkey(gv(_password),0);}catch(err){dw('_keystore_status',err.message);alert(hi_alert_data);return(0);};sender=t[_address];senderPte=t[_privateKey].substr(2);dw('_keystore_status','ADDRESS:&nbsp;'+sender);return(t);};
const newAccount=function(pw,divNA,divNP,divKS,t){if(!loRegex.test(pw))return(alert(hi_prompt_chk));t=web3.eth.accounts.create(web3.utils.randomHex(32));db(divNA,t[_address]);db(divNP,t[_privateKey].substr(2));try{dv(divKS,JSON.stringify(web3.eth.accounts.encrypt(t[_privateKey],pw)).replace(/\s/g,BLANK));}catch(err){alert(hi_alert_data);return(0);}return(t);};
const oldAccount=function(pw,divOA,divOP,divKS,t){if(!loRegex.test(pw))return(alert(hi_prompt_chk));try{t=web3.eth.accounts.encrypt(gv(divOP),pw);db(divOA,web3.eth.accounts.decrypt(t,pw)[_address]);}catch(err){alert(hi_alert_data);return(0);}dv(divOP,BLANK);dv(divKS,JSON.stringify(t).replace(/\s/g,BLANK));return(t);};
const gettextkey=function(pw,t){t=gv(_keystore);if(!t)return(getv3key(pw,0));t=web3.eth.accounts.decrypt(JSON.parse(t),pw);if(!t[_address])return(0);password=pw;return(t);};
////////////////////////////////////////////////////////////
const showDefault=function(){showNetwork(0);showAccount(0);showMaxGas(0);showTxGwei(0);showRole(0);showTick(0);showDTyp(0);showAccs();};
const stopSession=function(mis){setInterval(function(){senderPte=BLANK;password=BLANK;dv(_password,SYMBOL);},mis);};
const statsXuteng=function(mis){setInterval(function(){getData(sender,getDType(0));},mis);};
const startXuteng=function(nid){web3=new Web3(new Web3.providers.HttpProvider(XUTENG[nid][_rpcs]));xuteng=new web3.eth.Contract(ABIXUTENG,XUTENG[nid][_addr]);};
////////////////////////////////////////////////////////////