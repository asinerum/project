////////////////////////////////////////////////////////////
const big=function(val){return(new web3.utils.BN(val))};
String.prototype.t2e=function(tpe){return(s2n(this)/s2n(tpe))};/*tpe=pcv=pcp*/
String.prototype.e2t=function(tpe){return(s2n(tpe)*s2n(this))};/*tpe=pcv=pcp*/
String.prototype.p2w=function(ppe){return(String(10**18).mul(this.toString()).div(String(ppe)))};
String.prototype.w2p=function(ppe){return(String(ppe).mul(this.toString()).div(String(10**18)))};
String.prototype.add=function(bnum){return(big(this.toString()).add(big(bnum)).toString())};
String.prototype.div=function(bnum){return(big(this.toString()).div(big(bnum)).toString())};
String.prototype.mod=function(bnum){return(big(this.toString()).mod(big(bnum)).toString())};
String.prototype.mul=function(bnum){return(big(this.toString()).mul(big(bnum)).toString())};
String.prototype.pow=function(bnum){return(big(this.toString()).pow(big(bnum)).toString())};
String.prototype.sus=function(bnum){return(big(this.toString()).sub(big(bnum)).toString())};
String.prototype.eq=function(bnum){return(big(this.toString()).eq(big(bnum)))};
String.prototype.ge=function(bnum){return(big(this.toString()).gte(big(bnum)))};
String.prototype.gt=function(bnum){return(big(this.toString()).gt(big(bnum)))};
String.prototype.le=function(bnum){return(big(this.toString()).lte(big(bnum)))};
String.prototype.lt=function(bnum){return(big(this.toString()).lt(big(bnum)))};
////////////////////////////////////////////////////////////
String.prototype.is3ks=function(){try{return(avalid(JSON.parse(this).address))}catch(e){return(false)}};
String.prototype.isKey=function(){return(hvalid(this)||hvalid(HEXINIT+this))};
String.prototype.isBip=function(){return(bipRegex.test(this))};
////////////////////////////////////////////////////////////
String.prototype.escape=function(){return(this.replace(/"/g,'\\"'))};
String.prototype.same=function(as,sens=true,trim=false,c,t){c=this;t=String(as);if(trim){c=c.trim();t=t.trim()}if(!sens){c=c.toLowerCase();t=t.toLowerCase()}return(c==t)};
String.prototype.as=function(as){return(this.same(as,false,true))};
////////////////////////////////////////////////////////////
String.prototype.nums=function(vol='x',min=0,max=99,nint=true,s,r=true){this.split(COMMA).forEach(p=>{s=p.split(vol);if(isNaD(s[0])||s[0]<min||s[0]>max||(nint&&!Number.isInteger(Number(s[0]))))return(r=0);if(s[1]&&(isNaD(s[1])||s[1]<=0))return(r=null)});return(r)};
String.prototype.lode=function(){return(this.nums()||this.nums(COLON))};
////////////////////////////////////////////////////////////
Array.prototype.sum=function(){return(this.reduce((a,b)=>(Number(a)+Number(b))))};
//Object.prototype.getKey=function(val){return(this.getkey(val,'same'))};
//Object.prototype.getkey=function(val,cmp='as',k=null){Object.keys(this).forEach(key=>{if(String(this[key])[cmp](val))return(k=key)});return(k)};
const getKey=function(obj,val){return(getkey(obj,val,'same'))};
const getkey=function(obj,val,cmp='as',k=null){Object.keys(obj).forEach(key=>{if(String(obj[key])[cmp](val))return(k=key)});return(k)};
const safeJSON=function(keys,vals,i=0,a=[]){if(keys.length!=vals.length)throw(null);for(;i<keys.length;i++)a.push(`"${keys[i]}":"${vals[i].toString().escape()}"`);return('{'+a.join(',')+'}');};
////////////////////////////////////////////////////////////
const trim=function(s){if(s)return(s.replace(/^\s+|\s+$/g,BLANK));return(BLANK);};
const errCode=function(e){if(e!=null){e=e.toString();if(e.indexOf(']')>0)return(hi_alert_data);if(e.indexOf(OxOO)>0)return(hi_prompt_err);if(e.indexOf(RECEIPT)>0)return(hi_prompt_rct);e=(e.substring(e.lastIndexOf(HASH)));if(e){return(e);}else{return(0);}}return(null);};
const funcName=function(){return(funcName.caller.name);};
////////////////////////////////////////////////////////////
const isNaD=function(n){return(isNaN(n)||hexRegex.test(n))};
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
const s2n=function(s=0){if(!s)return(0);s=parseFloat(s.toString().replace(/[^\d\.\-]/g,EMPTY));if(isNaN(s))return(0);return(s);};
const w2s=function(n,dec=5,len=22){n=n2s(fromWei(n),dec);return(n.length<len?n:ASK);};
const s2w=function(s){return(toWei(s2n(s).toString()));};
const h2t=function(h){if(!h)return('');return(web3.utils.padLeft(h,64));};
const toHex=function(s){if(!s)return('0x0');return(web3.utils.toHex(s));};
const toHash=function(s){return(web3.utils.keccak256(s,{encoding:HEX}));};
const solHash=function(...args){return(web3.utils.soliditySha3(...args));};
const jtoHash=function(j){return(toHash(JSON.stringify(j)));};
const toWei=function(n){return(web3.utils.toWei(n.toString(),ETHER));};
const gtoWei=function(n){return(web3.utils.toWei(n.toString(),GWEI));};
const fromWei=function(w){return(web3.utils.fromWei(w.toString(),ETHER));};
const fromGwei=function(g){return(fromWei(gtoWei(g)));};
const gfromWei=function(w){return(web3.utils.fromWei(w.toString(),GWEI));};
const fromHex=function(h){return(web3.utils.hexToNumberString(h));};
const fromNum=function(n){return(web3.utils.numberToHex(n));};
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
const long=function(dur,tun='M'){dur*=1000;return(tun=='H'?dur*60*60:(tun=='M'?dur*60:dur));};
const mindif=function(hextime,dec=1){return(n2s((nowDate()-fromHex(hextime))/60,dec)+SPACE+'mins');};
const toDate=function(y,m,d){return(parseInt(_Date(Date.UTC(y,m-1,d,0,0,0,0)).getTime()/1000,10));};
const nowDate=function(){return(parseInt(_Date(0).getTime()/1000,10));};
const FromDate=function(n){return(_Date(n*1000).toUTCString())};
const fromDate=function(n){return(_Date(n*1000).toString());};
const day=function(){return(_Date(0).getDay())};
const date=function(){return(_Date(0).getDate())};
const month=function(){return(_Date(0).getMonth()+1)};
const year=function(){return(_Date(0).getFullYear())};
const timezone=function(){return(parseInt(_Date(0).getTimezoneOffset()/60,10))};
const markDate=function(mark=10){return(nowDate()+(24-mark+timezone())*60*60)};
const dateMark=function(mark=10){return(toDate(year(),month(),date())+mark*60*60)};
const datePast=function(mark=10,days=1){return(toDate(year(),month(),date())+mark*60*60-days*24*60*60)};
const Countdown=function(divTimer,mark=10,fn=db){setInterval(function(){fn(divTimer,countdown(mark))},1000)};
const countdown=function(mark=10,n,e,d,h,m,s,M,S){n=nowDate();e=dateMark(mark);while(e<n){e+=24*60*60};d=e-n;h=parseInt(d/3600,10);d-=h*3600;m=parseInt(d/60,10);s=parseInt(d%60,10);M=m<10?ZERO+m:m;S=s<10?ZERO+s:s;return(`${h}:${M}:${S}`)};
////////////////////////////////////////////////////////////
const hiRegex=_Regex('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
const loRegex=_Regex('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
const bipRegex=_Regex('^([A-Za-z0-9]{58})$');
const hexRegex=_Regex('^0x([A-Fa-f0-9])+$');
const hashRegex=_Regex('^0x([A-Fa-f0-9]{64})$');
////////////////////////////////////////////////////////////
const numsInRange=function(n,rl,rh,fn=null){if(fn)n=fn(n);return(n>=rl&&n<=rh);};
const positiveStr=function(n){return(s2n(n)>0);};
const positiveNum=function(n){return(Number(n)&&n>0);};
const positiveInt=function(n){return(Number.isInteger(Number(n))&&n>0);};
const twoHexEqual=function(h1,h2){return(fromHex(h1)===fromHex(h2));};
////////////////////////////////////////////////////////////