////////////////////////////////////////////////////////////[3]
const adec=function(d,t=[]){while(d>=0)t.push(d--);return(t)};
const cdec=function(s,ds,c,a=[]){if(!Array.isArray(ds))return(null);s=s.toString();if(s.length%2)s+=BLANK+ZERO;while(s.length>0){c=Number(s.substr(0,2));if(!ds.includes(c))return(false);a.push(c);s=s.slice(2);};return(a);};
const decs=function(n,d=9,i,s,a=[]){i=Math.floor(Number(n));if(i==n)return([i,[0]]);s=n.toString().split(DOT)[1];if(d>9){a=cdec(s,adec(d));if(!a)return(a);return([i,a]);};if(s>d||s.length>1)return(false);return([i,[Number(s)]]);};
////////////////////////////////////////////////////////////[5]
const h2d=function(s,add,c,d,n,r,t){add=function(x,y){c=0;r=[];x=x.split('').map(Number);y=y.split('').map(Number);while(x.length||y.length){s=(x.pop()||0)+(y.pop()||0)+c;r.unshift(s<10?s:s-10);c=s<10?0:1;};if(c)r.unshift(c);return(r.join(''));};d='0';s.split('').forEach(function(chr){n=parseInt(chr,16);for(t=8;t;t>>=1){d=add(d,d);if(n&t)d=add(d,'1');}});return(d);};
const h2i=function(s){return(h2d(s).toString().substr(0,12));};
const h2m=function(s,m=99){return(h2i(s)%(m+1));};//Safe;
const h2n=function(h){return(parseInt(h,16));};//Unsafe;
const n2h=function(n){return(n.toString(16));};//Unsafe;
////////////////////////////////////////////////////////////[5]
const pen2de=function(pen){return(xut2de(fromWei(pen)));};//PennyToBetAmount;
const xut2de=function(xut,a,x){xut=xut.toString();x=xut.split(DOT)[1];if(!x)return({xut:parseInt(xut),de:[0]});if(x.length>14)x=x.substr(0,14);if(x.length%2>0)x=x+ZERO;a=[];while(x.length>0){a.push(Number(x.substr(0,2)));x=x.slice(2);};return({xut:xut/a.length,de:a});};//XutToBetAmount;
const xut2lo=function(xut,a,x){xut=xut.toString();x=xut.split(DOT)[1];if(!x)return({xut:parseInt(xut),lo:[0]});if(x.length>14)x=x.substr(0,14);if(x.length%2>0)x=x+ZERO;a=[];while(x.length>0){a.push(Number(x.substr(0,2)));x=x.slice(2);};return({xut:Number(xut),lo:a});};//XutToLottoNums;
const de2win=function(win,pen,mul,x,i,s){win=Number(win);x=pen2de(pen);if(!mul)mul=70;if(!x.de.includes(win))return(0);s=0;for(i=0;i<x.de.length;i++){if(x.de[i]==win)s+=mul*x.xut;}return(s);};//CalculateWinningAmount;
const arrdup=function(arr,m,i){if(!Array.isArray(arr))return(null);if(arr.length<=1)return(false);m={};for(i=0;i<arr.length;i++){if(m[arr[i]])return(true);m[arr[i]]=true;}return(false);};
////////////////////////////////////////////////////////////[5]
const ethnow=function(){return(parseInt(Date.now()/1000,10));};//~forms.nowDate();//CurrentEthereumTime;
const estamp=function(yy,mo,dd,hh=12,mi=0){return(parseInt((new Date(Date.UTC(yy,mo-1,dd,hh,mi,0))).getTime()/1000,10));};//EthereumTime;
const trange=function(begin,end,max=30,t){try{begin=estamp(begin[0],begin[1],begin[2],0);end=estamp(end[0],end[1],end[2],0);t=(end-begin)/60/60/24;if(t<=0||t>max)return(0);return({begin,end});}catch(e){return(null);}};
const getUts=function(year,month,day,hour,min,stamp,time,t){t=estamp(gv(year),gv(month),gv(day),gv(hour),gv(min));window.timestamp=t;dw(stamp,window.timestamp);dw(time,STAR+fromDate(window.timestamp));return(window.timestamp);};
const lotnow=function(){window.now=(new Date(1000*ethnow()));window.lottime=[window.now.getFullYear(),window.now.getMonth()+1,window.now.getDate(),12,0];window.lotstamp=estamp(window.lottime[0],window.lottime[1],window.lottime[2],window.lottime[3],window.lottime[4],0);return({lotstamp:window.lotstamp,lottime:window.lottime});};
////////////////////////////////////////////////////////////[4]
const hexCut=function(str){return(hexUtf(strCut(str,'7b226f626a22','7d7d')));};
const hexUtf=function(str){return(decodeURIComponent(str.replace(/[0-9a-f]{2}/g,'%$&')));};
const hexObj=function(str){str=hexCut(str);try{str=JSON.parse(str);}catch(e){str={obj:{raw:str}};};return(str);};
const strCut=function(str,sb,se){if(!sb)sb='{';if(!se)se='}';str=str.substring(str.indexOf(sb));return(str.substr(0,str.lastIndexOf(se)+se.length));};
////////////////////////////////////////////////////////////[2]
const dedata=function(hexinput,s){s=depara(STRUCTTRANSFERFOR,hexinput);if(!s)s=depara(STRUCTTRANSFER,hexinput);if(!s)return(null);return({data:s,func:hexinput.slice(2).substr(0,8)});};
const depara=function(struct,hexinput){try{return(web3.eth.abi.decodeParameters(struct,HEXINIT+hexinput.slice(10)));}catch(e){return(null);}};
////////////////////////////////////////////////////////////[2]
const Contract=function(scid='usdt'){return(new web3.eth.Contract(EXTOKENS[scid].abi,EXTOKENS[scid].addr));};
const gfromWei=function(w){return(web3.utils.fromWei(w.toString(),GWEI));};
////////////////////////////////////////////////////////////[2]
const cmpArray=function(a=[],to=[],c=0){a.forEach(i=>{if(to.includes(i))c++});return(c);};//NumberArraysOnly
const lotArray=function(dad,son,n,i){n=arrdup(dad);if(n==null||n)return(0);n=arrdup(son);if(n==null||n)return(0);if(dad.length<son.length)return(0);n=0;for(i=0;i<dad.length;i++){if(son.includes(dad[i]))n++;}return(n);};
////////////////////////////////////////////////////////////