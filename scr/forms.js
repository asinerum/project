////////////////////////////////////////////////////////////
String.prototype.escape=function(){return(this.replace(/"/g,'\\"'))};
const safeJSON=function(keys,vals,i=0,a=[]){if(keys.length!=vals.length)throw(null);for(;i<keys.length;i++)a.push(`"${keys[i]}":"${vals[i].toString().escape()}"`);return('{'+a.join(',')+'}');};
////////////////////////////////////////////////////////////
const trim=function(s){if(s)return(s.replace(/^\s+|\s+$/g,BLANK));return(BLANK);};
const errCode=function(e){if(e!=null){e=e.toString();if(e.indexOf(']')>0)return(hi_alert_data);if(e.indexOf(OxOO)>0)return(hi_prompt_err);if(e.indexOf(RECEIPT)>0)return(hi_prompt_rct);e=(e.substring(e.lastIndexOf(HASH)));if(e){return(e);}else{return(0);}}return(null);};
const funcName=function(){return(funcName.caller.name);};
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
const n2s=function(n,d){if(!n)return(ZERO);if(!d)d=0;n=n.toString().split(DOT);n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,COMMA);n[1]=n[1]?DOT+n[1].substr(0,d):EMPTY;return(n[0]+n[1]);};
const s2n=function(s){s=parseFloat(s.toString().replace(/[^\d\.\-]/g,EMPTY));if(isNaN(s))return(0);return(s);};
const w2s=function(n,dec=5,len=22){n=n2s(fromWei(n),dec);return(n.length<len?n:ASK);};
const s2w=function(s){return(toWei(s2n(s).toString()));};
const toHex=function(s){return(web3.utils.toHex(s));};
const toHash=function(s){return(web3.utils.keccak256(s,{encoding:HEX}));};
const jtoHash=function(j){return(toHash(JSON.stringify(j)));};
const toWei=function(n){return(web3.utils.toWei(n.toString(),ETHER));};
const gtoWei=function(n){return(web3.utils.toWei(n.toString(),GWEI));};
const fromWei=function(w){return(web3.utils.fromWei(w.toString(),ETHER));};
const fromGwei=function(g){return(fromWei(gtoWei(g)));};
const gfromWei=function(w){return(web3.utils.fromWei(w.toString(),GWEI));};
const fromHex=function(h){return(web3.utils.hexToNumberString(h));};
const fromWHex=function(h){return(fromWei(fromHex(h)));};
const s2wHex=function(s){return(toHex(s2w(s)));};
const g2wHex=function(g){return(toHex(gtoWei(g)));};
const n2Hex=function(n,dec=18){return(toHex(toDec(n,dec)));};
const toDec=function(n,dec=18,a,s,u){n=n.toString();dec=parseInt(dec);if(isNaN(n)||isNaN(dec)||n<=0)return(ZERO);a=n.split(DOT);s=a[0];u=a[1];if(s||(s=ZERO),u||(u=ZERO),u.length>dec)return(ZERO);for(;u.length<dec;)u+=ZERO;return(big(s).mul(big(10).pow(big(dec))).add(big(u)).toString());};
////////////////////////////////////////////////////////////
const toSat=function(n){return(_Decimal(n).absoluteValue().mul(_Decimal(100000000)).toInteger().toString());};
const fromSat=function(s){return(_Decimal(s).absoluteValue().toInteger().div(_Decimal(100000000)).toString());};
const satChange=function(satBal,satAmt,satFee){satBal=big(satBal);satAmt=big(satAmt);satFee=big(satFee);if(satBal.lt(satAmt.add(satFee)))throw(ERROR);return(satBal.sub(satAmt).sub(satFee).toString());};
const bitChange=function(bal,amt,fee){return(satChange(toSat(bal),toSat(amt),toSat(fee)));};
////////////////////////////////////////////////////////////
const setInput=function(obj){return(JSON.stringify({obj:obj}));};
const getInput=function(tx,cbf=console.log){if(!hvalid(tx))return(cbf(ERROR,null));web3.eth.getTransaction(tx,function(err,result){if(err||!result||!result.input)return(cbf(err,null));cbf(null,hexObj(result.input).obj);});};
////////////////////////////////////////////////////////////
const toDate=function(y,m,d){return(parseInt(_Date(Date.UTC(y,m-1,d,0,0,0,0)).getTime()/1000,10));};
const nowDate=function(){return(parseInt(_Date(0).getTime()/1000,10));};
const fromDate=function(n){return(_Date(n*1000).toString());};
////////////////////////////////////////////////////////////
const hiRegex=_Regex('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
const loRegex=_Regex('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
const hashRegex=_Regex('^0x([A-Fa-f0-9]{64})$');
////////////////////////////////////////////////////////////