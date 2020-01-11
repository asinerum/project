////////////////////////////////////////////////////////////
const tcopy=function(e,s){e=document.getElementById(e);if(!e.value)return;e.select();e.setSelectionRange(0,99999);document.execCommand('copy');alert(s);};
const docdups=function(es,is,e,i,n,d){es=document.getElementsByTagName('*');is=[];for(i=0,n=es.length;i<n;++i){e=es[i];if(e.id){is.push(e.id);}}d=arr=>arr.filter((item,index)=>arr.indexOf(item)!=index);return(d(is));};
const setStyle=function(d,s){$(d).removeClass().addClass(s);};
////////////////////////////////////////////////////////////
const ww=function(d,w){dw(d,'<span\tclass="textwarn">'+w+'</span>');};
////////////////////////////////////////////////////////////
const gv=function(d){return($('#'+d).val());};
const gr=function(d){return($('#'+d).prop('href'));};
const gc=function(d){return($('#'+d).prop('checked'));};
const gh=function(d){return($('#'+d).html());};
const gt=function(d){return($('#'+d).text());};
const g2=function(d){return(s2n(gv(d)));};
const gn=function(d){return(s2n(gt(d)));};
const gw=function(d){return(s2w(gt(d)));};
////////////////////////////////////////////////////////////
const mr=function(d,r){$('.'+d).prop('href',r);};
const mc=function(d,c){$('.'+d).prop('checked',c);};
const mx=function(d,v){$('.'+d).val(v).change();};
const mv=function(d,v){$('.'+d).val(v);};
const mw=function(d,w){$('.'+d).html(w);};
const mt=function(d,t){$('.'+d).text(t);};
////////////////////////////////////////////////////////////
const dr=function(d,r){$('#'+d).prop('href',r);};
const dc=function(d,c){$('#'+d).prop('checked',c);};
const dx=function(d,v){$('#'+d).val(v).change();};
const dv=function(d,v){$('#'+d).val(v);};
const dw=function(d,w){$('#'+d).html(w);};
const dt=function(d,t){$('#'+d).text(t);};
const db=function(d,s){dw(d,s);dv(d,s);};
////////////////////////////////////////////////////////////
const wrong=function(chk,msg){if(!chk){alert(msg);return(true);}return(false);};
const reask=function(chk,msg){if(chk)return(confirm(msg));return(true);};
////////////////////////////////////////////////////////////
const avalid=function(a){return(web3.utils.isAddress(a));};
const nvalid=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<=b);};
const nsmall=function(n,b){return(nvalid(n,b));};
const nlarge=function(n,s){n=s2n(n);s=s2n(s);return(n>s&&s>=0);};
const nmidle=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<b);};
////////////////////////////////////////////////////////////
const wrd=function(o,v){return(Object.keys(o).find(key=>o[key]==v));};
const prt=function(q,a,t){t=prompt(q);return(t==a);};
const n2s=function(n,d){if(!n)return('0');if(!d)d=0;n=n.toString().split('.');n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');n[1]=n[1]?'.'+n[1].substr(0,d):'';return(n[0]+n[1]);};
const w2s=function(n){return(n2s(fromWei(n),5));};
const s2n=function(s){s=parseFloat(s.toString().replace(/[^\d\.\-]/g,''));if(isNaN(s))return(0);return(s);};
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
const errCode=function(e){if(e!=null){e=e.toString();if(e.indexOf(RECEIPT)>0)return(hi_prompt_rct);e=(e.substring(e.lastIndexOf('#')));if(e){return(e);}else{return(0);}}return(null);};
const setInput=function(j){j['lt']=nowDate();return('dat:'+JSON.stringify(j)+':xut');};
const getInput=function(tx,key,div,t){web3.eth.getTransaction(tx,function(err,result){t=result['input'];t=t.substring(t.indexOf('6461743a7b')+8);t=t.substr(0,t.lastIndexOf('7d')+2);t=web3.utils.toUtf8('0x'+t);t=JSON.parse(t);console.log(t);dw(div,t[key]);});};
////////////////////////////////////////////////////////////
const toDate=function(y,m,d){return(parseInt((new Date(Date.UTC(y,m-1,d,0,0,0,0))).getTime()/1000,10));};
const nowDate=function(){return(parseInt((new Date()).getTime()/1000,10));};
const fromDate=function(n){return((new Date(n*1000)).toString());};
////////////////////////////////////////////////////////////
const hiRegex=(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'));
const loRegex=(new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'));
////////////////////////////////////////////////////////////