////////////////////////////////////////////////////////////[2]
const xutengUsageRegister=function(xut=0,status=TEST){do_register(contractAddress,xut,status);};
const xutengSetDomainName=function(domain=BLANK,ref=BLANK,eth=0,cbf=console.log,status=TEST){domain=domain.toLowerCase();xuteng.methods.retDomain(domain).call((e,info)=>{if(e)return(cbf(e,null));if(info.user!=sender&&info.time>ethnow())return(cbf('OWNER',null));xuteng.methods.contents(sender).call((e,info)=>{if(e)return(cbf(e,null));if(info.json){try{info.json=JSON.parse(info.json)}catch(e){info.json={obj:{}}};if(info.json.obj.domain!=domain)return(cbf('NAME',null));}ref=setInput({domain,ref});setDomain(domain,ref,eth);send(0,0,status,cbf);});});};
////////////////////////////////////////////////////////////[2]
const xutengSendEthForXut=function(eth=0,cbf=console.log,status=TEST){buy(eth);send(0,0,status,cbf);};
const xutengSendXutForEth=function(xut=0,cbf=console.log,status=TEST){sell(xut);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const ethereumTransfer=function(to=BLANK,eth=0,cbf=console.log,status=TEST){if(avalid(to))return(sendeth(to,eth,0,status,cbf));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(sendeth(to,eth,0,status,cbf));});};
const ethereumRemitFor=function(to=BLANK,eth=0,ref=BLANK,cbf=console.log,status=TEST){ref=setInput({ref});if(avalid(to))return(sendeth(to,eth,0,status,cbf,ref));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(sendeth(to,eth,0,status,cbf,ref));});};
////////////////////////////////////////////////////////////[4]
const xutengTransfer=function(to=BLANK,xut=0,cbf=console.log,status=TEST){if(avalid(to))return(xutengDirectTransfer(to,xut,cbf,status));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(xutengDirectTransfer(to,xut,cbf,status));});};
const xutengRemitFor=function(to=BLANK,xut=0,ref=BLANK,cbf=console.log,status=TEST){if(avalid(to))return(xutengDirectRemitFor(to,xut,ref,cbf,status));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(xutengDirectRemitFor(to,xut,ref,cbf,status));});};
const xutengDirectTransfer=function(to=BLANK,xut=0,cbf=console.log,status=TEST){transfer(to,xut);send(0,0,status,cbf);};
const xutengDirectRemitFor=function(to=BLANK,xut=0,ref=BLANK,cbf=console.log,status=TEST){transferFor(to,xut,setInput({ref}));send(0,0,status,cbf);};
////////////////////////////////////////////////////////////