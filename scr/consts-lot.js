////////////////////////////////////////////////////////////
const GAMES={
tossup:{info:function(x,t,n,ra){return(x*(n?1:0)*ra[1-n])},dec:1,num:1},/*t=0*/
bet1v0:{info:function(x,i,n,ra){return(x*(n?1:0)*ra[1-i])},dec:1,num:1,rev:["win","lose"]},/*i=index*/
bet1c0:{info:function(x,i,n,ra){return(x*(n?1:0)*ra[1-i])},dec:1,num:1,rev:["over","under"]},/*i=index*/
bet210:{info:function(x,i,n,ra){return(x*(n?1:0)*ra[2-i])},dec:2,num:1,rev:["win","tie","lose"]},/*i=index*/
bet310:{info:function(x,i,n,ra){return(x*(n?1:0)*ra[2-i])},dec:2,num:1,rev:["home","draw","away"]},/*i=index*/
de1x99:{info:function(x,c,n,ra){return(x/(c?c:1)*(n<=c?n:0)*ra[0])},dec:99,dup:true,rev:["ext"]},/*c=count*/
lo1x99:{info:function(x,c,n,ra){return(x/(c?c:1)*(n<=c?n:0)*ra[0])},dec:99,dup:true},/*c=count*/
lo5x36:{info:function(x,t,n,ra){return(x*ra[5-n])},dec:36,num:5},/*t=0*/
lo6x36:{info:function(x,t,n,ra){return(x*ra[6-n])},dec:36,num:6},/*t=0*/
lo6x45:{info:function(x,t,n,ra){return(x*ra[6-n])},dec:45,num:6},/*t=0*/
lo7x49:{info:function(x,t,n,ra){return(x*ra[7-n])},dec:49,num:7},/*t=0*/
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