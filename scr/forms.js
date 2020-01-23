////////////////////////////////////////////////////////////
const funcName=function(){return(funcName.caller.name);};
////////////////////////////////////////////////////////////
const getCheck=function(name){return($('input[name="'+name+'"]:checked').val());};
const setCheck=function(option,button){$(HASH+button).on('click',function(){dc(option,true);return(false);});};
const setClick=function(d,ha,sa){$(document).ready(function(){$(DOT+ha).click(function(){hide(d);});$(DOT+sa).click(function(){show(d);});});};
////////////////////////////////////////////////////////////
const hide=function(d,ob){if(!ob)ob=HASH;$(ob+d).hide();};
const show=function(d,ob){if(!ob)ob=HASH;$(ob+d).show();};
////////////////////////////////////////////////////////////
const mattr=function(d,a,v){dattr(d,a,v,DOT);};
const dattr=function(d,a,v,ob){if(!ob)ob=HASH;$(ob+d).attr(a,v);};
////////////////////////////////////////////////////////////
const mgets=function(d,html){dgets(d,html,DOT);};
const mload=function(d,html){dload(d,html,DOT);};
const dgets=function(d,html,ob){if(!ob)ob=HASH;$.get(html,function(data){$(ob+d).html(data);htmlData.get=data;});};
const dload=function(d,html,ob){if(!ob)ob=HASH;$(ob+d).load(html);};
////////////////////////////////////////////////////////////
const hashParam=function(p,t){if(!t)t=document.location.hash;if(!t)return(BLANK);p=RegExp('[#?&]'+p.replace(/[\[\]]/g,'\\$&')+'(=([^&#]*)|&|#|$)');p=p.exec(t);if(!p)return(BLANK);if(!p[2])return(BLANK);return(decodeURIComponent(p[2].replace(/\+/g,SPACE)));};
const getCookie=function(cn,t){if(!t)t=document;try{return(t.cookie.match('(^|;)\s?'+cn+'=([^;]*)(;|$)')[2]);}catch(err){return(BLANK);}};
const setCookie=function(cn,cv,dd,t){if(!dd)dd=365;dd=(new Date(nowDate()*1000+dd*24*60*60*1000)).toUTCString();if(!t)t=document;return(t.cookie=cn+EQUAL+cv+SEMI+'expires'+EQUAL+dd+SEMI+'path'+EQUAL+SLASH);};
////////////////////////////////////////////////////////////
const tcopy=function(e,s){e=document.getElementById(e);if(!e.value)return;e.select();e.setSelectionRange(0,99999);document.execCommand('copy');alert(s);};
const docdups=function(es,is,e,i,n,d){es=document.getElementsByTagName(STAR);is=[];for(i=0,n=es.length;i<n;++i){e=es[i];if(e.id){is.push(e.id);}}d=arr=>arr.filter((item,index)=>arr.indexOf(item)!=index);return(d(is));};
const setStyle=function(d,s){$(d).removeClass().addClass(s);};
////////////////////////////////////////////////////////////
const ww=function(d,w){dw(d,'<span\tclass="textwarn">'+w+'</span>');};
////////////////////////////////////////////////////////////
const gv=function(d){return($(HASH+d).val());};
const gr=function(d){return($(HASH+d).prop('href'));};
const gc=function(d){return($(HASH+d).prop('checked'));};
const gh=function(d){return($(HASH+d).html());};
const gt=function(d){return($(HASH+d).text());};
const g2=function(d){return(s2n(gv(d)));};
const gn=function(d){return(s2n(gt(d)));};
const gw=function(d){return(s2w(gt(d)));};
////////////////////////////////////////////////////////////
const mr=function(d,r){dr(d,r,DOT);};
const mc=function(d,c){dc(d,c,DOT);};
const mx=function(d,v){dx(d,v,DOT);};
const mv=function(d,v){dv(d,v,DOT);};
const mw=function(d,w){dw(d,w,DOT);};
const mt=function(d,t){dt(d,t,DOT);};
const db=function(d,s){dw(d,s);dv(d,s);};
////////////////////////////////////////////////////////////
const dr=function(d,r,ob){if(!ob)ob=HASH;$(ob+d).prop('href',r);};
const dc=function(d,c,ob){if(!ob)ob=HASH;$(ob+d).prop('checked',c);};
const dx=function(d,v,ob){if(!ob)ob=HASH;$(ob+d).val(v).change();};
const dv=function(d,v,ob){if(!ob)ob=HASH;$(ob+d).val(v);};
const dw=function(d,w,ob){if(!ob)ob=HASH;$(ob+d).html(w);};
const dt=function(d,t,ob){if(!ob)ob=HASH;$(ob+d).text(t);};
////////////////////////////////////////////////////////////
const wrong=function(chk,msg){if(!chk){alert(msg);return(true);}return(false);};
const reask=function(chk,msg){if(chk)return(confirm(msg));return(true);};
////////////////////////////////////////////////////////////
const hvalid=function(h){return(hashRegex.test(h));};
const avalid=function(a){return(web3.utils.isAddress(a));};
const nvalid=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<=b);};
////////////////////////////////////////////////////////////
const nsmall=function(n,b){return(nvalid(n,b));};
const nmidle=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<b);};
const nlarge=function(n,s){n=s2n(n);s=s2n(s);return(n>s&&s>=0);};
////////////////////////////////////////////////////////////
const wrd=function(o,v){return(Object.keys(o).find(key=>o[key]==v));};
const prt=function(q,a,t){t=prompt(q);return(t==a);};
const n2s=function(n,d){if(!n)return(ZERO);if(!d)d=0;n=n.toString().split(DOT);n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,COMMA);n[1]=n[1]?DOT+n[1].substr(0,d):EMPTY;return(n[0]+n[1]);};
const w2s=function(n){return(n2s(fromWei(n),5));};
const s2n=function(s){s=parseFloat(s.toString().replace(/[^\d\.\-]/g,EMPTY));if(isNaN(s))return(0);return(s);};
const s2w=function(s){return(toWei(s2n(s).toString()));};
const toHex=function(s){return(web3.utils.toHex(s));};
const toHash=function(s){return(web3.utils.keccak256(s,{encoding:HEX}));};
const jtoHash=function(j){return(toHash(JSON.stringify(j)));};
const toWei=function(n){return(web3.utils.toWei(n.toString(),ETHER));};
const gtoWei=function(n){return(web3.utils.toWei(n.toString(),GWEI));};
const fromWei=function(w){return(web3.utils.fromWei(w.toString(),ETHER));};
const fromGwei=function(g){return(fromWei(gtoWei(g)));};
const s2wHex=function(s){return(toHex(s2w(s)));};
const g2wHex=function(g){return(toHex(gtoWei(g)));};
////////////////////////////////////////////////////////////
const errCode=function(e){if(e!=null){e=e.toString();if(e.indexOf(RECEIPT)>0)return(hi_prompt_rct);e=(e.substring(e.lastIndexOf(HASH)));if(e){return(e);}else{return(0);}}return(null);};
const setInput=function(j){j.lt=nowDate();return(INPUTSTART+JSON.stringify(j)+INPUTSTOP);};
const getInput=function(tx,key,div,t){web3.eth.getTransaction(tx,function(err,result){t=result.input;t=t.substring(t.indexOf(DATASTART)+DATASTART.length-2);t=t.substr(0,t.lastIndexOf(DATASTOP)+DATASTOP.length);t=web3.utils.toUtf8(HEXINIT+t);t=JSON.parse(t);console.log(t);dw(div,t[key]);});};
////////////////////////////////////////////////////////////
const toDate=function(y,m,d){return(parseInt((new Date(Date.UTC(y,m-1,d,0,0,0,0))).getTime()/1000,10));};
const nowDate=function(){return(parseInt((new Date()).getTime()/1000,10));};
const fromDate=function(n){return((new Date(n*1000)).toString());};
////////////////////////////////////////////////////////////
const hashRegex=(new RegExp('^0x([A-Fa-f0-9]{64})$'));
const hiRegex=(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'));
const loRegex=(new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'));
////////////////////////////////////////////////////////////