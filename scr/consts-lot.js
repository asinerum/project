////////////////////////////////////////////////////////////
const adec=function(d,t=[]){while(d>=0)t.push(d--);return(t)};
const cdec=function(s,ds,c,a=[]){if(!Array.isArray(ds))return(null);s=s.toString();if(s.length%2)s+=BLANK+ZERO;while(s.length>0){c=Number(s.substr(0,2));if(!ds.includes(c))return(false);a.push(c);s=s.slice(2);};return(a);};
const decs=function(n,d=9,i,s,a=[]){i=Math.floor(Number(n));if(i==n)return([i,[0]]);s=n.toString().split(DOT)[1];if(d>9){a=cdec(s,adec(d));if(!a)return(a);return([i,a]);};if(s>d||s.length>1)return(false);return([i,[Number(s)]]);};
////////////////////////////////////////////////////////////
const GAMES={
bet1v0:{info:"",dec:1,num:1,rev:["win","lose"]},
bet1c0:{info:"",dec:1,num:1,rev:["over","under"]},
bet210:{info:"",dec:2,num:1,rev:["win","tie","lose"]},
bet310:{info:"",dec:2,num:1,rev:["home","draw","away"]},
lo1x99:{info:"",dec:99,dup:true},
lo5x36:{info:"",dec:36,num:5},
lo6x36:{info:"",dec:36,num:6},
lo6x45:{info:"",dec:45,num:6},
lo7x49:{info:"",dec:49,num:7},
};
////////////////////////////////////////////////////////////
const GAMEXUT=354;
const SDOCXUT=911;
////////////////////////////////////////////////////////////
const STRUCTTRANSFER=['address','uint256'];
const STRUCTTRANSFERFOR=['address','uint256','string'];
const FUNCIDTRANSFER='a9059cbb';
const FUNCIDTRANSFERFOR='5ce437aa';
////////////////////////////////////////////////////////////