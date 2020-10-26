////////////////////////////////////////////////////////////[3]
const ercCall=function(sc=xutengFemt,method,args=[],status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).call().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercSend=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).send(mmsender(eth)).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercRaws=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cfm=true){showLoad(status);sendingFunc=sc.methods[method].apply(this,args);sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;txsend(0,out,status,cbf,cfm);};
////////////////////////////////////////////////////////////[5]
const byt=function(hex){return(web3.utils.hexToBytes(hex))};
const kec=function(num,nce){return(web3.utils.keccak256(web3.eth.abi.encodeParameters(['uint256','uint256'],[num,nce])))};
const b2i=function(hex,n,i){n=big(0);hex=byt(hex);for(i=0;i<hex.length;i++){n=n.add(big(hex[i]).mul(big(16).pow(big(i*2)).add(big(1))))};return(n.toString())};
const mint=async(method=100,cbf=console.log,femt=xutengFemt,exe=ercTokens,error=alert,act=mmsender(),cfm=true,pops=3,b,k,i,m)=>{await(femt.methods.basicRate().call().then(r=>{b=r}));await(femt.methods.randomKey().call().then(r=>{k=r}));m=big(k).mod(big(b)).toString();for(i=1;i<b*pops;i++){if(m==big(b2i(kec(k,i))).mod(big(b)).toString())break;};if(act){await(fmine(femt,i,method,act,error))}else{await(amine(femt,i,method,cfm))};exe(femt,sender,cbf)};
const mine=async(method=100,cbf=console.log,femt=xuteng)=>{mint(method,cbf,femt,ercTokens,alert,null,false)};
////////////////////////////////////////////////////////////[3]
const fmine=function(femt,nonce,method,act,error=alert){funcMine(femt,nonce,method).send(act).then(console.log).catch(e=>{error(e)})};
const amine=function(femt,nonce,method,cfm=true){ercRaws(femt,'mine',argsMine(nonce,method),0,TEST,TEST,console.warn,cfm)};
const pmine=function(pops){mint(0,console.log,xutengFemt,ercTokens,alert,mmsender(),true,pops)};
////////////////////////////////////////////////////////////[2]
const funcMine=function(contract,nonce,method){return(method?contract.methods.mine(method,nonce):contract.methods.mine(nonce))};
const argsMine=function(nonce,method){return(method?[method,nonce]:[nonce])};
////////////////////////////////////////////////////////////[7]
const ercTokens=function(sc=xutengFemt,user=sender,cbf=console.log){sc.methods.balanceOf(user).call().then(r=>cbf(w2s(r)))};
const launchNid=function(rpc,nid,gas=1200000,scinfo=FEMT,scabi=ABIFEMT){maxgas=gas;CONTRACT=scinfo;SCABI=scabi;launchRpc(rpc,nid)};/*using:self*/
const startFemt=function(gas=1200000,abi=ABIFEMT,addr=FEMT[network].addr){maxgas=gas;window.xutengFemt=_Contract(abi,addr);return(window.xutengFemt)};/*using:provider*/
const startGemt=function(gas=1200000,abi=ABIGEMT,addr=GEMT[network].addr){return(startFemt(gas,abi,addr))};
const startNemt=function(gas=1200000,abi=ABINEMT,addr=NEMT[network].addr){return(startFemt(gas,abi,addr))};
const startLeft=function(gas=1200000,abi=ABILEFT,addr=LEFT[network].addr){return(startFemt(gas,abi,addr))};
const startExet=function(gas=1200000,abi=ABIEXET,addr=EXET[network].addr){return(startFemt(gas,abi,addr))};
////////////////////////////////////////////////////////////[5]
const initFemt=function(){startXuteng();startFemt();};
const initGemt=function(){startXuteng();startGemt();};
const initNemt=function(){startXuteng();startNemt();};
const initLeft=function(){startXuteng();startLeft();};
const initExet=function(){startXuteng();startExet();};
////////////////////////////////////////////////////////////