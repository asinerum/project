var KNN={};(function(){var n,r,t,e,a,u,l,o,i,h;l=function(n,r,t){var e,a,u,l,o,i;for(o=0,e=0,i={};e<t.length;)u=t[e].name,""+(a=t[e].measure)==""+KNN.comparisonMethods.number?void 0!==t[e].max&&null!==t[e].max?l=a(n[u],r[u],t[e].max):(console.warn("max number missing, falling back to max: 9007199254740992"),l=a(n[u],r[u],9007199254740992)):l=a(n[u],r[u]),l<1&&(i[u]=l),o+=l,e++;return[o/t.length,i]},r=function(n,r){var t;return null!=(t=n===r)?t:{1:0}},h=function(n,r){var e,a;return e=o(n),a=o(r),2*t(e,a).length/(e.length+a.length)},i=function(n,r){var t,e;if(n.length===r.length){for(t=0,e=0;t<n.length;)e+=h(n[t],r[t]),t++;return e/n.length}return 0},a=function(r,t){var e,a,u,l,o,i,h;for(i=r.split("."),h=t.split("."),l=[],o=0;o<4;)a=255-i[o],u=255-h[o],e=Math.abs(u-a),l[o]=e,o++;return 1-n(l)/1020},e=function(n,r){var t,e,u;if(n.length===r.length){for(t=0,u=0,e=0;t<n.length;)null!==n[t].match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/)&&null!==r[t].match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/)&&(u+=a(n[t],r[t]),e++),t++;return u/e}return 0},u=function(n,r,t){var e,a;return e=t-n,a=t-r,1-Math.abs(a-e)/t},o=function(n){var r,t;if(t=[],null!=n)for(r=0;r<n.length-1;)t.push(n.substr(r,2).toLowerCase()),r++;return t.sort()},t=function(n,r){var t,e,a;for(t=0,e=0,a=new Array;t<n.length&&e<r.length;)n[t]<r[e]?t++:(n[t]>r[e]||(a.push(n[t]),t++),e++);return a},n=function(n){var r,t;for(t=0,r=0;r<n.length;)t+=n[r],r++;return t},KNN.comparisonMethods={exact:r,word:h,wordArray:i,ip:a,ipArray:e,number:u},KNN.findMostSimilar=function(n,r,t,e){var a,u,o,i,h,f,c;for(o=0,i=null,a=0;a<r.length;)u=r[a],h=(c=l(u,n,t))[0],f=c[1],h>o&&(o=h,i=u),a++;return e(i,o,f)};KNN.findNearestNeighbor=function(s,t,o,a=3,l){l=s.map(((s,a)=>({dist:Math.hypot(...Object.keys(s).map((t=>o[t]-s[t]))),label:t[a]}))).sort(((s,t)=>s.dist-t.dist)).slice(0,a);return l.reduce(((s,{label:t},o)=>(s.classCounts[t]=-1!==Object.keys(s.classCounts).indexOf(t)?s.classCounts[t]+1:1,s.classCounts[t]>s.topClassCount&&(s.topClassCount=s.classCounts[t],s.topClass=t),s)),{classCounts:{},topClass:l[0].label,topClassCount:0}).topClass};KNN.Class=class{constructor(t=1,e,s){this.k=t,this.data=e,this.labels=s}distance(t,e){return Math.sqrt(t.map(((t,s)=>e[s]-t)).reduce(((t,e)=>t+e*e),0))}generateDistanceMap(t){const e=[];let s;for(let a=0,n=this.data.length;a<n;a++){const n=this.data[a],c=this.labels[a],l=this.distance(t,n);(!s||l<s)&&(e.push({index:a,distance:l,label:c}),e.sort(((t,e)=>t.distance<e.distance?-1:1)),e.length>this.k&&e.pop(),s=e[e.length-1].distance)}return e}predict(t){const e=this.generateDistanceMap(t).slice(0,this.k),s=e.reduce(((t,e)=>Object.assign({},t,{[e.label]:(t[e.label]||0)+1})),{});return{label:Object.keys(s).map((t=>({label:t,count:s[t]}))).sort(((t,e)=>t.count>e.count?-1:1))[0].label,voteCounts:s,votes:e}}};}).call(this);
var knnFindWithConfig=function(data,config,search,cbf=console.log){return(KNN.findMostSimilar(search,data,config,cbf))};
var knnFind=function(data,labels,k=3,search){return(KNN.findNearestNeighbor(data,labels,search,k))};
var knn=function(data,labels,k=3){return(new KNN.Class(k,data,labels))};