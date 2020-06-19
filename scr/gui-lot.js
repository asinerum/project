////////////////////////////////////////////////////////////[1]
const lottimePicker=function(year,month,day,hour,min,stamp,time,yi=10,is=5,t,y,m,d,h,i,j){t=lotnow().lottime;[y,m,d,h,i]=t;
;t=BLANK;for(j=y-yi;j<=y+yi;j++)t+='<option\t'+(j==y?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(year,t);
;t=BLANK;for(j=1;j<=12;j++)t+='<option\t'+(j==m?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(month,t);
;t=BLANK;for(j=1;j<=31;j++)t+='<option\t'+(j==d?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(day,t);
;t=BLANK;for(j=0;j<=23;j++)t+='<option\t'+(j==h?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(hour,t);
;t=BLANK;for(j=0;j<=60-is;j+=is)t+='<option\t'+(j==i?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(min,t);
;t=getUts(year,month,day,hour,min,stamp,time);};
////////////////////////////////////////////////////////////[1]
const dwMyGameProfile=function(div,dat){if(!dat)return(dw(div,HYPHEN));dw(div,
'<br/>NAME:&nbsp;'+(dat.dat?dat.dat.name:BLANK)+
'<br/>OWNER:&nbsp;'+dat.txAuthor+
'<br/>FORMAT:&nbsp;'+dat.frm+
'<br/>OPENING:&nbsp;'+fromDate(dat.txUts)+
'<br/>CLOSING:&nbsp;'+fromDate(dat.uts)+
'<br/>MIN DEPOSIT:&nbsp;'+dat.min+
'<br/>MAX DEPOSIT:&nbsp;'+dat.max+
'<br/>REWARDS:&nbsp;'+dat.odd);};
////////////////////////////////////////////////////////////[1]
const dwMyAddrProfile=function(div,dat){if(!dat)return(dw(div,HYPHEN));dw(div,
'<br/>WALLET:&nbsp;'+dat.txAuthor+
'<br/>SIGNUP:&nbsp;'+fromDate(dat.txUts)+
'<br/>NAME:&nbsp;'+(dat.dat?dat.dat.name:undefined)+
'<br/>FILE:&nbsp;'+(dat.dat?dat.dat.text:undefined)+
'<br/>STYLE:&nbsp;'+(dat.dat?dat.dat.style:undefined));
dv('proname',dat.dat?dat.dat.name:BLANK);
dv('protext',dat.dat?dat.dat.text:BLANK);
dv('prostyle',dat.dat?dat.dat.style:BLANK);};
////////////////////////////////////////////////////////////[1]
const dwWalletsDomain=function(div,dat){if(!dat)return(dw(div,HYPHEN));dw(div,
'<br/>DOMAIN:&nbsp;'+(dat.json?dat.json.obj.domain:BLANK)+
'<br/>IP:&nbsp;'+(dat.json?dat.json.obj.ref.ip:undefined)+
'<br/>EXPIRATION:&nbsp;'+dat.time+
'<br/>NOTE:&nbsp;'+(dat.json?dat.json.obj.ref.note:BLANK));
dv('domname',dat.json?dat.json.obj.domain:BLANK);
dv('domip',dat.json?dat.json.obj.ref.ip:BLANK);
dv('domref',dat.json?dat.json.obj.ref.note:BLANK);};
////////////////////////////////////////////////////////////[4]
const dwDomainWithFee=function(ua,divDom,divFee,cbf){deaddrMyDomains(ua,divDom,cbf);xutengDomainAnnualETH(function(e,fee){if(cbf)cbf(e,fee);dw(divFee,'FEE&nbsp;'+fee+'&nbsp;ETH/YEAR')})};
const dwDomainRegInfo=function(dn,divUser,divTime,divIp,divNote,cbf){xutengDomainStatus(dn).then(data=>{if(cbf)cbf(null,data);if(!data)data={};db(divUser,data.user);db(divTime,data.time);db(divIp,data.json&&data.json.obj?data.json.obj.ref.ip:HYPHEN);db(divNote,data.json&&data.json.obj?data.json.obj.ref.note:HYPHEN);});};
const dwTxHashContent=function(txh,divAddr,divNote,divData,cbf){dw(divAddr,HYPHEN);dw(divNote,HYPHEN);dw(divData,HYPHEN);if(avalid(txh)){divHashFromAddr(txh,divAddr);deaddrLottoGame(txh,divData,cbf);}if(hvalid(txh)){divAddrFromHash(txh,divAddr);dehashLottoGame(txh,divData,cbf);getInput(txh,function(e,obj){dw(divNote,obj?obj.ref:HYPHEN)});}};
const dwAddrAliasInfo=function(alias,divHash,divOwner,divAddr,cbf){alias=alias.toLowerCase();db(divHash,toHash(alias));xutengAliasesOwner(alias,function(e,ua){if(cbf)cbf(e,ua);if(ua!=ZEROADDR)db(divOwner,ua);else{db(divOwner,HYPHEN)}});xuteng.methods.addressOf(gv(divHash)).call(function(e,oa){if(cbf)cbf(e,oa);if(oa!=ZEROADDR)db(divAddr,oa);else{db(divAddr,HYPHEN)}});}
////////////////////////////////////////////////////////////