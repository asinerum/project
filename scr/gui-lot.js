////////////////////////////////////////////////////////////[1]
const dwMyGameProfile=function(div,dat){dw(div,
'<br/>FORMAT:&nbsp;'+dat.frm+
'<br/>MIN BET:&nbsp;'+dat.min+
'<br/>MAX BET:&nbsp;'+dat.max+
'<br/>FINISH:&nbsp;'+fromDate(dat.uts)+
'<br/>START:&nbsp;'+fromDate(dat.txUts)+
'<br/>OWNER:&nbsp;'+dat.txAuthor+
'<br/>ODDS:&nbsp;'+dat.odd+
'<br/>NAME:&nbsp;'+(dat.dat?dat.dat.name:undefined));};
////////////////////////////////////////////////////////////[1]
const dwMyAddrProfile=function(div,dat){dw(div,
'<br/>WALLET:&nbsp;'+dat.txAuthor+
'<br/>SIGNUP:&nbsp;'+fromDate(dat.txUts)+
'<br/>NAME:&nbsp;'+(dat.dat?dat.dat.name:undefined)+
'<br/>FILE:&nbsp;'+(dat.dat?dat.dat.text:undefined)+
'<br/>STYLE:&nbsp;'+(dat.dat?dat.dat.style:undefined));};
////////////////////////////////////////////////////////////