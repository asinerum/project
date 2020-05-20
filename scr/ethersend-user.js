////////////////////////////////////////////////////////////[2]
const xutengUsageRegister=function(xut,status=TEST){do_register(contractAddress,xut,status);};
const xutengSetDomainName=function(domain,ref,eth,cbf,status=TEST){domain=domain.toLowerCase();ref=setInput({domain,ref});setDomain(domain,ref,eth);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const xutengSendEthForXut=function(eth,cbf,status=TEST){buy(eth);send(0,0,status,cbf);};
const xutengSendXutForEth=function(xut,cbf,status=TEST){sell(xut);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const xutengTransfer=function(to,xut,cbf,status=TEST){transfer(to,xut);send(0,0,status,cbf);};
const xutengRemitFor=function(to,xut,ref,cbf,status=TEST){transferFor(to,xut,setInput({ref}));send(0,0,status,cbf);};
////////////////////////////////////////////////////////////