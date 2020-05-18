////////////////////////////////////////////////////////////
const showLoad=function(div){dw(div,'<img\tsrc="loading.gif"/>');};
const accepted=function(divS){if(confirm(hi_prompt_fee+NEWLINE+gasfee+SPACE+COIN))return(true);dw(divS,CANCELED);return(false);};
////////////////////////////////////////////////////////////
const launchNet=function(nid){if(!nid)nid=hashParam(ARGWNET);selectNet(switchNet(nid));};
const selectNet=function(nid){switchNet(nid);changeNet();startXuteng(network);setStyle('body',networkStyle);setPGwei();};
const switchNet=function(nid,dnid){if(!dnid)dnid=MAINNET;if(XUTENG[nid]){window.network=nid}else{window.network=dnid};return(network);};
const changeNet=function(){contractAddress=XUTENG[network].addr;networkChainId=XUTENG[network].ncid;networkStyle=XUTENG[network].bcls;contractScanner=XUTENG[network].scan+contractAddress;mr('bgxutengscan',contractScanner);};
const getRpcNet=function(){window.rpcServer=gv(_rpcs);if(!window.rpcServer)window.rpcServer=XUTENG[network].rpcs;return(rpcServer);};
const getSender=function(){web3.eth.getAccounts().then((accounts)=>{sender=accounts[0];});};
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
const getDType=function(t){t=gv(_setType);return(t?t:TYPES.token_trading);};
const networkById=function(ncid){Object.keys(XUTENG).forEach(function(key){if(XUTENG[key].ncid==ncid)return(ncid=key);});if(ncid>0)return(LOCALHOST);return(ncid);};
////////////////////////////////////////////////////////////
const showNetwork=function(t){t=BLANK;Object.keys(XUTENG).forEach(function(key){t+='<option'+((network==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});dw(_network,t);};
const showDsModel=function(t){t=BLANK;Object.keys(MODELS).forEach(function(key){t+='<option\tvalue="'+key+'">'+MODELS[key].name+'</option>';});dw(_model,t);};
const showAccount=function(t){t=BLANK;Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+key+'">'+key+'</option>';});dw(_account,t);};
const optnAccount=function(t){t=BLANK;Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+ADDRESSES[key]+'">'+key+':&nbsp;'+ADDRESSES[key]+'</option>';});return(t);};
////////////////////////////////////////////////////////////
const showRole=function(t){t=BLANK;Object.keys(ROLES).forEach(function(key){t+='<option\tvalue="'+ROLES[key]+'">'+key+'</option>';});dw(_roleVal,t);};
const showTick=function(t){t=BLANK;Object.keys(TICKS).forEach(function(key){t+='<option\tvalue="'+TICKS[key]+'">'+key+'</option>';});dw(_tickVal,t);};
const showDTyp=function(t){t=BLANK;Object.keys(TYPES).forEach(function(key){t+='<option\tvalue="'+TYPES[key]+'">'+key+'</option>';});dw(_refType,t);};
const showAccs=function(){dw(_ethTo,accountOptions);dw(_xutTo,accountOptions);dw(_owner,accountOptions);dw(_sendToAdmin,accountOptions);dw(_transToAdmin,accountOptions);};
////////////////////////////////////////////////////////////
const retrAccount=function(t){switchNet(gv(_network));senderId=gv(_account);try{t=getv3key(gv(_password),0);}catch(err){dw('_keystore_status',err.message);alert(hi_alert_data);return(0);};sender=t.address;senderPte=t.privateKey.substr(2);};
const takeAccount=function(){showLoad('_keystore_status');setTimeout(function(){retrAccount(0);dw('_keystore_status',senderId+COLON+NBSP+sender);},2000);};
////////////////////////////////////////////////////////////
const jrecover=function(j){return(srecover(j.message,j.signature));};
const srecover=function(tm,s){try{tm=web3.eth.accounts.recover(tm,s);}catch(err){alert(err.message);return(0);};return(tm);};
const signmess=function(tm,k){try{tm=web3.eth.accounts.sign(tm,HEXINIT+k);}catch(err){alert(err.message);return(0);};return({message:tm.message,signature:tm.signature});};
const signMMsg=function(msg,div,cbf){if(!div)div=funcName();/*signMMsg*/;web3.eth.getAccounts().then((accounts)=>{sender=accounts[0];console.log('message'+COLON+SPACE+msg);console.log('account'+COLON+SPACE+sender);web3.eth.personal.sign(msg,sender,function(err,hexSign){console.log('signature'+COLON+SPACE+hexSign);dv(div,hexSign);if(cbf)cbf(msg,sender,hexSign);});});};
const keystore=function(pw,t){t=Object.assign({},V3KEYSTORE);Object.keys(V3KEYSTORE).forEach(function(key){t[key]=web3.eth.accounts.decrypt(V3KEYSTORE[key],pw);});return(t);};
const getv3key=function(pw,t){t=web3.eth.accounts.decrypt(V3KEYSTORE[senderId],pw);if(t)password=pw;return(t);};
const keyparam=function(pw){netkeys=keystore(pw,0);Object.keys(netkeys).forEach(function(key){accounts[key]=netkeys[key].address;keypairs[netkeys[key].address]=netkeys[key].privateKey.substr(2);});};
////////////////////////////////////////////////////////////
const getAccount=function(t){switchNet(gv(_network));senderId=gv(_account);try{t=gettextkey(gv(_password),0);}catch(err){dw('_keystore_status',err.message);alert(hi_alert_data);return(0);};sender=t.address;senderPte=t.privateKey.substr(2);dw('_keystore_status','Address'+COLON+NBSP+sender);return(t);};
const newAccount=function(pw,divNA,divNP,divKS,t){if(!loRegex.test(pw))return(alert(hi_prompt_chk));t=web3.eth.accounts.create(web3.utils.randomHex(32));db(divNA,t.address);db(divNP,t.privateKey.substr(2));try{dv(divKS,JSON.stringify(web3.eth.accounts.encrypt(t.privateKey,pw)).replace(/\s/g,BLANK));}catch(err){alert(hi_alert_data);return(0);}return(t);};
const oldAccount=function(pw,divOA,divOP,divKS,t){if(!loRegex.test(pw))return(alert(hi_prompt_chk));try{t=web3.eth.accounts.encrypt(gv(divOP),pw);db(divOA,web3.eth.accounts.decrypt(t,pw).address);}catch(err){alert(hi_alert_data);return(0);}dv(divOP,BLANK);dv(divKS,JSON.stringify(t).replace(/\s/g,BLANK));return(t);};
const gettextkey=function(pw,t){t=gv(_keystore);if(!t)return(getv3key(pw,0));t=web3.eth.accounts.decrypt(JSON.parse(t),pw);if(!t.address)return(0);password=pw;return(t);};
////////////////////////////////////////////////////////////
const showDefault=function(){$(document).ready(function(){showNetwork(0);showAccount(0);showMaxGas(0);showTxGwei(0);showRole(0);showTick(0);showDTyp(0);showAccs();});};
const stopSession=function(mis){setInterval(function(){senderPte=BLANK;password=BLANK;dv(_password,SYMBOL);},mis);};
const statsXuteng=function(mis){setInterval(function(){getData(sender,getDType(0));},mis);};
const statsSender=function(mis){setInterval(function(){getSenderData();},mis);};
////////////////////////////////////////////////////////////
const resetXuteng=function(){contractAddress=XUTENG[network].addr;window.xuteng=(new web3.eth.Contract(ABIXUTENG,contractAddress));};
const web3Mainnet=function(){web3.eth.net.getNetworkType().then(function(net){if(net=='main'){switchNet(MAINNET);alert(hi_alert_ismainnet);}else{switchNet(net,LOCALHOST);alert(hi_alert_nomainnet);}networkChainId=XUTENG[network].ncid;resetXuteng();});getSender();};
const metaMainnet=function(){ethereum.autoRefreshOnNetworkChange=false;sender=ethereum.selectedAddress;if(!sender)getSender();if(ethereum.networkVersion!=1)alert(hi_alert_nomainnet);switchNet(networkById(ethereum.networkVersion));;;ethereum.on('networkChanged',function(ncid){console.log(ncid);switchNet(networkById(ncid));resetXuteng();console.log(network);networkChainId=ncid;if(ncid!=1)alert(hi_alert_nomainnet);});ethereum.on('accountsChanged',function(accounts){sender=accounts[0];});window.addEventListener('load',async()=>{try{await(ethereum.enable());}catch(err){alert(hi_alert_accdenied);}});};
const getProvider=function(){if(window.ethereum){window.web3=(new Web3(ethereum));metaMainnet();}else{if(window.web3){window.web3=(new Web3(web3.currentProvider));web3Mainnet();}else{startXuteng(MAINNET);return(alert(hi_alert_metamasks));}};resetXuteng();};
const startXuteng=function(nid){if(nid){switchNet(nid);window.web3=(new Web3(new Web3.providers.HttpProvider(getRpcNet())));resetXuteng();}else{getProvider();}};
////////////////////////////////////////////////////////////