////////////////////////////////////////////////////////////
/// window.menu;
/// window.web3;
/// window.xuteng;
/// window.rpcServer;
/// window.btcnet='bitcoin';
////////////////////////////////////////////////////////////
var COIN='ETH';
var TOKEN='XUT';
var LANGUAGE='en';
var CONTRACT=XUTENG;
var SCABI=ABIXUTENG;
var network=MAINNET;
var networkChainId=1;
var contractAddress;
var contractScanner;
var networkStyle;
////////////////////////////////////////////////////////////
var BUYTOKEN=false;
var DATAFORM='post';
////////////////////////////////////////////////////////////
var sestime=900000;
var refresh=5000;
var maxgas=200000;
var txgwei=1;
var estgas=0;
var gasfee=0;
////////////////////////////////////////////////////////////
var newaccount={};
var netkeys={};
var accounts={};
var keypairs={};
var password='';
var senderPte='';
var senderId='test';
var sender='';
var accountOptions=optnAccount();
////////////////////////////////////////////////////////////
var txreceipt={};
var sendingEth=0;
var sendingAbi=null;
var sendingFunc=null;
////////////////////////////////////////////////////////////
var sellTpe=0;
var buyTpe=0;
var xutEth=0;
var xutXut=0;
var userEth=0;
var userXut=0;
var userRole=0;
var userTick=0;
var userExpt=0;
var userRegs=0;
var userReg=false;
var sysRegFee=0;
var pteRegFee=0;
var contType=0;
var typePriceXut=0;
var typePriceEth=0;
var userBuysCount=0;
var userSellCount=0;
////////////////////////////////////////////////////////////
var buyAllowed=false;
var sellAllowed=false;
var transferAllowed=false;
var exchangeAllowed=false;
////////////////////////////////////////////////////////////
var lastTxHash={};
var lastTxHashId='_txhash';
var lastTxHashClass='class_txhash';
////////////////////////////////////////////////////////////