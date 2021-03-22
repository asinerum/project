////////////////////////////////////////////////////////////
const showOkay=function(div=TEST){dw(div,OK);};
const showError=function(div=TEST){dw(div,ERROR);};
const showCancel=function(div=TEST){dw(div,CANCELED);};
const showLoad=function(div=TEST){dw(div,'<img\tsrc="https://cdn.jsdelivr.net/gh/asinerum/project/loading.gif"/>');};
////////////////////////////////////////////////////////////
const netStyle=function(){networkStyle=CONTRACT[network].bcls;setStyle('body',networkStyle);};
const accepted=function(divS){if(confirm(hi_prompt_fee+NEWLINE+gasfee+SPACE+COIN))return(true);dw(divS,CANCELED);return(false);};
////////////////////////////////////////////////////////////
const launchRpc=function(rpc,nid=MAINNET,func=launchNet){CONTRACT[nid].rpcs=rpc;func(nid);gasPGwei((e,gwei)=>{if(e||!gwei)console.error('RPC');});};
const launchNet=function(nid){if(!nid)nid=hashParam(ARGWNET);selectNet(nid);};/*selectNet:WithInputs*/
const selectNet=function(nid){switchNet(nid);startXuteng(network);};/*LoadNetworkParamsAndConnectRPC*/
const chooseNet=function(nid){switchNet(nid);window.web3=_Web3();};/*LoadNetworkParamsAndPureWeb3Lib*/
const switchBtc=function(nid,dnid){if(!dnid)dnid=BITCOIN;if(BXCHAINS[nid]){window.network=nid}else{window.network=dnid};window.btcnet=network;return(network);};
const switchNet=function(nid,dnid){if(!dnid)dnid=MAINNET;if(EXCHAINS[nid]){window.network=nid}else{window.network=dnid};netStyle();changeNet();showCoin();return(network);};/*LoadNetworkNameAndPageLayout*/
const changeNet=function(){contractAddress=CONTRACT[network].addr;networkChainId=CONTRACT[network].ncid;networkStyle=CONTRACT[network].bcls;contractScanner=CONTRACT[network].scan+contractAddress;mr('bgxutengscan',contractScanner);};/*LoadGlobalVarsOnly*/
const getRpcNet=function(){window.rpcServer=gv(_rpcs);if(!window.rpcServer)window.rpcServer=CONTRACT[network].rpcs;return(rpcServer);};/*UpdateNewRPCEndpoint*/
const getSender=function(){web3.eth.getAccounts().then((accounts)=>{sender=accounts[0];});};/*UpdateUserWalletAddress*/
const swapChain=function(cid){CONTRACT[MAINNET].ncid=cid;networkChainId=cid;};/*UpdateBlockchainIdOnly*/
const swapBtcV2=function(cid=BITCOIN){if(window.newaccount){if(cid==BITCOIN){sender=newaccount.btc;senderPte=newaccount.key;}else{if(newaccount[cid]){sender=newaccount[cid].btc;senderPte=newaccount[cid].key;}}};btcWallet(cid);db('change',sender);db('exp_btc',sender);};
const swapBtcId=function(cid=BITCOIN,k){if(window.newaccount&&BXCHAINS[cid]){k=_ECKey(window.newaccount.hex);k.setCompressed(true);Bitcoin.Address.networkVersion=BXCHAINS[cid].version;Bitcoin.ECKey.privateKeyPrefix=BXCHAINS[cid].pkprefix;sender=k.getBitcoinAddress();senderPte=k.getBitcoinWalletImportFormat();};btcWallet(cid);db('change',sender);db('exp_btc',sender);};
const btcWallet=function(cid=network){if(window.newaccount){try{newaccount.wallet=bitcoin.ECPair.fromWIF(newaccount.key)}catch(e){return(newaccount.wallet=null)};newaccount.wallet.network=bitcoin.networks[cid];if(!newaccount.wallet.network)return(newaccount.wallet=null);newaccount.btcpair=getBtcKey(newaccount.wallet);sender=newaccount.btcpair.btc;senderPte=newaccount.btcpair.key;}};
const getBtcKey=function(wallet=newaccount.wallet){return({btc:bitcoin.payments.p2pkh({pubkey:wallet.publicKey,network:wallet.network}).address,key:wallet.toWIF()});};
////////////////////////////////////////////////////////////
const wrdExpt=function(v){userExpt=v;if(!v||v==0)return(HYPHEN);return(fromDate(v));};
const wrdRegs=function(v){userRegs=v;v=wrd(REGIS,userRegs);if(!v)return(HYPHEN);return(v);};
const wrdRole=function(v){userRole=v;v=wrd(ROLES,userRole);if(!v)return(HYPHEN);return(v);};
const wrdTick=function(v){userTick=v;v=wrd(TICKS,userTick);if(!v)return(HYPHEN);return(v);};
const wrdType=function(v){contType=v;v=wrd(TYPES,contType);if(!v)return(contType);return(v);};
////////////////////////////////////////////////////////////
const showMaxGas=function(t=BLANK){Object.keys(MAXGASES).forEach(function(key){t+='<option\tvalue="'+MAXGASES[key]+'">'+key+':&nbsp;'+n2s(MAXGASES[key])+'</option>';});console.log(t);dw(_maxgas,t);};
const showTxGwei=function(t=BLANK){Object.keys(TXGWEIS).forEach(function(key){t+='<option\tvalue="'+TXGWEIS[key]+'">'+key+':&nbsp;'+TXGWEIS[key]+'&nbsp;GWEI</option>';});console.log(t);dw(_txgwei,t);};
////////////////////////////////////////////////////////////
const getDocType=function(t){t=gv(_setType);return(t?t:TYPES.token_trading);};
const id2network=function(ncid){Object.keys(CONTRACT).forEach(function(key){if(CONTRACT[key].ncid==ncid)return(ncid=key);});if(ncid>0)return(MAINNET);return(ncid);};
////////////////////////////////////////////////////////////
const showBxChain=function(net=btcnet,t=BLANK){Object.keys(BXCHAINS).forEach(function(key){t+='<option'+((net==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_network,t);};
const showExChain=function(net=network,t=BLANK){Object.keys(EXCHAINS).forEach(function(key){t+='<option'+((net==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_network,t);};
const showNetwork=function(net=network,t=BLANK){Object.keys(CONTRACT).forEach(function(key){t+='<option'+((net==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_network,t);};
const showDsModel=function(t=BLANK){Object.keys(MODELS).forEach(function(key){t+='<option\tvalue="'+key+'">'+MODELS[key].name+'</option>';});console.log(t);dw(_model,t);};
const showAccount=function(t=BLANK){Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_account,t);};
const optnAccount=function(t=BLANK){Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+ADDRESSES[key]+'">'+key+':&nbsp;'+ADDRESSES[key]+'</option>';});return(t);};
////////////////////////////////////////////////////////////
const showCoin=function(cls='coin'){if(EXCHAINS[network])COIN=EXCHAINS[network].coin;else{if(BXCHAINS[network])COIN=BXCHAINS[network].coin;}mw(cls,COIN);};
const showCaps=function(lang='en'){Object.keys(LABELS[lang]).forEach(function(key){dw(key,LABELS[lang][key]);});};
const showRole=function(t=BLANK){Object.keys(ROLES).forEach(function(key){t+='<option\tvalue="'+ROLES[key]+'">'+key+'</option>';});console.log(t);dw(_roleVal,t);};
const showTick=function(t=BLANK){Object.keys(TICKS).forEach(function(key){t+='<option\tvalue="'+TICKS[key]+'">'+key+'</option>';});console.log(t);dw(_tickVal,t);};
const showDTyp=function(t=BLANK){Object.keys(TYPES).forEach(function(key){t+='<option\tvalue="'+TYPES[key]+'">'+key+'</option>';});console.log(t);dw(_refType,t);};
const showAccs=function(){dw(_ethTo,accountOptions);dw(_xutTo,accountOptions);dw(_owner,accountOptions);dw(_sendToAdmin,accountOptions);dw(_transToAdmin,accountOptions);console.log(accountOptions);};
////////////////////////////////////////////////////////////
const retrAccount=function(t){switchNet(gv(_network));senderId=gv(_account);try{t=getv3key(gv(_password),0);}catch(err){dw('_keystore_status',err.message);alert(hi_alert_data);return(0);};sender=t.address;senderPte=t.privateKey.substr(2);};
const takeAccount=function(){showLoad('_keystore_status');setTimeout(function(){retrAccount(0);dw('_keystore_status',senderId+COLON+NBSP+sender);},2000);};
////////////////////////////////////////////////////////////
const jrecover=function(j){return(srecover(j.message,j.signature));};
const srecover=function(tm,s){try{tm=web3.eth.accounts.recover(tm,s);}catch(err){alert(err.message);return(0);};return(tm);};
const signmess=function(tm,k){try{tm=web3.eth.accounts.sign(tm,HEXINIT+k);}catch(err){alert(err.message);return(0);};return({message:tm.message,signature:tm.signature});};
const signMMsg=function(msg,div,cbf){if(!div)div=funcName();/*signMMsg*/;web3.eth.getAccounts().then((accounts)=>{sender=accounts[0];console.log('message'+COLON+SPACE+msg);console.log('account'+COLON+SPACE+sender);web3.eth.personal.sign(msg,sender,function(err,hexSign){console.log('signature'+COLON+SPACE+hexSign);dv(div,hexSign);if(cbf)cbf(msg,sender,hexSign);});});};
const keyparam=function(pw){netkeys=keystore(pw,0);Object.keys(netkeys).forEach(function(key){accounts[key]=netkeys[key].address;keypairs[netkeys[key].address]=netkeys[key].privateKey.substr(2);});};
const keystore=function(pw,t){t=Object.assign({},V3KEYSTORE);Object.keys(V3KEYSTORE).forEach(function(key){t[key]=web3.eth.accounts.decrypt(V3KEYSTORE[key],pw);});return(t);};
const getv3key=function(pw,t){t=web3.eth.accounts.decrypt(V3KEYSTORE[senderId],pw);if(t)password=pw;return(t);};
const messageVerify=function(message,signature,wallet){return(wallet.toLowerCase()===srecover(message,signature).toLowerCase());};
const messageDoSign=function(message,privatekey){if(!privatekey)privatekey=senderPte;if(privatekey.indexOf(HEXINIT)===0)privatekey=privatekey.slice(2);return(signmess(message,privatekey));};
////////////////////////////////////////////////////////////
const warnNewAcc=function(newacc){console.warn('WALLET\n',newacc.ACCOUNT.address);console.warn('PRIVATE.KEY\n',newacc.ACCOUNT.privateKey.slice(2));console.warn('V3.KEYSTORE\n',newacc.ACCOUNT.keyStore);dw(TEST,newacc.ACCOUNT.keyStore);};
const getAccount=function(t){switchNet(gv(_network));senderId=gv(_account);t=gettextkey(gv(_password),0);if(!t){dw('_keystore_status',hi_alert_data);return;};sender=t.address;senderPte=t.privateKey.substr(2);dw('_keystore_status','Address'+COLON+NBSP+sender);return(t);};
const oldAccount=function(pw,divOA,divOP,divKS,t,a,k){if(!loRegex.test(pw))return(alert(hi_prompt_chk));if(!t)t=gv(divOP);try{t=web3.eth.accounts.encrypt(t,pw);a=web3.eth.accounts.decrypt(t,pw).address;k=JSON.stringify(t).replace(/\s/g,BLANK);}catch(err){alert(hi_alert_data);return(0);}db(divOA,a);dv(divOP,BLANK);dv(divKS,k);console.log({IMPORT:{address:a,keyStore:k}});return(t);};
const newAccount=function(pw,divNA,divNP,divKS,t,k){if(!loRegex.test(pw))return(alert(hi_prompt_chk));t=web3.eth.accounts.create(web3.utils.randomHex(32));db(divNA,t.address);db(divNP,t.privateKey.substr(2));try{k=JSON.stringify(web3.eth.accounts.encrypt(t.privateKey,pw)).replace(/\s/g,BLANK);dv(divKS,k);}catch(err){alert(hi_alert_data);return(0);};window.newaccount={ACCOUNT:{address:t.address,privateKey:t.privateKey,keyStore:k}};warnNewAcc(window.newaccount);return(t);};
const gettextkey=function(pw,t){if(!t)t=gv(_keystore);if(!t)return(getv3key(pw,0));try{t=web3.eth.accounts.decrypt(t.crypto?t:JSON.parse(t),pw);}catch(e){return(console.error(hi_alert_data,'KEYSTORE'))}if(!t.address)return(0);password=pw;console.log('UNLOCKED',t.address);return(t);};
const userUnlock=function(passCode,keyStore,t){t=gettextkey(passCode,keyStore);if(!t)return;senderId=BLANK;sender=t.address;senderPte=t.privateKey.substr(2);};
const userImport=function(passCode,privKey){oldAccount(passCode,0,0,0,privKey);};
const userCreate=function(passCode){newAccount(passCode);};
////////////////////////////////////////////////////////////
const showDefault=function(){$(document).ready(function(){showNetwork();showAccount();showMaxGas();showTxGwei();showRole();showTick();showDTyp();showAccs();});};
const promoteMenu=function(){window.menu=_Menu(ACTDIV);lottimePicker('year','month','day','hour','minute','_uts','_utstring');showCaps();showCoin();};
const stopSession=function(mis){setInterval(function(){senderPte=BLANK;password=BLANK;window.newaccount=null;clearPwds();console.clear();},mis);};
const statsXuteng=function(mis){setInterval(function(){getData(sender,getDocType(0));},mis);};
const statsEthers=function(mis){setInterval(function(){getCoin(sender,'_ethers');},mis);};
const statsSender=function(mis){setInterval(function(){getSenderData();},mis);};
////////////////////////////////////////////////////////////
const onAccountsChanged=function(){ethereum.on('accountsChanged',r=>{window.sender=r[0]});};
const onChainChanged=function(){ethereum.on('chainChanged',r=>{r=fromHex(r);metaRefresh(r)});};
const getMetamask=function(cbf){if(window.ethereum){window.web3=_Ethereum(ethereum);ethereum.request({method:'eth_requestAccounts'}).then(r=>{window.sender=r[0];ethereum.request({method:'net_version'}).then(r=>{metaRefresh(r);onAccountsChanged();onChainChanged();cbf()})})}else{alert(hi_alert_metamasks)}};
////////////////////////////////////////////////////////////
const resetXuteng=function(){contractAddress=CONTRACT[network].addr;window.xuteng=_Contract(SCABI,contractAddress);setPGwei();};
const web3Mainnet=function(){web3.eth.net.getNetworkType().then(function(net){if(net=='main'){switchNet(MAINNET);alert(hi_alert_ismainnet);}else{switchNet(net,MAINNET);alert(hi_alert_nomainnet);};resetXuteng();});getSender();};
const metaMainnet=function(){ethereum.request({method:'eth_requestAccounts'}).then(r=>{window.sender=r[0]}).catch(e=>{console.log(e)});ethereum.request({method:'net_version'}).then(r=>{metaRefresh(r)});onAccountsChanged();onChainChanged();};
const getProvider=function(){if(window.ethereum){window.web3=_Ethereum(ethereum);metaMainnet();}else{if(window.web3){window.web3=_Ethereum(web3.currentProvider);web3Mainnet();}else{startXuteng(MAINNET);alert(hi_alert_metamasks);}}};
const startXuteng=function(nid){if(nid){switchNet(nid);window.web3=_Ethereum(_Provider(getRpcNet()));resetXuteng();}else{getProvider();};};
const metaRefresh=function(cid){window.network=id2network(cid);switchNet(network);resetXuteng();console.log('CHAIN',cid,network);};
////////////////////////////////////////////////////////////