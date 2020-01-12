////////////////////////////////////////////////////////////
const hashParam=function(p,t){if(!t)t=document.location.hash.substring(1);if(!t)return(BLANK);p=RegExp('[?&]'+p.replace(/[\[\]]/g,'\\$&')+'(=([^&#]*)|&|#|$)');p=p.exec(t);if(!p)return(BLANK);if(!p[2])return(BLANK);return(decodeURIComponent(p[2].replace(/\+/g,SPACE)));};
////////////////////////////////////////////////////////////
const getCookie=function(cn,t){if(!t)t=document;try{return(t.cookie.match('(^|;)\s?'+cn+'=([^;]*)(;|$)')[2]);}catch(err){return(BLANK);}};
const setCookie=function(cn,cv,dd,t){if(!dd)dd=365;dd=(new Date(nowDate()*1000+dd*24*60*60*1000)).toUTCString();if(!t)t=document;return(t.cookie=cn+EQUAL+cv+SEMI+'expires'+EQUAL+dd+SEMI+'path'+EQUAL+SLASH);};
////////////////////////////////////////////////////////////