////////////////////////////////////////////////////////////
const clearTags=function(tag='input'){$(COLON+tag).val(EMPTY);};
const clearPwds=function(){$('input:password').val(SYMBOL);};
////////////////////////////////////////////////////////////
const ww=function(d,w){return(warn(d,w));};
const prt=function(q,a,t){t=prompt(q);return(t==a);};
const warn=function(d,w){dw(d,'<span\tclass="textwarn">'+w+'</span>');};
const tcopy=function(e,s){e=document.getElementById(e);if(!e.value)return;e.select();e.setSelectionRange(0,99999);document.execCommand('copy');alert(s);};
const dupid=function(es,is,e,i,n,d){es=document.getElementsByTagName(STAR);is=[];for(i=0,n=es.length;i<n;++i){e=es[i];if(e.id)is.push(e.id);}d=arr=>arr.filter((item,index)=>arr.indexOf(item)!=index);return(d(is));};
const idcap=function(es,is,e,i,n,d=['_label','_header','_button','_note']){es=document.getElementsByTagName(STAR);is={};for(i=0,n=es.length;i<n;++i){e=es[i];if(e.id&&e.innerHTML&&d.some(s=>e.id.includes(s)))is[e.id]=e.innerHTML;};return(is);};
const chcap=function(caps){if(!caps)caps=idcap();Object.keys(caps).forEach(function(key){if(!LABELS.en[key])console.log(key+COLON,'"'+caps[key]+'",');});};
////////////////////////////////////////////////////////////
const hashParam=function(p,t){if(!t)t=document.location.hash;if(!t)return(BLANK);p=RegExp('[#?&]'+p.replace(/[\[\]]/g,'\\$&')+'(=([^&#]*)|&|#|$)');p=p.exec(t);if(!p)return(BLANK);if(!p[2])return(BLANK);return(decodeURIComponent(p[2].replace(/\+/g,SPACE)));};
const setCookie=function(cn,cv,dd,t){if(!dd)dd=365;dd=_Date(nowDate()*1000+dd*24*60*60*1000).toUTCString();if(!t)t=document;return(t.cookie=cn+EQUAL+cv+';expires='+dd+';path=/');};
const getCookie=function(cn,t){if(!t)t=document;try{return(t.cookie.match('(^|;)\s?'+cn+'=([^;]*)(;|$)')[2]);}catch(err){return(BLANK);}};
const setAction=function(e,self,attribute,actionid){e=(e&&e.target).getAttribute(attribute);if(e){self[actionid+e]()}};
////////////////////////////////////////////////////////////
const setStyle=function(d,s){$(d).removeClass().addClass(s);};
const setClick=function(d,ha,sa){$(document).ready(function(){$(DOT+ha).click(function(){hide(d);});$(DOT+sa).click(function(){show(d);});});};
const setCheck=function(option,button){$(HASH+button).on('click',function(){dc(option,true);return(false);});};
const getCheck=function(name){return($('input[name="'+name+'"]:checked').val());};
const genArray=function(d,i=7,v=[],t=true){while(t&&i--){t=g2(d+i);if(t)v.push(t)};return(v);};
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
const gv=function(d){return(trim($(HASH+d).val()));};
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
const dbm=function(md,s){md.forEach((item)=>{db(item,s)});};
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