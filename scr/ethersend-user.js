////////////////////////////////////////////////////////////[2]
const xutengUsageRegister=function(xut,status=TEST){do_register(contractAddress,xut,status);};
const xutengSetDomainName=function(domain,ref,eth,cbf,status=TEST){domain=domain.toLowerCase();ref=setInput({domain,ref});setDomain(domain,ref,eth);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const xutengSendEthForXut=function(eth,cbf,status=TEST){buy(eth);send(0,0,status,cbf);};
const xutengSendXutForEth=function(xut,cbf,status=TEST){sell(xut);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const ethereumTransfer=function(to,eth,cbf,status=TEST){if(avalid(to))return(sendeth(to,eth,0,status,cbf));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(sendeth(to,eth,0,status,cbf));});};
const ethereumRemitFor=function(to,eth,ref,cbf,status=TEST){ref=setInput({ref});if(avalid(to))return(sendeth(to,eth,0,status,cbf,ref));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(sendeth(to,eth,0,status,cbf,ref));});};
////////////////////////////////////////////////////////////[4]
const xutengTransfer=function(to,xut,cbf,status=TEST){if(avalid(to))return(xutengDirectTransfer(to,xut,cbf,status));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(xutengDirectTransfer(to,xut,cbf,status));});};
const xutengRemitFor=function(to,xut,ref,cbf,status=TEST){if(avalid(to))return(xutengDirectRemitFor(to,xut,ref,cbf,status));xutengDomainStatus(to,function(err,result){if(err||!result||result.user==ZEROADDR)return(cbf(err,null));to=result.user;return(xutengDirectRemitFor(to,xut,ref,cbf,status));});};
const xutengDirectTransfer=function(to,xut,cbf,status=TEST){transfer(to,xut);send(0,0,status,cbf);};
const xutengDirectRemitFor=function(to,xut,ref,cbf,status=TEST){transferFor(to,xut,setInput({ref}));send(0,0,status,cbf);};
////////////////////////////////////////////////////////////