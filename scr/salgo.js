////////////////////////////////////////////////////////////
const algoAccount=function(){window.newaccount=algosdk.generateAccount();return(window.newaccount)};
const algoAccPair=function(kp=window.newaccount){return({address:kp.addr,privateKey:Buffer.from(kp.sk).toString('hex')})};
const algoRecount=function(k64){window.newaccount=algosdk.mnemonicToSecretKey(algosdk.secretKeyToMnemonic(Uint8Array.from(Buffer.from(k64,'hex'))));return(window.newaccount)};
////////////////////////////////////////////////////////////
const algoConnect=async(token='',port='',api='https://mainnet-algorand.api.purestake.io/ps2',idx='https://mainnet-algorand.api.purestake.io/idx2')=>{token={'X-API-Key':token};window.algoindex=new algosdk.Indexer(token,idx,port);window.algoclient=new algosdk.Algodv2(token,api,port);return(window.algoclient.getTransactionParams().do())};
const algoConTest=async(token='',port='',api='https://testnet-algorand.api.purestake.io/ps2',idx='https://testnet-algorand.api.purestake.io/idx2')=>{return(algoConnect(token,port,api,idx))};
const algoBalance=async(addr,client=window.algoclient)=>{window.algoinfo=await(client.accountInformation(addr).do());return(window.algoinfo.amount)};
const algoTransfer=async(addr,algo,note='',kp=window.newaccount,client=window.algoclient,params=null,tx=null)=>{params=await(client.getTransactionParams().do());tx={from:kp.addr,to:addr,fee:1,amount:algo*1000000,firstRound:params.firstRound,lastRound:params.lastRound,genesisID:params.genesisID,genesisHash:params.genesisHash,note:Uint8Array.from(Buffer.from(note))};return(await(client.sendRawTransaction(algosdk.signTransaction(tx,kp.sk).blob).do()))};/*{txId:"xxx"}*/
////////////////////////////////////////////////////////////
const bipAlgoNewAddr=function(status,outAlgo,outKey,a){a=algoAccPair(algoAccount());db(outAlgo,a.address);db(outKey,a.privateKey)};
const bipAlgoOldAddr=function(status,inKey,inPwd,outAlgo,outBip,k){showLoad(status);db(outAlgo,EMPTY);db(outBip,EMPTY);k=gv(inKey);solEncrypt(gv(inPwd),k,function(e,r){if(e)return(showError(status));db(outAlgo,algoAccPair(algoRecount(k)).address);db(outBip,r);showOkay(status)})};
const bipAlgoDecAddr=function(status,inBip,inPwd,expAlgo,expKey){showLoad(status);db(expAlgo,EMPTY);db(expKey,EMPTY);solDecrypt(gv(inPwd),gv(inBip),function(e,r){if(e)return(showError(status));db(expAlgo,algoAccPair(algoRecount(r)).address);db(expKey,r);showOkay(status)})};
////////////////////////////////////////////////////////////
const bipAlgoRefresh=function(divAlgo='_algos'){algoBalance(sender).then(r=>db(divAlgo,r/1000000)).catch(e=>showError(divAlgo))};
const bipAlgoDecrypt=function(status,inBip,inPwd,divAcc,divAlgo,divRpc='rpcs',divToken='token',divIndex='indexer'){showLoad(status);db(divAcc,EMPTY);algoConnect(gv(divToken),EMPTY,gv(divRpc),gv(divIndex)).then(solDecrypt(gv(inPwd),gv(inBip),function(e,r){if(e)return(showError(status));senderPte=r;window.newaccount=algoRecount(senderPte);sender=window.newaccount.addr;db(divAcc,sender);showOkay(status);bipAlgoRefresh(divAlgo)})).catch(e=>showCancel(divAlgo))};
const bipAlgoTransfer=function(status,divTo,divAmt,divAlgo,divNote='note'){showLoad(status);algoTransfer(gv(divTo),gv(divAmt),gv(divNote)).then(r=>{db(status,r.txId);bipAlgoRefresh(divAlgo)}).catch(e=>db(status,e.toString()))};
////////////////////////////////////////////////////////////