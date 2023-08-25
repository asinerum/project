////////////////////////////////////////////////////////////
const defiGemtPayWithRefRaw=function(status,divRef,divTo,divAmount,divNote,divMoney){defiGemtPayWithRef(status,divRef,divTo,divAmount,divNote,divMoney,hook)};
const defiGemtPayWithRef=function(status,divRef,divTo,divAmount,divNote,divMoney,fn=Exec,a,t){showLoad(status);a=s2n(gv(divAmount));t=gv(divMoney).as('coin')?false:true;(t?Tokens:Ethers)(sender,function(r){if(String(r).GE(a))return(gemtPayWithRef(gv(divRef),gv(divTo),a,gv(divNote),t,fn,function(err,res){checkResult(err,res,status,true);console.warn('PAY_RECEIPT',res)}));dw(status,_errInput)})};
////////////////////////////////////////////////////////////
const defiGameLodeJoinRaw=function(status,divGame,divMoney,divNumStr,divAmount){defiGameLodeJoin(status,divGame,divMoney,divNumStr,divAmount,hook)};
const defiGameLodeJoin=function(status,divGame,divMoney,divNumStr,divAmount,fn=Exec,n,a){showLoad(status);n=gv(divNumStr);a=gv(divAmount);if(!n.lode()||!positiveNum(a))return(dw(status,_errInput));playLodeHanoi(n,a,gv(divGame),gv(divMoney),fn,function(err,res){checkResult(err,res,status,true);console.warn('PLAY_RECEIPT',res)})};
const defiGameLodeLoad=function(status,divMoney,spanAmount){showLoad(status);(gv(divMoney).as('coin')?Ethers:Tokens)(sender,function(r){showOkay(status);db(spanAmount,r)})};
////////////////////////////////////////////////////////////
const playNumberGameGEMT9=function(gamehash,number,amount,to,cbf=console.log,fn=Exec,start=startGemt){start();fn('pay',0,cbf,gamehash,to,s2w(amount),setInput(number))};
const playNumberGameInBNB=function(gamehash,number,amount,to,cbf=console.log,fn=Exec,start=startGemt){start();fn('pay',amount,cbf,gamehash,to,0,setInput(number))};
////////////////////////////////////////////////////////////
const defiProgramProgGainRaw=function(status,divId){return(defiProgramProgGain(status,divId,ercsend))};
const defiProgramProgJoinRaw=function(status,divAmount){return(defiProgramProgJoin(status,divAmount,ercsend))};
const defiProgramProgStopRaw=function(status,divId,half=true){return(defiProgramProgStop(status,divId,half,ercsend))};
const defiProgramProgOpenRaw=function(status,divId,divRate,divAmount,eth=0){return(defiProgramProgOpen(status,divId,divRate,divAmount,eth,ercsend))};
////////////////////////////////////////////////////////////
const defiProgramProgGain=function(status,divId,execute=ercSend,i){
showLoad(status);i=Number(gv(divId));if(!window.investor||window.investor.refno!=i||!window.investor.amount)return(dw(status,_errInput));if(window.investor.amount.le(0)||window.investor.amount.ge(window.investor.value))return(dw(status,_errClear));
execute(xutengFemt,MPROGWDR,[i],0,status,null,function(err,res){checkResult(err,res,status);console.warn('WITHDRAWAL_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiProgramProgJoin=function(status,divAmount,execute=ercSend,a){
showLoad(status);a=s2n(gv(divAmount));if(!positiveNum(a)||!window.investor||!window.investor.value)return(dw(status,_errInput));if(window.investor.start!=0||window.investor.value.le(0))return(dw(status,_errInvst));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('INVESTOR_BALANCE',w2s(res,9));if(fromWei(res)<a)return(dw(status,_errDepos));
execute(xutengFemt,MPROGPAY,[window.investor.refno,s2w(a)],0,status,null,function(err,res){checkResult(err,res,status);console.warn('INVESTMENT_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgramProgRead=function(status,divId,divRate,divAmount,divAge,divOwner,divInvest,divInAge,dec=5,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));window.investor={};window.investor.refno=i;
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);db(divRate,gemtPetriToApr(res.petri));db(divAmount,w2s(res.value,dec));db(divAge,showItemAge(res.open));db(divOwner,showAddrUrl(res.maker));window.investor.value=res.value;console.warn('PROGRAM_DATA',res);
ercCall(xutengFemt,MPROGINV,[i,sender],status,null,function(err,res){checkResult(err,res,status);db(divInvest,w2s(res.amount));db(divInAge,showItemAge(res.start));window.investor.amount=res.amount;window.investor.start=res.start;console.warn('INVEST_DATA',res);});});};
////////////////////////////////////////////////////////////
const defiProgramProgStop=function(status,divId,half=true,execute=ercSend,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_DATA',res);if(res.maker==ZEROADDR)return(dw(status,_errItNot));if(!twoHexEqual(res.maker,sender))return(dw(status,_errOwner));if(res.value===ZERO)return(dw(status,_errValue));
execute(xutengFemt,MPROGSTP,[i,half],0,status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_STOP_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgramProgOpen=function(status,divId,divRate,divAmount,eth=0,execute=ercSend,i,r,a){
showLoad(status);i=Number(gv(divId));r=s2n(gv(divRate));a=s2n(gv(divAmount));if(!positiveInt(i)||!positiveNum(a)||!numsInRange(r,PROGMINRATE,PROGMAXRATE))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_DATA',res);if(res.maker!=ZEROADDR)return(dw(status,_errIdNot));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAMER_BALANCE',w2s(res,9));if(fromWei(res)<a)return(dw(status,_errDepos));
execute(xutengFemt,MPROHYIP,[i,gemtAprToPetri(r),s2w(a)],eth,status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_CREATION_RECEIPT',res);});});});};
////////////////////////////////////////////////////////////
const gamePctToPetri=function(pct){return(Math.round(10**9*pct/100))};
const gamePetriToPct=function(upb){return(100*upb/10**9)};
const gameUnitToPetri=function(unt){return(gamePctToPetri(unt)*100)};
const gamePetriToUnit=function(upb){return(gamePetriToPct(upb)/100)};
////////////////////////////////////////////////////////////
const MineLogTopic='0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const tokenAllowed=function(token){return(MONEYS[token]?true:false)};
const selectTokens=function(token){if(tokenAllowed(token)){TOKEN=token;MONEYS[token]()}};
const getLogApiUrl=function(block,blocks=1000,topic=MineLogTopic,sc=xutengFemt){return(PROXIES[0].getContractPastLogs(sc._address,block-blocks,block,topic))};
const getMinApiUrl=function(block,blocks=1000,topic=MineLogTopic,sc=xutengFemt){return(PROXIES[0].getContractLastLogs(sc._address,block-blocks,block,topic,h2t(ZEROADDR)))};
const getAdvApiUrl=function(block,blocks=1000,topic='',afrom='',ato='',sc=xutengFemt){return(PROXIES[0].getContractLastLogs(sc._address,block-blocks,block,topic,afrom,ato))};
const getLastMined=function(cbf=console.log,LP='lastProof',RS='rewardStamp'){try{if(Func(LP))ercFuncCall(LP).then(r=>{return(cbf(null,r))});else{if(Func(RS))ercFuncCall(RS).then(r=>{return(cbf(null,r))});else{nsBlock().then(r=>{getJSON(getMinApiUrl(r),function(r){r=r.result;return(cbf(null,fromHex(r[r.length-1].timeStamp)))})})}}}catch(e){cbf(ERROR,null)}};
const getTransLogs=function(cbf=console.log,blocks=1000){nsBlock().then(block=>{getJSON(getLogApiUrl(block,blocks),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getTSendLogs=function(addr,blocks=1000,cbf=console.log,sc=xutengFemt){nsBlock().then(block=>{getJSON(getAdvApiUrl(block,blocks,'',h2t(addr),'',sc),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getTRecvLogs=function(addr,blocks=1000,cbf=console.log,sc=xutengFemt){nsBlock().then(block=>{getJSON(getAdvApiUrl(block,blocks,'','',h2t(addr),sc),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getTxTopLogs=function(topic,afrom,ato,blocks=1000,cbf=console.log,sc=xutengFemt){nsBlock().then(block=>{getJSON(getAdvApiUrl(block,blocks,h2t(topic),h2t(afrom),h2t(ato),sc),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getPastMines=function(cbf=console.log,blocks=1000){return(getTransLogs(cbf,blocks))};
////////////////////////////////////////////////////////////
const defiDigNonce=function(divNonce,pops=15,kc=kek,pf='basicRate'){showLoad(divNonce);nonce(pops,kc,pf,function(err,res){checkResult(err,res,divNonce);db(divNonce,res)})};
const defiDigMine=function(divWait,status,pops=15,wmLoad=window.menu.onDefiDigLoad,t){showLoad(status);t=s2n(gv(divWait));setTimeout(function(){sap(status,wmLoad,pops)},long(positiveNum(t)?t:0))};
const defiDigSend=function(divInNonce,status,pops=15,wmLoad=window.menu.onDefiDigLoad,t){showLoad(status);t=s2n(gv(divInNonce));if(!positiveInt(t)){alert('START AUTO MINE');return(defiDigMine(null,status,pops,wmLoad))};ercRaws(xutengFemt,MPROGRAM,[t],0,status,null,console.warn,true).then(r=>{wmLoad();db(status,DONE)}).catch(e=>{checkResult(e,null,status)})};
////////////////////////////////////////////////////////////
const defiDigLoad=function(divToken,divAmt,divSum,divMine,divRate,dec=5,k){
showLoad(divMine);k=gv(divToken);if(!tokenAllowed(k))return(db(divAmt,_errInput));selectTokens(k);
ercCall(xutengFemt,MBALANCE,[sender],divAmt,null,function(err,res){checkResult(err,res,divAmt);db(divAmt,w2s(res,dec));});
ercCall(xutengFemt,MTSUPPLY,[],divSum,null,function(err,res){checkResult(err,res,divSum);db(divSum,w2s(res,dec));});
ercCall(xutengFemt,'basicRate',[],divRate,null,function(err,res){checkResult(err,res,divRate);db(divRate,res);});
getLastMined(function(err,res){checkResult(err,res,divMine);db(divMine,mindif(res));});};
////////////////////////////////////////////////////////////
const defiDigJoin=function(divKey,divPwd,divAddr,k,p){showLoad(divAddr);k=gv(divKey);p=gv(divPwd);
if(k.is3ks()){return(v3ksDecode(k,p,true,function(err,res){checkResult(err,res,divAddr);db(divAddr,res.address)}))};
if(k.isBip()){return(bipeDecode(k,p,true,function(err,res){checkResult(err,res,divAddr);db(divAddr,res.address)}))};
if(k.isKey()){arouseKey(k);return(db(divAddr,sender))};db(divAddr,ERROR)};
////////////////////////////////////////////////////////////
const defiHackProgJoin=function(status,divToken,divId,wmLoad=window.menu.onDefiHackProgLoad,execute=ercSend,k,i){
showLoad(status);k=gv(divToken);i=s2n(gv(divId));if(!tokenAllowed(k)||!positiveNum(i))return(dw(status,_errInput));
execute(xutengFemt,MPROGRAM,[i],0,status,null,function(err,res){checkResult(err,res,status);wmLoad();console.warn('TRANSACTION_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiHackProgJoinMine=function(status,divToken,divId,wmLoad=window.menu.onDefiHackProgLoad,execute=ercSend,k,i){
showLoad(status);k=gv(divToken);i=s2n(gv(divId));if(!tokenAllowed(k))return(dw(status,_errInput));if(!positiveNum(i))return(Dig(function(tokens){wmLoad()},true,20,kek));
execute(xutengFemt,MPROGRAM,[i],0,status,null,function(err,res){checkResult(err,res,status);wmLoad();console.warn('TRANSACTION_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiHackProgLoad=function(status,divToken,outBalance,outSupply,dec=5,k){
showLoad(status);k=gv(divToken);if(!tokenAllowed(k))return(dw(status,_errInput));selectTokens(k);
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);db(outBalance,w2s(res,dec));});
ercCall(xutengFemt,MTSUPPLY,[],status,null,function(err,res){checkResult(err,res,status);db(outSupply,w2s(res,dec));});};
////////////////////////////////////////////////////////////[1]
const PayTokens=function(tid=GEMT,tos=[],tokens=[],ref='',nid='binance',doc='pmt',cbf=console.log,s=tokens.sum()){setTToken(tid,nid);ercFuncCall('balanceOf',xutengFemt,sender)
.then(r=>{if(r.lt(s2w(s)))return(cbf('BALANCE NOT ENOUGH'));return(ercFuncCall('allowance',xutengFemt,sender,setBroker(true,nid)))})
.then(r=>{if(r.lt(s2w(s)))return(cbf('ALLOWANCE NOT ENOUGH'));exec('transfer',0,cbf,tid[nid].addr,tos,setWeiArr(tokens),setInput({[doc]:ref}))}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const PayEthers=function(tos=[],ethers=[],ref='',nid='binance',doc='pmt',cbf=console.log,s=ethers.sum()){setBroker(false,nid);web3.eth.getBalance(sender).then(r=>{if(r.lt(s2w(s)))return(cbf('COIN BALANCE NOT ENOUGH'));exec('transfer',s,cbf,tos,setWeiArr(ethers),setInput({[doc]:ref}))})};
const setBroker=function(token=true,nid='binance',abi=token?ABIBROKER:ABIBROKERE,broker=token?BROKER[nid]:BROKERE[nid]){xutengFemt=_Contract(abi,broker.addr);return(broker.addr)};
const setTToken=function(tid=GEMT,nid='binance'){xutengFemt=_Contract(ABIERC20,tid[nid].addr);return(tid[nid].addr)};
const setWeiArr=function(vals=[]){Object.keys(vals).forEach(i=>{vals[i]=s2w(vals[i])});return(vals)};
////////////////////////////////////////////////////////////[1]
const marketEtherBuy=function(refno,tokens,cbf=console.log,b=0,v=0,p=0,a=0,x=false){tokens=s2w(tokens);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{[b,v,p,a,x]=getEtherBuy(r,w2s(tokens));if(r.maker==ZEROADDR||v.le(0)||p.le(0))return(cbf('INVALID ITEM'));if(!x)return(cbf('INVALID REQUEST'));return(ercFuncCall('balanceOf',xutengFemt,sender))})
.then(r=>{if(r.lt(tokens))return(cbf('INVALID BALANCE'));exec('acquire',0,cbf,refno,tokens)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketTokenBuy=function(refno,coins,cbf=console.log,b=0,v=0,p=0,a=0,x=false){coins=s2w(coins);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{[b,v,p,a,x]=getTokenBuy(r,w2s(coins));if(r.maker==ZEROADDR||v.le(0)||p.le(0))return(cbf('INVALID ITEM'));if(!x)return(cbf('INVALID REQUEST'));return(web3.eth.getBalance(sender))})
.then(r=>{if(r.lt(coins))return(cbf('INVALID BALANCE'));exec('acquire',w2s(coins),cbf,refno,0)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketEtherSell=function(refno,coins,perCoin,cbf=console.log,remt=window.remtEnabled){coins=s2w(coins);perCoin=s2w(perCoin);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{if(r.maker!=ZEROADDR)return(cbf('INVALID ITEM NUMBER'));return(web3.eth.getBalance(sender))})
.then(r=>{if(r.lt(coins))return(cbf('INVALID AMOUNT'));return(ercFuncCall('totalSupply',xutengFemt))})
.then(r=>{if(r.le(perCoin)||perCoin.le(0))return(cbf('INVALID PRICE'));post(w2s(coins),refno,0,perCoin,remt)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketTokenSell=function(refno,tokens,perCoin,cbf=console.log,remt=window.remtEnabled){tokens=s2w(tokens);perCoin=s2w(perCoin);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{if(r.maker!=ZEROADDR)return(cbf('INVALID ITEM NUMBER'));return(ercFuncCall('balanceOf',xutengFemt,sender))})
.then(r=>{if(r.lt(tokens))return(cbf('INVALID VOLUME'));return(ercFuncCall('totalSupply',xutengFemt))})
.then(r=>{if(r.le(perCoin)||perCoin.le(0))return(cbf('INVALID PRICE'));post(0,refno,tokens,perCoin,remt)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketCheck=function(refno,cbf=console.log){ercFuncCall('markets',xutengFemt,refno).then(r=>{if(r.maker==ZEROADDR)return(cbf('ITEM NOT FOUND'));cbf('ITEM ALREADY EXISTS')})};
const GetTokenBuy=function(refno,coins,cbf=console.log,b,v,p,a,x){ercFuncCall('markets',xutengFemt,refno).then(r=>{[b,v,p,a,x]=getTokenBuy(r,coins);if(b)return(cbf('ITEM NOT MATCHED'));cbf('ABOUT TO BUY',w2s(a),'TOKENS');cbf(x?'AVAILABLE':'NOT AVAILABLE')}).catch(e=>cbf(e.toString()))};
const GetEtherBuy=function(refno,tokens,cbf=console.log,b,v,p,a,x){ercFuncCall('markets',xutengFemt,refno).then(r=>{[b,v,p,a,x]=getEtherBuy(r,tokens);if(!b)return(cbf('ITEM NOT MATCHED'));cbf('ABOUT TO GET',w2s(a),'COINS');cbf(x?'AVAILABLE':'NOT AVAILABLE')}).catch(e=>cbf(e.toString()))};
const getTokenBuy=function(data,coins,a=s2w(coins).mul(data.ppe).div(PPT)){return([data.buytoken,data.value,data.ppe,a,!data.buytoken&&a.le(data.value)&&a.gt(0)])};
const getEtherBuy=function(data,tokens,a=s2w(tokens).mul(PPT).div(data.ppe)){return([data.buytoken,data.value,data.ppe,a,data.buytoken&&a.le(data.value)&&a.gt(0)])};
////////////////////////////////////////////////////////////[1]
const Func=function(func,sc=xutengFemt){return(sc.methods.hasOwnProperty(func))};
const rset=function(func,data,cbf,...args){cbf(`[${func}]`,...args,NEWLINE+NEWLINE,data)};
const call=function(func,...args){ercFuncCall(func,xutengFemt,...args).then(r=>rset(func,r,console.log,...args))};
const pick=function(func,...args){ercFuncCall(func,xutengFemt,...args).then(r=>rset(func,w2s(r),console.log,...args))};
const make=function(func,cbf,...args){exec(func,0,cbf,...args)};
const goto=function(contract){xutengFemt=contract;contractAddress=contract._address};
const toto=function(to,tokens,cfm=true,cbf=console.log){ercRaws(xutengFemt,'transfer',[to,s2w(tokens)],0,null,null,cbf,cfm).then(cbf)};
const coto=function(to,ethers,input={},cbf=console.log){return(out(input,to,ethers,cbf))};
const hook=function(func,eth,cbf,...args){ercFuncRaws(func,xutengFemt,eth,null,...args).then(r=>cbf(null,r)).catch(e=>cbf(e.toString(),null))};
const Exec=function(func,eth,cbf,...args){ercFuncSend(func,xutengFemt,eth,null,...args).then(r=>cbf(null,r)).catch(e=>cbf(e.toString(),null))};
const exec=function(func,eth,cbf,...args){ercFuncSend(func,xutengFemt,eth,null,...args).then(r=>rset(func,r,cbf,...args)).catch(e=>console.error(e.toString()))};
const Fish=function(tokens=0,vault=UVAULT){return(fish(tokens,vault,exec))};
const fish=function(tokens=0,vault=UVAULT,fn=hook,nid='binance',cbf=console.log){if(!avalid(sender))throw('SENDER NOT FOUND');if(tokens==ZERO||!tokens)return(verify());return(fn('transfer',0,cbf,vault[nid].addr,s2w(tokens)))};
const post=function(c,no,t,p,remt=window.remtEnabled,time=0,cbf=console.log,fn='post'){if(remt)return(exec(fn,c,cbf,no,t,p));return(exec(fn,c,cbf,no,t,p,time))};
const emit=function(event,from=0,to='latest',cbf=console.log){xutengFemt.getPastEvents(event,{fromBlock:from,toBlock:to}).then(cbf)};
const Emit=function(event,range=5000,cbf=console.log){web3.eth.getBlockNumber().then(r=>emit(event,r-range,r,cbf))};
const ethers=function(addr=sender,cbf=console.log){web3.eth.getBalance(addr).then(r=>rset('coinBalance',w2s(r),cbf,addr))};
const tokens=function(addr=sender,cbf=console.log,fn='balanceOf'){ercFuncCall(fn,xutengFemt,addr).then(r=>rset(fn,w2s(r),cbf,addr))};
const Ethers=function(addr=sender,cbf=console.log){web3.eth.getBalance(addr).then(r=>cbf(w2s(r)))};
const Tokens=function(addr=sender,cbf=console.log,fn='balanceOf'){ercFuncCall(fn,xutengFemt,addr).then(r=>cbf(w2s(r)))};
const verify=function(addr=sender,cbf=console.log){ercFuncCall('name',xutengFemt).then(r=>{cbf('[TOKEN]',r);return(ercFuncCall('totalSupply',xutengFemt))}).then(r=>{cbf('[SUPPLY]',w2s(r));return(ercFuncCall('balanceOf',xutengFemt,addr))}).then(r=>{cbf('[USER]',addr);cbf('[BALANCE]',w2s(r))})};
const struct=function(func,calls=[],picks=[],cbf,...args){ercFuncCall(func,xutengFemt,...args).then(r=>{calls.forEach(t=>cbf(`${t}:`,r[t],NEWLINE));picks.forEach(n=>cbf(`${n}:`,w2s(r[n]),NEWLINE))})};
const market=function(refno,cbf=console.log){struct('markets',['buytoken','maker'],['value','ppe'],cbf,refno)};
////////////////////////////////////////////////////////////[1]
const gemtAprToPetri=function(apr){return(Math.round(10**9*apr/100/ANNSEC))};//[sipp.js]
const gemtPetriToApr=function(spr){return(ANNSEC*100*spr/10**9)};//[sipp.js]
const gemtGetProgram=function(refno,cbf=console.table){ercFuncCall('programs',xutengFemt,refno).then(r=>cbf({program:refno,balance:w2s(r.value),APR:n2s(gemtPetriToApr(r.petri),2),owner:r.maker,start:fromDate(r.open)}))};
const gemtGetProgAcc=function(refno,acc=sender,cbf=console.table){ercFuncCall('invests',xutengFemt,refno,acc).then(r=>cbf({program:refno,balance:w2s(r.amount),dated:fromDate(r.start)}))};
const gemtGetDeposit=function(refno,cbf=console.table){ercFuncCall('deposits',xutengFemt,refno).then(r=>cbf({ref:refno,amount:w2s(r.value),creditor:r.taker,depositor:r.maker}))};
const gemtSetProgram=function(refno,percent,gemts,fn=ercFuncSend){return(fn('program',xutengFemt,0,null,Number(refno),gemtAprToPetri(percent),s2w(gemts)))};
const gemtCutProgram=function(refno,fn=ercFuncSend){return(fn('close',xutengFemt,0,null,Number(refno),true))};
const gemtMakeInvest=function(refno,gemts,fn=ercFuncSend){return(fn('invest',xutengFemt,0,null,Number(refno),s2w(gemts)))};
const gemtDoWithdraw=function(refno,fn=ercFuncSend){return(fn('withdraw',xutengFemt,0,null,Number(refno)))};
const gemtSetDeposit=function(refno,consignee,gemts,fn=ercFuncSend){return(fn('deposit',xutengFemt,0,null,Number(refno),consignee,s2w(gemts)))};
const gemtSetRelease=function(refno,cancel=false,fn=ercFuncSend){return(fn('release',xutengFemt,0,null,Number(refno),cancel))};
const gemtCutDeposit=function(refno,fn=ercFuncSend){return(gemtSetRelease(refno,true,fn))};
const gemtPayWithRef=function(txref,to,amount,note='',gemt=true,fn=Exec,cbf=console.warn){if(gemt)return(fn('pay',0,cbf,txref,to,s2w(amount),setInput(note)));fn('pay',amount,cbf,txref,to,0,setInput(note))};
////////////////////////////////////////////////////////////[1]
const gemtRawDeposit=function(refno,consignee,gemts){return(gemtSetDeposit(refno,consignee,gemts,ercFuncRaws))};
const gemtRawRelease=function(refno,cancel=false){return(gemtSetRelease(refno,cancel,ercFuncRaws))};
const gemtOffDeposit=function(refno){return(gemtCutDeposit(refno,ercFuncRaws))};
const gemtRawProgram=function(refno,percent,gemts){return(gemtSetProgram(refno,percent,gemts,ercFuncRaws))};
const gemtOffProgram=function(refno){return(gemtCutProgram(refno,ercFuncRaws))};
const gemtRawInvest=function(refno,gemts){return(gemtMakeInvest(refno,gemts,ercFuncRaws))};
const gemtOffInvest=function(refno){return(gemtDoWithdraw(refno,ercFuncRaws))};
////////////////////////////////////////////////////////////[1]
const set=function(d,a,v){document.getElementById(d).setAttribute(a,v)};
const i64=function(cnt,val,pre='tsc-',iid='data:image/png;base64,',att='src'){set(`${pre}${cnt}`,att,`${iid}${val}`)};
const b64=function(s){if(s===''||s.trim()==='')return(false);try{return(btoa(atob(s))==s)}catch(e){return(false)}};
const Out=function(data,to=ZEROADDR,eth=0,cbf=console.log,set=setInput){if(set)data=set(data);return(PayEther(to,eth,data,cbf,txgwei,maxgas,0,sender,EMPTY,false,false))};
const out=function(data,to=ZEROADDR,eth=0,cbf=console.log,set=setInput){if(set)data=set(data);return(PayEther(to,eth,data,cbf,txgwei,maxgas,0,sender,senderPte,true,true))};
const tsc=function(adiv='tsc-address',dpre='tsc-',func=db,sd='tsc-name'){if(sd)showLoad(sd);try{return(Tsc(adiv,dpre,func,['price'],['forSale'],['content'],null,'name','symbol','owner','content','price','forSale'))}catch(e){alert(ERROR)}};
const Tsc=function(adiv='tsc-address',dpre='tsc-',func=db,weis=[],bools=[],imgs=[],addr,...args){if(!addr)addr=gv(adiv);startBTSC(addr);args.forEach(arg=>{ercFuncCall(arg).then(r=>{if(imgs.includes(arg)){if(b64(r))i64(arg,r,dpre);if(r.slice(0,3)=='tx:')gtx(r.slice(3),function(e,o,u){if(o)i64(arg,o,dpre,'');func(`${dpre}tx-from`,u)})}else{func(`${dpre}${arg}`,weis.includes(arg)?w2s(r):(bools.includes(arg)?(r?'yes':'no'):r))}})})};
const gtx=function(tx,cbf=console.log){web3.eth.getTransaction(tx,function(err,result){if(err||!result||!result.input)return(cbf(err,null));this.cut=(str)=>{return(hexUtf(strCut(str,'7b226f626a22','7d')))};this.obj=(str)=>{return(JSON.parse(this.cut(str)))};cbf(null,this.obj(result.input).obj,result.from)})};
const deployTSC=function(key,name,symb,b64,author=LABELS.en._header_copyright,price=1,sale=false,gas=3000000,nid='binance',abi=ABIESTATES,code=BCESTATES,cbf=console.log){if(!key)return(deployEstate('test',name,symb,b64,author,price,sale));arouseKey(key);startBTSC(ESTATE[nid].addr);ercFuncCall('name').then(r=>cbf(TEST,r));return(deploy(abi,code,[name,symb,0,b64,author,price,sale],gas))};
const deployTSC20=function(key,name,symb,b64,author=LABELS.en._header_copyright,price=1,sale=false,gas=3500000,nid='binance'){return(deployTSC(key,name,symb,b64,author,price,sale,gas,nid,ABIESTATE,BCESTATE))};
const deployEstate=function(status,name,symb,b64,author,price,sale=false,form=0){mmdeploy(status,ABIESTATES,BCESTATES,[name,symb,form,b64,author,price,sale]);};
const deployEstateContent=function(b64,plugin=true,cbf=console.log,pre='data:image/png;base64',fn=plugin?Out:out){return(fn(`${pre},${b64}`,ZEROADDR,0,cbf))};
////////////////////////////////////////////////////////////[3]
const popEmitValue=async(sc=xutengFemt,event='Transfer',filter={},revorder=true,status=TEST,cbf=console.log,step=500000,logs=[],i)=>{showLoad(status);await(popEmit(sc,event,filter,status,null,function(err,res){takeResValue(err,res,logs,revorder)},db,window.blockmark,step));cbf(null,logs);return(logs);};
const getEmitValue=async(sc=xutengFemt,event='Transfer',filter={},revorder=true,status=TEST,cbf=console.log,logs=[],i)=>{showLoad(status);await(getEmit(sc,event,filter,status,null,function(err,res){takeResValue(err,res,logs,revorder)}));cbf(null,logs);return(logs);};
const takeResValue=function(err,res,logs,revorder){if(err)throw(err.toString());if(revorder){for(i=res.length-1;i>=0;i--)logs.push(res[i].returnValues)}else{for(i=0;i<res.length;i++)logs.push(res[i].returnValues)};};
////////////////////////////////////////////////////////////[4]
const popEmit=async(sc=xutengFemt,event='Transfer',filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,endBlock=window.blockmark,step=500000)=>{showLoad(status);if(!endBlock)endBlock=await(web3.eth.getBlockNumber());window.blockmark=endBlock-step;if(window.blockmark<1)window.blockmark=1;console.warn('FROM_BLOCK',window.blockmark,'TO_BLOCK',endBlock);ercEmit(sc,event,window.blockmark,endBlock,filter).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const getEmit=async(sc=xutengFemt,event='Transfer',filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,stamp=window.stampmark,endBlock=window.blocknum,days=7)=>{showLoad(status);if(!endBlock)endBlock=await(web3.eth.getBlockNumber());if(!stamp)stamp=nowDate()-days*24*60*60;await(getBStop(0,stamp));window.stampmark=stamp-days*24*60*60;console.warn('FROM_BLOCK',window.blocknum,'AT',stamp,'TO_BLOCK',endBlock,'NEXT_MARK',window.stampmark);ercEmit(sc,event,window.blocknum,endBlock,filter).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercEmit=async(sc=xutengFemt,event='Transfer',fromBlock=1,toBlock,filter={},options=null,midBlock=null,arr1=null,arr2=null)=>{if(!toBlock)toBlock=await(web3.eth.getBlockNumber());if(fromBlock<=toBlock){try{options={filter,fromBlock,toBlock};return(await(sc.getPastEvents(event,options)))}catch(error){midBlock=(fromBlock+toBlock)>>1;arr1=await(ercEmit(sc,event,fromBlock,toBlock,filter));arr2=await(ercEmit(sc,event,midBlock+1,toBlock,filter));return([...arr1,...arr2])}}return([]);};
const ercView=async(address=xutengFemt._address,fromBlock=1,toBlock,options=null,midBlock=null,arr1=null,arr2=null)=>{if(!toBlock)toBlock=await(web3.eth.getBlockNumber());if(fromBlock<=toBlock){try{options={address,fromBlock,toBlock};return(await(web3.eth.getPastLogs(options)))}catch(error){midBlock=(fromBlock+toBlock)>>1;arr1=await(ercView(address,fromBlock,midBlock));arr2=await(ercView(address,midBlock+1,toBlock));return([...arr1,...arr2])}}return([]);};
////////////////////////////////////////////////////////////[6]
const ercFunc=function(funcName,sc=xutengFemt,...args){return(sc.methods[funcName](...args));};
const ercFabi=function(funcName,sc=xutengFemt,...args){return(sc.methods[funcName](...args).encodeABI());};
const ercFgas=function(funcName,sc=xutengFemt,...args){return(sc.methods[funcName](...args).estimateGas());};/*promise*/
const ercEgas=function(funcName,sc=xutengFemt,status=TEST,out=TEST,cbf=console.log,cbo=dw,...args){showLoad(status);ercFgas(funcName,sc,...args).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
////////////////////////////////////////////////////////////[3]
const ercFuncSend=function(funcName,sc=xutengFemt,eth=0,options=null,...args){if(!options)options=mmsender(eth);return(ercFunc(funcName,sc,...args).send(options));};/*promise*/
const ercFuncRaws=function(funcName,sc=xutengFemt,eth=0,options=null,...args){return(ercRaws(sc,funcName,args,eth))};/*promise[options:pseudo]*/
const ercFuncCall=function(funcName,sc=xutengFemt,...args){return(ercFunc(funcName,sc,...args).call());};/*promise*/
////////////////////////////////////////////////////////////[3]
const ercCoin=function(addr=sender,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);web3.eth.getBalance(addr).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercList=function(sc=xutengFemt,event='Transfer',bfrom,bto,filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.getPastEvents(event,{filter:filter,fromBlock:bfrom,toBlock:bto}).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercPage=function(sc=xutengFemt,event='Transfer',day=[],page=1,filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,items=2000,func=null){showLoad(status);func=async(b)=>{if(day)b=toDate(day[0],day[1],day[2]);if(b&&b<nowDate()-60){if(!window.blocknum)await(getBStop(0,b));b=window.blocknum+items*(page-1)}else{if(!window.lastblock)window.lastblock=await(web3.eth.getBlockNumber());b=window.lastblock-items*page};if(!Number(b))throw(ERROR);console.warn('FROM',b,'TO',b+items);return(sc.getPastEvents(event,{filter:filter,fromBlock:b,toBlock:b+items}))};func().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(e=>{showError(status);cbf(e,null)});};
////////////////////////////////////////////////////////////[3]
const ercCall=function(sc=xutengFemt,method,args=[],status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).call().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercSend=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).send(mmsender(eth)).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercsend=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){ercRaws(xutengFemt,method,args,eth,status,out).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercRaws=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,wrn=console.warn,cfm=true){showLoad(status);sendingFunc=sc.methods[method].apply(this,args);sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;return(txSend(0,out,status,wrn,cfm));};/*promise*/
////////////////////////////////////////////////////////////[5]
const byt=function(hex){return(web3.utils.hexToBytes(hex))};
const kek=function(num,nce){return(kex(num,nce,'uint256',fromHex(sender)))};
const kec=function(num,nce){return(web3.utils.keccak256(web3.eth.abi.encodeParameters(['uint256','uint256'],[num,nce])))};
const kex=function(num,nce,key='address',val=sender){return(web3.utils.keccak256(web3.eth.abi.encodeParameters([key,'uint256','uint256'],[val,num,nce])))};
const b2i=function(hex,n,i){n=big(0);hex=byt(hex);for(i=0;i<hex.length;i++){n=n.add(big(hex[i]).mul(big(16).pow(big(i*2)).add(big(1))))};return(n.toString())};
const Dig=function(cbf=console.log,cfm=true,pops=20,kc=kek){return(mint(0,cbf,xutengFemt,ercTokens,alert,mmsender(),cfm,pops,kc))};
const dig=function(cbf=console.log,cfm=true,pops=20,kc=kek,pf='basicRate',b,k,i,m){xutengFemt.methods[pf]().call().then(r=>{b=r;return(xutengFemt.methods.randomKey().call())}).then(r=>{k=r;i=Nonce(b,k,kc,1,b*pops);if(i==0)return(null);return(ercRaws(xutengFemt,MPROGRAM,[i],0,null,null,console.warn,cfm))}).then(cbf)};
const sap=function(status,reload,pops=20,cfm=false,kc=kek,disp=db){dig(function(r){if(r){disp(status,DONE);if(reload)reload()}else{disp(status,ERROR)}},cfm,pops,kc)};
const tsap=function(dur=10,tun='M'){setTimeout(sap,long(dur,tun))};
const isap=function(dur=10,tun='M'){setInterval(sap,long(dur,tun))};
const wsap=function(dur=10,loads=1000,mig=3,cb=console.log){setInterval(function(){cb(loads);loads--;if(loads<0)return(cb('END'));getLastMined(function(e,r){if(e)return(cb(e.toString()));if(s2n(mindif(r))<mig)return(cb('IGNORE'));sap()})},long(dur))};
const mint=function(method=100,cbf=console.log,femt=xutengFemt,exe=ercTokens,error=console.error,act=mmsender(),cfm=true,pops=3,kc=kec,pf='basicRate',b,k,i,m){femt.methods[pf]().call().then(r=>{b=r;return(femt.methods.randomKey().call())}).then(r=>{k=r;i=Nonce(b,k,kc,1,b*pops);if(i==0){return(cbf(ERROR))}if(act){fmine(femt,i,method,act,function(r){fuser(cbf,exe,femt,sender)},error)}else{amine(femt,i,method,cfm,function(r){fuser(cbf,exe,femt,sender)},error)}})};
const mine=function(method=100,cbf=console.log,femt=xuteng){return(mint(method,cbf,femt,ercTokens,alert,null,false))};
////////////////////////////////////////////////////////////[3]
const fuser=function(cbf=console.log,exe=ercTokens,femt=xutengFemt,user=sender){return(exe(femt,user,function(tokens){return(cbf(tokens))}))};
const fmine=function(femt,nonce,method,act,cbf=console.log,error=console.error){funcMine(femt,nonce,method).send(act).then(cbf).catch(e=>{error(e)})};
const amine=function(femt,nonce,method,cfm=true,cbf=console.log,error=console.error){ercRaws(femt,'mine',argsMine(nonce,method),0,TEST,TEST,console.warn,cfm).then(cbf).catch(e=>{error(e)})};
const pmine=function(pops){mint(0,console.log,xutengFemt,ercTokens,alert,mmsender(),true,pops)};
////////////////////////////////////////////////////////////
const Nonce=function(b,k,kc=kec,min=1,max=b*20,i,m){m=big(k).mod(big(b)).toString();for(i=min;i<=max;i++){if(m==big(b2i(kc(k,i))).mod(big(b)).toString()){return(i)}}return(0)};
const nonce=function(pops=3,kc=kec,pf='basicRate',cbf=console.log,b,k,i,m){xutengFemt.methods[pf]().call().then(r=>{b=r;return(xutengFemt.methods.randomKey().call())}).then(r=>{k=r;i=Nonce(b,k,kc,1,b*pops);if(i!=0){cbf(null,i)}else{cbf(UNCHECKED,null)}})};
const xmint=function(pops=3,method=0,kc=kec){return(mint(method,console.log,xutengFemt,ercTokens,alert,mmsender(),true,pops,kc))};
const zmint=function(pops=9,sc=xutengFemt,cbf=console.log){return(mint(0,cbf,sc,ercTokens,alert,null,false,pops,kek))};
////////////////////////////////////////////////////////////[2]
const Femt=function(pops=3){getMetamask(r=>{startFemt();nonce(pops);})};
const Gemt=function(pops=3){getMetamask(r=>{startGemt();nonce(pops);})};
const Nemt=function(pops=3){getMetamask(r=>{startNemt();nonce(pops);})};
const Remt=function(pops=3){getMetamask(r=>{startRemt();nonce(pops);})};
////////////////////////////////////////////////////////////[2]
const funcMine=function(contract,nonce,method){return(method?contract.methods.mine(method,nonce):contract.methods.mine(nonce))};
const argsMine=function(nonce,method){return(method?[method,nonce]:[nonce])};
////////////////////////////////////////////////////////////[7]
const arouseKey=function(key,save=true,s){key=key.slice(key.indexOf(HEXINIT)===0?2:0);s=key2wallet(key);if(save){sender=s,senderPte=key};return([s,key])};
const ercTokens=function(sc=xutengFemt,user=sender,cbf=console.log){sc.methods.balanceOf(user).call().then(r=>cbf(w2s(r)))};
const launchNid=function(rpc,nid,gas=1200000,scinfo=FEMT,scabi=ABIFEMT){maxgas=gas;CONTRACT=scinfo;SCABI=scabi;contractAddress=scinfo[nid].addr;launchRpc(rpc,nid)};/*using:self*/
const startFemt=function(gas=300000,abi=ABIFEMT,addr=FEMT[network].addr){maxgas=gas;window.xutengFemt=_Contract(abi,addr);contractAddress=addr;return(window.xutengFemt)};/*using:provider*/
const startGemt=function(gas=300000,abi=ABIGEMT,addr=GEMT[network].addr){return(startFemt(gas,abi,addr))};
const startNemt=function(gas=300000,abi=ABINEMT,addr=NEMT[network].addr){return(startFemt(gas,abi,addr))};
const startRemt=function(gas=300000,abi=ABIREMT,addr=REMT[network].addr){return(startFemt(gas,abi,addr))};
const startLeft=function(gas=300000,abi=ABILEFT,addr=LEFT[network].addr){return(startFemt(gas,abi,addr))};
const startExet=function(gas=300000,abi=ABIEXET,addr=EXET[network].addr){return(startFemt(gas,abi,addr))};
const startNTSC=function(addr,gas=3000000,abi=ABIESTATES){return(startFemt(gas,abi,addr))};
const startBTSC=function(addr,nid='binance'){startXuteng(nid);return(startNTSC(addr))};
////////////////////////////////////////////////////////////
let getJSON=function(url,cbf=console.log){axiosCallback(url,cbf)};
const axiosCallback=function(url,cbf=console.log,failcode=null){axios(url).then(r=>cbf(r.data)).catch(e=>cbf({status:failcode,message:e.toString(),result:null}))};
const startVaultRpc=function(uv=1,nid='binance',gas=300000){startFemtRpc(nid,gas,uv===0?VAULT:UVAULT,uv===0?ABIVAULT:ABIUVAULT)};
const startFemtRpc=function(nid='binance',gas=300000,femt=FEMT,abi=ABIFEMT){launchNid(EXCHAINS[nid].rpcs,nid,gas,femt,abi);xutengFemt=xuteng};
const startGemtRpc=function(nid='binance',gas=300000){startFemtRpc(nid,gas,GEMT,ABIGEMT)};
const startNemtRpc=function(nid='binance',gas=300000){startFemtRpc(nid,gas,NEMT,ABINEMT)};
const startRemtRpc=function(nid='binance',gas=300000){startFemtRpc(nid,gas,REMT,ABIREMT)};
////////////////////////////////////////////////////////////
const StartToken=function(gas,abi,addr){return(function(){startFemt(gas,abi,addr)})};
const startToken=function(nid,gas,abi,femt){return(function(){startFemtRpc(nid,gas,femt,abi)})};
let startXToken=StartToken(300000,ABIXTOKEN,XTOKEN['binance'].addr);
let startUVault=StartToken(300000,ABIUVAULT,UVAULT['binance'].addr);
let startBVault=StartToken(300000,ABIVAULT,VAULT['binance'].addr);
let startProVault={lode:StartToken(300000,ABIVAULTPRO,VAULTPRO['LODE']['binance'].addr)};
let startXTokenRpc=startToken('binance',300000,ABIXTOKEN,XTOKEN);
let startUVaultRpc=startToken('binance',300000,ABIUVAULT,UVAULT);
let startBVaultRpc=startToken('binance',300000,ABIVAULT,VAULT);
let startProVaultRpc={lode:startToken('binance',300000,ABIVAULTPRO,VAULTPRO['LODE'])};
////////////////////////////////////////////////////////////