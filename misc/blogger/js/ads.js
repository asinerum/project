//////////////////////////////////////////////////
//
// (C) 2014 KOA Group
//
var ads_c2 = [];
var ads_trb = [];
/// 
/// [ImgURL, ImgTitle, LinkURL, index, LinkCaption]
ads_c2[0] = ['', '', '', 1, ''];
///
/// [ImgURL, ImgTitle, LinkURL, index]
ads_trb[0] = ['', '', '', 1];
/// 
/// 
/// 
function showAdsMenu_c1(){
}
function showAdsMenu_c2(){
  var c2_width = 48;
  var c2_height = 48;
  for(var i=0; i<ads_c2.length; i++){
    document.write('<a target="_blank" href="'+ads_c2[i][2]+'"><img width="'+c2_width+'" height="'+c2_height+'" src="'+ads_c2[i][0]+'" title="'+ads_c2[i][1]+'"/></a>&nbsp;'+ads_c2[i][4]+'<br/>');
  }
}
function showAdsMenu_c3(){
}
function showAdsMenu_c4(){
  document.write('<img width="80" src="http://whos.amung.us/widget/weil910csn66.png"/>');
}
function showAdsMenu_toprightbar(){
  var trb_width = 199;
  var trb_height = 69;
  for(var i=0; i<ads_trb.length; i++){
    document.write('<a target="_blank" href="'+ads_trb[i][2]+'"><img width="'+trb_width+'" height="'+trb_height+'" src="'+ads_trb[i][0]+'" title="'+ads_trb[i][1]+'"/></a><br/>');
  }
}
//
//////////////////////////////////////////////////