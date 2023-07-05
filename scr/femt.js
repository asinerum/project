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
const rset=function(func,data,cbf,...args){cbf(`[${func}]`,...args,NEWLINE+NEWLINE,data)};
const call=function(func,...args){ercFuncCall(func,xutengFemt,...args).then(r=>rset(func,r,console.log,...args))};
const pick=function(func,...args){ercFuncCall(func,xutengFemt,...args).then(r=>rset(func,w2s(r),console.log,...args))};
const make=function(func,cbf,...args){exec(func,0,cbf,...args)};
const exec=function(func,eth,cbf,...args){ercFuncSend(func,xutengFemt,eth,null,...args).then(r=>rset(func,r,cbf,...args))};
const post=function(c,no,t,p,remt=window.remtEnabled,time=0,cbf=console.log,fn='post'){if(remt)return(exec(fn,c,cbf,no,t,p));return(exec(fn,c,cbf,no,t,p,time))};
const emit=function(event,from=0,to='latest',cbf=console.log){xutengFemt.getPastEvents(event,{fromBlock:from,toBlock:to}).then(cbf)};
const Emit=function(event,range=5000,cbf=console.log){web3.eth.getBlockNumber().then(r=>emit(event,r-range,r,cbf))};
const ethers=function(addr=sender,cbf=console.log){web3.eth.getBalance(addr).then(r=>rset('coinBalance',w2s(r),cbf,addr))};
const tokens=function(addr=sender,cbf=console.log,fn='balanceOf'){ercFuncCall(fn,xutengFemt,addr).then(r=>rset(fn,w2s(r),cbf,addr))};
const verify=function(addr=sender,cbf=console.log){ercFuncCall('name',xutengFemt).then(r=>{cbf('[TOKEN]',r);return(ercFuncCall('totalSupply',xutengFemt))}).then(r=>{cbf('[SUPPLY]',w2s(r));return(ercFuncCall('balanceOf',xutengFemt,addr))}).then(r=>{cbf('[USER]',addr);cbf('[BALANCE]',w2s(r))})};
const struct=function(func,calls=[],picks=[],cbf,...args){ercFuncCall(func,xutengFemt,...args).then(r=>{calls.forEach(t=>cbf(`${t}:`,r[t],NEWLINE));picks.forEach(n=>cbf(`${n}:`,w2s(r[n]),NEWLINE))})};
const market=function(refno,cbf=console.log){struct('markets',['buytoken','maker'],['value','ppe'],cbf,refno)};
////////////////////////////////////////////////////////////[1]
const numYearSeconds=365*24*60*60;//[hipp.js]
const gemtAprToPetri=function(apr){return(Math.round(10**9*apr/100/numYearSeconds))};//[sipp.js]
const gemtPetriToApr=function(spr){return(numYearSeconds*100*spr/10**9)};//[sipp.js]
const gemtGetProgram=function(refno,cbf=console.table){ercFuncCall('programs',xutengFemt,refno).then(r=>cbf({program:refno,balance:w2s(r.value),APR:n2s(gemtPetriToApr(r.petri),2),owner:r.maker,start:fromDate(r.open)}))};
const gemtGetProgAcc=function(refno,acc=sender,cbf=console.table){ercFuncCall('invests',xutengFemt,refno,acc).then(r=>cbf({program:refno,balance:w2s(r.amount),dated:fromDate(r.start)}))};
const gemtGetDeposit=function(refno,cbf=console.table){ercFuncCall('deposits',xutengFemt,refno).then(r=>cbf({ref:refno,amount:w2s(r.value),creditor:r.taker,depositor:r.maker}))};
const gemtSetProgram=function(refno,percent,gemts){return(ercFuncSend('program',xutengFemt,0,null,Number(refno),gemtAprToPetri(percent),s2w(gemts)))};
const gemtCutProgram=function(refno){return(ercFuncSend('close',xutengFemt,0,null,Number(refno),true))};
const gemtMakeInvest=function(refno,gemts){return(ercFuncSend('invest',xutengFemt,0,null,Number(refno),s2w(gemts)))};
const gemtDoWithdraw=function(refno){return(ercFuncSend('withdraw',xutengFemt,0,null,Number(refno)))};
const gemtSetDeposit=function(refno,consignee,gemts){return(ercFuncSend('deposit',xutengFemt,0,null,Number(refno),consignee,s2w(gemts)))};
const gemtSetRelease=function(refno,cancel=false){return(ercFuncSend('release',xutengFemt,0,null,Number(refno),cancel))};
const gemtCutDeposit=function(refno){return(gemtSetRelease(refno,true))};
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
const ercFuncSend=function(funcName,sc=xutengFemt,eth=0,options=null,...args){if(!options)options=mmsender(eth);return(ercFunc(funcName,sc,...args).send(options));};/*promise*/
const ercFuncCall=function(funcName,sc=xutengFemt,...args){return(ercFunc(funcName,sc,...args).call());};/*promise*/
////////////////////////////////////////////////////////////[3]
const ercCoin=function(addr=sender,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);web3.eth.getBalance(addr).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercList=function(sc=xutengFemt,event='Transfer',bfrom,bto,filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.getPastEvents(event,{filter:filter,fromBlock:bfrom,toBlock:bto}).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercPage=function(sc=xutengFemt,event='Transfer',day=[],page=1,filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,items=2000,func=null){showLoad(status);func=async(b)=>{if(day)b=toDate(day[0],day[1],day[2]);if(b&&b<nowDate()-60){if(!window.blocknum)await(getBStop(0,b));b=window.blocknum+items*(page-1)}else{if(!window.lastblock)window.lastblock=await(web3.eth.getBlockNumber());b=window.lastblock-items*page};if(!Number(b))throw(ERROR);console.warn('FROM',b,'TO',b+items);return(sc.getPastEvents(event,{filter:filter,fromBlock:b,toBlock:b+items}))};func().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(e=>{showError(status);cbf(e,null)});};
////////////////////////////////////////////////////////////[3]
const ercCall=function(sc=xutengFemt,method,args=[],status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).call().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercSend=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).send(mmsender(eth)).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercRaws=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cfm=true){showLoad(status);sendingFunc=sc.methods[method].apply(this,args);sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;txsend(0,out,status,cbf,cfm);};
////////////////////////////////////////////////////////////[5]
const byt=function(hex){return(web3.utils.hexToBytes(hex))};
const kek=function(num,nce){return(kex(num,nce,'uint256',fromHex(sender)))};
const kec=function(num,nce){return(web3.utils.keccak256(web3.eth.abi.encodeParameters(['uint256','uint256'],[num,nce])))};
const kex=function(num,nce,key='address',val=sender){return(web3.utils.keccak256(web3.eth.abi.encodeParameters([key,'uint256','uint256'],[val,num,nce])))};
const b2i=function(hex,n,i){n=big(0);hex=byt(hex);for(i=0;i<hex.length;i++){n=n.add(big(hex[i]).mul(big(16).pow(big(i*2)).add(big(1))))};return(n.toString())};
const mint=async(method=100,cbf=console.log,femt=xutengFemt,exe=ercTokens,error=alert,act=mmsender(),cfm=true,pops=3,kc=kec,b,k,i,m)=>{await(femt.methods.basicRate().call().then(r=>{b=r}));await(femt.methods.randomKey().call().then(r=>{k=r}));m=big(k).mod(big(b)).toString();for(i=1;i<b*pops;i++){if(m==big(b2i(kc(k,i))).mod(big(b)).toString())break;};if(act){await(fmine(femt,i,method,act,error))}else{await(amine(femt,i,method,cfm))};exe(femt,sender,cbf)};
const mine=async(method=100,cbf=console.log,femt=xuteng)=>{mint(method,cbf,femt,ercTokens,alert,null,false)};
////////////////////////////////////////////////////////////[3]
const fmine=function(femt,nonce,method,act,error=alert){funcMine(femt,nonce,method).send(act).then(console.log).catch(e=>{error(e)})};
const amine=function(femt,nonce,method,cfm=true){ercRaws(femt,'mine',argsMine(nonce,method),0,TEST,TEST,console.warn,cfm)};
const pmine=function(pops){mint(0,console.log,xutengFemt,ercTokens,alert,mmsender(),true,pops)};
////////////////////////////////////////////////////////////[2]
const funcMine=function(contract,nonce,method){return(method?contract.methods.mine(method,nonce):contract.methods.mine(nonce))};
const argsMine=function(nonce,method){return(method?[method,nonce]:[nonce])};
////////////////////////////////////////////////////////////[7]
const arouseKey=function(key,save=true,s){key=key.slice(key.indexOf(HEXINIT)===0?2:0);s=key2wallet(key);if(save){sender=s,senderPte=key};return([s,key])};
const ercTokens=function(sc=xutengFemt,user=sender,cbf=console.log){sc.methods.balanceOf(user).call().then(r=>cbf(w2s(r)))};
const launchNid=function(rpc,nid,gas=1200000,scinfo=FEMT,scabi=ABIFEMT){maxgas=gas;CONTRACT=scinfo;SCABI=scabi;launchRpc(rpc,nid)};/*using:self*/
const startFemt=function(gas=300000,abi=ABIFEMT,addr=FEMT[network].addr){maxgas=gas;window.xutengFemt=_Contract(abi,addr);return(window.xutengFemt)};/*using:provider*/
const startGemt=function(gas=300000,abi=ABIGEMT,addr=GEMT[network].addr){return(startFemt(gas,abi,addr))};
const startNemt=function(gas=300000,abi=ABINEMT,addr=NEMT[network].addr){return(startFemt(gas,abi,addr))};
const startLeft=function(gas=300000,abi=ABILEFT,addr=LEFT[network].addr){return(startFemt(gas,abi,addr))};
const startExet=function(gas=300000,abi=ABIEXET,addr=EXET[network].addr){return(startFemt(gas,abi,addr))};
const startNTSC=function(addr,gas=3000000,abi=ABIESTATES){return(startFemt(gas,abi,addr))};
const startBTSC=function(addr,nid='binance'){startXuteng(nid);return(startNTSC(addr))};
////////////////////////////////////////////////////////////