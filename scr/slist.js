////////////////////////////////////////////////////////////
const defiProgRead=function(status,divId,divList,page=1,NOS=25,i){
showLoad(status);i=gv(divId);if(!i)i=ZEROADDR;if(!avalid(i))return(dw(status,_errInput));if(window.searchitem!=i){window.searchitem=i;window.resultpage=undefined};if(window.resultpage===undefined){window.resultpage=page>1?(page>>0)-1:0}else{window.resultpage+=1};db(divList,EMPTY);
ercCall(xutengFemt,MPROGNOS,[i,DATAFORM,BUYTOKEN?'E':'T',NOS*window.resultpage],status,null,function(err,res){checkResult(err,res,status);console.warn('RESULTSET_DATA',res);window.resultsize=Number(res.size);window.resultnos=res.nos;for(let j=0;j<NOS;j++){if(window.resultnos[j]==0){db(status,_errFinds);break;}
ercCall(xutengFemt,MPROGGET,[window.resultnos[j]],status,null,function(err,res){checkResult(err,res,status);console.warn('ITEM',window.resultnos[j],res);if(res.value!=0&&(res.time==0||res.time>=nowDate())){da(divList,htmlItem(window.resultnos[j],res))}});}});};
////////////////////////////////////////////////////////////
const htmlItem=function(id,item,popup,dcls,bcls){if(!dcls)dcls=BUYTOKEN?'gb':'ob';if(!bcls)bcls=BUYTOKEN?'sell':'buy';if(!popup)popup=BUYTOKEN?'./gemtsell.html':'./gemtbuy.html';popup+='#id='+id;return(`<div\tclass="${dcls}">#${id}<br/>${dispRate(item.ppe)}<br/>${dispAmnt(item.value)}<div\tclass="${bcls}"\tonclick="window.open('${popup}','_blank')"></div></div>`);};
const htmlWarn=function(text){return(`<span\tclass="textwarn">${text}</span>`);};
const dispAmnt=function(data,dec=5,lang='en'){return(`${LABELS[lang]._label_DefiProgSum.replace(CAPCLASSCOIN,COIN)}\t${htmlWarn(w2s(data,dec))}`);};
const dispRate=function(data,dec=5,lang='en'){return(`${LABELS[lang]._label_DefiProgAPR.replace(CAPCLASSCOIN,COIN)}\t${htmlWarn(w2s(data,dec*2))}`);};
const dispTime=function(data,pst=0,lang='en'){return(`${LABELS[lang]._label_DefiProgAge.replace(CAPCLASSCOIN,COIN)}\t${htmlWarn(showItemAge(data,pst))}`);};
const dispUser=function(data,xxx=0,lang='en'){return(`${LABELS[lang]._label_DefiProgOwn.replace(CAPCLASSCOIN,COIN)}\t${htmlWarn(showAddrUrl(data,xxx))}`);};
////////////////////////////////////////////////////////////
window.menu.onDefiProgRead=function(){defiProgRead('form_status','pro_id','list');}
window.menu.onDefiProgNext=window.menu.onDefiProgRead;
window.menu.onDefiProgReId=window.menu.onDefiProgRead;
window.menu.goDefiProgReId=window.menu.onDefiProgRead;
////////////////////////////////////////////////////////////