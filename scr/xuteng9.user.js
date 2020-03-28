////////////////////////////////////////////////////////////
const require=function(js){document.write('<script\tsrc="'+js+'"></script>');};
const restyle=function(ss){document.write('<link\thref="'+ss+'"\trel="stylesheet"\ttype="text/css"/>');};
////////////////////////////////////////////////////////////
restyle('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
restyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
restyle('https://fonts.googleapis.com/css?family=Garamond:400,700');
restyle('https://asinerum.github.io/project/gui/fonts.css');
restyle('https://asinerum.github.io/project/gui/style.css');
////////////////////////////////////////////////////////////
require('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
require('https://ajax.googleapis.com/ajax/libs/angularjs/1.7.6/angular.min.js');
require('https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.min.js');
require('https://cdn.jsdelivr.net/gh/ethereumjs/browser-builds/dist/ethereumjs-tx/ethereumjs-tx-1.3.3.min.js');
require('https://asinerum.github.io/project/scr/xuteng9.js');
////////////////////////////////////////////////////////////
const btnXut=function(tag,nid,a,n,i,t){if(!nid)nid='xut'+HYPHEN;a={};n=document.getElementsByTagName(tag?tag:STAR);for(i=0;i<n.length;i++){t=n[i].className;if(t&&t.indexOf(nid)===0){a[t]=[t.split(HYPHEN)[1],n[i].getAttribute('value'),n[i].getAttribute('fixed'),i];}};Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t][0]))xuteng.methods.incomeOf(a[t][0]).call(function(err,result){if(err){mw(t,'<i\tclass="fa\u0020fa-trash"></i>');}else{mw(t,'<button\tclass="axut\tbxut"\tonclick="incomeOf(\''+a[t][0]+'\',\'of-'+a[t][0]+'\');"><i\tclass="fa\u0020fa-flask"></i></button><button\tclass="axut"><span\tclass="of-'+a[t][0]+'">'+w2s(result)+'</span></button><button\tclass="axut\u0020bxut"\tonclick="mm_transfer(\''+a[t][0]+'\',g2(\''+a[t][3]+HYPHEN+a[t][0]+'\'));"><i\tclass="fa\u0020fa-diamond"></i></button><input\ttype="text"\tclass="axut\u0020bxut"\tid="'+a[t][3]+HYPHEN+a[t][0]+'"\tsize="3"\tvalue="'+(a[t][1]?Number(a[t][1]):1)+'"'+(a[t][2]?'\tdisabled':'')+'/>');}});});};
const cmtXut=function(str,a,b,i){a=str.match(/\[xut\](.*?)\[\/xut\]/g);b=str.match(/\[xut=(.*?)\]/g);for(i=0;i<a.length;i++){str=str.replace(a[i],'<b\u0020class="'+a[i].replace(/\[\/?xut\]/g,'')+'"></b>');};for(i=0;i<b.length;i++){str=str.replace(b[i],'<b\u0020class="'+b[i].slice(5).split(']')[0]+'"></b>');};return(str);};
const launch=function(mg,gw){startXuteng();if(!mg)mg=200000;if(!gw)gw=5;maxgas=mg;txgwei=gw;btnXut('b');};
const xready=function(){$(document).ready(function(){launch(150000,3);});};
////////////////////////////////////////////////////////////