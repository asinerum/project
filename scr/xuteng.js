////////////////////////////////////////////////////////////
const ABIXTOKEN=[{"constant":true,"inputs":[],"name":"basicRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ANNSEC","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"refnosOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games","outputs":[{"name":"eth","type":"bool"},{"name":"close","type":"uint256"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"result","type":"uint256"},{"name":"name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"randomKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"}],"name":"keygen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"refAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plays","outputs":[{"name":"open","type":"uint256"},{"name":"bet","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"player","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timeReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"pay","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"rewardStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAGE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"close","type":"uint256"},{"name":"value","type":"uint256"},{"name":"petris","type":"uint256[3]"},{"name":"name","type":"string"},{"name":"note","type":"string"}],"name":"start","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"key","type":"string"},{"name":"form","type":"string"},{"name":"skip","type":"uint256"},{"name":"limit","type":"uint256"}],"name":"refnos","outputs":[{"name":"size","type":"uint256"},{"name":"nos","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"petris","type":"uint256[3]"}],"name":"change","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"refno","type":"uint256"},{"name":"player","type":"address"}],"name":"PLAY","outputs":[{"name":"val","type":"uint256"},{"name":"bet","type":"uint256"},{"name":"petri","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tos","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"note","type":"string"}],"name":"transferToMany","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"refno","type":"uint256"}],"name":"GAME","outputs":[{"name":"petris","type":"uint256[3]"},{"name":"leng","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"}],"name":"numgen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referee","type":"address"}],"name":"ref","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blockPayouts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"result","type":"uint256"}],"name":"finish","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bstr","type":"bytes32"}],"name":"b2i","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"bet","type":"uint256"},{"name":"value","type":"uint256"}],"name":"join","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":false,"name":"petris","type":"uint256[3]"}],"name":"Change","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"bet","type":"uint256"}],"name":"Join","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"}],"name":"Post","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Acquire","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":false,"name":"referee","type":"address"}],"name":"Ref","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIREMT=[{"constant":true,"inputs":[],"name":"basicRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ANNSEC","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"refnosOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAXPETRI","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"close","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"invests","outputs":[{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"randomKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"}],"name":"keygen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"refAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"withdraw","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timeReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"value","type":"uint256"}],"name":"program","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"rewardStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAGE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"key","type":"string"},{"name":"form","type":"string"},{"name":"skip","type":"uint256"},{"name":"limit","type":"uint256"}],"name":"refnos","outputs":[{"name":"size","type":"uint256"},{"name":"nos","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tos","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"note","type":"string"}],"name":"transferToMany","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"programs","outputs":[{"name":"eth","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"open","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lottoVal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"}],"name":"numgen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referee","type":"address"}],"name":"ref","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blockPayouts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lottoMod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"invest","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"bstr","type":"bytes32"}],"name":"b2i","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"petri","type":"uint256"},{"indexed":true,"name":"open","type":"uint256"}],"name":"Programing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Investing","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"closer","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Close","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"drawer","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"}],"name":"Post","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Acquire","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":false,"name":"referee","type":"address"}],"name":"Ref","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIUVAULT=[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"adminList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"xerc20","type":"address"},{"name":"id","type":"string"}],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"}],"name":"insert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"}],"name":"get","outputs":[{"name":"token","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"string"}],"name":"check","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"select","outputs":[{"name":"size","type":"uint256"},{"name":"users","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"transferOf","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"xerc20","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"transferToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"transferCoin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIVAULTPRO=ABIUVAULT;
////////////////////////////////////////////////////////////
const ABIVAULT=[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"adminList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"ua","type":"address"}],"name":"insert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"select","outputs":[{"name":"size","type":"uint256"},{"name":"users","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"xerc20","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"transferToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"transferCoin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIBROKER=[{"constant":false,"inputs":[{"name":"xerc20","type":"address"},{"name":"tos","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"note","type":"string"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIBROKERE=[{"constant":false,"inputs":[{"name":"tos","type":"address[]"},{"name":"values","type":"uint256[]"},{"name":"note","type":"string"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIASSETS=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"refnosOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unpost","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bonuses","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"},{"name":"uai","type":"uint256"}],"name":"keygen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"estates","outputs":[{"name":"time","type":"uint256"},{"name":"fund","type":"uint256"},{"name":"asset","type":"address"},{"name":"price","type":"uint256"},{"name":"forSale","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"key","type":"string"},{"name":"form","type":"string"},{"name":"skip","type":"uint256"}],"name":"refnos","outputs":[{"name":"size","type":"uint256"},{"name":"nos","type":"uint256[25]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"project","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_project","type":"address"},{"name":"_supply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"asset","type":"address"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Asset","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Get","type":"event"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"}],"name":"setProject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"addr","type":"address"}],"name":"postEstate","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEstate","outputs":[{"name":"ePrice","type":"uint256"},{"name":"eOwner","type":"address"},{"name":"eForm","type":"uint8"},{"name":"eName","type":"string"},{"name":"eSymbol","type":"string"},{"name":"eAuthor","type":"string"},{"name":"eContent","type":"string"},{"name":"eSale","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"selfSupply","type":"uint256"}],"name":"lottoNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lottoNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
////////////////////////////////////////////////////////////
const ABIESTATES=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"forSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"form","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"content","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_form","type":"uint8"},{"name":"_content","type":"string"},{"name":"_author","type":"string"},{"name":"_price","type":"uint256"},{"name":"_forSale","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_forSale","type":"bool"}],"name":"setSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIESTATE=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"forSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"form","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"content","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_form","type":"uint8"},{"name":"_content","type":"string"},{"name":"_author","type":"string"},{"name":"_price","type":"uint256"},{"name":"_forSale","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_forSale","type":"bool"}],"name":"setSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIEXET=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"listedCoins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"coin","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"symbolsList","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"fitValue","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"limits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unpost","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"wallet","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"offerRef","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"activeAdmins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"listedAdmins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"lockedCoins","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"adminsList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"surf","type":"uint256"},{"name":"askCoin","type":"bytes32"},{"name":"ownCoin","type":"bytes32"},{"name":"ask2own","type":"uint256"},{"name":"value","type":"uint256"}],"name":"who","outputs":[{"name":"found","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"askCoin","type":"bytes32"},{"name":"ownCoin","type":"bytes32"},{"name":"ask2own","type":"uint256"},{"name":"value","type":"uint256"},{"name":"taken","type":"uint256"},{"name":"maker","type":"address"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"coinPrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"askCoin","type":"bytes32"},{"name":"ownCoin","type":"bytes32"},{"name":"ask2own","type":"uint256"},{"name":"value","type":"uint256"},{"name":"time","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"supplies","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"sysCost","type":"uint256"},{"name":"ethCost","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"active","type":"bool"}],"name":"Admin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"coinSymbol","type":"string"},{"indexed":false,"name":"coinName","type":"string"},{"indexed":false,"name":"maker","type":"address"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"Coin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"coinSymbol","type":"string"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"coinSymbol","type":"string"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"coin","type":"bytes32"},{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Move","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"askCoin","type":"bytes32"},{"indexed":true,"name":"ownCoin","type":"bytes32"},{"indexed":false,"name":"ask2own","type":"uint256"},{"indexed":true,"name":"maker","type":"address"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"paidValue","type":"uint256"}],"name":"Buy","type":"event"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"active","type":"bool"}],"name":"adminer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"coinSymbol","type":"string"},{"name":"coinName","type":"string"},{"name":"rate","type":"uint256"}],"name":"coiner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"coin","type":"bytes32"}],"name":"lock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"coin","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"lim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"coinSymbol","type":"string"},{"name":"to","type":"address"}],"name":"deposit","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"coinSymbol","type":"string"}],"name":"deposit","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"coinSymbol","type":"string"},{"name":"value","type":"uint256"}],"name":"withdraw","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"coin1","type":"bytes32"},{"name":"value1","type":"uint256"},{"name":"coin2","type":"bytes32"}],"name":"swap","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lens","outputs":[{"name":"admins","type":"uint256"},{"name":"symbols","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
////////////////////////////////////////////////////////////
const ABILEFT=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pennyRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"upVote","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"votes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"voteSession","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Get","type":"event"},{"constant":false,"inputs":[],"name":"download","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"upload","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"clear","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"upvote","type":"bool"}],"name":"vote","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"}],"name":"status","outputs":[{"name":"rate","type":"uint256"},{"name":"supply","type":"uint256"},{"name":"ethFund","type":"uint256"},{"name":"allVotes","type":"uint256[2]"},{"name":"userVotes","type":"uint256[2]"},{"name":"userFund","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unpost","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"}];
////////////////////////////////////////////////////////////
const ABINEMT=[{"constant":true,"inputs":[],"name":"basicRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"refnosOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"result","type":"uint256"}],"name":"ungame","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games","outputs":[{"name":"eth","type":"bool"},{"name":"close","type":"uint256"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"result","type":"uint256"},{"name":"name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"saves","outputs":[{"name":"eth","type":"bool"},{"name":"open","type":"uint256"},{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"randomKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"bid","type":"bool"},{"name":"open","type":"uint256"},{"name":"close","type":"uint256"},{"name":"stock","type":"uint256"},{"name":"price","type":"uint256"},{"name":"value","type":"uint256"},{"name":"name","type":"string"},{"name":"note","type":"string"}],"name":"offer","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unoffer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"pcts","type":"uint256[3]"}],"name":"regame","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"bid","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unpost","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"close","type":"uint256"},{"name":"value","type":"uint256"},{"name":"pcts","type":"uint256[3]"},{"name":"name","type":"string"},{"name":"note","type":"string"}],"name":"game","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"restock","type":"uint256"}],"name":"reoffer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"refno","type":"uint256"}],"name":"GAME","outputs":[{"name":"pcts","type":"uint256[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"offers","outputs":[{"name":"eth","type":"bool"},{"name":"bid","type":"bool"},{"name":"open","type":"uint256"},{"name":"close","type":"uint256"},{"name":"stock","type":"uint256"},{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"name":"price","type":"uint256"},{"name":"value","type":"uint256"},{"name":"name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"re","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"bet","type":"uint256"},{"name":"value","type":"uint256"}],"name":"play","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"order","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"open","type":"uint256"},{"name":"taker","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"save","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"unsave","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"key","type":"string"},{"name":"form","type":"string"},{"name":"skip","type":"uint256"}],"name":"refnos","outputs":[{"name":"size","type":"uint256"},{"name":"nos","type":"uint256[25]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":false,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"close","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"name","type":"string"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":false,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"close","type":"uint256"},{"indexed":false,"name":"name","type":"string"}],"name":"Game","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":false,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"taker","type":"address"}],"name":"Save","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Win","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"bet","type":"uint256"}],"name":"Bet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"hash","type":"bytes32"},{"indexed":false,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Re","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Get","type":"event"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"},{"name":"uai","type":"uint256"}],"name":"keygen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIGEMT=[{"constant":true,"inputs":[],"name":"basicRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"refnosOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blockReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"pay","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"invests","outputs":[{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"stampRewards","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"randomKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"withdraw","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"value","type":"uint256"}],"name":"program","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"cancel","type":"bool"}],"name":"release","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastProof","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unpost","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timerewStep","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAGE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"half","type":"bool"}],"name":"close","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"programs","outputs":[{"name":"eth","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"open","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MX","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deposits","outputs":[{"name":"eth","type":"bool"},{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"START","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"deposit","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blockPayouts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"invest","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"key","type":"string"},{"name":"form","type":"string"},{"name":"skip","type":"uint256"}],"name":"refnos","outputs":[{"name":"size","type":"uint256"},{"name":"nos","type":"uint256[25]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Bank","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ref","type":"bytes32"},{"indexed":true,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"petri","type":"uint256"},{"indexed":true,"name":"open","type":"uint256"}],"name":"Plan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Put","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Get","type":"event"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"},{"name":"uai","type":"uint256"}],"name":"keygen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIFEMT=[{"constant":true,"inputs":[],"name":"basicRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"refnosOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blockReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"bytes32"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"note","type":"string"}],"name":"pay","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"invests","outputs":[{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"stampRewards","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"randomKey","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"withdraw","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"value","type":"uint256"}],"name":"program","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"clean","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"acquire","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"cancel","type":"bool"}],"name":"release","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastProof","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"br","type":"uint256"},{"name":"er","type":"uint256"},{"name":"lr","type":"uint256"},{"name":"ms","type":"uint256"}],"name":"setRates","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"}],"name":"unpost","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardStamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timerewStep","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"half","type":"bool"}],"name":"close","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"clear","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"programs","outputs":[{"name":"eth","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"petri","type":"uint256"},{"name":"open","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deposits","outputs":[{"name":"eth","type":"bool"},{"name":"maker","type":"address"},{"name":"taker","type":"address"},{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"markets","outputs":[{"name":"buytoken","type":"bool"},{"name":"maker","type":"address"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lottoRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"START","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"deposit","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blockPayouts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"etherRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"}],"name":"invest","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"refno","type":"uint256"},{"name":"value","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"time","type":"uint256"}],"name":"post","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"key","type":"string"},{"name":"form","type":"string"},{"name":"skip","type":"uint256"}],"name":"refnos","outputs":[{"name":"size","type":"uint256"},{"name":"nos","type":"uint256[25]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"br","type":"uint256"},{"name":"ts","type":"uint256"},{"name":"rs","type":"uint256"}],"name":"setRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"miner","type":"address"},{"indexed":false,"name":"penny","type":"uint256"},{"indexed":true,"name":"method","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"}],"name":"Mine","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Bank","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ref","type":"bytes32"},{"indexed":true,"name":"ETH","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"petri","type":"uint256"},{"indexed":true,"name":"open","type":"uint256"}],"name":"Plan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Put","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ownerAddress","type":"address"},{"indexed":true,"name":"spenderAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"refno","type":"uint256"},{"indexed":true,"name":"buy","type":"bool"},{"indexed":true,"name":"maker","type":"address"},{"indexed":true,"name":"ppe","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"refno","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Get","type":"event"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"key","type":"uint256"},{"name":"uai","type":"uint256"}],"name":"keygen","outputs":[{"name":"num","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"method","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"}],"name":"mine","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"}];
////////////////////////////////////////////////////////////
const ABIXUTENG=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint32"},{"name":"","type":"uint256"}],"name":"typedContentsOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"adminList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"membershipOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"userSelling","outputs":[{"name":"trading","type":"uint256"},{"name":"traded","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"membersOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"exchanges","outputs":[{"name":"number","type":"uint256"},{"name":"account","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"memberFeeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"joinsOf","outputs":[{"name":"number","type":"uint256"},{"name":"account","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"roleSetterOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toAddress","type":"address"},{"name":"txPenny","type":"uint256"},{"name":"ref","type":"string"}],"name":"transferFor","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contentExist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"mintedOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"recipientOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"userRoleOf","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"contentsOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"dtype","type":"uint32"},{"name":"server","type":"address"},{"name":"client","type":"address"}],"name":"checkRegister","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"content","type":"string"}],"name":"getContentId","outputs":[{"name":"contentHash","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"hashesOf","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"expireOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"incomeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"holdersOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contents","outputs":[{"name":"time","type":"uint256"},{"name":"json","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"toAddress","type":"address"},{"name":"txPenny","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"maxbidOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"holderOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"userBuying","outputs":[{"name":"trading","type":"uint256"},{"name":"traded","type":"uint256"},{"name":"ppe","type":"uint256"},{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"priceOf","outputs":[{"name":"number","type":"uint256"},{"name":"disable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"addressOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tickerList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"usersOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"downerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"role","type":"uint8"}],"name":"checkRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"pennyValue","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tickSetterOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint32"},{"name":"","type":"uint256"}],"name":"pubsOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"initialSupply","type":"uint256"},{"name":"sellAt","type":"uint256"},{"name":"buyAt","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"fromAddress","type":"address"},{"indexed":true,"name":"toAddress","type":"address"},{"indexed":false,"name":"txPenny","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"targetAddress","type":"address"},{"name":"pennyValue","type":"uint256"}],"name":"mintPenny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"toAddress","type":"address"},{"name":"weiValue","type":"uint256"}],"name":"weiTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"toAddress","type":"address"},{"name":"object","type":"address"},{"name":"pennyValue","type":"uint256"}],"name":"pennyPayout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newName","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"buyStatus","type":"bool"},{"name":"sellStatus","type":"bool"},{"name":"transferStatus","type":"bool"},{"name":"exchangeStatus","type":"bool"}],"name":"setAllow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sellPennyAt","type":"uint256"},{"name":"buyPennyAt","type":"uint256"}],"name":"setPenny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"penny","type":"uint256"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"},{"name":"role","type":"uint8"}],"name":"setRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"},{"name":"tick","type":"uint8"}],"name":"setTick","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"object","type":"address"},{"name":"ua","type":"address"}],"name":"setHolder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"},{"name":"role","type":"uint8"}],"name":"setUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dtype","type":"uint32"},{"name":"enableRegReq","type":"bool"},{"name":"enableBanned","type":"bool"},{"name":"enablePublic","type":"bool"}],"name":"setType","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dtype","type":"uint32"},{"name":"pip","type":"uint256"},{"name":"piw","type":"uint256"}],"name":"setTypePrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"xutOwner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"penny","type":"uint256"},{"name":"ppe","type":"uint256"}],"name":"userSetSell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ppe","type":"uint256"}],"name":"userSetBuy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"userStopSell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"userStopBuy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"},{"name":"index","type":"uint256"},{"name":"count","type":"uint256"}],"name":"buyFromSeller","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"ua","type":"address"},{"name":"index","type":"uint256"},{"name":"count","type":"uint256"},{"name":"penny","type":"uint256"}],"name":"sellToBuyer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"object","type":"address"},{"name":"cancel","type":"bool"}],"name":"releaseCoholding","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"json","type":"string"},{"name":"coholder","type":"address"},{"name":"whom","type":"address"},{"name":"expt","type":"uint256"},{"name":"cpip","type":"uint256"},{"name":"cbid","type":"uint256"},{"name":"dtype","type":"uint32"}],"name":"postContent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"target","type":"address"}],"name":"notify","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"dtype","type":"uint32"}],"name":"ping","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"object","type":"address"},{"name":"hash","type":"bytes32"},{"name":"dtype","type":"uint32"},{"name":"penny","type":"uint256"}],"name":"txjoin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"object","type":"address"},{"name":"json","type":"string"},{"name":"penny","type":"uint256"}],"name":"conjoin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"object","type":"address"},{"name":"dtype","type":"uint32"}],"name":"pub","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ua","type":"address"},{"name":"dtype","type":"uint32"}],"name":"getData","outputs":[{"name":"xname","type":"string"},{"name":"xowner","type":"address"},{"name":"utrset","type":"bool[4]"},{"name":"typset","type":"bool[4]"},{"name":"utrlen","type":"uint256[3]"},{"name":"objlen","type":"uint256[8]"},{"name":"admlen","type":"uint256[5]"},{"name":"admset","type":"uint8[3]"},{"name":"prices","type":"uint256[6]"},{"name":"objdat","type":"uint256[4]"},{"name":"xutdat","type":"uint256[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"oa","type":"address"}],"name":"getObject","outputs":[{"name":"joins","type":"uint256"},{"name":"hashes","type":"uint256"},{"name":"expire","type":"uint256"},{"name":"nums","type":"uint256[6]"},{"name":"ads","type":"address[5]"},{"name":"disable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"string"},{"name":"json","type":"string"}],"name":"setDomain","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"string"}],"name":"retDomain","outputs":[{"name":"user","type":"address"},{"name":"json","type":"string"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const ABIERC20=[
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},];
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const V3KEYSTORE={
test:{"version":3,"id":"08e6168b-200b-4156-9eb3-1876a9a160ae","address":"c3ecd0eacc0607f2b5e1e723b937eca0dca4b2dd","crypto":{"ciphertext":"f43f934cdad6810bee8dc483b663b0703ad712298f00abad82e7f83d51f68d12","cipherparams":{"iv":"f718b0447c389c746eabbe56348af137"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"7f44b50d246f4cf30585c1ac7e5cc2c429267f4dc9bbbb0f69ba06a9d3ad3882","n":8192,"r":8,"p":1},"mac":"48f883b213d438089fad015e2fd61d57f6f2999a14779acfc7bd3281a6749780"}}};
////////////////////////////////////////////////////////////
const ADDRESSES={
test:'0x102C30d2932307B9D7eb18Cf51B6539A609C3FBF'};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const BXCHAINS={/*scan:/address/;api:/addrs/*/
bitcoin:{version:0x00,pkprefix:0x80,coin:'BTC',rpcs:'',scan:'https://live.blockcypher.com/btc/',api:'https://api.blockcypher.com/v1/btc/main/',push:'https://live.blockcypher.com/btc/pushtx'},
testnet:{version:0x6F,pkprefix:0xEF,coin:'TEST',rpcs:'',scan:'https://live.blockcypher.com/btc-testnet/',api:'https://api.blockcypher.com/v1/btc/test3/',push:'https://live.blockcypher.com/btc-testnet/pushtx'},
dogecoin:{version:0x1E,pkprefix:0x9E,coin:'DOGE',rpcs:'',scan:'https://live.blockcypher.com/doge/',api:'https://api.blockcypher.com/v1/doge/main/',push:'https://live.blockcypher.com/doge/pushtx'},
dashcoin:{version:0x4C,pkprefix:0xCC,coin:'DASH',rpcs:'',scan:'https://live.blockcypher.com/dash/',api:'https://api.blockcypher.com/v1/dash/main/',push:'https://live.blockcypher.com/dash/pushtx'},
litecoin:{version:0x30,pkprefix:0xB0,coin:'LTC',rpcs:'',scan:'https://live.blockcypher.com/ltc/',api:'https://api.blockcypher.com/v1/ltc/main/',push:'https://live.blockcypher.com/ltc/pushtx'},
};
////////////////////////////////////////////////////////////
const EXCHAINS={
mainnet:{coin:'ETH',ncid:1,rpcs:'',scan:'https://etherscan.io/',api:'https://api.etherscan.io/api?',push:'https://etherscan.io/pushtx'},
rinkeby:{coin:'RIN',ncid:4,rpcs:'',scan:'https://rinkeby.etherscan.io/',api:'https://api-rinkeby.etherscan.io/api?',push:'https://rinkeby.etherscan.io/pushtx'},
ropsten:{coin:'ROP',ncid:3,rpcs:'',scan:'https://ropsten.etherscan.io/',api:'https://api-ropsten.etherscan.io/api?',push:'https://ropsten.etherscan.io/pushtx'},
binance:{coin:'BNB',ncid:56,rpcs:'https://bsc-dataseed.binance.org/',scan:'https://www.bscscan.com/',api:'https://api.bscscan.com/api?',push:'https://bscscan.com/pushtx'},
classic:{coin:'ETC',ncid:61,rpcs:'https://www.ethercluster.com/etc/',scan:'https://etcblockexplorer.com/',api:'',push:''},
fantom:{coin:'FTM',ncid:250,rpcs:'https://rpc.ftm.tools/',scan:'https://ftmscan.com/',api:'https://api.ftmscan.com/api?',push:'https://ftmscan.com/pushtx'},
local:{coin:'TEST',ncid:10000,rpcs:'http://localhost:8545'},
};
////////////////////////////////////////////////////////////
const USDC={
mainnet:{ncid:1,addr:'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',rpcs:'https://bsc-dataseed.binance.org/',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',rpcs:'https://www.ethercluster.com/etc/',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const USDT={
mainnet:{ncid:1,addr:'0xdac17f958d2ee523a2206206994597c13d831ec7',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x55d398326f99059ff775485246999027b3197955',rpcs:'https://bsc-dataseed.binance.org/',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',rpcs:'https://www.ethercluster.com/etc/',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const XTOKEN={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0xD86c59284534f7b418b732FbC41b9aF47480045B',hash:'0x9fd56d466f3a7a77c8f663f0a75e898fc1879ab1c949233add06af31479ed1e7',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const REMT={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0x3E86E647FC2BE17266071f8047b8B1c755D589fe',hash:'0xf4afcdbb311e3402e375a0fcfb308db23c64561b1fc899664bdca208f6b84311',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const VAULT={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0x1F30496BFD02FF62C0AB721F01a0e9b6764f730E',hash:'0xdcd411c977b1a4eb0ae7ee837e401eddb94cd4639215fc70d7603724aec02285',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const UVAULT={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0x56448b2607A8f53D0db5cAb8d59975EA0A560cC3',hash:'0xf1cf7c91c273f4c69382da00d68ccc7851bcfdf39e6ed0e48856deb298c5033f',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const VAULTPRO={
LODE:{
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0xE9d7FDDF9F36BD1cD2a77B31a91cD069ef012Ab0',hash:'0x0f6962ddbbfd58ef41047e0a139d58b2bfe10665fd53afbc9677ac4db680bee6',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
},
};
////////////////////////////////////////////////////////////
const BROKER={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0x3bf2d00592ec4916ef3d84e5d9891c743c1afad1',hash:'0x7ce9aeb94db0fdd7edc5ebca1918923120b6cfd9cef3b6678ee2181737f13eee',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const BROKERE={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'',bcls:'private',scan:'https://etherscan.io/token/'},
binance:{ncid:56,addr:'0x74380dc60deee5dd182901b22ccf84ea1f55d3c1',hash:'0x4baec6090e6e3e7b825dc39fc7dead32d82c915b1f9be0e1e81473894fb1a6da',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',hash:'',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const EXET={
mainnet:{ncid:1,addr:'0x28e5fe0ad29597dc290c055eef59c4f582a7a056',hash:'0x3334fb84cfb2977e743a6c0b54b4a10e2f457b0773e2ba13cce2b4d4c23de367',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0xE9d7FDDF9F36BD1cD2a77B31a91cD069ef012Ab0',hash:'0x91b258a158a68f8f995c7ef3a1447bd2476b5aabd5f822faede996390681bfd3',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0xd10488C78a0c46BE21aF749e0c0F102AF9D0d926',hash:'0x46ce74e52333d2fd4af58f4f825cccd9cdf187a8af462b79f519b7d4a0cc848c',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0xDEA0c8bAF81975876F4AF9FC2a1fC4F3A67e039B',hash:'0xbfee2c155e1ff224bdcab10fe8c492ba8fef5cf98c0d770ec07e0d2165c6da09',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0x18C7F74cA7C4b9DAf0cCe931e7eF0c0BA9788576',hash:'0x3aec175a0cad6bb05b6aa087872cb456da0a87dd85327ea78daed8191c6e8d47',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const LEFT={
mainnet:{ncid:1,addr:'0x4244f169be509aa6f0a49e537d1bd89800451264',hash:'0x3754245163677f324edd1173f5ef453bce5f86dbce4f4f52a84fd98ffa0f1dd1',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0xf8c308CF496Bf9323B671b485F555882a3b4d9E7',hash:'0xe9d6c1f5b3a7f0e297349a011f64bd04ef89d961d6fc08ba3d185821249ae59d',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x3D6C8E2C2ae17726386231f99169C9d69a20F104',hash:'0x5b12d71d74038533f6461e9438a77bad5211fb7da1a299cf20948428a9a3ec30',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x050010e67858E4B71f6D79359ad950e614863e0d',hash:'0x06d526444424671aeff0d257ee1254bd4a2cda96ee73af965678415dd5372df7',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0xDEA0c8bAF81975876F4AF9FC2a1fC4F3A67e039B',hash:'0xb3df5f5695a4c0bf5b33dc86ec95d5db504d2031916a4f14e9483603e5381189',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const ASSETS={
rinkeby:{ncid:4,addr:'0xadf520419B9C2B9c1360637AB85aF653E46CcfC5',hash:'0x6b91ac371ba444aee7e2b763deda7d51c8024ab43ac0929fa9ab0f0f8fabefc0',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
binance:{ncid:56,addr:'0x25542198F36dE291EE51d783313242fB24aA7703',hash:'0x639433fc962439b683c90f2c60a591024623a6cb6af7e63aa01e6deb8b4d9d50',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
};
////////////////////////////////////////////////////////////
const ESTATE={
rinkeby:{ncid:4,addr:'0x6be92F3e494B3CDb50Add6f8A068444594Fde3F8',hash:'0xf24f04a23f671e4bb3c182e5aa9a1a99e13881059eaaa92c13eafc162ec82e50',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
binance:{ncid:56,addr:'0x4DF3F72FD5dd33584fdC38284CE3d72961725BcD',hash:'0x2a32b5605bdd779dde9a11c8600bdf2f5f4be58ad3ccdf3e8eac75fc2b23c4a6',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
};
////////////////////////////////////////////////////////////
const ADDR_ESTATES={
binance:{
 MMB:'0x4DF3F72FD5dd33584fdC38284CE3d72961725BcD',
 CEB:'0x4f8E54e2E840561e5Aa8a296ad5F7b0AE18e6Eff',
 DMB:'0x17634BDcC40c6Bad899D4bB0d825641ec8370f1D',
 EPB:'0x01Cc92E9f84331fDE572a39E0633B13043d79941',
 DMAB:'0x3c9dfD4FF78b5aC62F55bBd41B525D0c100F8A1E',
 WTCB:'0x021e3Ddf28C84B15e5Ab6269da72ec9b816993D7',},
};
////////////////////////////////////////////////////////////
const NEMT={
mainnet:{ncid:1,addr:'0x208871E7f29C0C0e131Dc275f1FCfc9e73C2b06e',hash:'0xe7a06b31a4ea68e0611fc28bd6a176d1179b15a4ac4a056430ff2c89bd80700b',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x3534BF9421F4C3881600E280642E897d789e7f46',hash:'0x3a2fafbd5b5b81f12e9d4f70b8b287e5b933341d14c495820d077ab094c5acd3',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},//V9
ropsten:{ncid:3,addr:'0x1cf9E7f0b12123430EA44A49e14810fa43c6c381',hash:'0x2fc4951dc1937f20834672f8006416aaff4f89ebef92bc1e4cc29af712b7b9a6',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},//V9
binance:{ncid:56,addr:'0x2e23950C00bDd2505EE64494bc554e59050C70Ce',hash:'0xee62eecd9e06f15a8ec2e71672f55cdcd4bbdaafdb5746d1b477137566096cee',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},//V9
classic:{ncid:61,addr:'0x050010e67858E4B71f6D79359ad950e614863e0d',hash:'0xe63a60272577195cf05bbef7a30b736597e4255ff34288d55aa80d58f8fee610',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const GEMT={
mainnet:{ncid:1,addr:'0x4f8e54e2e840561e5aa8a296ad5f7b0ae18e6eff',hash:'0xadf8c72399b53b3486b665798b6599109a7c6ed33593d65c0354504d0bac92c8',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x789Ed5D597bbA28D660aC676358A5861D23073A1',hash:'0xa7c27efa331d885648dbb66db1dddefdc5099dff36791833326b34134579b8a6',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},//V9
ropsten:{ncid:3,addr:'0x4c35c1001dD34d06d69c8a0F1c84769bd80C0306',hash:'0xb2305325e058ead03ca83ef40915534a17c025c89a7bc0818fe512c44ca8eab0',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},//V9
binance:{ncid:56,addr:'0x9F57B97a6723b1620A6360af33B28d006806EC0d',hash:'0xd0a965e306a7798eff5bd964f66c4816324ad64bdb93507dd30c6e28b3d64d1e',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},//V9
classic:{ncid:61,addr:'0xc9dDF5d5adBA8711F106953B97987B02F8EAe5e4',hash:'0xad8c60417f5266e28906fdc6a5b2dc050abfe75a999623153589fbd2a0d721a4',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const FEMT={
mainnet:{ncid:1,addr:'0x17634BDcC40c6Bad899D4bB0d825641ec8370f1D',hash:'0xc386bd3cd946c0b5f454d94ec671ba2fd33840889445fb165c158c13ebe9b328',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x39CD844f4dF2a5ada7B7073A683DE1839A991785',hash:'0xeeb5e8d01668f680453fd222034f7309e8a3673a0892c2578df7e9db02ac1af6',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},//V9
ropsten:{ncid:3,addr:'0xE9d7FDDF9F36BD1cD2a77B31a91cD069ef012Ab0',hash:'0xeddeeb5cf2faaa1662f721c9cca43d4b96a2823f1192e4c5853fd98691388512',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},//V9
binance:{ncid:56,addr:'0xd827007Dda5AdEC1548171945d639ac156CfAd59',hash:'0xe991dc63c5317ccb3eb9c7cc05ecfe7ea1f820cf8955ad593b222d1a528026e4',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0x872Bc37697f45526fc0C960E19654c8714dB6957',hash:'0xd941ac6e3d21cbdb102c093c07df0d33d7eefa9fc581eaaf07f394bed0ec2f97',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const XUTENG={
mainnet:{ncid:1,addr:'0x872Bc37697f45526fc0C960E19654c8714dB6957',hash:'0x1e7ae86d7fd7cba08377c641a50ff38ccbeefa50f78a369613483abdfc88f8ab',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x021e3Ddf28C84B15e5Ab6269da72ec9b816993D7',hash:'0x4402c9b1f4beb9768d10509244440a521c93b7f3bc24e43b17999a166227986d',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x9F57B97a6723b1620A6360af33B28d006806EC0d',hash:'0x73dba80fff9871330489f6b665861a76211dd90668b1d4578c3ede5493534d1c',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x1a2944F9FE6adD404F9A1Ee0E12be5c8671ea224',hash:'0x7eae323a5c3f05f049237199e34a84e466bbc5d8faec59be9ef644ff05d2f4da',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0xd827007Dda5AdEC1548171945d639ac156CfAd59',hash:'0x66dbbd972497dd0183b291f4ccd17de6159ba95ecdef65d636f41da3f5771e74',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
fantom:{ncid:250,addr:'',rpcs:'https://rpc.ftm.tools/',scan:'https://ftmscan.com/token/'},
local:{ncid:10000,addr:'0x0000000000000000000000000000000000000000',rpcs:'http://localhost:8545'},
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const BSCSCAN={
api:{
mainnet:EXCHAINS.binance.api},
push:{
mainnet:EXCHAINS.binance.push}};
////////////////////////////////////////////////////////////
const ETHERSCAN={
api:{
rinkeby:EXCHAINS.rinkeby.api,
ropsten:EXCHAINS.ropsten.api,
mainnet:EXCHAINS.mainnet.api},
push:{
rinkeby:EXCHAINS.rinkeby.push,
ropsten:EXCHAINS.ropsten.push,
mainnet:EXCHAINS.mainnet.push}};
////////////////////////////////////////////////////////////
const TXDECODERS=[
'https://www.ethereumdecoder.com/',
'https://live.blockcypher.com/eth/decodetx/'];
////////////////////////////////////////////////////////////
const PROXIES=[
{/*https://etherscan.io/apis#proxy*/
getTransactionCount:function(addr,ncid=network){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_getTransactionCount&address=${addr}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getContractDecimals:function(addr,ncid=network){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=0x313ce567&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getContractCreation:function(addr,ncid=network){return(`${EXCHAINS[ncid].api}module=contract&action=getcontractcreation&contractaddresses=${addr}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getContractPastLogs:function(addr,from='',to='latest',topic='',ncid=network){return(`${EXCHAINS[ncid].api}module=logs
&action=getLogs
&address=${addr}&fromBlock=${from}&toBlock=${to}${topic?'&topic0='+topic:''}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getContractLastLogs:function(addr,from='',to='latest',topic='',afrom='',ato='',opr='and',api='',ncid=network,t){t=topic?`&topic0=${topic}`:``;if(t&&(afrom||ato))t+=`&topic0_1_opr=${opr}`;if(afrom)t+=`&topic1=${afrom}`;if(ato)t+=`&topic2=${ato}`;return(`${EXCHAINS[ncid].api}module=logs
&action=getLogs
&address=${addr}&fromBlock=${from}&toBlock=${to}${t}&apikey=${api}`)},
getTokenTotalSupply:function(addr,ncid=network){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=0x18160ddd&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getUserTokenBalance:function(addr,acc,ncid=network){return(`${EXCHAINS[ncid].api}module=account&action=tokenbalance&contractaddress=${addr}&address=${acc}&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getUserEtherBalance:function(acc,ncid=network){return(`${EXCHAINS[ncid].api}module=account&action=balance&address=${acc}&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
sendToSmartContract:function(addr,data,ncid=network){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_call&to=${addr}&data=${data}&tag=latest&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
sendRawTransaction:function(hex,ncid=network){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_sendRawTransaction&hex=${hex}&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
getGasPrice:function(ncid=network){return(`${EXCHAINS[ncid].api}module=proxy&action=eth_gasPrice&apikey=${EXCHAINS[ncid].token?EXCHAINS[ncid].token:BLANK}`)},
setApiKey:function(key,ncid=network){EXCHAINS[ncid].token=key}}];
////////////////////////////////////////////////////////////
const BROXIES=[
{/*https://www.blockcypher.com/dev/bitcoin/#introduction*/
getTransactionList:function(addr,ncid=BITCOIN){return(`${BXCHAINS[ncid].api}addrs/${addr}?token=${BXCHAINS[ncid].token?BXCHAINS[ncid].token:BLANK}`)},
sendRawTransaction:function(hex,ncid=BITCOIN){return(`curl\u0020-d\u0020"{\\"tx\\":\\"${hex}\\"}"\u0020${BXCHAINS[ncid].api}txs/push?token=${BXCHAINS[ncid].token?BXCHAINS[ncid].token:BLANK}`)},
setApiKey:function(key,ncid=BITCOIN){BXCHAINS[ncid].token=key}}];
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const EXTOKENS={
usdc:function(){return({dec:06,addr:USDC[network].addr,abi:ABIERC20})},
usdt:function(){return({dec:06,addr:USDT[network].addr,abi:ABIERC20})},
exet:function(){return({dec:18,addr:EXET[network].addr,abi:ABIERC20})},
left:function(){return({dec:18,addr:LEFT[network].addr,abi:ABIERC20})},
nemt:function(){return({dec:18,addr:NEMT[network].addr,abi:ABIERC20})},
gemt:function(){return({dec:18,addr:GEMT[network].addr,abi:ABIERC20})},
femt:function(){return({dec:18,addr:FEMT[network].addr,abi:ABIERC20})},
xut:function(){return({dec:18,addr:XUTENG[network].addr,abi:ABIERC20})}};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const BCVAULTPRO="0x60806040523480156200001157600080fd5b5060405162001782380380620017828339810160408181528251602080850151838601516002805460ff19166012179081905560ff16600a0a60065584860190945260168086527f4153494e4552554d20494e5445524e4154494f4e414c000000000000000000009290950191825291850194919091019262000097916007916200016e565b5060088054600160a060020a031916331790558251620000bf9060009060208601906200016e565b508151620000d59060019060208501906200016e565b5060088054600160a060020a039081166000908152600a60209081526040808320805460ff191660019081179091558554600b805492830190557f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db99091018054600160a060020a031916918616919091179055600654959095026003819055935490921681526004909152919091205550620002139050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b157805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e1578251825591602001919060010190620001c4565b50620001ef929150620001f3565b5090565b6200021091905b80821115620001ef5760008155600101620001fa565b90565b61155f80620002236000396000f3006080604052600436106101275763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461012957806306fdde031461015a578063095ea7b3146101e45780630bb7b4561461021c57806311117fc8146102c957806318160ddd146102e157806323b872dd1461030857806324d7806c14610332578063313ce5671461035357806336d6da551461037e5780634cc82215146103e55780635398a96b146103fd578063693ec85e1461046d57806370a08231146104e95780637b2eb35c1461050a57806395d89b4114610579578063a6c3e6b91461058e578063a9059cbb146105a3578063b6f921ad146105c7578063bc902ad214610620578063d92a515f14610641578063dd62ed3e146106aa575b005b34801561013557600080fd5b5061013e6106d1565b60408051600160a060020a039092168252519081900360200190f35b34801561016657600080fd5b5061016f6106e0565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101a9578181015183820152602001610191565b50505050905090810190601f1680156101d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f057600080fd5b50610208600160a060020a036004351660243561076e565b604080519115158252519081900360200190f35b34801561022857600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261020894369492936024939284019190819084018382808284375050604080516020888301358a018035601f8101839004830284018301909452838352979a8935600160a060020a03169a8a8301359a919990985060609091019650919450908101925081908401838280828437509497506107d49650505050505050565b3480156102d557600080fd5b5061013e6004356108bc565b3480156102ed57600080fd5b506102f66108e4565b60408051918252519081900360200190f35b34801561031457600080fd5b50610208600160a060020a03600435811690602435166044356108ea565b34801561033e57600080fd5b50610208600160a060020a0360043516610959565b34801561035f57600080fd5b5061036861096e565b6040805160ff9092168252519081900360200190f35b34801561038a57600080fd5b5060408051602060046024803582810135601f8101859004850286018501909652858552610127958335600160a060020a03169536956044949193909101919081908401838280828437509497506109779650505050505050565b3480156103f157600080fd5b50610127600435610b4e565b34801561040957600080fd5b50610412610ce5565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610458578181015183820152602001610440565b50505050905001935050505060405180910390f35b34801561047957600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526104c6943694929360249392840191908190840183828082843750949750610dd29650505050505050565b60408051600160a060020a03909316835260208301919091528051918290030190f35b3480156104f557600080fd5b506102f6600160a060020a0360043516610ec7565b34801561051657600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261020894600160a060020a038135811695602480359092169560443595369560849401918190840183828082843750949750610ed99650505050505050565b34801561058557600080fd5b5061016f6110a4565b34801561059a57600080fd5b5061016f6110fe565b3480156105af57600080fd5b50610208600160a060020a0360043516602435611159565b3480156105d357600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261013e94369492936024939284019190819084018382808284375094975061116f9650505050505050565b34801561062c57600080fd5b50610127600160a060020a03600435166111e0565b34801561064d57600080fd5b50604080516020600460443581810135601f8101849004840285018401909552848452610208948235600160a060020a03169460248035953695946064949201919081908401838280828437509497506113269650505050505050565b3480156106b657600080fd5b506102f6600160a060020a03600435811690602435166113ef565b600854600160a060020a031681565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107665780601f1061073b57610100808354040283529160200191610766565b820191906000526020600020905b81548152906001019060200180831161074957829003601f168201915b505050505081565b336000818152600560209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b336000908152600a602052604081205460ff16151561083d576040805160e560020a62461bcd02815260206004820152600660248201527f2361646d696e0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6108b36009866040518082805190602001908083835b602083106108725780518252601f199092019160209182019101610853565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054600160a060020a031691508690508585610ed9565b95945050505050565b600b8054829081106108ca57fe5b600091825260209091200154600160a060020a0316905081565b60035481565b600160a060020a038316600090815260056020908152604080832033845290915281205482111561091a57600080fd5b600160a060020a038416600090815260056020908152604080832033845290915290208054839003905561094f84848461140c565b5060019392505050565b600a6020526000908152604090205460ff1681565b60025460ff1681565b600854600160a060020a031633146109d9576040805160e560020a62461bcd02815260206004820152600860248201527f2363726561746f72000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f70a082310000000000000000000000000000000000000000000000000000000081523360048201529051600091600160a060020a038516916370a082319160248082019260209290919082900301818787803b158015610a3d57600080fd5b505af1158015610a51573d6000803e3d6000fd5b505050506040513d6020811015610a6757600080fd5b505111610abe576040805160e560020a62461bcd02815260206004820152600660248201527f23746f6b656e0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b816009826040518082805190602001908083835b60208310610af15780518252601f199092019160209182019101610ad2565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03949094169390931790925550505050565b600854600160a060020a03163314610bb0576040805160e560020a62461bcd02815260206004820152600860248201527f2363726561746f72000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600081118015610bc15750600b5481105b1515610c17576040805160e560020a62461bcd02815260206004820152600560248201527f2375736572000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600a6000600b84815481101515610c2c57fe5b600091825260208083209190910154600160a060020a031683528201929092526040019020805460ff1916911515919091179055600b80546000198101908110610c7257fe5b600091825260209091200154600b8054600160a060020a039092169183908110610c9857fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055600b805490610ce19060001983016114e9565b5050565b60006060806000600b805480602002602001604051908101604052809291908181526020018280548015610d4257602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610d24575b505050505091508151935083604051908082528060200260200182016040528015610d77578160200160208202803883390190505b509250600090505b83811015610dcc578181815181101515610d9557fe5b906020019060200201518382815181101515610dad57fe5b600160a060020a03909216602092830290910190910152600101610d7f565b50509091565b6000806009836040518082805190602001908083835b60208310610e075780518252601f199092019160209182019101610de8565b51815160209384036101000a6000190180199092169116179052920194855250604080519485900382018520547f70a082310000000000000000000000000000000000000000000000000000000086523060048701529051600160a060020a03909116965086946370a08231945060248082019450908290030181600087803b158015610e9357600080fd5b505af1158015610ea7573d6000803e3d6000fd5b505050506040513d6020811015610ebd57600080fd5b5051919391925050565b60046020526000908152604090205481565b336000908152600a6020526040812054819060ff161515610f44576040805160e560020a62461bcd02815260206004820152600660248201527f2361646d696e0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b506040805160208181018352600080835283517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152935192955088938793600160a060020a038616936370a08231936024808501949293928390030190829087803b158015610fb957600080fd5b505af1158015610fcd573d6000803e3d6000fd5b505050506040513d6020811015610fe357600080fd5b50511015610ff057600080fd5b80600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561106c57600080fd5b505af1158015611080573d6000803e3d6000fd5b505050506040513d602081101561109657600080fd5b506001979650505050505050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107665780601f1061073b57610100808354040283529160200191610766565b6007805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156107665780601f1061073b57610100808354040283529160200191610766565b600061116633848461140c565b50600192915050565b60006009826040518082805190602001908083835b602083106111a35780518252601f199092019160209182019101611184565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054600160a060020a0316949350505050565b600854600160a060020a03163314611242576040805160e560020a62461bcd02815260206004820152600860248201527f2363726561746f72000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600160a060020a0381166000908152600a602052604090205460ff16156112b3576040805160e560020a62461bcd02815260206004820152600560248201527f2375736572000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600160a060020a03166000818152600a60205260408120805460ff19166001908117909155600b805491820181559091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db901805473ffffffffffffffffffffffffffffffffffffffff19169091179055565b336000908152600a602052604081205460ff16151561138f576040805160e560020a62461bcd02815260206004820152600660248201527f2361646d696e0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020810190915260008152915030318311156113ae57600080fd5b604051600160a060020a0385169084156108fc029085906000818181858888f193505050501580156113e4573d6000803e3d6000fd5b506001949350505050565b600560209081526000928352604080842090915290825290205481565b600160a060020a03831660009081526004602052604081205482111561143157600080fd5b600160a060020a0383166000908152600460205260409020548281011161145757600080fd5b50600160a060020a03828116600090815260046020526040808220805493871683529120805484810382558254850192839055905492019101811461149857fe5b82600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b81548183558181111561150d5760008381526020902061150d918101908301611512565b505050565b61153091905b8082111561152c5760008155600101611518565b5090565b905600a165627a7a72305820c766109b3ce78aad12293db5954f266b8eb401647e0938a4f4a20adc90b512da0029";
////////////////////////////////////////////////////////////
const BCESTATES="0x60806040526002805460ff19169055600160035534801561001f57600080fd5b5060405161091a38038061091a8339810160409081528151602080840151928401516060850151608086015160a087015160c08801519588018051909897880197949693850195929094019390929161007d916000918a019061011d565b50855161009190600190602089019061011d565b506007805460ff191660ff871617905583516100b490600690602087019061011d565b5082516100c890600590602086019061011d565b50670de0b6b3a76400009091026008556009805433610100810261010060a860020a031994151560ff199093169290921793909316179055600090815260046020526040902060019055506101b89350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015e57805160ff191683800117855561018b565b8280016001018555821561018b579182015b8281111561018b578251825591602001919060010190610170565b5061019792915061019b565b5090565b6101b591905b8082111561019757600081556001016101a1565b90565b610753806101c76000396000f3006080604052600436106100cf5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461021157806318160ddd1461029b5780631d2e5a3a146102c2578063313ce567146102dc578063466ccac0146103075780635ee574131461033057806370a08231146103455780638a4d5a67146103665780638da5cb5b1461037b57806391b7f5ed146103ac57806395d89b41146103c4578063a035b1fe146103d9578063a6c3e6b9146103ee578063a9059cbb14610403575b60095460ff16151561014257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f53414c453f000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6008543410156101b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f50524943453f0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600954604051600160a060020a0361010090920491909116903480156108fc02916000818181858888f193505050501580156101f3573d6000803e3d6000fd5b5060095461020f906101009004600160a060020a031633610427565b005b34801561021d57600080fd5b506102266104d7565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610260578181015183820152602001610248565b50505050905090810190601f16801561028d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102a757600080fd5b506102b0610565565b60408051918252519081900360200190f35b3480156102ce57600080fd5b5061020f600435151561056b565b3480156102e857600080fd5b506102f161059a565b6040805160ff9092168252519081900360200190f35b34801561031357600080fd5b5061031c6105a3565b604080519115158252519081900360200190f35b34801561033c57600080fd5b506102f16105ac565b34801561035157600080fd5b506102b0600160a060020a03600435166105b5565b34801561037257600080fd5b506102266105c7565b34801561038757600080fd5b50610390610622565b60408051600160a060020a039092168252519081900360200190f35b3480156103b857600080fd5b5061020f600435610636565b3480156103d057600080fd5b50610226610657565b3480156103e557600080fd5b506102b06106b1565b3480156103fa57600080fd5b506102266106b7565b34801561040f57600080fd5b5061031c600160a060020a0360043516602435610712565b600160a060020a03821660009081526004602052604090205460011461044c57600080fd5b600160a060020a038281166000818152600460209081526040808320839055938516808352918490206001908190556009805474ffffffffffffffffffffffffffffffffffffffffff191661010085021790558451908152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6000805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561055d5780601f106105325761010080835404028352916020019161055d565b820191906000526020600020905b81548152906001019060200180831161054057829003601f168201915b505050505081565b60035481565b6009546101009004600160a060020a0316331461058757600080fd5b6009805460ff1916911515919091179055565b60025460ff1681565b60095460ff1681565b60075460ff1681565b60046020526000908152604090205481565b6006805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561055d5780601f106105325761010080835404028352916020019161055d565b6009546101009004600160a060020a031681565b6009546101009004600160a060020a0316331461065257600080fd5b600855565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561055d5780601f106105325761010080835404028352916020019161055d565b60085481565b6005805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561055d5780601f106105325761010080835404028352916020019161055d565b600061071e3384610427565b506001929150505600a165627a7a72305820ba40f59a4e5eac3617a1f020f25b9a59ba8e719b2ee3c471e4b9600769742e490029";
////////////////////////////////////////////////////////////
const BCESTATE="0x60806040526002805460ff19169055600160035534801561001f57600080fd5b50604051610a9e380380610a9e8339810160409081528151602080840151928401516060850151608086015160a087015160c08801519588018051909897880197949693850195929094019390929161007d916000918a019061011d565b50855161009190600190602089019061011d565b506008805460ff191660ff871617905583516100b490600790602087019061011d565b5082516100c890600690602086019061011d565b50670de0b6b3a7640000909102600955600a805433610100810261010060a860020a031994151560ff199093169290921793909316179055600090815260046020526040902060019055506101b89350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015e57805160ff191683800117855561018b565b8280016001018555821561018b579182015b8281111561018b578251825591602001919060010190610170565b5061019792915061019b565b5090565b6101b591905b8082111561019757600081556001016101a1565b90565b6108d7806101c76000396000f3006080604052600436106100f05763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde038114610232578063095ea7b3146102bc57806318160ddd146102f45780631d2e5a3a1461031b57806323b872dd14610335578063313ce5671461035f578063466ccac01461038a5780635ee574131461039f57806370a08231146103b45780638a4d5a67146103d55780638da5cb5b146103ea57806391b7f5ed1461041b57806395d89b4114610433578063a035b1fe14610448578063a6c3e6b91461045d578063a9059cbb14610472578063dd62ed3e14610496575b600a5460ff16151561016357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f53414c453f000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6009543410156101d457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f50524943453f0000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600a54604051600160a060020a0361010090920491909116903480156108fc02916000818181858888f19350505050158015610214573d6000803e3d6000fd5b50600a54610230906101009004600160a060020a0316336104bd565b005b34801561023e57600080fd5b5061024761056d565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610281578181015183820152602001610269565b50505050905090810190601f1680156102ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c857600080fd5b506102e0600160a060020a03600435166024356105fb565b604080519115158252519081900360200190f35b34801561030057600080fd5b50610309610664565b60408051918252519081900360200190f35b34801561032757600080fd5b50610230600435151561066a565b34801561034157600080fd5b506102e0600160a060020a0360043581169060243516604435610699565b34801561036b57600080fd5b50610374610701565b6040805160ff9092168252519081900360200190f35b34801561039657600080fd5b506102e061070a565b3480156103ab57600080fd5b50610374610713565b3480156103c057600080fd5b50610309600160a060020a036004351661071c565b3480156103e157600080fd5b5061024761072e565b3480156103f657600080fd5b506103ff610789565b60408051600160a060020a039092168252519081900360200190f35b34801561042757600080fd5b5061023060043561079d565b34801561043f57600080fd5b506102476107be565b34801561045457600080fd5b50610309610818565b34801561046957600080fd5b5061024761081e565b34801561047e57600080fd5b506102e0600160a060020a0360043516602435610879565b3480156104a257600080fd5b50610309600160a060020a036004358116906024351661088e565b600160a060020a0382166000908152600460205260409020546001146104e257600080fd5b600160a060020a03828116600081815260046020908152604080832083905593851680835291849020600190819055600a805474ffffffffffffffffffffffffffffffffffffffffff191661010085021790558451908152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f35780601f106105c8576101008083540402835291602001916105f3565b820191906000526020600020905b8154815290600101906020018083116105d657829003601f168201915b505050505081565b336000818152600560209081526040808320600160a060020a038716808552908352818420600190819055825190815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60035481565b600a546101009004600160a060020a0316331461068657600080fd5b600a805460ff1916911515919091179055565b600160a060020a03831660009081526005602090815260408083203384529091528120546001146106c957600080fd5b600160a060020a03841660009081526005602090815260408083203384529091528120556106f784846104bd565b5060019392505050565b60025460ff1681565b600a5460ff1681565b60085460ff1681565b60046020526000908152604090205481565b6007805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f35780601f106105c8576101008083540402835291602001916105f3565b600a546101009004600160a060020a031681565b600a546101009004600160a060020a031633146107b957600080fd5b600955565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f35780601f106105c8576101008083540402835291602001916105f3565b60095481565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f35780601f106105c8576101008083540402835291602001916105f3565b600061088533846104bd565b50600192915050565b6005602090815260009283526040808420909152908252902054815600a165627a7a72305820c07548c34a02aa319d0a251008f85f7c63cec83c946b63d510a700c9c9bd92bd0029";
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const SYMBOL='XUT';
const DECIMALS=18;
////////////////////////////////////////////////////////////
const BASEGAS=21000;
const ETHER='ether';
const GWEI='gwei';
const HEX='hex';
const HEXINIT='0x';
const MESSAGE='message';
const RECEIPT='receipt';
const SIGNATURE='signature';
////////////////////////////////////////////////////////////
const OBJ='obj';
const REF='ref';
const BODY='body';
const TEST='test';
const MAINNET='mainnet';
const TESTNET='rinkeby';
const BITCOIN='bitcoin';
const BITTEST='testnet';
const CASHCOIN='cashcoin';
const DASHCOIN='dashcoin';
const DOGECOIN='dogecoin';
const LITECOIN='litecoin';
const LOCALHOST='localhost';
const ARGADDR='a';
const ARGEXEC='e';
const ARGWNET='n';
////////////////////////////////////////////////////////////
const ACTION='data-action';
const CHANGE='data-change';
const ACTDIV='body';
const BUTACT='on';
const DATACT='go';
////////////////////////////////////////////////////////////
const B='b';
const E='e';
const M='m';
const R='r';
const S='s';
const T='t';
////////////////////////////////////////////////////////////
const AND='&';
const ASK='?';
const BACK='\\';
const COLON=':';
const COMMA=',';
const DOT='.';
const EQUAL='=';
const HASH='#';
const HYPHEN='-';
const SEMI=';';
const SLASH='/';
const STAR='*';
////////////////////////////////////////////////////////////
const BLANK='';
const EMPTY='';
const NBSP='&nbsp;';
const NEWLINE='\n';
const RETURN='\r';
const SPACE='\u0020';
const TAB='\t';
////////////////////////////////////////////////////////////
const OxOO='0x00';
const REFEXC='EXC';
const REFREG='REG';
const ZERO='0';
const ANNSEC=31536000;
const PPT='1000000000000000000';
const ZEROADDR='0x0000000000000000000000000000000000000000';
const FAILADDR='0x0000000000000000000000000000000000000001';
////////////////////////////////////////////////////////////
const MAXGASES={
high:600000,
medium:300000,
safe:200000,
low:100000,
min:21000};
////////////////////////////////////////////////////////////
const TXGWEIS={
lowest:1,
lower:3,
low:5,
medium:10,
safe:20,
high:30,
rapid:50,
highest:80,
max:120};
////////////////////////////////////////////////////////////
const REGIS={
none:0,
junior:1,
senior:2};
////////////////////////////////////////////////////////////
const ROLES={
guest:2,
user:3,
author:5,
moderator:7,
admin:9,
owner:11,
BANNED:1};
////////////////////////////////////////////////////////////
const TICKS={
alpha:10,
beta:20,
silver:40,
gold:60,
platinum:80,
diamond:100,
KICKED:1};
////////////////////////////////////////////////////////////
const TYPES={
token_trading:1,
personal_profile:9,
accounting:11,
advertising:12,
b2b:21,
beneficial_slip:27,
betting:28,
bid_buying:22,
bid_selling:23,
blog:24,
buying:25,
contract:31,
copyright:32,
crowdsale:35,
dating_ask:43,
dating_cv:41,
dating_offer:42,
deposit_slip:44,
domain:46,
donation:47,
draft:181,
folder:61,
forum:62,
gambling:70,
gaming:71,
idea:91,
invention:92,
invoice:93,
job_ask:103,
job_cv:101,
job_offer:102,
lesson:121,
message:131,
note:141,
notice:142,
offer:151,
payment:161,
petition:162,
proposal:163,
question:171,
quiz:172,
receipt:182,
renting:183,
selling:191,
signing:192,
system:199,
tree:201,
url:211,
vote:221};
////////////////////////////////////////////////////////////
const CTYPES={
image:0,
html:1,
xml_doc:2,
txt_doc:3,
zip_file:5,
hex_data:6,
json_data:7,
wasm_code:8,
js_code:9,
id:10,
dna:11,
name:12,
hash:13,
ipfs:14,
mp4_video:15,
mp3_audio:16,
midi_sound:160,
transaction:130};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const _network='network';
const _account='account';
const _password='password';
////////////////////////////////////////////////////////////
const _maxgas='maxgas';
const _txgwei='txgwei';
////////////////////////////////////////////////////////////
const _name='name';
const _owner='owner';
const _refex='refex';
////////////////////////////////////////////////////////////
const _mintTo='mintTo';
const _mintVal='mint';
const _pushVal='push';
////////////////////////////////////////////////////////////
const _ethTo='ethOutTo';
const _xutTo='xutOutTo';
const _ethVal='ethOut';
const _xutVal='xutOut';
////////////////////////////////////////////////////////////
const _sendTo='to';
const _sendToAdmin='toAdmin';
const _sendVal='eth';
const _sendThis='eth2xut';
////////////////////////////////////////////////////////////
const _transTo='xutTo';
const _transToAdmin='xutToAdmin';
const _transVal='xut';
const _transThis='xut2xut';
////////////////////////////////////////////////////////////
const _ethThis='eth2get';
const _xutThis='xut2get';
////////////////////////////////////////////////////////////
const _tpeBuy='buyAtTpe';
const _tpeSell='sellAtTpe';
const _tpeBV='_buyAtTpe';
const _tpeSV='_sellAtTpe';
////////////////////////////////////////////////////////////
const _setBA='buyAllowed';
const _setSA='sellAllowed';
const _setTA='transferAllowed';
const _setEA='exchangeAllowed';
////////////////////////////////////////////////////////////
const _sysBA='_buyAllowed';
const _sysSA='_sellAllowed';
const _sysTA='_transferAllowed';
const _sysEA='_exchangeAllowed';
////////////////////////////////////////////////////////////
const _regmem='regmem';
const _reglev='reglev';
const _levels='levels';
const _roleTo='roleTo';
const _tickTo='tickTo';
const _roleVal='role';
const _tickVal='tick';
////////////////////////////////////////////////////////////
const _setType='docType';
const _setPE='typePIE';
const _setPT='typePIT';
const _setTR='typeRegReq';
const _setTP='typePublic';
const _setTB='typeBanned';
////////////////////////////////////////////////////////////
const _refType='_docType';
const _sysPE='_typePIE';
const _sysPT='_typePIT';
const _sysTR='_typeRegReq';
const _sysTP='_typePublic';
const _sysTB='_typeBanned';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const GETDATA={
xname:'',
xowner:'',
utrset:[false,false,false,false],
typset:[false,false,false,false],
admset:[0,0,0],
utrlen:[0,0,0],
admlen:[0,0,0,0,0],
objlen:[0,0,0,0,0,0,0,0],
prices:[0,0,0,0,0,0],
objdat:[0,0,0,0],
xutdat:[0,0,0]};
////////////////////////////////////////////////////////////
const POSTITEM={
ppe:0,
trading:0,
traded:0,
count:0};
////////////////////////////////////////////////////////////
const TARGETADDR={
a:'',
b:'',
d:'0x94eB08be475F9E8b1458C5FEA1EE786c3b4799d9',
e:'',
m:'',
r:'',
s:'',
t:''};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////BUYER
const _buyPostNum='_buyPostNum';
const _buyDone='_buyDone';
const _buyTpe='_buyTpe';
const _buyVol='_buyVol';
const _buyNum='_buyNum';
////////////////////////////////////////////////////////////SELLER
const _sellPostNum='_sellPostNum';
const _sellDone='_sellDone';
const _sellTpe='_sellTpe';
const _sellVol='_sellVol';
const _sellNum='_sellNum';
////////////////////////////////////////////////////////////BUYING
const _sellerAddress='sellerAddress';
const _sellerPostNum='sellerPostNum';
const _sellingDone='_sellingDone';//traded
const _sellingTpe='_sellingTpe';//price
const _sellingVol='_sellingVol';//trading
const _sellingNum='_sellingNum';//count
const _xut2gain='xut2gain';
const _eth2send='eth2send';
////////////////////////////////////////////////////////////SELLING
const _buyerAddress='buyerAddress';
const _buyerPostNum='buyerPostNum';
const _buyingDone='_buyingDone';//traded
const _buyingTpe='_buyingTpe';//price
const _buyingVol='_buyingVol';//trading
const _buyingNum='_buyingNum';//count
const _xut2send='xut2send';
const _eth2gain='eth2gain';
////////////////////////////////////////////////////////////BUY
const _buyrate='buyrate';
const _xut2buy='xut2buy';
const _eth2pay='eth2pay';
////////////////////////////////////////////////////////////SELL
const _sellrate='sellrate';
const _xut2sell='xut2sell';
const _eth2recv='eth2recv';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////USER
const _userName='userName';
const _userForm='userForm';
const _userText='userText';
////////////////////////////////////////////////////////////DOCS
const _inBlock='inBlock';
const _inHash='inHash';
const _inTyp='inType';
const _inFmt='inForm';
const _inTxt='inText';
const _inTag='inTags';
const _inHed='inHead';
const _inFut='inFoot';
const _inAut='inAuth';
const _inRef='inRef';
const _inUtc='inUtc';
const _inFrm='inFrm';
const _inTo='inTo';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////MSGS
const _keystore='keystore';
const _smessage='message';
const _accverify='verify';
const _signature='signature';
const _signatory='signatory';
////////////////////////////////////////////////////////////ACCS
const _newaddress='new_address';
const _newprivate='new_private';
const _oldaddress='old_address';
const _oldprivate='old_private';
const _expprivate='exp_private';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const BUYALLOWED=0;
const EXCHANGEALLOWED=1;
const SELLALLOWED=2;
const TRANSFERALLOWED=3;//utrset
const TYPEBANNED=0;
const TYPEPUBLIC=1;
const TYPEREGREQ=2;
const CHECKREGISTER=3;//typset
const BUYINGCOUNT=0;
const EXCHANGECOUNT=1;
const SELLINGCOUNT=2;//utrlen
const CONTENTSOF=0;
const HASHESOF=1;
const PUBSOF=2;
const TYPEDCONTENTSOF=3;
const USERBUYING=4;
const USERSELLING=5;
const JOINSOF=6;
const USERSOF=7;//objlen
const ADMINLIST=0;
const MEMBERSOFXUT=1;
const TICKERLIST=2;
const MEMBERSOFUSER=3;
const MEMBERSHIPOF=4;//admlen
const ADMINS=0;
const ANOSMEMBERSHIPOF=1;
const TICKERS=2;//admset
const BUYATPPE=0;
const SELLATPPE=1;
const TYPEPIP=2;
const TYPEPIW=3;
const MEMBERFEEOFXUT=4;
const MEMBERFEEOFUSER=5;//prices
const ETHBALANCE=0;
const BALANCEOF=1;
const INCOMEOF=2;
const MINTEDOF=3;//objdat
const ETHBALANCEOFXUT=0;
const BALANCEOFXUT=1;
const TOTALSUPPLY=2;//xutdat
////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////
const _user='user';
const _address='address';
const _privateKey='privateKey';
////////////////////////////////////////////////////////////
const _transactionHash='transactionHash';
const _blockNumber='blockNumber';
const _blockHash='blockHash';
const _gasUsed='gasUsed';
const _status='status';
const _from='from';
const _to='to';
////////////////////////////////////////////////////////////
const _ncid='ncid';
const _addr='addr';
const _hash='hash';
const _rpcs='rpcs';
const _bcls='bcls';
const _scan='scan';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const MODAUTHDOC='doc';
const MODPUBNOTE='pub';
const MODDOMNAME='nam';
const MODPROFILE='txd';
const MODDBDRAFT='raw';
////////////////////////////////////////////////////////////
const HEADDOC='hdd';
const DLETTER='don';
const AUCTION='bid';
const SELLING='sel';
const PRIVATE='pte';
const DEPOSIT='dep';
const BETTING='bet';
////////////////////////////////////////////////////////////
const MODELS={
doc:{id:HEADDOC,type:TYPES.draft,name:'official document'},
don:{id:DLETTER,type:TYPES.donation,name:'donation letter'},
bid:{id:AUCTION,type:TYPES.bid_selling,name:'auction listing'},
sel:{id:SELLING,type:TYPES.selling,name:'sale listing'},
pte:{id:PRIVATE,type:TYPES.invoice,name:'private sale'},
dep:{id:DEPOSIT,type:TYPES.deposit_slip,name:'deposit slip'},
bet:{id:BETTING,type:TYPES.betting,name:'bet listing'}};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const _help_content='_help_content';
const _model='model';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const COLDOC_MSG_FMT={
default:0};
////////////////////////////////////////////////////////////
const COLREF_REF={
live:0,
stop:-4,
dead:-8};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const MONEYS={
GEMT9:function(){startGemt()},
NEMT9:function(){startNemt()},
REMT9:function(){startRemt()},
X:function(){startXToken()},
};
const RPCMONEYS={
GEMT9:function(){startGemtRpc()},
NEMT9:function(){startNemtRpc()},
REMT9:function(){startRemtRpc()},
X:function(){startXTokenRpc()},
};
////////////////////////////////////////////////////////////
const MPROGRAM = 'mine';//
const MPROHYIP = 'program';
const MPROPOST = 'post';
////////////////////////////////////////////////////////////
const MPROGDAT = 'markets';
const MPROGGET = 'programs';//
////////////////////////////////////////////////////////////
const MPROGBUY = 'acquire';
const MPROGPAY = 'invest';//
////////////////////////////////////////////////////////////
const MPROGCLR = 'unpost';
const MPROGSTP = 'close';//
////////////////////////////////////////////////////////////
const MPROGINV = 'invests';
const MPROGNOS = 'refnos';
const MPROGWDR = 'withdraw';
////////////////////////////////////////////////////////////
const MBALANCE = 'balanceOf';
const MTSUPPLY = 'totalSupply';
////////////////////////////////////////////////////////////
const PROGMINRATE = 3;
const PROGMAXRATE = 200;
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
let _days = 'days';
////////////////////////////////////////////////////////////
let _errClear = `"RedeemNotAllowed"`;
let _errCoins = `"CoinsNotEnough"`;
let _errDepos = `"TokensNotEnough"`;
let _errFinds = `"SearchFinished"`;
let _errFound = `"ItemNotFound"`;
let _errIdNot = `"IdNotAvailable"`;
let _errInput = `"InputNotValid"`;
let _errInvst = `"ActionNotAllowed"`;
let _errItNon = `"ItemDoesNotFit"`;
let _errItNot = `"ItemDoesNotExist"`;
let _errOwner = `"ActionNotAllowed"`;
let _errValim = `"ValueExceedsLimit"`;
let _errValue = `"ItemHasNoValue"`;
let _errXTime = `"ActionNowImproper"`;
////////////////////////////////////////////////////////////
let _warnDatAddr = `Input address is invalid`;
let _warnDatHash = `Input TxHash is invalid`;
////////////////////////////////////////////////////////////
let _warnPrgCoin = `Hacked token must be Asinerum Mineable`;
let _warnPrgData = `Input data is in invalid format`;
let _warnPrgDraw = `You are about to half redeem this one`;
let _warnPrgIdno = `ID or Ref Number must be a positive integer`;
let _warnPrgInit = `Amount value must be larger than 0`;
let _warnPrgNOwn = `You are not the owner of this object`;
let _warnPrgPrix = `Tokens-per-coin price must be positive`;
let _warnPrgPrvt = `Coins-per-token price must be positive`;
let _warnPrgRate = `APR must be between ${PROGMINRATE}-${PROGMAXRATE}%`;
let _warnPrgRvrc = `Coins-per-token rate is calculated below`;
let _warnPrgRvrt = `Tokens-per-coin rate is calculated above`;
let _warnPrgSAge = `Trade expiration must be in future time`;
let _warnPrgStop = `You are about to stop/cancel this object`;
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[14]
const _Menu=function(div=ACTDIV){return(new Menu(document.getElementById(div)))};
const _Time=function(){return(new Date().getTime())};
const _Array=function(size){return(new Array(size))};
const _Random=function(){return(new SecureRandom())};
const _Decimal=function(num){return(new Decimal(num))};
const _Integer=function(dat,base){return(new BigInteger(dat,base))};
const _Address=function(hash){return(new Bitcoin.Address(hash))};
const _ECKey=function(key){return(new Bitcoin.ECKey(key))};
const _QRCode=function(typ,ec){return(new QRCode(typ,ec))};/*deprecated*/
const _QR=function(div,text,width=60,height=width){return(new QRCode(document.getElementById(div),{text,width,height}))};
const _CashKey=function(key){return(_ECKey(key))};
const _DashKey=function(key){return(new Dashcoin.ECKey(key))};
const _LiteKey=function(key){return(new Litecoin.ECKey(key))};
const _Builder=function(cid){return(new bitcoin.TransactionBuilder(bitcoin.networks[cid]))};
const _BWallet=function(wif,cid=BITCOIN,w){w=bitcoin.ECPair.fromWIF(wif);w.network=bitcoin.networks[cid];return(w);};
////////////////////////////////////////////////////////////[8]
const _Set=function(val){return(new Set(val))};
const _Date=function(val){if(val)return(new Date(val));return(new Date())};
const _Error=function(err){throw(new Error(err));}
const _Regex=function(pat){return(new RegExp(pat))};
const _Uint8=function(val){return(new Uint8Array(val))};
const _Option=function(txt,val){return(new Option(txt,val))};
const _Promise=function(res,rej){return(new Promise(res,rej))};
const _Encoder=function(code='utf-8'){return(new TextEncoder(code))};
const _Decoder=function(code='utf-8'){return(new TextDecoder(code))};
const _Instance=function(arg,obj){return(arg instanceof obj)};
const _FileReader=function(){return(new FileReader())};
const _Blob=function(file){return(new Blob([file]))};
////////////////////////////////////////////////////////////[6]
const _Web3=function(){return(new Web3())};/*WithNoProvider*/
const _Ethereum=function(provider){return(new Web3(provider))};
const _Provider=function(rpc){return(new Web3.providers.HttpProvider(rpc))};
const _Contract=function(abi,addr){return(new web3.eth.Contract(abi,addr))};
const _Buffer=function(val,code='hex'){return(new ethereumjs.Buffer.Buffer(val,code))};
const _Transaction=function(dat){return(new ethereumjs.Tx(dat))};
////////////////////////////////////////////////////////////[3]
const _WasmMemory=function(dat){return(new WebAssembly.Memory(dat))};
const _WasmModule=function(dat){return(new WebAssembly.Module(dat))};
const _WasmInstance=function(module,imports){return(new WebAssembly.Instance(module,imports))};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const txDef=function(addr,cbf=console.log,t={}){web3.eth.getTransactionCount(addr).then(r=>{t.nonce=r;return(web3.eth.net.getId())}).then(r=>{t.chainId=r;return(web3.eth.getGasPrice())}).then(r=>{t.gasPrice=r;return(t)}).then(r=>{cbf(null,r)})};
const xutengCall=function(method,args=[],status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);xuteng.methods[method].apply(this,args).call().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const xutengSend=function(method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);xuteng.methods[method].apply(this,args).send(mmsender(eth)).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const xutengRaws=function(method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log){showLoad(status);sendingFunc=xuteng.methods[method].apply(this,args);sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;txsend(0,out,status,cbf);};
////////////////////////////////////////////////////////////
const getGwei=function(nid=network){getGweiPrice(nid,(e,r)=>{if(r)dv(_txgwei,r)});};
const getCoin=function(ua,div=TEST){web3.eth.getBalance(ua,function(err,result){if(err)return;result=w2s(result);if(ua==sender)userEth=result;dw(div,result);});};
const getData=function(ua,dt){contType=dt;;xuteng.methods.getData(ua,dt).call((err,result)=>{if(err)return;showData(result);cloneData(result);cloneBalance(result);})};
const getUserData=function(ua,dt,cbf){if(badAddr(ua))return;;xuteng.methods.getData(ua,dt).call((err,result)=>{if(result)showUserData(result);if(cbf)cbf(err,result);})};
const getAliasData=function(ua,dt,cb1){if(avalid(ua)){getUserData(ua,dt);return(cb1(ua));}xutengUserRedirect(ua).then(ua=>{if(ua!=ZEROADDR)getUserData(ua,dt);cb1(ua);});};
const getGweiPrice=function(nid=network,cbf=console.log){if(!EXCHAINS[nid])return(cbf(ERROR,null));switchNet(nid);if(EXCHAINS[nid].rpcs){window.web3=_Ethereum(EXCHAINS[nid].rpcs);return(gasPGwei(cbf));}if(EXCHAINS[nid].api){window.web3=_Web3();return(rawGetPrice(cbf));}return(cbf(ERROR,null));};
const getUserNonce=function(ua,nid=network,cbf=console.log){if(!EXCHAINS[nid]||!avalid(ua))return(cbf(ERROR,null));switchNet(nid);if(EXCHAINS[nid].rpcs){window.web3=_Ethereum(EXCHAINS[nid].rpcs);web3.eth.getTransactionCount(ua).then(r=>{return(cbf(null,r))}).catch(e=>{return(cbf(ERROR,null))});return;}if(EXCHAINS[nid].api){window.web3=_Web3();return(rawGetNonce(ua,cbf));}return(cbf(ERROR,null));};
////////////////////////////////////////////////////////////
const showData=function(result){
dw('_symbol',(SYMBOL));
dw('_decimals',(DECIMALS));
dw('_name',(result.xname));
dw('_owner',(result.xowner));
dc('_buyAllowed',(result.utrset[BUYALLOWED]));
dc('_exchangeAllowed',(result.utrset[EXCHANGEALLOWED]));
dc('_sellAllowed',(result.utrset[SELLALLOWED]));
dc('_transferAllowed',(result.utrset[TRANSFERALLOWED]));
dc('_typeBanned',(result.typset[TYPEBANNED]));
dc('_typePublic',(result.typset[TYPEPUBLIC]));
dc('_typeRegReq',(result.typset[TYPEREGREQ]));
dw('_buyingCount',n2s(result.utrlen[BUYINGCOUNT]));
dw('_exchangeCount',n2s(result.utrlen[EXCHANGECOUNT]));
dw('_sellingCount',n2s(result.utrlen[SELLINGCOUNT]));
dw('_pteDocs',n2s(result.objlen[CONTENTSOF]));
dw('_pteMsgs',n2s(result.objlen[HASHESOF]));
dw('_pubDocs',n2s(result.objlen[PUBSOF]));
dw('_typDocs',n2s(result.objlen[TYPEDCONTENTSOF]));
dw('_pteBuys',n2s(result.objlen[USERBUYING]));
dw('_pteSell',n2s(result.objlen[USERSELLING]));
dw('_pteJoin',n2s(result.objlen[JOINSOF]));
dw('_pteUser',n2s(result.objlen[USERSOF]));
dw('_adminsCount',n2s(result.admlen[ADMINLIST]));
dw('_sysRegCount',n2s(result.admlen[MEMBERSOFXUT]));
dw('_sysRnkCount',n2s(result.admlen[TICKERLIST]));
dw('_pteRegCount',n2s(result.admlen[MEMBERSOFUSER]));
dw('_pteExpt',wrdExpt(result.admlen[MEMBERSHIPOF]));
dw('_pteRole',wrdRole(result.admset[ADMINS]));
dw('_pteLevl',wrdRegs(result.admset[ANOSMEMBERSHIPOF]));
dw('_pteTick',wrdTick(result.admset[TICKERS]));
db('_buyAtTpe',w2s(result.prices[BUYATPPE]));
db('_sellAtTpe',w2s(result.prices[SELLATPPE]));
db('_typePIT',w2s(result.prices[TYPEPIP]));
db('_typePIE',w2s(result.prices[TYPEPIW]));
db('_sysFee',w2s(result.prices[MEMBERFEEOFXUT]));
db('_pteFee',w2s(result.prices[MEMBERFEEOFUSER]));
dw('_ethers',w2s(result.objdat[ETHBALANCE]));
dw('_xuteng',w2s(result.objdat[BALANCEOF]));
dw('_income',w2s(result.objdat[INCOMEOF]));
dw('_minted',w2s(result.objdat[MINTEDOF]));
dw('_ethersOfXut',w2s(result.xutdat[ETHBALANCEOFXUT]));
dw('_xutengOfXut',w2s(result.xutdat[BALANCEOFXUT]));
dw('_totalSupply',w2s(result.xutdat[TOTALSUPPLY]));};
////////////////////////////////////////////////////////////
const showUserData=function(result){
dw('_pteDocs_user',n2s(result.objlen[CONTENTSOF]));
dw('_pteMsgs_user',n2s(result.objlen[HASHESOF]));
dw('_pubDocs_user',n2s(result.objlen[PUBSOF]));
dw('_typDocs_user',n2s(result.objlen[TYPEDCONTENTSOF]));
dw('_pteBuys_user',n2s(result.objlen[USERBUYING]));
dw('_pteSell_user',n2s(result.objlen[USERSELLING]));
dw('_pteRole_user',wrdRole(result.admset[ADMINS]));
dw('_pteLevl_user',wrdRegs(result.admset[ANOSMEMBERSHIPOF]));
dw('_pteTick_user',wrdTick(result.admset[TICKERS]));
dw('_ethers_user',w2s(result.objdat[ETHBALANCE]));
dw('_xuteng_user',w2s(result.objdat[BALANCEOF]));
dw('_income_user',w2s(result.objdat[INCOMEOF]));
dw('_minted_user',w2s(result.objdat[MINTEDOF]));
dw('_pteRegCount_user',n2s(result.admlen[MEMBERSOFUSER]));
db('_pteFee_user',w2s(result.prices[MEMBERFEEOFUSER]));};
////////////////////////////////////////////////////////////
const cloneData=function(result){
mc('class_buyAllowed',(result.utrset[BUYALLOWED]));
mc('class_exchangeAllowed',(result.utrset[EXCHANGEALLOWED]));
mc('class_sellAllowed',(result.utrset[SELLALLOWED]));
mc('class_transferAllowed',(result.utrset[TRANSFERALLOWED]));
mc('class_typeBanned',(result.typset[TYPEBANNED]));
mc('class_typePublic',(result.typset[TYPEPUBLIC]));
mc('class_typeRegReq',(result.typset[TYPEREGREQ]));
mw('class_ethersOfXut',w2s(result.xutdat[ETHBALANCEOFXUT]));
mw('class_xutengOfXut',w2s(result.xutdat[BALANCEOFXUT]));
mw('class_ethers',w2s(result.objdat[ETHBALANCE]));
mw('class_xuteng',w2s(result.objdat[BALANCEOF]));
mw('class_income',w2s(result.objdat[INCOMEOF]));
mw('class_minted',w2s(result.objdat[MINTEDOF]));
mw('class_pteBuys',n2s(result.objlen[USERBUYING]));
mw('class_pteSell',n2s(result.objlen[USERSELLING]));
mw('class_pteLevl',wrdRegs(result.admset[ANOSMEMBERSHIPOF]));
mw('class_buyAtTpe',w2s(result.prices[BUYATPPE]));
mw('class_sellAtTpe',w2s(result.prices[SELLATPPE]));
mw('class_typePIT',w2s(result.prices[TYPEPIP]));
mw('class_typePIE',w2s(result.prices[TYPEPIW]));
mw('class_sysFee',w2s(result.prices[MEMBERFEEOFXUT]));
mw('class_pteFee',w2s(result.prices[MEMBERFEEOFUSER]));};
////////////////////////////////////////////////////////////
const cloneBalance=function(result){
buyTpe=w2s(result.prices[BUYATPPE]);
sellTpe=w2s(result.prices[SELLATPPE]);
typePriceXut=w2s(result.prices[TYPEPIP]);
typePriceEth=w2s(result.prices[TYPEPIW]);
sysRegFee=w2s(result.prices[MEMBERFEEOFXUT]);
pteRegFee=w2s(result.prices[MEMBERFEEOFUSER]);
userEth=w2s(result.objdat[ETHBALANCE]);
userXut=w2s(result.objdat[BALANCEOF]);
userBuysCount=result.objlen[USERBUYING];
userSellCount=result.objlen[USERSELLING];
userReg=result.typset[CHECKREGISTER];///
buyAllowed=result.utrset[BUYALLOWED];
exchangeAllowed=result.utrset[EXCHANGEALLOWED];
sellAllowed=result.utrset[SELLALLOWED];
transferAllowed=result.utrset[TRANSFERALLOWED];
xutEth=w2s(result.xutdat[ETHBALANCEOFXUT]);
xutXut=w2s(result.xutdat[BALANCEOFXUT]);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const ethersOf=function(ua,div=TEST){web3.eth.getBalance(ua,function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
const xutengOf=function(ua,div=TEST){xuteng.methods.balanceOf(ua).call(function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
const incomeOf=function(ua,div=TEST){xuteng.methods.incomeOf(ua).call(function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
const mintedOf=function(ua,div=TEST){xuteng.methods.mintedOf(ua).call(function(err,result){if(err)return;result=w2s(result);console.log(result);mw(div,result);});};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const getUserOffer=function(ua,n){if(badAddr(ua))return;;userSelling(ua,n,_sellingDone,_sellingTpe,_sellingVol,_sellingNum);};
const getUserRequest=function(ua,n){if(badAddr(ua))return;;userBuying(ua,n,_buyingDone,_buyingTpe,_buyingVol,_buyingNum);};
////////////////////////////////////////////////////////////
const getOwnOffer=function(n){userSelling(sender,n,_sellDone,_sellTpe,_sellVol,_sellNum);};
const getOwnRequest=function(n){userBuying(sender,n,_buyDone,_buyTpe,_buyVol,_buyNum);};
////////////////////////////////////////////////////////////
const userBuying=function(ua,n,divD,divP,divV,divN){xuteng.methods.userBuying(ua,n-1).call(function(err,result){if(!result||err){alert(hi_alert_data);result=POSTITEM;}dw(divD,w2s(result.traded));dw(divP,w2s(result.ppe));dw(divV,w2s(result.trading));dw(divN,n2s(result.count));});};
const userSelling=function(ua,n,divD,divP,divV,divN){xuteng.methods.userSelling(ua,n-1).call(function(err,result){if(!result||err){alert(hi_alert_data);result=POSTITEM;}dw(divD,w2s(result.traded));dw(divP,w2s(result.ppe));dw(divV,w2s(result.trading));dw(divN,n2s(result.count));});};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[3]
const setPGwei=function(){gasPGwei((e,gwei)=>{if(e)return;console.log('GWEI:',gwei);try{document.getElementById(_txgwei).options[0]=(new Option('GWEI:'+gwei,gwei));}catch(e){}});};
const gasPGwei=function(cbf=console.log){web3.eth.getGasPrice().then((resolve,reject)=>{if(reject)return(cbf(reject,null));window.txgwei=gfromWei(resolve);return(cbf(null,window.txgwei));});};
const betValid=function(to,xut,uts,cbf=console.log){txaddr(to,function(err,result){if(err)return(cbf(err,null));if(!result)return(cbf(null,undefined));if(!uts)uts=ethnow();if(xut<result.min||xut>result.max)return(cbf(null,0));if(uts<result.txUts||uts>result.uts)return(cbf(null,false));return(cbf(null,result.txBlock));});};
////////////////////////////////////////////////////////////[8]
const readdr=function(txa,idx=0){return new Promise(resolve=>{txaddr(txa,function(err,result){if(err||!result){resolve(null)}else{resolve(result)}},idx);});};
const tcoLen=function(uaw,cbf=console.log,dt=TYPES.personal_profile,dti=TYPEDCONTENTSOF){xuteng.methods.getData(uaw,dt).call((err,result)=>{if(err)return(cbf(err,null));cbf(null,result.objlen[dti]);});};
const txaddr=function(txa,cbf=console.log,idx=0){xuteng.methods.hashesOf(txa,idx).call((err,result)=>{if(err)return(cbf(err,null));dehash(result,function(err,result){if(err)return(cbf(err,null));cbf(null,result);});});};
const deaddr=function(uaw,cbf=console.log,idx=0){xuteng.methods.typedContentsOf(uaw,TYPES.personal_profile,idx).call((err,result)=>{if(err)return(cbf(err,null));xuteng.methods.hashesOf(result,0).call((err,result)=>{if(err)return(cbf(err,null));dehash(result,function(err,result){if(err)return(cbf(err,null));cbf(null,result);});});});};
const dehash=function(txh,cbf=console.log,tx){web3.eth.getTransaction(txh,function(err,result){if(err||!result)return(cbf(err,null));console.log(result.input);tx=hexObj(result.input);if(!tx.obj)tx={obj:{txh:txh,raw:result.input}};Object.assign(tx.obj,{txh:txh,txBlock:Number(result.blockNumber),txAuthor:result.from,txWei:result.value});web3.eth.getBlock(result.blockNumber).then(result=>{tx.obj.txUts=result.timestamp;cbf(null,tx.obj);}).catch(err=>{tx.obj.txUts=0;cbf(null,tx.obj);});});};
const txfunc=async(txh,cbf=console.log,o,d)=>{await(web3.eth.getTransaction(txh,function(err,result){if(err)return(cbf(err,null));o={from:result.from,contact:result.to,hexdata:result.input,block:result.blockNumber,gas:result.gas,eth:fromWei(result.value)};d=dedata(o.hexdata);if(d){o.xutrec=d.data[0];o.xutval=fromWei(d.data[1]);o.xutdoc=d.data[2];o.func=d.func;}return(cbf(null,o));}));};
const rehash=async(txh,cbf=console.log)=>{await(web3.eth.getTransaction(txh).then(data=>{window.txInputJson=hexObj(data.input);cbf(null,window.txInputJson)}).catch(e=>{window.txInputJson=null;cbf(hi_alert_data,null)}))};
const ofhash=async(txh,cbf=console.log)=>{await(xuteng.methods.addressOf(txh).call().then(address=>{window.hashAddress=address;cbf(null,window.hashAddress)}).catch(e=>{window.hashAddress=null;cbf(hi_alert_data,null)}))};
////////////////////////////////////////////////////////////[2]
const lotter=async(timestamp,digits,maxdig,cbf=console.log)=>{if(timestamp>lotnow().lotstamp)return(cbf(null,[-4]));if(!timestamp)timestamp=lotnow().lotstamp;if(!digits)digits=1;if(!maxdig)maxdig=99;window.lotstamp=Number(timestamp);window.lotdigits=Number(digits);window.lotmaxdig=Number(maxdig);window.blocknum=0;await(getBStop(0,window.lotstamp));if(!window.blocknum)return(cbf(null,[-1]));getlot(window.blocknum,cbf);};//GenerateWinningNumbers//
const getlot=function(block,cbf=console.log,skip=0,maxpage=99,i){if(window.lotdigits>7)return(cbf(null,[-3]));if(!skip)window.eventpicks=[];xuteng.getPastEvents('Transfer',{fromBlock:block-999,toBlock:block},function(err,result){if(err)return(cbf(err,null));if(skip>maxpage)return(cbf(null,[-2]));if(!result||!result.length)return(getlot(block-999-1,cbf,++skip));for(i=result.length-1;result[i]&&window.eventpicks.length<10;i--){window.eventpicks.push(result[i]);}if(window.eventpicks.length<10)return(getlot(block-999-1,cbf,++skip));
;window.numberpicks=[];window.cryptstring=window.lotstamp+COLON+window.blocknum+COLON;for(i=window.eventpicks.length-1;i>0;i--){window.cryptstring+=toHash(window.eventpicks[i].blockHash+window.eventpicks[i].blockNumber+window.eventpicks[i].transactionHash+window.eventpicks[i].transactionIndex+window.eventpicks[i].signature);};console.log(window.cryptstring);while(window.numberpicks.length<window.lotdigits){window.cryptstring=toHash(window.cryptstring+HYPHEN+window.lotdigits+COLON+window.lotmaxdig);window.lottonum=h2m(window.cryptstring.slice(2),window.lotmaxdig);if(window.numberpicks.includes(window.lottonum))continue;window.numberpicks.push(window.lottonum);}return(cbf(null,window.numberpicks));});};
////////////////////////////////////////////////////////////[4]
const logBStop=async(timestamp)=>{await(getBStop(0,timestamp));console.log('StopBlock:'+window.blocknum);};
const getBLast=async()=>{window.blocknum=await(web3.eth.getBlockNumber());console.log('Latest:'+window.blocknum);};
const getBTime=async(block)=>{block=await(web3.eth.getBlock(block));if(!block){console.log('BlockNotFound');return;}window.blockstamp=block.timestamp;console.log('BlockStamp:'+window.blockstamp);console.log('BlockTime:'+fromDate(window.blockstamp));};
const getBStop=async(skip,timestamp,block)=>{if(!skip){await(getBLast());skip=Number(window.blocknum);}if(timestamp)window.lotstamp=Number(timestamp);block=await(web3.eth.getBlock(window.blocknum));if(!block){console.log('BlockNotFound');return;}if(block.timestamp==window.lotstamp)return;if(skip==0&&ethnow()<window.lotstamp)return;if(skip==1&&block.timestamp>window.lotstamp)return;if(skip==1&&block.timestamp<window.lotstamp)return(++window.blocknum);skip=Math.ceil(skip/2);if(block.timestamp>window.lotstamp){window.blocknum-=skip;}else{window.blocknum+=skip;}return(getBStop(skip));};//GetClosestStopBlock//
////////////////////////////////////////////////////////////[2]
const scanGameData=async(ga,wins=[],least=1,cbf=console.log)=>{await(scanTxLottos(ga,wins,least,cbf,scanGameWins));};
const scanTxLottos=async(ga,wins=[],least=1,cbf=console.log,scan=scanTxEvents)=>{if(!avalid(ga))return(cbf(hi_alert_address,null));window.lotaddress=ga;
;await(readdr(ga).then(result=>{if(!result||!result.uts||!result.txBlock)return(cbf(null,null));window.lotauthor=result.txAuthor;window.lotblock=result.txBlock;window.lotstamp=result.uts;window.xutmin=result.min;window.xutmax=result.max;window.lotodds=result.odd;window.lotform=result.frm;window.dtype=result.typ;window.GA=result;}));
;await(web3.eth.getBlockNumber().then(result=>{window.lastblock=result;window.blocknum=result;console.log('LastBlock:'+blocknum);if(window.lotblock&&window.lotstamp){console.warn('StartBlock:'+lotblock);console.log('StopTime:'+lotstamp);}else{return(cbf(ERROR,null))}}).catch(err=>{return(cbf(hi_alert_data,null));}));
;await(getBStop(0,lotstamp));if(!window.blocknum||window.blocknum<window.lotblock||window.blocknum>window.lastblock)return(cbf(CANCELED,null));console.warn('StopBlock:'+blocknum);if(!window.lotblock)return(cbf(ERROR,null));if(scan)scan(lotaddress,lotblock,blocknum,window.GA,wins,least,cbf);};
////////////////////////////////////////////////////////////[2]
const scanTxEvents=function(ga,bfrom,bto,game=window.GA,wins=[],least=1,cbf=console.log,tx=BLANK,from=BLANK,xut=0,ds=[],n=0){if(!avalid(ga)||!bfrom||!bto||!game)return(cbf(hi_alert_data,null));window.lotpayments=[];window.lotsubmits=[];window.lotrunners=[];//=>window.lotrunners[]//
;xuteng.getPastEvents('Transfer',{filter:{toAddress:ga},fromBlock:bfrom,toBlock:bto},function(err,result){if(err)return(cbf(err,null));result.forEach((item)=>{xut=fromWei(item.returnValues.txPenny);from=item.returnValues.fromAddress;tx=item.transactionHash;window.lotpayments.push({from,xut,tx});
;if(!invalide(game,xut,ga,game.txUts)){window.lotsubmits.push({from,xut,tx});if(wins.length){ds=decs(xut,GAMES[game.frm].dec)[1];n=cmpArray(ds,wins);if(n>=least)window.lotrunners.push({from,xut,tx,ds,n});}}});}).then(function(result){if(wins.length){cbf(null,window.lotrunners)}else{cbf(null,window.lotsubmits)}});};
const scanGameWins=function(ga,bfrom,bto,game=window.GA,wins=[],least=1,cbf=console.log,won=0){window.lotwinners=[];//wins=[NNNN,NNN,NN,0]//
;scanTxEvents(ga,bfrom,bto,game,wins,least,function(err,result){if(err||!result)return(cbf(err,result));result.forEach((item)=>{if(item.n&&item.n>=least){//DOUBLE-CHECK[least]//
;won=GAMES[game.frm].info(item.xut,GAMES[game.frm].dup?item.ds.length:wins[0],item.n,game.odd);if(won)window.lotwinners.push({from:item.from,tx:item.tx,xut:item.xut,n:item.n,win:won});}});cbf(null,window.lotwinners);});};
////////////////////////////////////////////////////////////[2]
const lo1x99submit=function(desubmits,cbf=console.log,i,j,k,x){submits=Object.assign([],desubmits);for(i=0;i<100;i++){if(i==0)window.numsubmits={};window.numsubmits[i]=[];}if(!submits||!submits.length)return(cbf(null,window.numsubmits));for(i=0;i<100;i++){for(j=0;j<submits.length;j++){if(submits[j]&&submits[j].from&&submits[j].xut){x=xut2de(submits[j].xut);for(k=0;k<x.de.length;k++){if(Number(x.de[k])==i){window.numsubmits[i].push({from:submits[j].from,xut:x.xut,tx:submits[j].tx});}}}}}return(cbf(null,window.numsubmits));};//desubmits[]<=>window.lotsubmits[]//
const lo1x99winner=function(detable,win,mul,cbf=console.log,i){table=Object.assign({},detable);if(!mul)mul=70;if(table[win]&&table[win].length){for(i=0;i<table[win].length;i++){table[win][i].win=mul*table[win][i].xut};return(cbf(null,{wins:table[win]}));}return(cbf(ERROR,null));};//detable{}<=>window.numsubmits{}//
////////////////////////////////////////////////////////////[2]
const loNxNNresult=function(desubmits,wins,cbf=console.log,i,j){if(!wins.length||wins.length<2)return(cbf(ERROR,null));submits=Object.assign([],desubmits);for(i=1;i<=wins.length;i++){if(i==1)window.numresults={};window.numresults[i]=[];}if(!submits||!submits.length)return(cbf(null,window.numresults));for(i=1;i<=wins.length;i++){for(j=0;j<submits.length;j++){if(submits[j]&&submits[j].from&&submits[j].xut){if(lotArray(wins,xut2lo(submits[j].xut).lo)==i)window.numresults[i].push({from:submits[j].from,xut:submits[j].xut,tx:submits[j].tx,lotto:i});}}}return(cbf(null,window.numresults));};//desubmits[]<=>window.lotsubmits[]//
const loNxNNwinner=function(detable,winobj,cbf=console.log,i){table=Object.assign({},detable);Object.keys(winobj).forEach(function(key){if(table[key]&&table[key].length){for(i=0;i<table[key].length;i++){if(table[key][i].lotto==key&&Number(winobj[key])>0)table[key][i].win=winobj[key]*table[key][i].xut;}}});return(cbf(null,{wins:table}));};//detable{}<=>window.numresults{}//
////////////////////////////////////////////////////////////[4]
const getHashFromAddr=function(a,cbf=console.log,idx=0){xuteng.methods.hashesOf(a,idx).call(function(err,result){cbf(err,result);});};
const getAddrFromHash=function(h,cbf=console.log){xuteng.methods.addressOf(h).call(function(err,result){cbf(err,result);});};
const divHashFromAddr=function(a,div=TEST){getHashFromAddr(a,function(err,result){if(err)return(dw(div,HYPHEN));dw(div,result);});};
const divAddrFromHash=function(h,div=TEST){getAddrFromHash(h,function(err,result){if(err)return(dw(div,HYPHEN));dw(div,result);});};
////////////////////////////////////////////////////////////[5]
const dehashLottoGame=function(h,div=TEST,cbf=console.log){showLoad(div);dehash(h,function(err,result){if(err)return(dw(div,ERROR));if(cbf)cbf(null,result);window.txLottoGame=result;dwMyGameProfile(div,result);});};
const deaddrLottoGame=function(a,div=TEST,cbf=console.log){showLoad(div);txaddr(a,function(err,result){if(err)return(dw(div,ERROR));if(cbf)cbf(null,result);window.txLottoGame=result;dwMyGameProfile(div,result);});};
const dehashMyProfile=function(h,div=TEST,cbf=console.log){showLoad(div);dehash(h,function(err,result){if(err)return(dw(div,ERROR));if(cbf)cbf(null,result);window.txMyProfile=result;dwMyAddrProfile(div,result);});};
const deaddrMyProfile=function(a,div=TEST,cbf=console.log){showLoad(div);tcoLen(a,(e,len)=>{if(e)return(dw(div,ERROR));if(!len)return(dw(div,HYPHEN));deaddr(a,function(err,result){if(err)return(dw(div,CANCELED));if(cbf)cbf(null,result);window.txMyProfile=result;dwMyAddrProfile(div,result);},len-1);});};
const deaddrMyDomains=function(a,div=TEST,cbf=console.log){showLoad(div);xutengWalletDetail(a,function(err,result){if(err)return(dw(div,ERROR));if(cbf)cbf(null,result);window.txMyDomains=result;dwWalletsDomain(div,result);});};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[6]
const xutengMemberStatus=async(wallet,cbf=console.log)=>{if(!avalid(wallet))return(cbf(hi_alert_address,null));return new Promise(resolve=>{xuteng.methods.getData(wallet,1).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r=wrdExpt(r.admlen[MEMBERSHIPOF]);if(cbf)cbf(null,r);resolve(r);}});});};
const xutengWalletDetail=async(wallet,cbf=console.log)=>{if(!avalid(wallet))return(cbf(hi_alert_address,null));return new Promise(resolve=>{xuteng.methods.contents(wallet).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r={json:r.json?JSON.parse(r.json):BLANK,time:wrdExpt(r.time)};if(cbf)cbf(null,r);resolve(r);}});});};
const xutengDomainStatus=async(domain=BLANK,cbf=console.log)=>{domain=domain.toLowerCase();return new Promise(resolve=>{xuteng.methods.retDomain(domain).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r={user:r.user,json:r.json?JSON.parse(r.json):BLANK,time:wrdExpt(r.time)};if(cbf)cbf(null,r);resolve(r);}});});};
const xutengDomainsOwner=async(domain=BLANK,cbf=console.log)=>{domain=toHash(domain.toLowerCase());return new Promise(resolve=>{xuteng.methods.downerOf(domain?domain:OxOO).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{if(cbf)cbf(null,r);resolve(r);}});});};
const xutengAliasesOwner=async(alias=BLANK,cbf=console.log)=>{alias=toHash(alias.toLowerCase());return new Promise(resolve=>{xuteng.methods.addressOf(alias).call((e,addr)=>{if(e||addr==ZEROADDR){if(cbf)cbf(e,ZEROADDR);resolve(ZEROADDR);}else{xuteng.methods.holderOf(addr).call((e,user)=>{if(e||user==ZEROADDR){if(cbf)cbf(e,ZEROADDR);resolve(ZEROADDR);}else{if(cbf)cbf(null,user);resolve(user);}});}});});};
const xutengUserRedirect=async(name=BLANK,cbf=console.log)=>{return new Promise(resolve=>{xutengDomainsOwner(name,function(e,addr){if(e){if(cbf)cbf(e,null);resolve(null);}else{if(addr==ZEROADDR){xutengAliasesOwner(name,function(e,addr){if(e){if(cbf)cbf(e,null);resolve(null);}else{if(cbf)cbf(null,addr);resolve(addr);}});}else{if(cbf)cbf(null,addr);resolve(addr);}}});});};/*Returns:NULL,ZEROADDR,Address*/
////////////////////////////////////////////////////////////[2]
const xutengDomainAnnualETH=async(cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.getData(contractAddress,TYPES.domain).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r=fromWei(r.prices[TYPEPIW]);if(cbf)cbf(null,r);resolve(r);}});});};
const xutengMemberAnnualXUT=async(cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.getData(contractAddress,TYPES.domain).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r=fromWei(r.prices[MEMBERFEEOFXUT]);if(cbf)cbf(null,r);resolve(r);}});});};
////////////////////////////////////////////////////////////[5]
const xutengTxDehash=async(hash,cbf=console.log)=>{if(!hvalid(hash))return(cbf(hi_alert_address,null));return new Promise(resolve=>{dehash(hash,(e,r)=>{if(e){if(cbf)cbf(ERROR,null);resolve(null);}else{if(cbf)cbf(null,r);resolve(r);}});});};
const xutengSDocList=async(address,begin,end,cbf=console.log,penny=GAMEXUT,t)=>{if(!avalid(address))return(cbf(hi_alert_address,null));try{t=await(xutengTxBlocks(begin,end));}catch(e){return(cbf(ERROR,null))}if(!t||!t.begin||!t.end)return(t);await(xuteng.getPastEvents('Transfer',{filter:{fromAddress:address,toAddress:ZEROADDR},fromBlock:t.begin,toBlock:t.end},function(err,result){if(err)return(null);window.docDict={};result.forEach(async(item)=>{if(item.returnValues.txPenny==penny){window.docDict[item.transactionHash]={};await(ofhash(item.transactionHash,function(e,r){;}));window.docDict[item.transactionHash].addr=window.hashAddress;await(rehash(item.transactionHash,function(e,r){;}));window.docDict[item.transactionHash].json=window.txInputJson;console.warn(window.docDict[item.transactionHash].json.obj.frm+COLON,fromDate(window.docDict[item.transactionHash].json.obj.uts));console.warn(window.docDict[item.transactionHash].addr);}})}));cbf(null,window.docDict);return(window.docDict);};
const xutengReceived=async(address,begin,end,cbf=console.log,t,i,j=[])=>{if(!avalid(address))return(cbf(hi_alert_address,null));try{t=await(xutengTxBlocks(begin,end));}catch(e){return(cbf(ERROR,null))}if(!t||!t.begin||!t.end)return(t);xuteng.getPastEvents('Transfer',{filter:{toAddress:address},fromBlock:t.begin,toBlock:t.end},function(err,result){if(err)return(null);for(i=0;i<result.length;i++){j.push({xut:fromWei(result[i].returnValues.txPenny),tx:result[i].transactionHash,from:result[i].returnValues.fromAddress});}if(cbf)cbf(null,j);console.warn(j);return(j);});};
const xutengSentAway=async(address,begin,end,cbf=console.log,t,i,j=[])=>{if(!avalid(address))return(cbf(hi_alert_address,null));try{t=await(xutengTxBlocks(begin,end));}catch(e){return(cbf(ERROR,null))}if(!t||!t.begin||!t.end)return(t);xuteng.getPastEvents('Transfer',{filter:{fromAddress:address},fromBlock:t.begin,toBlock:t.end},function(err,result){if(err)return(null);for(i=0;i<result.length;i++){j.push({xut:fromWei(result[i].returnValues.txPenny),tx:result[i].transactionHash,to:result[i].returnValues.toAddress});}if(cbf)cbf(null,j);console.warn(j);return(j);});};
const xutengTxBlocks=async(begin,end,t)=>{t=trange(begin,end);if(!t)return(t);await(getBStop(0,t.begin));begin=window.blocknum;if(!begin)return(null);await(getBStop(0,t.end));end=window.blocknum;if(!end)return(null);return({begin,end});};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const getSenderData=function(){
ethersOf(sender,'class_ethers');
xutengOf(sender,'class_xuteng');
incomeOf(sender,'class_income');};
////////////////////////////////////////////////////////////
const getNetworking=function(){
mw('class_nwname',network);
mw('class_nwbcid',networkChainId);
mw('class_scaddr',contractAddress);
mw('class_sender',sender);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const buy=function(eth){setSending(xuteng.methods.buy(),eth);};
const sell=function(xut){setSending(xuteng.methods.sell(s2w(xut)),0);};
const transfer=function(ua,xut){setSending(xuteng.methods.transfer(ua,s2w(xut)),0);};
////////////////////////////////////////////////////////////
const setFee=function(xut){setSending(xuteng.methods.setFee(s2w(xut)),0);};
const setUser=function(ua,num){setSending(xuteng.methods.setUser(ua,num),0);};
const setHolder=function(oa,ua){setSending(xuteng.methods.setHolder(oa,ua),0);};
const setDomain=function(d,j,eth){setSending(xuteng.methods.setDomain(d,j),eth);};
const transferFor=function(to,xut,re){setSending(xuteng.methods.transferFor(to,s2w(xut),re),0);};
const pennyPayout=function(to,oa,xut){setSending(xuteng.methods.pennyPayout(to,oa,s2w(xut)),0);};
////////////////////////////////////////////////////////////
const postContent=function(j,co,to,exp,pip,bid,typ){setSending(xuteng.methods.postContent(j,co,to,exp,s2w(pip),s2w(bid),typ),0);};
const pub=function(oa,typ){setSending(xuteng.methods.pub(oa,typ),0);};
const ping=function(h,typ){setSending(xuteng.methods.ping(h,typ),0);};
const notify=function(h,to){setSending(xuteng.methods.notify(h,to),0);};
const txjoin=function(oa,h,typ,xut){setSending(xuteng.methods.txjoin(oa,h,typ,s2w(xut)),0);};
const conjoin=function(oa,j,xut){setSending(xuteng.methods.conjoin(oa,j,s2w(xut)),0);};
const releaseCoholding=function(oa,x){setSending(xuteng.methods.releaseCoholding(oa,x),0);};
////////////////////////////////////////////////////////////
const userSetSell=function(xut,tpe){setSending(xuteng.methods.userSetSell(s2w(xut),s2w(tpe)),0);};
const userSetBuy=function(tpe,eth){setSending(xuteng.methods.userSetBuy(s2w(tpe)),eth);};
const userStopSell=function(i){setSending(xuteng.methods.userStopSell(i),0);};
const userStopBuy=function(i){setSending(xuteng.methods.userStopBuy(i),0);};
const buyFromSeller=function(ua,i,c,eth){setSending(xuteng.methods.buyFromSeller(ua,i,c),eth);};
const sellToBuyer=function(ua,i,c,xut){setSending(xuteng.methods.sellToBuyer(ua,i,c,s2w(xut)),0);};
////////////////////////////////////////////////////////////
const weiTransfer=function(ua,eth){setSending(xuteng.methods.weiTransfer(ua,s2w(eth)),0);};
const mintPenny=function(ua,xut){setSending(xuteng.methods.mintPenny(ua,s2w(xut)),0);};
const setAllow=function(b,s,t,e){setSending(xuteng.methods.setAllow(b,s,t,e),0);};
const setPenny=function(sat,bat){setSending(xuteng.methods.setPenny(s2w(sat),s2w(bat)),0);};
const setRole=function(ua,num){setSending(xuteng.methods.setRole(ua,num),0);};
const setTick=function(ua,num){setSending(xuteng.methods.setTick(ua,num),0);};
const setType=function(dt,reg,ban,pub){setSending(xuteng.methods.setType(dt,reg,ban,pub),0);};
const setTypePrice=function(dt,pit,pie){setSending(xuteng.methods.setTypePrice(dt,s2w(pit),s2w(pie)),0);};
const setName=function(s){setSending(xuteng.methods.setName(s),0);};
const setOwner=function(xa){setSending(xuteng.methods.setOwner(xa),0);};
const changeOwner=function(ua){setSending(xuteng.methods.changeOwner(ua),0);};
////////////////////////////////////////////////////////////
const pennyPush=function(xut){sell(xut);};//ReservedSellFunctionForAdmin;
const pennyTransfer=function(to,xut){pennyPayout(to,contractAddress,xut);};
const setSending=function(func,eth){sendingFunc=func;sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;};
////////////////////////////////////////////////////////////
const webProvider=function(rpc){return(web3.eth.setProvider(rpc))};
const webAccount=function(key){return(web3.eth.accounts.wallet.add(keyAccount(key)))};
const webDeploy=function(from,data,gas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){return(webSend(from,null,0,data,gas,gasPrice,cbf))};
const webSend=function(from,to,value='0'/*WEI:DECIMAL*/,data=HEXINIT,gas=maxgas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){return(web3.eth.sendTransaction({from,to,gas,gasPrice,value,data},cbf))};
const webSign=function(from,to,value='0'/*WEI:DECIMAL*/,data=HEXINIT,gas=maxgas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){for(acc of Object.values(web3.eth.accounts.wallet)){if(acc.address==from){return(acc.signTransaction({from,to,gas,gasPrice,value,data},cbf))}};return(cbf(FAILED,null))};
const webRaws=function(from,to,value='0'/*WEI:DECIMAL*/,data=HEXINIT,gas=maxgas,gasPrice=null/*WEI:DECIMAL*/,cbf=console.log){webSign(from,to,value,data,gas,gasPrice,function(err,res){if(res){return(cbf(res.rawTransaction))};return(cbf(err.toString()))})};
////////////////////////////////////////////////////////////
const txRaw=function(nonce){return(txraw(sendingAbi,nonce,sendingEth,0))};
const txGet=function(txh){return(web3.eth.getTransaction(txh))};/*promise*/
const txGas=function(){return(sendingFunc.estimateGas({from:sender,value:s2wHex(sendingEth)}))};/*promise*/
const txCount=function(ua=sender){return(web3.eth.getTransactionCount(ua))};/*promise*/
const txSSend=function(tx){return(web3.eth.sendSignedTransaction(tx))};/*promise*/
const txTSend=function(dat){return(web3.eth.sendTransaction(dat))};/*promise*/
const nsBlock=function(){return(web3.eth.getBlockNumber())};/*promise*/
////////////////////////////////////////////////////////////
const send=function(divG,divH,divS,cbf=console.log){showLoad(divS);txsend(divG,divH,divS,cbf);};
const txSend=function(divG,divF,divS,wrn=console.warn,cfm=true){return(txGas().then(gas=>{estgas=gas;gasfee=fromGwei(estgas*txgwei);dw(divG,estgas);dw(divF,gasfee);if(cfm&&!accepted(divS))return(null);wrn('GAS',estgas,'FEE',gasfee);return(txCount())}).then(nonce=>{nonce=nonce.toString(16);wrn('NONCE',nonce);return(txSSend(txRaw(nonce)))}))};/*promise*/
const txsend=function(divG,divH,divS,cbf=console.log,cfm=true,run=true,x){txGas().then(gas=>{estgas=gas;gasfee=fromGwei(estgas*txgwei);if(cfm&&!accepted(divS))return;txCount().then(nonce=>{nonce=nonce.toString(16);x=txRaw(nonce);if(!run)return(cbf(null,x));txSSend(x).on(RECEIPT,receipt=>{txreceipt=receipt;if(cbf)cbf(null,txreceipt);console.log(txreceipt);dw(divG,txreceipt.gasUsed);dw(divH,txreceipt.transactionHash);dw(divS,txreceipt.status);}).then(res=>{dw(divS,OK);}).catch(err=>{if(cbf)cbf(err,null);dw(divG,BLANK);dw(divH,BLANK);dw(divS,ERROR+errCode(err));});});});};
const sendeth=function(to,eth,divH,divS,cbf=console.log,abi=OxOO,run=true,x){if(abi!=OxOO)abi=toHex(abi);showLoad(divS);estgas=BASEGAS;gasfee=fromGwei(estgas*txgwei);if(!accepted(divS))return;txCount().then(nonce=>{nonce=nonce.toString(16);x=txraw(abi,nonce,eth,to);if(!run)return(cbf(null,x));txSSend(x).on(RECEIPT,receipt=>{txreceipt=receipt;if(cbf)cbf(null,txreceipt);console.log(txreceipt);dw(divH,txreceipt.transactionHash);}).then(res=>{dw(divS,OK);}).catch(err=>{if(cbf)cbf(err,null);dw(divS,ERROR+errCode(err));});});};
const sendeth2sys=function(eth,divH,divS,cbf=console.log){sendeth(contractAddress,eth,divH,divS,cbf);};
////////////////////////////////////////////////////////////
const rawtx=function(abi,nonce,eth=0,to=null,d){d={data:abi,nonce:HEXINIT+nonce,value:s2wHex(eth),gasPrice:g2wHex(txgwei),gasLimit:toHex(maxgas),from:sender,chainId:CONTRACT[network].ncid};if(to)d.to=to;d=_Transaction(d);d.sign(_Buffer(senderPte));return(HEXINIT+d.serialize().toString(HEX))};
const xsend=function(abi,gas,eth=0,to=null,divS=TEST,cbf=console.log,run=true,x){showLoad(divS);maxgas=gas;estgas=gas;gasfee=fromGwei(estgas*txgwei);txCount().then(nonce=>{nonce=nonce.toString(16);x=rawtx(abi,nonce,eth,to);if(!run)return(cbf(null,x));txSSend(x).on(RECEIPT,receipt=>{txreceipt=receipt;if(cbf)cbf(null,txreceipt,_hash,receipt.transactionHash,_address,receipt.contractAddress);console.log(txreceipt);}).then(res=>{dw(divS,OK);}).catch(err=>{if(cbf)cbf(err,null);dw(divS,ERROR+errCode(err))})})};
const deploy=function(abi,code,args=[],gas){xsend(_Contract(abi).deploy({data:code,arguments:args}).encodeABI(),gas)};
const deploi=function(bytecode,gas=3000000,divS=TEST,cbf=console.log){xsend(bytecode,gas,0,null,divS,cbf)};
////////////////////////////////////////////////////////////
const txraw=function(abi,nonce,eth,to,d,p,t,r){
;d={nonce:HEXINIT+nonce,value:s2wHex(eth),gasPrice:g2wHex(txgwei),gasLimit:toHex(maxgas),from:sender,to:(to?to:contractAddress),chainId:CONTRACT[network].ncid};if(abi!=OxOO)d.data=abi;
;p=_Buffer(senderPte,HEX);
;t=_Transaction(d);console.log(d);t.sign(p);
;r=HEXINIT+t.serialize().toString(HEX);console.log(r);return(r);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[3]
const xutengUsageRegister=function(xut=0,status=TEST){do_register(contractAddress,xut,status);};
const xutengSetUsersAlias=function(alias=DOT,dt=TYPES.personal_profile,cbf=console.log,status=TEST,raw=true){showLoad(status);xutengAliasesOwner(alias).then(ua=>{if(ua!=ZEROADDR){dw(status,ERROR);return(cbf(null,null))};alias=toHash(alias.toLowerCase());if(raw){ping(alias,dt);send(0,0,status,cbf);}else{mm_ping(alias,dt);}});};
const xutengSetDomainName=function(domain=BLANK,ref=BLANK,eth=0,cbf=console.log,status=TEST,raw=true){showLoad(status);domain=domain.toLowerCase();xuteng.methods.retDomain(domain).call((e,info)=>{if(e)return(cbf(e,null));if(info.user.toLowerCase()!=sender.toLowerCase()&&info.time>ethnow())return(cbf('OWNER',null));xuteng.methods.contents(sender).call((e,info)=>{if(e)return(cbf(e,null));if(info.json){try{info.json=JSON.parse(info.json)}catch(e){info.json={obj:{}}};if(info.json.obj.domain!=domain)return(cbf('NAME',null));}ref=setInput({domain,ref});if(raw){setDomain(domain,ref,eth);send(0,0,status,cbf);}else{mm_setDomain(domain,ref,eth,status);}});});};
////////////////////////////////////////////////////////////[2]
const xutengSendEthForXut=function(eth=0,cbf=console.log,status=TEST){buy(eth);send(0,0,status,cbf);};
const xutengSendXutForEth=function(xut=0,cbf=console.log,status=TEST){sell(xut);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const ethereumTransfer=function(to=BLANK,eth=0,cbf=console.log,status=TEST){if(avalid(to))return(sendeth(to,eth,0,status,cbf));xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;return(sendeth(to,eth,0,status,cbf));});};
const ethereumRemitFor=function(to=BLANK,eth=0,ref=BLANK,cbf=console.log,status=TEST,raw=true){ref=setInput({ref});if(avalid(to))if(raw){return(sendeth(to,eth,0,status,cbf,ref));}else{return(mm_sendeth(to,eth,ref));}xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;if(raw){return(sendeth(to,eth,0,status,cbf,ref));}else{return(mm_sendeth(to,eth,ref));}});};
////////////////////////////////////////////////////////////[4]
const xutengTransfer=function(to=BLANK,xut=0,cbf=console.log,status=TEST){if(avalid(to))return(xutengDirectTransfer(to,xut,cbf,status));xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;return(xutengDirectTransfer(to,xut,cbf,status));});};
const xutengRemitFor=function(to=BLANK,xut=0,ref=BLANK,cbf=console.log,status=TEST,raw=true){if(avalid(to))return(xutengDirectRemitFor(to,xut,ref,cbf,status,raw));xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;return(xutengDirectRemitFor(to,xut,ref,cbf,status,raw));});};
const xutengDirectTransfer=function(to=BLANK,xut=0,cbf=console.log,status=TEST){transfer(to,xut);send(0,0,status,cbf);};
const xutengDirectRemitFor=function(to=BLANK,xut=0,ref=BLANK,cbf=console.log,status=TEST,raw=true){if(raw){transferFor(to,xut,setInput({ref}));send(0,0,status,cbf);}else{mm_transferFor(to,xut,setInput({ref}));}};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const mmresult=function(err,hash,fname){if(err){err=ERROR+errCode(err);lastTxHash[fname]=BLANK;}else{err=hash;lastTxHash[fname]=hash;};mw(lastTxHashClass,err);dw(fname,err);};
const mmsender=function(eth,to=contractAddress,ref=null){if(ref){ref=toHex(ref);}else{ref=OxOO;};return({from:sender,to:to,value:(eth?s2w(eth):0),gasPrice:gtoWei(txgwei),gas:maxgas,data:ref});};
const mmdeploy=function(status,abi,code,args=[],gas=3000000,eth=0){showLoad(status);window.currentgas=maxgas;maxgas=gas;_Contract(abi).deploy({data:code,arguments:args}).send(mmsender(eth,null)).then(r=>{showOkay(status);console.warn(r);maxgas=window.currentgas}).catch(e=>{showError(status);console.error(e)})};
const mm_sendeth=function(to,eth,ref=null,n){;;if(!n)n=funcName();web3.eth.sendTransaction(mmsender(eth,to,ref),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_buy=function(eth,n){;;if(!n)n=funcName();xuteng.methods.buy().send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_sell=function(xut,n){;;if(!n)n=funcName();xuteng.methods.sell(s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_transfer=function(ua,xut,n){;;if(!n)n=funcName();xuteng.methods.transfer(ua,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_setFee=function(xut,n){;;if(!n)n=funcName();xuteng.methods.setFee(s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_setUser=function(ua,num,n){;;if(!n)n=funcName();xuteng.methods.setUser(ua,num).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_setHolder=function(oa,ua,n){;;if(!n)n=funcName();xuteng.methods.setHolder(oa,ua).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_setDomain=function(d,j,eth,n){;;if(!n)n=funcName();xuteng.methods.setDomain(d,j).send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_transferFor=function(to,xut,re,n){;;if(!n)n=funcName();xuteng.methods.transferFor(to,s2w(xut),re).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_pennyPayout=function(to,oa,xut,n){;;if(!n)n=funcName();xuteng.methods.pennyPayout(to,oa,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_postContent=function(j,co,to,exp,pip,bid,typ,n){;;if(!n)n=funcName();xuteng.methods.postContent(j,co,to,exp,s2w(pip),s2w(bid),typ).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_pub=function(oa,typ,n){;;if(!n)n=funcName();xuteng.methods.pub(oa,typ).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_ping=function(h,typ,n){;;if(!n)n=funcName();xuteng.methods.ping(h,typ).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_notify=function(h,to,n){;;if(!n)n=funcName();xuteng.methods.notify(h,to).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_txjoin=function(oa,h,typ,xut,n){;;if(!n)n=funcName();xuteng.methods.txjoin(oa,h,typ,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_conjoin=function(oa,j,xut,n){;;if(!n)n=funcName();xuteng.methods.conjoin(oa,j,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_releaseCoholding=function(oa,x,n){;;if(!n)n=funcName();xuteng.methods.releaseCoholding(oa,x).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
const mm_userSetSell=function(xut,tpe,n){;;if(!n)n=funcName();xuteng.methods.userSetSell(s2w(xut),s2w(tpe)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_userSetBuy=function(tpe,eth,n){;;if(!n)n=funcName();xuteng.methods.userSetBuy(s2w(tpe)).send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_userStopSell=function(i,n){;;if(!n)n=funcName();xuteng.methods.userStopSell(i).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_userStopBuy=function(i,n){;;if(!n)n=funcName();xuteng.methods.userStopBuy(i).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
const mm_buyFromSeller=function(ua,i,c,eth,n){;;if(!n)n=funcName();xuteng.methods.buyFromSeller(ua,i,c).send(mmsender(eth),function(err,hash){mmresult(err,hash,n);});};
const mm_sellToBuyer=function(ua,i,c,xut,n){;;if(!n)n=funcName();xuteng.methods.sellToBuyer(ua,i,c,s2w(xut)).send(mmsender(),function(err,hash){mmresult(err,hash,n);});};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[5]
const PayEther=async(to,eth,msg=EMPTY,cbf=console.log,price=txgwei,gas=maxgas,nonce=0,acc=sender,pte=senderPte,raw=false,run=false,x)=>{if(!avalid(to))return(cbf(INVALID,null));msg=toHex(msg);txgwei=price;maxgas=gas;sender=acc;senderPte=pte;
;if(!raw){x={data:msg,from:sender,to:to,value:(eth?s2w(eth):0),gasPrice:gtoWei(txgwei),gas:maxgas};console.log(CHECKED,x);await(web3.eth.sendTransaction(x).then(hash=>{return(cbf(null,hash))}).catch(e=>{return(cbf(e,null))}));return;};if(!Number(nonce))await(web3.eth.getTransactionCount(sender).then(n=>{nonce=n}).catch(e=>{return(cbf(e,null))}));nonce=Number(nonce).toString(16);x=rawtx(msg,nonce,eth,to);console.log(CHECKED,x);if(!run)return(cbf(null,x));web3.eth.sendSignedTransaction(x).on(RECEIPT,receipt=>{txreceipt=receipt;cbf(null,receipt);}).then(result=>{cbf(null,result);}).catch(e=>{return(cbf(e,null))});};
const Transfer=async(to,amt,dec=18,cbf=console.log,scid='usdt',eth=0,price=txgwei,gas=maxgas,nonce=0,acc=sender,pte=senderPte,raw=false,run=false,a,b,c,d,x)=>{txgwei=price;maxgas=gas;sender=acc;senderPte=pte;if(EXTOKENS[scid]){c=Contract(scid);a=EXTOKENS[scid]().addr;d=EXTOKENS[scid]().dec;}else{if(avalid(scid)){c=_Contract(ABIXUTENG,scid);a=scid;if(!Number(dec)){await(c.methods.decimals().call().then(r=>{d=r}));}else{d=dec};}else{return(cbf(ERROR,null));}};b=c.methods.transfer(to,toDec(amt,d)).encodeABI();
;if(!raw){x={data:b,from:sender,to:a,value:(eth?s2w(eth):0),gasPrice:gtoWei(txgwei),gas:maxgas};console.log(CHECKED,x);await(web3.eth.sendTransaction(x).then(hash=>{return(cbf(null,hash))}).catch(e=>{return(cbf(e,null))}));return;};if(!Number(nonce))await(web3.eth.getTransactionCount(sender).then(n=>{nonce=n}).catch(e=>{return(cbf(e,null))}));nonce=Number(nonce).toString(16);x=rawtx(b,nonce,eth,a);console.log(CHECKED,x);if(!run)return(cbf(null,x));web3.eth.sendSignedTransaction(x).on(RECEIPT,receipt=>{txreceipt=receipt;cbf(null,receipt);}).then(result=>{cbf(null,result);}).catch(e=>{return(cbf(e,null))});};
const batchpay=function(winners=window.lotwinners,raw=false,status=TEST,out=_hash,cbf=console.log,method='transfer',args=[]){args=winners.shift();if(!args)return(cbf(null,DONE));console.log('Waiting..');args=[args.from,toWei(args.win)];if(!avalid(args[0])||!args[1])return(cbf(ERROR,DONE));if(raw){;
;xutengRaws(method,args,0,status,out,function(err,result){if(err)return(cbf(err,CANCELED));console.warn(args[0],fromWei(args[1]),result.transactionHash);batchpay(winners,raw,status,out,cbf,method);});}else{;/**;;
;xutengSend(method,args,0,status,out,function(err,result){if(err)return(cbf(err,CANCELED));console.warn(args[0],fromWei(args[1]),result.transactionHash);batchpay(winners,raw,status,out,cbf,method);});;;;;;;;;**/;
;xuteng.methods.transfer(args[0],args[1]).send(mmsender(),function(err,hash){if(err)return(cbf(err,CANCELED));console.warn(args[0],fromWei(args[1]),hash);batchpay(winners,raw,status,out,cbf,method);});}};
const decimals=function(addr,abi=ABIERC20,cbf=console.log){_Contract(abi,addr).methods.decimals().call().then(r=>{cbf(null,r)}).catch(e=>{cbf(e,null)});};
const getNonce=function(acc=sender,cbf=console.log){web3.eth.getTransactionCount(acc).then(nonce=>{cbf(null,nonce)}).catch(e=>{cbf(e,null)});};
////////////////////////////////////////////////////////////[2]
const submitRe=function(to,xutinput,ref,div='mm_transferFor',x){x=g2(xutinput);betValid(to,x,0,function(err,result){if(err||!result)return(dw(div,ERROR+'input:invalid'));return(mm_transferFor(to,x,(avalid(ref)?setInput({ref}):BLANK)));});};
const submitto=function(to,xutinput,div='mm_transfer',x){x=g2(xutinput);betValid(to,x,0,function(err,result){if(err||!result)return(dw(div,ERROR+'input:invalid'));return(mm_transfer(to,x));});};
////////////////////////////////////////////////////////////[5]
const createOneDomain=function(domain=BLANK,ref=BLANK,eth=0,cbf=console.log,status=TEST){return(xutengSetDomainName(domain,ref,eth,cbf,status,false))};
const createMyProfile=function(name,text,style='#000000'){return(createSimpleDoc('profile',ethnow()+10,-1,-1,TYPES.personal_profile,{name,text,style}));};
const createSimpleDat=function(frm,uts,min,max,typ,dat,odd,hdiv,adiv,penny=GAMEXUT){return(createSimpleDoc(frm,uts,min,max,typ,dat,odd,hdiv,adiv,penny,false));};
const createSimpleDoc=function(frm,uts,min,max,typ,dat,odd,hdiv,adiv,penny=GAMEXUT,doping=true){if(!frm)frm='lo1x99';if(!hdiv)hdiv='hash'+frm;if(!adiv)adiv='addr'+frm;if(!uts)uts=lotnow().lotstamp;if(!min)min=1;if(!max)max=1000;if(!typ)typ=TYPES.gaming;if(!dat)dat={};typ=Number(typ);uts=Number(uts);min=Number(min);max=Number(max);if(!Array.isArray(odd))odd=[70];if(uts<ethnow())return(dw(hdiv,ERROR+'time:invalid'));showLoad(hdiv);xuteng.methods.transferFor(ZEROADDR,penny,setInput({typ,frm,uts,min,max,odd,dat})).send(mmsender(),function(err,hash){if(err)return(dw(hdiv,ERROR+'document.creation:invalid'));dw(hdiv,hash);console.log(hash);lastTxHashId=hdiv;lastTxHash[lastTxHashId]=hash;if(!doping)return;/*GAS25K*/;showLoad(adiv);xuteng.methods.ping(hash,typ).send(mmsender(),function(err,hash){if(err)return(dw(adiv,ERROR+'document.registration:invalid'));return(divAddrFromHash(lastTxHash[lastTxHashId],adiv));});});};/*GAS180K*/
const createSimpleRef=function(frm='ethref',uts=lotnow().lotstamp,min=0,max=0,typ=TYPES.draft,dat,odd,exp,md5,txt,att,cap,ref,rep,ipf,hdiv='hash',alias=ZEROADDR,t){typ=Number(typ);uts=Number(uts);min=Number(min);max=Number(max);t={typ,frm,uts,min,max};if(dat)t.dat=dat;/*{}*/;if(odd)t.odd=odd;/*[]*/;if(exp)t.exp=Number(exp);if(md5)t.md5=md5;if(txt)t.txt=txt;/*{}*/;if(att)t.att=att;/*{}*/;if(cap)t.cap=cap;if(ref)t.ref=ref;if(rep)t.rep=rep;if(ipf)t.ipf=ipf;showLoad(hdiv);mm_sendeth(alias,0,setInput(t),hdiv);};
////////////////////////////////////////////////////////////[1]
const Contract=function(scid='usdt'){return(_Contract(EXTOKENS[scid]().abi,EXTOKENS[scid]().addr));};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const big=function(val){return(new web3.utils.BN(val))};
String.prototype.t2e=function(tpe){return(s2n(this)/s2n(tpe))};/*tpe=pcv=pcp*/
String.prototype.e2t=function(tpe){return(s2n(tpe)*s2n(this))};/*tpe=pcv=pcp*/
String.prototype.p2w=function(ppe){return(String(10**18).mul(this.toString()).div(String(ppe)))};
String.prototype.w2p=function(ppe){return(String(ppe).mul(this.toString()).div(String(10**18)))};
String.prototype.add=function(bnum){return(big(this.toString()).add(big(bnum)).toString())};
String.prototype.div=function(bnum){return(big(this.toString()).div(big(bnum)).toString())};
String.prototype.mod=function(bnum){return(big(this.toString()).mod(big(bnum)).toString())};
String.prototype.mul=function(bnum){return(big(this.toString()).mul(big(bnum)).toString())};
String.prototype.pow=function(bnum){return(big(this.toString()).pow(big(bnum)).toString())};
String.prototype.sus=function(bnum){return(big(this.toString()).sub(big(bnum)).toString())};
String.prototype.eq=function(bnum){return(big(this.toString()).eq(big(bnum)))};
String.prototype.ge=function(bnum){return(big(this.toString()).gte(big(bnum)))};
String.prototype.gt=function(bnum){return(big(this.toString()).gt(big(bnum)))};
String.prototype.le=function(bnum){return(big(this.toString()).lte(big(bnum)))};
String.prototype.lt=function(bnum){return(big(this.toString()).lt(big(bnum)))};
////////////////////////////////////////////////////////////
String.prototype.EQ=function(num){return(s2n(this)===s2n(num))};
String.prototype.GE=function(num){return(s2n(this)>=s2n(num))};
String.prototype.GT=function(num){return(s2n(this)>s2n(num))};
String.prototype.LE=function(num){return(s2n(this)<=s2n(num))};
String.prototype.LT=function(num){return(s2n(this)<s2n(num))};
////////////////////////////////////////////////////////////
String.prototype.is3ks=function(){try{return(avalid(JSON.parse(this).address))}catch(e){return(false)}};
String.prototype.isKey=function(){return(hvalid(this)||hvalid(HEXINIT+this))};
String.prototype.isBip=function(){return(bipRegex.test(this))};
////////////////////////////////////////////////////////////
String.prototype.escape=function(){return(this.replace(/"/g,'\\"'))};
String.prototype.same=function(as,sens=true,trim=false,c,t){c=this;t=String(as);if(trim){c=c.trim();t=t.trim()}if(!sens){c=c.toLowerCase();t=t.toLowerCase()}return(c==t)};
String.prototype.as=function(as){return(this.same(as,false,true))};
////////////////////////////////////////////////////////////
String.prototype.nums=function(vol='x',min=0,max=99,nint=true,s,r=true){this.split(COMMA).forEach(p=>{s=p.split(vol);if(isNaD(s[0])||s[0]<min||s[0]>max||(nint&&!Number.isInteger(Number(s[0]))))return(r=0);if(s[1]&&(isNaD(s[1])||s[1]<=0))return(r=null)});return(r)};
String.prototype.lode=function(){return(this.nums()||this.nums(COLON))};
////////////////////////////////////////////////////////////
String.prototype.fetch=function(){return(fetch(this,{method:'GET',headers:{'Accept':'application/json'}}).then(r=>r.json()))};/*promise*/
Array.prototype.shuffle=function(i,j,t){for(i=this.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=this[i];this[i]=this[j];this[j]=t}};
Array.prototype.label=function(index,s={data:[],labels:[]}){this.forEach((e,i)=>{s.labels.push(e.splice(index,1)[0]);s.data.push(e)});return(s)};
Array.prototype.tobin=function(index,value,bt=1.0,bf=0.0){this.forEach((e,i)=>{this[i][index]=(e[index]==value?bt:bf)})};
Array.prototype.sum=function(){return(this.reduce((a,b)=>(Number(a)+Number(b))))};
//Object.prototype.getKey=function(val){return(this.getkey(val,'same'))};
//Object.prototype.getkey=function(val,cmp='as',k=null){Object.keys(this).forEach(key=>{if(String(this[key])[cmp](val))return(k=key)});return(k)};
const getKey=function(obj,val){return(getkey(obj,val,'same'))};
const getkey=function(obj,val,cmp='as',k=null){Object.keys(obj).forEach(key=>{if(String(obj[key])[cmp](val))return(k=key)});return(k)};
const safeJSON=function(keys,vals,i=0,a=[]){if(keys.length!=vals.length)throw(null);for(;i<keys.length;i++)a.push(`"${keys[i]}":"${vals[i].toString().escape()}"`);return('{'+a.join(',')+'}');};
////////////////////////////////////////////////////////////
const Trim=function(s){return(trim(s).replace(/\s/g,''))};
const trim=function(s){if(s)return(s.replace(/^\s+|\s+$/g,BLANK));return(BLANK);};
const errCode=function(e){if(e!=null){e=e.toString();if(e.indexOf(']')>0)return(hi_alert_data);if(e.indexOf(OxOO)>0)return(hi_prompt_err);if(e.indexOf(RECEIPT)>0)return(hi_prompt_rct);e=(e.substring(e.lastIndexOf(HASH)));if(e){return(e);}else{return(0);}}return(null);};
const funcName=function(){return(funcName.caller.name);};
////////////////////////////////////////////////////////////
const isNaD=function(n){return(isNaN(n)||hexRegex.test(n))};
const hvalid=function(h){return(hashRegex.test(h));};
const avalid=function(a){return(web3.utils.isAddress(a));};
const nvalid=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<=b);};
////////////////////////////////////////////////////////////
const nsmall=function(n,b){return(nvalid(n,b));};
const nmidle=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<b);};
const nlarge=function(n,s){n=s2n(n);s=s2n(s);return(n>s&&s>=0);};
////////////////////////////////////////////////////////////
const wrd=function(o,v){return(Object.keys(o).find(key=>o[key]==v));};
const n2s=function(n,d){if(!n)return(ZERO);if(!d)d=0;n=n.toString().split(DOT);n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,COMMA);n[1]=n[1]?DOT+n[1].substr(0,d):EMPTY;return(n[0]+n[1]);};
const s2n=function(s=0){if(!s)return(0);s=parseFloat(s.toString().replace(/[^\d\.\-]/g,EMPTY));if(isNaN(s))return(0);return(s);};
const w2s=function(n,dec=5,len=22){n=n2s(fromWei(n),dec);return(n.length<len?n:ASK);};
const s2w=function(s){return(toWei(s2n(s).toString()));};
const h2t=function(h){if(!h)return('');return(web3.utils.padLeft(h,64));};
const toHex=function(s){if(!s)return('0x0');return(web3.utils.toHex(s));};
const toHash=function(s){return(web3.utils.keccak256(s,{encoding:HEX}));};
const solHash=function(...args){return(web3.utils.soliditySha3(...args));};
const jtoHash=function(j){return(toHash(JSON.stringify(j)));};
const toWei=function(n){return(web3.utils.toWei(n.toString(),ETHER));};
const gtoWei=function(n){return(web3.utils.toWei(n.toString(),GWEI));};
const fromWei=function(w){return(web3.utils.fromWei(w.toString(),ETHER));};
const fromGwei=function(g){return(fromWei(gtoWei(g)));};
const gfromWei=function(w){return(web3.utils.fromWei(w.toString(),GWEI));};
const fromHex=function(h){return(web3.utils.hexToNumberString(h));};
const fromNum=function(n){return(web3.utils.numberToHex(n));};
const fromWHex=function(h){return(fromWei(fromHex(h)));};
const s2wHex=function(s){return(toHex(s2w(s)));};
const g2wHex=function(g){return(toHex(gtoWei(g)));};
const n2Hex=function(n,dec=18){return(toHex(toDec(n,dec)));};
const toDec=function(n,dec=18,a,s,u){n=n.toString();dec=parseInt(dec);if(isNaN(n)||isNaN(dec)||n<=0)return(ZERO);a=n.split(DOT);s=a[0];u=a[1];if(s||(s=ZERO),u||(u=ZERO),u.length>dec)return(ZERO);for(;u.length<dec;)u+=ZERO;return(big(s).mul(big(10).pow(big(dec))).add(big(u)).toString());};
////////////////////////////////////////////////////////////
const toSat=function(n){return(_Decimal(n).absoluteValue().mul(_Decimal(100000000)).toInteger().toString());};
const fromSat=function(s){return(_Decimal(s).absoluteValue().toInteger().div(_Decimal(100000000)).toString());};
const satChange=function(satBal,satAmt,satFee){satBal=big(satBal);satAmt=big(satAmt);satFee=big(satFee);if(satBal.lt(satAmt.add(satFee)))throw(ERROR);return(satBal.sub(satAmt).sub(satFee).toString());};
const bitChange=function(bal,amt,fee){return(satChange(toSat(bal),toSat(amt),toSat(fee)));};
////////////////////////////////////////////////////////////
const setInput=function(obj){return(JSON.stringify({obj:obj}));};
const getInput=function(tx,cbf=console.log){if(!hvalid(tx))return(cbf(ERROR,null));web3.eth.getTransaction(tx,function(err,result){if(err||!result||!result.input)return(cbf(err,null));cbf(null,hexObj(result.input).obj);});};
////////////////////////////////////////////////////////////
const long=function(dur,tun='M'){dur*=1000;return(tun=='H'?dur*60*60:(tun=='M'?dur*60:dur));};
const mindif=function(hextime,dec=1){return(n2s((nowDate()-fromHex(hextime))/60,dec)+SPACE+'mins');};
const toDate=function(y,m,d){return(parseInt(_Date(Date.UTC(y,m-1,d,0,0,0,0)).getTime()/1000,10));};
const nowDate=function(){return(parseInt(_Date(0).getTime()/1000,10));};
const FromDate=function(n){return(_Date(n*1000).toUTCString())};
const fromDate=function(n){return(_Date(n*1000).toString());};
const day=function(){return(_Date(0).getDay())};
const date=function(){return(_Date(0).getDate())};
const month=function(){return(_Date(0).getMonth()+1)};
const year=function(){return(_Date(0).getFullYear())};
const timezone=function(){return(parseInt(_Date(0).getTimezoneOffset()/60,10))};
const MarkDate=function(mark=10){return(_Date(markDate(mark)*1000).toLocaleDateString('en-GB'))};
const markDate=function(mark=10){return(nowDate()+(24-mark+timezone())*60*60)};
const dateMark=function(mark=10){return(toDate(year(),month(),date())+mark*60*60)};
const datePast=function(mark=10,days=1){return(toDate(year(),month(),date())+mark*60*60-days*24*60*60)};
const Countdown=function(divTimer,mark=10,fn=db){setInterval(function(){fn(divTimer,countdown(mark))},1000)};
const CountDown=function(divDate,divTimer,mark=10,fn=db){setInterval(function(){fn(divTimer,countdown(mark));fn(divDate,MarkDate(mark))},1000)};
const countdown=function(mark=10,n,e,d,h,m,s,M,S){n=nowDate();e=dateMark(mark);while(e<n){e+=24*60*60};d=e-n;h=parseInt(d/3600,10);d-=h*3600;m=parseInt(d/60,10);s=parseInt(d%60,10);M=m<10?ZERO+m:m;S=s<10?ZERO+s:s;return(`${h}:${M}:${S}`)};
////////////////////////////////////////////////////////////
const hiRegex=_Regex('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
const loRegex=_Regex('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
const bipRegex=_Regex('^([A-Za-z0-9]{58})$');
const hexRegex=_Regex('^0x([A-Fa-f0-9])+$');
const hashRegex=_Regex('^0x([A-Fa-f0-9]{64})$');
////////////////////////////////////////////////////////////
const numsInRange=function(n,rl,rh,fn=null){if(fn)n=fn(n);return(n>=rl&&n<=rh);};
const positiveStr=function(n){return(s2n(n)>0);};
const positiveNum=function(n){return(Number(n)&&n>0);};
const positiveInt=function(n){return(Number.isInteger(Number(n))&&n>0);};
const twoHexEqual=function(h1,h2){return(fromHex(h1)===fromHex(h2));};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const clearTags=function(tag='input'){$(COLON+tag).val(EMPTY);};
const clearPwds=function(){$('input:password').val(SYMBOL);};
////////////////////////////////////////////////////////////
const sha256=async(data,algorithm='SHA-256',main=null,a,b)=>{main=async(m)=>{b=await(crypto.subtle.digest(algorithm,m));a=Array.from(_Uint8(b));return(a.map(b=>b.toString(16).padStart(2,'0')).join(''))};if(_Instance(data,Blob)){b=await(data.arrayBuffer());a=_Uint8(b);return(await(main(a)))};b=_Encoder(null);a=b.encode(data);return(await(main(a)))};
const getSha=function(divFile,algorithm='SHA-256',r){r=document.querySelector(HASH+divFile);if(!r)throw(ERROR);return(sha256(r.files[0],algorithm))};/*promise*/
const base64=function(file,r){return(_Promise((resolve,reject)=>{r=_FileReader();r.readAsDataURL(file);r.onload=()=>resolve(r.result);r.onerror=error=>reject(error)}))};/*promise*/
const getB64=async(divFile,pure=true,r)=>{r=document.querySelector(HASH+divFile).files[0];if(!r)return(null);r=await(base64(r));if(!r)return(null);if(!pure)return(r);return(r.split(COMMA)[1])};
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
const gaddr=function(a){return(avalid(a)?a:gv(a))};
const ghash=function(h){return(hvalid(h)?h:gv(h))};
const gnum=function(n){return(n*1?n:gv(n))};
////////////////////////////////////////////////////////////
const ngv=function(d){return(document.getElementById(d).value)};
const ndv=function(d,v){return(document.getElementById(d).value=v)};
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
const dbh=function(indiv,param,fc=null){param=hashParam(param);if(!param)return;db(indiv,param);if(fc)fc();};
const cso=function(oldCap,newCap){$('select').find(`option:contains("${oldCap}")`).text(newCap);};
////////////////////////////////////////////////////////////
const da=function(d,w,ob){if(!ob)ob=HASH;$(ob+d).append(w);};
const dr=function(d,r,ob){if(!ob)ob=HASH;$(ob+d).prop('href',r);};
const dc=function(d,c,ob){if(!ob)ob=HASH;$(ob+d).prop('checked',c);};
const dx=function(d,v,ob){if(!ob)ob=HASH;$(ob+d).val(v).change();};
const dv=function(d,v,ob){if(!ob)ob=HASH;$(ob+d).val(v);};
const dw=function(d,w,ob){if(!ob)ob=HASH;$(ob+d).html(w);};
const dt=function(d,t,ob){if(!ob)ob=HASH;$(ob+d).text(t);};
const dz=function(d,v,ob){dx(d,v,ob);dt(d,v,ob)};
////////////////////////////////////////////////////////////
const wrong=function(chk,msg){if(!chk){alert(msg);return(true);}return(false);};
const reask=function(chk,msg){if(chk)return(confirm(msg));return(true);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[3]
const adec=function(d,t=[]){while(d>=0)t.push(d--);return(t)};
const cdec=function(s,ds,c,a=[]){if(!Array.isArray(ds))return(null);s=s.toString();if(s.length%2)s+=BLANK+ZERO;while(s.length>0){c=Number(s.substr(0,2));if(!ds.includes(c))return(false);a.push(c);s=s.slice(2);};return(a);};
const decs=function(n,d=9,i,s,a=[]){i=Math.floor(Number(n));if(i==n)return([i,[0]]);s=n.toString().split(DOT)[1];if(d>9){a=cdec(s,adec(d));if(!a)return(a);return([i,a]);};if(s>d||s.length>1)return(false);return([i,[Number(s)]]);};
////////////////////////////////////////////////////////////[5]
const h2d=function(s,add,c,d,n,r,t){add=function(x,y){c=0;r=[];x=x.split('').map(Number);y=y.split('').map(Number);while(x.length||y.length){s=(x.pop()||0)+(y.pop()||0)+c;r.unshift(s<10?s:s-10);c=s<10?0:1;};if(c)r.unshift(c);return(r.join(''));};d='0';s.split('').forEach(function(chr){n=parseInt(chr,16);for(t=8;t;t>>=1){d=add(d,d);if(n&t)d=add(d,'1');}});return(d);};
const h2i=function(s){return(h2d(s).toString().substr(0,12));};
const h2m=function(s,m=99){return(h2i(s)%(m+1));};//Safe;
const h2n=function(h){return(parseInt(h,16));};//Unsafe;
const n2h=function(n){return(n.toString(16));};//Unsafe;
////////////////////////////////////////////////////////////[5]
const pen2de=function(pen){return(xut2de(fromWei(pen)));};//PennyToBetAmount;
const xut2de=function(xut,a,x){xut=xut.toString();x=xut.split(DOT)[1];if(!x)return({xut:parseInt(xut),de:[0]});if(x.length>14)x=x.substr(0,14);if(x.length%2>0)x=x+ZERO;a=[];while(x.length>0){a.push(Number(x.substr(0,2)));x=x.slice(2);};return({xut:xut/a.length,de:a});};//XutToBetAmount;
const xut2lo=function(xut,a,x){xut=xut.toString();x=xut.split(DOT)[1];if(!x)return({xut:parseInt(xut),lo:[0]});if(x.length>14)x=x.substr(0,14);if(x.length%2>0)x=x+ZERO;a=[];while(x.length>0){a.push(Number(x.substr(0,2)));x=x.slice(2);};return({xut:Number(xut),lo:a});};//XutToLottoNums;
const de2win=function(win,pen,mul,x,i,s){win=Number(win);x=pen2de(pen);if(!mul)mul=70;if(!x.de.includes(win))return(0);s=0;for(i=0;i<x.de.length;i++){if(x.de[i]==win)s+=mul*x.xut;}return(s);};//CalculateWinningAmount;
const arrdup=function(arr,m,i){if(!Array.isArray(arr))return(null);if(arr.length<=1)return(false);m={};for(i=0;i<arr.length;i++){if(m[arr[i]])return(true);m[arr[i]]=true;}return(false);};
////////////////////////////////////////////////////////////[5]
const ethnow=function(){return(parseInt(Date.now()/1000,10));};//~forms.nowDate();//CurrentEthereumTime;
const estamp=function(yy,mo,dd,hh=12,mi=0){return(parseInt((new Date(Date.UTC(yy,mo-1,dd,hh,mi,0))).getTime()/1000,10));};//EthereumTime;
const trange=function(begin,end,max=30,t){try{begin=estamp(begin[0],begin[1],begin[2],0);end=estamp(end[0],end[1],end[2],0);t=(end-begin)/60/60/24;if(t<=0||t>max)return(0);return({begin,end});}catch(e){return(null);}};
const getUts=function(year,month,day,hour,min,stamp,time,t){t=estamp(gv(year),gv(month),gv(day),gv(hour),gv(min));window.timestamp=t;dw(stamp,window.timestamp);dw(time,STAR+fromDate(window.timestamp));return(window.timestamp);};
const lotnow=function(){window.now=(new Date(1000*ethnow()));window.lottime=[window.now.getFullYear(),window.now.getMonth()+1,window.now.getDate(),12,0];window.lotstamp=estamp(window.lottime[0],window.lottime[1],window.lottime[2],window.lottime[3],window.lottime[4],0);return({lotstamp:window.lotstamp,lottime:window.lottime});};
////////////////////////////////////////////////////////////[4]
const hexCut=function(str){return(hexUtf(strCut(str,'7b226f626a22','7d7d')));};
const hexUtf=function(str){return(decodeURIComponent(str.replace(/[0-9a-f]{2}/g,'%$&')));};
const hexObj=function(str){str=hexCut(str);try{str=JSON.parse(str);}catch(e){str={obj:{raw:str}};};return(str);};
const strCut=function(str,sb,se){if(!sb)sb='{';if(!se)se='}';str=str.substring(str.indexOf(sb));return(str.substr(0,str.lastIndexOf(se)+se.length));};
////////////////////////////////////////////////////////////[2]
const dedata=function(hexinput,s){s=depara(STRUCTTRANSFERFOR,hexinput);if(!s)s=depara(STRUCTTRANSFER,hexinput);if(!s)return(null);return({data:s,func:hexinput.slice(2).substr(0,8)});};
const depara=function(struct,hexinput){try{return(web3.eth.abi.decodeParameters(struct,HEXINIT+hexinput.slice(10)));}catch(e){return(null);}};
////////////////////////////////////////////////////////////[2]
const cmpArray=function(a=[],to=[],c=0){a.forEach(i=>{if(to.includes(i))c++});return(c);};//NumberArraysOnly
const lotArray=function(dad,son,n,i){n=arrdup(dad);if(n==null||n)return(0);n=arrdup(son);if(n==null||n)return(0);if(dad.length<son.length)return(0);n=0;for(i=0;i<dad.length;i++){if(son.includes(dad[i]))n++;}return(n);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const bad_register=function(to,xut){if(disable()||badAddr(to)||badXuts(xut)||notTran()||stopReg())return(true);return(false);};
const bad_setFee=function(){if(disable()||noAUser())return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_userStopBuy=function(t){if(disable()||userBan()||noIBuys(t))return(true);return(false);};
const bad_userStopSell=function(t){if(disable()||userBan()||noISell(t))return(true);return(false);};
const bad_buyFromSeller=function(){if(disable()||userBan()||noneReg()||notBuys()||badAddr(gv(_sellerAddress))||badEths(gv(_eth2send))||badVals(gv(_xut2gain),gn(_sellingVol)))return(true);return(false);};
const bad_sellToBuyer=function(){if(disable()||userBan()||noneReg()||notSell()||badAddr(gv(_buyerAddress))||badXuts(gv(_xut2send))||badVals(gv(_eth2gain),gn(_buyingVol)))return(true);return(false);};
const bad_userSetBuy=function(){if(disable()||userBan()||noneReg()||notBuys()||badEths(gv(_eth2pay)))return(true);return(false);};
const bad_userSetSell=function(){if(disable()||userBan()||noneReg()||notSell()||badXuts(gv(_xut2sell))||badNumb(gv(_eth2recv)))return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_transfer=function(){if(disable()||badAddr(gv(_transTo))||badXuts(gv(_transVal))||notTran())return(true);return(false);};
const bad_transfer2xut=function(){if(disable()||badXuts(gv(_transThis))||badXEth(gv(_ethThis))||disSell())return(true);return(false);};
const bad_transfer2admin=function(){if(disable()||badXuts(gv(_transVal))||notTran())return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_sendeth=function(){if(disable()||badAddr(gv(_sendTo))||badEths(gv(_sendVal))||userBan())return(true);return(false);};
const bad_sendeth2xut=function(){if(disable()||badEths(gv(_sendThis))||badXXut(gv(_xutThis))||disBuys())return(true);return(false);};
const bad_sendeth2sys=function(){if(disable()||badEths(gv(_sendThis))||badXXut(gv(_xutThis))||disBuys())return(true);return(false);};
const bad_sendeth2admin=function(){if(disable()||badEths(gv(_sendVal))||userBan())return(true);return(false);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const bad_setPenny=function(){if(disable()||noOwner()||badPair(gv(_tpeSell),gv(_tpeBuy))||yesTran())return(true);return(false);};
const bad_setAllow=function(){if(disable()||noOwner())return(true);return(false);};
const bad_setRole=function(){if(disable()||noModer()||badAddr(gv(_roleTo)))return(true);return(false);};
const bad_setTick=function(){if(disable()||noModer()||badAddr(gv(_tickTo)))return(true);return(false);};
const bad_setType=function(){if(disable()||noAdmin())return(true);return(false);};
const bad_setTypePrice=function(){if(disable()||noOwner())return(true);return(false);};
////////////////////////////////////////////////////////////
const bad_setName=function(){if(disable()||noOwner()||userBan())return(true);return(false);};
const bad_setOwner=function(){if(disable()||noOwner()||badAddr(gv(_refex))||userBan())return(true);return(false);};
const bad_changeOwner=function(){if(disable()||noOwner()||badAddr(gv(_owner))||userBan()||badPass())return(true);return(false);};
const bad_mintPenny=function(){if(disable()||noOwner()||badAddr(gv(_mintTo))||lessVal(gv(_mintVal),0)||userBan()||badPass())return(true);return(false);};
const bad_pennyPush=function(){if(disable()||noOwner()||badXuts(gv(_pushVal))||notTran())return(true);return(false);};
const bad_pennyTransfer=function(){if(disable()||noOwner()||badAddr(gv(_xutTo))||badXXut(gv(_xutVal))||notTran())return(true);return(false);};
const bad_weiTransfer=function(){if(disable()||noOwner()||badAddr(gv(_ethTo))||badXEth(gv(_ethVal))||userBan())return(true);return(false);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const checkTxHash=function(elem,msg,fn=hvalid){checkElement(fn,true,elem,msg)};
const checkAddress=function(elem,msg,fn=avalid){checkElement(fn,true,elem,msg)};
////////////////////////////////////////////////////////////
const confirmPositiveInt=function(elem,msg,fn=positiveInt){confirmElement(fn,true,elem,msg)};
const checkTokenAllowed=function(elem,msg,fn=tokenAllowed){checkElement(fn,true,elem,msg)};
const checkPositiveOr0=function(elem,msg){if(s2n(gv(elem))==0)return;checkPositiveNum(elem,msg)};
const checkPositiveNum=function(elem,msg){checkPositiveInt(elem,msg,positiveStr)};
const checkPositiveInt=function(elem,msg,fn=positiveInt){checkElement(fn,true,elem,msg)};
const checkNumsInRange=function(elem,msg,min,max,fn=numsInRange,fp=s2n){checkElement(fn,true,elem,msg,[min,max,fp])};
const checkLodeNumsStr=function(elem,msg,fn=function(s){return(s.lode())}){checkElement(fn,true,elem,msg)};
////////////////////////////////////////////////////////////
const checkElement=function(cfunc,cbool,elem,msg,more=[],afunc=alert){if(cfunc(gv(elem),...more)!==cbool)throw(afunc(msg))};
const confirmElement=function(cfunc,cbool,elem,msg,more=[],mfunc=confirm){if(cfunc(gv(elem),...more)!==cbool||!mfunc(msg))throw(CANCELED)};
////////////////////////////////////////////////////////////
const checkLogin=function(){return(!disable());};
const checkRole=function(r){return(!userBan()&&!noRoled(r));};
////////////////////////////////////////////////////////////
const badPass=function(){return(!prt(hi_prompt_pwd,'OK'+password.substr(0,1),0));};
const stopReg=function(){return(!reask(userRegs>0,hi_alert_notregs));};//SysRegistry
////////////////////////////////////////////////////////////
const disable=function(){return(noLogin()||noEther());};
const disBuys=function(){return(notTran()||notBuys());};
const disSell=function(){return(notTran()||notSell());};
const noEther=function(){return(wrong(nlarge(userEth,0),hi_alert_noether));};
const noLogin=function(){return(wrong(senderPte,hi_alert_nologin));};
const notBuys=function(){return(wrong(buyAllowed,hi_alert_notbuys));};
const notExch=function(){return(wrong(exchangeAllowed,hi_alert_notexch));};
const notSell=function(){return(wrong(sellAllowed,hi_alert_notsell));};
const notTran=function(){return(wrong(transferAllowed,hi_alert_nottran));};
const yesTran=function(){return(wrong(notTran(),hi_alert_yestran));};
const noneReg=function(){return(wrong(userReg,hi_alert_nonereg));};//DocTypeRegistry
const userBan=function(){return(wrong(userRole!=ROLES['BANNED'],hi_alert_userban));};
const noOwner=function(){return(noRoled(ROLES['owner']));};
const noAdmin=function(){return(noRoled(ROLES['admin']));};
const noModer=function(){return(noRoled(ROLES['moderator']));};
const noAUser=function(){return(noRoled(ROLES['user']));};
const noRoled=function(r){return(wrong(userRole>=r,hi_alert_usernot));};
const badAddr=function(a){return(wrong(avalid(a),hi_alert_address));};
const badXEth=function(e){return(wrong(nvalid(e,xutEth),hi_alert_ethfund));};
const badXXut=function(x){return(wrong(nvalid(x,xutXut),hi_alert_xutfund));};
const badEths=function(e){return(badVals(e,userEth));};
const badXuts=function(x){return(badVals(x,userXut));};
const noIBuys=function(i){return(noIndex(i,userBuysCount));};
const noISell=function(i){return(noIndex(i,userSellCount));};
const badNumb=function(n){return(lessVal(n,0));};
const badVals=function(n,b){return(wrong(nvalid(n,b),hi_alert_balance));};
const lessVal=function(n,s){return(lessNum(n,s,hi_alert_lessval));};
const moreVal=function(n,b){return(moreNum(n,b,hi_alert_moreval));};
const lessAmt=function(n,s){return(lessNum(n,s,hi_alert_lessamt));};
const moreAmt=function(n,b){return(moreNum(n,b,hi_alert_moreamt));};
const noIndex=function(i,a){return(moreNum(i,a,hi_alert_noindex));};//[i=1++;a=len]
const badPair=function(s,b){return(moreSon(s,b,hi_alert_badpair));};
const noCheck=function(chk){return(wrong(chk,hi_alert_nocheck));};
////////////////////////////////////////////////////////////
const moreNum=function(n,b,msg){return(wrong(nsmall(n,b),msg));};//0<n<=b
const lessNum=function(n,s,msg){return(wrong(nlarge(n,s),msg));};//n>s>=0
const moreSon=function(s,b,msg){return(wrong(nmidle(s,b),msg));};//0<s<b
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const showOkay=function(div=TEST){dw(div,OK);};
const showFail=function(div=TEST){dw(div,FAILED);};
const showError=function(div=TEST){dw(div,ERROR);};
const showCancel=function(div=TEST){dw(div,CANCELED);};
const showLoad=function(div=TEST){dw(div,'<img\tsrc="https://cdn.jsdelivr.net/gh/asinerum/project/loading.gif"/>');};
////////////////////////////////////////////////////////////
const checkResult=function(err,res,status,fin=false){if(err){showError(status);throw(err.toString())};if(!res){showCancel(status);throw(ERROR)};if(fin)showOkay(status);};
const showAddress=function(addr){if(addr==ZEROADDR)return('N/D');return(addr.toLowerCase());};
const showAddrUrl=function(addr){return('<a target="_blank" href="'+EXCHAINS[network].scan+'/address/'+addr+'">'+showAddress(addr)+'</a>');};
const showItemAge=function(stamp,past=true,say='days'){if(stamp==0)return('N/S');return((past?1:-1)*Math.floor((nowDate()-stamp)/(3600*24))+SPACE+say);};
const daysToStamp=function(days=0,stamp=nowDate()){return(stamp+days*24*3600);};
////////////////////////////////////////////////////////////
const netStyle=function(){networkStyle=CONTRACT[network].bcls;setStyle('body',networkStyle);};
const accepted=function(divS){if(confirm(hi_prompt_fee+NEWLINE+gasfee+SPACE+COIN))return(true);dw(divS,CANCELED);return(false);};
////////////////////////////////////////////////////////////
const launchRpc=function(rpc,nid=MAINNET,func=launchNet){CONTRACT[nid].rpcs=rpc;func(nid);gasPGwei((e,gwei)=>{if(e||!gwei)console.error('RPC');});};
const launchNet=function(nid){if(!nid)nid=hashParam(ARGWNET);selectNet(nid);};/*selectNet:WithInputs*/
const selectNet=function(nid){switchNet(nid);startXuteng(network);};/*LoadNetworkParamsAndConnectRPC*/
const chooseNet=function(nid){switchNet(nid);window.web3=_Web3();};/*LoadNetworkParamsAndPureWeb3Lib*/
const switchBtc=function(nid,dnid){if(!dnid)dnid=BITCOIN;if(BXCHAINS[nid]){window.network=nid}else{window.network=dnid};window.btcnet=network;return(network);};
const switchNet=function(nid,dnid){if(!dnid)dnid=MAINNET;if(EXCHAINS[nid]){window.network=nid}else{window.network=dnid};netStyle();changeNet();capApply();return(network);};/*LoadNetworkNameAndPageLayout*/
const changeNet=function(){contractAddress=CONTRACT[network].addr;networkChainId=CONTRACT[network].ncid;networkStyle=CONTRACT[network].bcls;contractScanner=CONTRACT[network].scan+contractAddress;mr('bgxutengscan',contractScanner);};/*LoadGlobalVarsOnly*/
const getRpcNet=function(){window.rpcServer=gv(_rpcs);if(!window.rpcServer)window.rpcServer=CONTRACT[network].rpcs;return(rpcServer);};/*UpdateNewRPCEndpoint*/
const getSender=function(){web3.eth.getAccounts().then((accounts)=>{sender=accounts[0];});};/*UpdateUserWalletAddress*/
const swapChain=function(cid){CONTRACT[MAINNET].ncid=cid;networkChainId=cid;};/*UpdateBlockchainIdOnly*/
const swapBtcV2=function(cid=BITCOIN){if(window.newaccount){if(cid==BITCOIN){sender=newaccount.btc;senderPte=newaccount.key;}else{if(newaccount[cid]){sender=newaccount[cid].btc;senderPte=newaccount[cid].key;}}};btcWallet(cid);db('change',sender);db('exp_btc',sender);};
const swapBtcId=function(cid=BITCOIN,k){if(window.newaccount.hex&&BXCHAINS[cid]){k=_ECKey(window.newaccount.hex);k.setCompressed(true);Bitcoin.Address.networkVersion=BXCHAINS[cid].version;Bitcoin.ECKey.privateKeyPrefix=BXCHAINS[cid].pkprefix;sender=k.getBitcoinAddress();senderPte=k.getBitcoinWalletImportFormat();};btcWallet(cid);db('change',sender);db('exp_btc',sender);};
const btcWallet=function(cid=network){if(window.newaccount){try{newaccount.wallet=bitcoin.ECPair.fromWIF(newaccount.key)}catch(e){return(newaccount.wallet=null)};newaccount.wallet.network=bitcoin.networks[cid];if(!newaccount.wallet.network)return(newaccount.wallet=null);newaccount.btcpair=getBtcKey(newaccount.wallet);sender=newaccount.btcpair.btc;senderPte=newaccount.btcpair.key;}};
const getBtcKey=function(wallet=newaccount.wallet){return({btc:bitcoin.payments.p2pkh({pubkey:wallet.publicKey,network:wallet.network}).address,key:wallet.toWIF()});};
////////////////////////////////////////////////////////////
const wrdExpt=function(v){userExpt=v;if(!v||v==0)return(HYPHEN);return(fromDate(v));};
const wrdRegs=function(v){userRegs=v;v=wrd(REGIS,userRegs);if(!v)return(HYPHEN);return(v);};
const wrdRole=function(v){userRole=v;v=wrd(ROLES,userRole);if(!v)return(HYPHEN);return(v);};
const wrdTick=function(v){userTick=v;v=wrd(TICKS,userTick);if(!v)return(HYPHEN);return(v);};
const wrdType=function(v){contType=v;v=wrd(TYPES,contType);if(!v)return(contType);return(v);};
////////////////////////////////////////////////////////////
const showMaxGas=function(t=BLANK){Object.keys(MAXGASES).forEach(function(key){t+='<option\tvalue="'+MAXGASES[key]+'">'+key+':&nbsp;'+n2s(MAXGASES[key])+'</option>';});console.log(t);dw(_maxgas,t);};
const showTxGwei=function(t=BLANK){Object.keys(TXGWEIS).forEach(function(key){t+='<option\tvalue="'+TXGWEIS[key]+'">'+key+':&nbsp;'+TXGWEIS[key]+'&nbsp;GWEI</option>';});console.log(t);dw(_txgwei,t);};
////////////////////////////////////////////////////////////
const getDocType=function(t){t=gv(_setType);return(t?t:TYPES.token_trading);};
const id2network=function(ncid){Object.keys(CONTRACT).forEach(function(key){if(CONTRACT[key].ncid==ncid)return(ncid=key);});if(ncid>0)return(MAINNET);return(ncid);};
////////////////////////////////////////////////////////////
const showBxChain=function(net=btcnet,t=BLANK){Object.keys(BXCHAINS).forEach(function(key){t+='<option'+((net==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_network,t);};
const showExChain=function(net=network,t=BLANK){Object.keys(EXCHAINS).forEach(function(key){t+='<option'+((net==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_network,t);};
const showNetwork=function(net=network,t=BLANK){Object.keys(CONTRACT).forEach(function(key){t+='<option'+((net==key)?'\tselected':BLANK)+'\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_network,t);};
const showDsModel=function(t=BLANK){Object.keys(MODELS).forEach(function(key){t+='<option\tvalue="'+key+'">'+MODELS[key].name+'</option>';});console.log(t);dw(_model,t);};
const showAccount=function(t=BLANK){Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+key+'">'+key+'</option>';});console.log(t);dw(_account,t);};
const optnAccount=function(t=BLANK){Object.keys(ADDRESSES).forEach(function(key){t+='<option\tvalue="'+ADDRESSES[key]+'">'+key+':&nbsp;'+ADDRESSES[key]+'</option>';});return(t);};
////////////////////////////////////////////////////////////
const showToken=function(cls='token'){mw(cls,TOKEN);};
const showCoin=function(cls='coin'){if(EXCHAINS[network])COIN=EXCHAINS[network].coin;else{if(BXCHAINS[network])COIN=BXCHAINS[network].coin;}mw(cls,COIN);};
const showCaps=function(lang='en'){Object.keys(LABELS[lang]).forEach(function(key){dw(key,LABELS[lang][key]);});};
const capToken=function(lang='en'){Object.keys(PLACES[lang]).forEach(function(key){dattr(key,'placeholder',PLACES[lang][key].replace(/TOKEN\$/gi,TOKEN).replace(/coin\$/gi,COIN))});Object.keys(LABELS[lang]).forEach(function(key){dw(key,LABELS[lang][key].replace(/TOKEN\$/gi,TOKEN).replace(/coin\$/gi,COIN))})};
const capApply=function(lang=LANGUAGE){capToken(lang);showCoin();showToken();};
const showRole=function(t=BLANK){Object.keys(ROLES).forEach(function(key){t+='<option\tvalue="'+ROLES[key]+'">'+key+'</option>';});console.log(t);dw(_roleVal,t);};
const showTick=function(t=BLANK){Object.keys(TICKS).forEach(function(key){t+='<option\tvalue="'+TICKS[key]+'">'+key+'</option>';});console.log(t);dw(_tickVal,t);};
const showDTyp=function(t=BLANK){Object.keys(TYPES).forEach(function(key){t+='<option\tvalue="'+TYPES[key]+'">'+key+'</option>';});console.log(t);dw(_refType,t);};
const showAccs=function(){dw(_ethTo,accountOptions);dw(_xutTo,accountOptions);dw(_owner,accountOptions);dw(_sendToAdmin,accountOptions);dw(_transToAdmin,accountOptions);console.log(accountOptions);};
////////////////////////////////////////////////////////////
const retrAccount=function(t){switchNet(gv(_network));senderId=gv(_account);try{t=getv3key(gv(_password),0);}catch(err){dw('_keystore_status',err.message);alert(hi_alert_data);return(0);};sender=t.address;senderPte=t.privateKey.substr(2);};
const takeAccount=function(){showLoad('_keystore_status');setTimeout(function(){retrAccount(0);dw('_keystore_status',senderId+COLON+NBSP+sender);},2000);};
////////////////////////////////////////////////////////////
const jrecover=function(j){return(srecover(j.message,j.signature));};
const srecover=function(tm,s){try{tm=web3.eth.accounts.recover(tm,s);}catch(err){alert(err.message);return(0);};return(tm);};
const signmess=function(tm,k){try{tm=web3.eth.accounts.sign(tm,HEXINIT+k);}catch(err){alert(err.message);return(0);};return({message:tm.message,signature:tm.signature});};
const signMMsg=function(msg,div,cbf){if(!div)div=funcName();/*signMMsg*/;web3.eth.getAccounts().then((accounts)=>{sender=accounts[0];console.log('message'+COLON+SPACE+msg);console.log('account'+COLON+SPACE+sender);web3.eth.personal.sign(msg,sender,function(err,hexSign){console.log('signature'+COLON+SPACE+hexSign);dv(div,hexSign);if(cbf)cbf(msg,sender,hexSign);});});};
const signHash=function(msg,div,cbf,ent='w'){return(signMMsg(ent+msg,div,cbf));};
const keyparam=function(pw){netkeys=keystore(pw,0);Object.keys(netkeys).forEach(function(key){accounts[key]=netkeys[key].address;keypairs[netkeys[key].address]=netkeys[key].privateKey.substr(2);});};
const keystore=function(pw,t){t=Object.assign({},V3KEYSTORE);Object.keys(V3KEYSTORE).forEach(function(key){t[key]=web3.eth.accounts.decrypt(V3KEYSTORE[key],pw);});return(t);};
const getv3key=function(pw,t){t=web3.eth.accounts.decrypt(V3KEYSTORE[senderId],pw);if(t)password=pw;return(t);};
const messageVerify=function(message,signature,wallet){return(wallet.toLowerCase()===srecover(message,signature).toLowerCase());};
const messageDoSign=function(message,privatekey){if(!privatekey)privatekey=senderPte;if(privatekey.indexOf(HEXINIT)===0)privatekey=privatekey.slice(2);return(signmess(message,privatekey));};
////////////////////////////////////////////////////////////
const warnNewAcc=function(newacc){console.warn('WALLET\n',newacc.ACCOUNT.address);console.warn('PRIVATE.KEY\n',newacc.ACCOUNT.privateKey.slice(2));console.warn('V3.KEYSTORE\n',newacc.ACCOUNT.keyStore);dw(TEST,newacc.ACCOUNT.keyStore);};
const getAccount=function(t){switchNet(gv(_network));senderId=gv(_account);t=gettextkey(gv(_password),0);if(!t){dw('_keystore_status',hi_alert_data);return;};sender=t.address;senderPte=t.privateKey.substr(2);dw('_keystore_status','Address'+COLON+NBSP+sender);return(t);};
const oldAccount=function(pw,divOA,divOP,divKS,t,a,k){if(!loRegex.test(pw))return(alert(hi_prompt_chk));if(!t)t=gv(divOP);try{t=web3.eth.accounts.encrypt(t,pw);a=web3.eth.accounts.decrypt(t,pw).address;k=JSON.stringify(t).replace(/\s/g,BLANK);}catch(err){alert(hi_alert_data);return(0);}db(divOA,a);dv(divOP,BLANK);dv(divKS,k);console.log({IMPORT:{address:a,keyStore:k}});return(t);};
const newAccount=function(pw,divNA,divNP,divKS,t,k){if(!loRegex.test(pw))return(alert(hi_prompt_chk));t=web3.eth.accounts.create(web3.utils.randomHex(32));db(divNA,t.address);db(divNP,t.privateKey.substr(2));try{k=JSON.stringify(web3.eth.accounts.encrypt(t.privateKey,pw)).replace(/\s/g,BLANK);dv(divKS,k);}catch(err){alert(hi_alert_data);return(0);};window.newaccount={ACCOUNT:{address:t.address,privateKey:t.privateKey,keyStore:k}};warnNewAcc(window.newaccount);return(t);};
const gettextkey=function(pw,t){if(!t)t=gv(_keystore);if(!t)return(getv3key(pw,0));try{t=web3.eth.accounts.decrypt(t.crypto?t:JSON.parse(t),pw);}catch(e){return(console.error(hi_alert_data,'KEYSTORE'))}if(!t.address)return(0);password=pw;console.log('UNLOCKED',t.address);return(t);};
const userUnlock=function(passCode,keyStore,t){t=gettextkey(passCode,keyStore);if(!t)return;senderId=BLANK;sender=t.address;senderPte=t.privateKey.substr(2);};
const userImport=function(passCode,privKey){oldAccount(passCode,0,0,0,privKey);};
const userCreate=function(passCode){newAccount(passCode);};
////////////////////////////////////////////////////////////
const showDefault=function(){$(document).ready(function(){showNetwork();showAccount();showMaxGas();showTxGwei();showRole();showTick();showDTyp();showAccs();});};
const promoteMenu=function(){window.menu=_Menu(ACTDIV);lottimePicker('year','month','day','hour','minute','_uts','_utstring');showCaps();capApply();};
const stopSession=function(mis){setInterval(function(){senderPte=BLANK;password=BLANK;window.newaccount=null;clearPwds();console.clear();web3.eth.accounts.wallet.clear();},mis);};
const statsXuteng=function(mis){setInterval(function(){getData(sender,getDocType(0));},mis);};
const statsEthers=function(mis){setInterval(function(){getCoin(sender,'_ethers');},mis);};
const statsSender=function(mis){setInterval(function(){getSenderData();},mis);};
////////////////////////////////////////////////////////////
const loadParams=function(params={},func=false,...args){(async()=>{if(func)await(func(...args));await(Object.entries(params).forEach(item=>{dx(item[0],hashParam(item[1]))}))})()};
const loadMenuAndParams=function(params={id:'id'},gwei=0,plugin=false,func=false,...args){txgwei=gwei;promoteMenu();if(plugin){plugin(function(){loadParams(params,func,...args)})}else{loadParams(params,func,...args)}};
////////////////////////////////////////////////////////////
const onAccountsChanged=function(){ethereum.on('accountsChanged',r=>{window.sender=r[0]});};
const onChainChanged=function(){ethereum.on('chainChanged',r=>{r=fromHex(r);metaRefresh(r)});};
const getMetamask=function(cbo){if(window.ethereum){window.web3=_Ethereum(ethereum);metaMainnet(cbo)}else{alert(hi_alert_metamasks)}};
////////////////////////////////////////////////////////////
const forceXuteng=function(addr,abi){window.exContractAddress=addr;window.exSCABI=abi;resetXuteng();};
const clearXuteng=function(){delete(window.exContractAddress);delete(window.exSCABI);resetXuteng();};
const resetXuteng=function(){contractAddress=window.exContractAddress?window.exContractAddress:CONTRACT[network].addr;if(window.exSCABI)SCABI=window.exSCABI;window.xuteng=_Contract(SCABI,contractAddress);setPGwei();};
const web3Mainnet=function(cbo){web3.eth.net.getNetworkType().then(function(net){if(net=='main'){switchNet(MAINNET);alert(hi_alert_ismainnet);}else{switchNet(net,MAINNET);alert(hi_alert_nomainnet);};resetXuteng();getSender();if(cbo)cbo(net)})};
const metaMainnet=function(cbo){ethereum.request({method:'eth_requestAccounts'}).then(r=>{window.sender=r[0];ethereum.request({method:'eth_chainId'}).then(r=>{metaRefresh(fromHex(r));onAccountsChanged();onChainChanged();if(cbo)cbo(r)})})};
const getProvider=function(cbo){if(window.ethereum){window.web3=_Ethereum(ethereum);metaMainnet(cbo);}else{if(window.web3){window.web3=_Ethereum(web3.currentProvider);web3Mainnet(cbo);}else{startXuteng(MAINNET);alert(hi_alert_metamasks);}}};
const startXuteng=function(nid){if(nid){switchNet(nid);window.web3=_Ethereum(_Provider(getRpcNet()));resetXuteng();}else{getProvider();};};
const metaRefresh=function(cid){window.network=id2network(cid);switchNet(network);resetXuteng();console.log('CHAIN',cid,network);};
const switchLocal=function(){switchNet('local');window.web3=_Ethereum(_Provider(getRpcNet()));return(web3);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const author_getAccount=function(){showLoad('_keystore_status');setTimeout(function(){getAccount(null);},2000);};
const author_ClrPrivate=function(){db(_newprivate,rem_ncprivatekey);db(_oldprivate,rem_imprivatekey);db(_expprivate,rem_exprivatekey);db(_newaddress,rem_createnewkey);};
////////////////////////////////////////////////////////////
const author_newAccount=function(){if(!confirm(hi_prompt_setpwd))return;;netkeys[senderId]=newAccount(gv(_password),_newaddress,_newprivate,_keystore,0);if(!netkeys[senderId])return;alert(hi_alert_savepwd);author_getAccount();};
const author_oldAccount=function(){if(!confirm(hi_prompt_setpwd))return;;netkeys[senderId]=oldAccount(gv(_password),_oldaddress,_oldprivate,_keystore,0);if(!netkeys[senderId])return;alert(hi_alert_imptkey);author_getAccount();author_ClrPrivate();};
const author_PrivateKey=function(){author_ClrPrivate();setTimeout(function(){getAccount(null);dv(_expprivate,senderPte);},2000);alert(hi_alert_savepwd);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[1]
const lottimePicker=function(year,month,day,hour,min,stamp,time,yi=10,is=5,t,y,m,d,h,i,j){t=lotnow().lottime;[y,m,d,h,i]=t;
;t=BLANK;for(j=y-yi;j<=y+yi;j++)t+='<option\t'+(j==y?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(year,t);
;t=BLANK;for(j=1;j<=12;j++)t+='<option\t'+(j==m?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(month,t);
;t=BLANK;for(j=1;j<=31;j++)t+='<option\t'+(j==d?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(day,t);
;t=BLANK;for(j=0;j<=23;j++)t+='<option\t'+(j==h?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(hour,t);
;t=BLANK;for(j=0;j<=60-is;j+=is)t+='<option\t'+(j==i?'selected':BLANK)+'\tvalue="'+j+'">'+j+'</option>';dw(min,t);
;t=getUts(year,month,day,hour,min,stamp,time);};
////////////////////////////////////////////////////////////[1]
const dwMyGameProfile=function(div,dat){if(!dat)return(dw(div,HYPHEN));dw(div,
'<br/>NAME:&nbsp;'+(dat.dat?dat.dat.name:BLANK)+
'<br/>OWNER:&nbsp;'+dat.txAuthor+
'<br/>FORMAT:&nbsp;'+dat.frm+
'<br/>OPENING:&nbsp;'+fromDate(dat.txUts)+
'<br/>CLOSING:&nbsp;'+fromDate(dat.uts)+
'<br/>MIN DEPOSIT:&nbsp;'+dat.min+
'<br/>MAX DEPOSIT:&nbsp;'+dat.max+
'<br/>REWARDS:&nbsp;'+dat.odd);};
////////////////////////////////////////////////////////////[1]
const dwMyAddrProfile=function(div,dat){if(!dat)return(dw(div,HYPHEN));dw(div,
'<br/>WALLET:&nbsp;'+dat.txAuthor+
'<br/>SIGNUP:&nbsp;'+fromDate(dat.txUts)+
'<br/>NAME:&nbsp;'+(dat.dat?dat.dat.name:undefined)+
'<br/>FILE:&nbsp;'+(dat.dat?dat.dat.text:undefined)+
'<br/>STYLE:&nbsp;'+(dat.dat?dat.dat.style:undefined));
dv('proname',dat.dat?dat.dat.name:BLANK);
dv('protext',dat.dat?dat.dat.text:BLANK);
dv('prostyle',dat.dat?dat.dat.style:BLANK);};
////////////////////////////////////////////////////////////[1]
const dwWalletsDomain=function(div,dat){if(!dat)return(dw(div,HYPHEN));dw(div,
'<br/>DOMAIN:&nbsp;'+(dat.json?dat.json.obj.domain:BLANK)+
'<br/>IP:&nbsp;'+(dat.json?dat.json.obj.ref.ip:undefined)+
'<br/>EXPIRATION:&nbsp;'+dat.time+
'<br/>NOTE:&nbsp;'+(dat.json?dat.json.obj.ref.note:BLANK));
dv('domname',dat.json?dat.json.obj.domain:BLANK);
dv('domip',dat.json?dat.json.obj.ref.ip:BLANK);
dv('domref',dat.json?dat.json.obj.ref.note:BLANK);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const user_delCookie=function(){setCookie(_keystore,BLANK);alert(hi_alert_cookiedel);};
const user_getCookie=function(){dv(_keystore,getCookie(_keystore));if(!gv(_keystore))alert(hi_alert_nocookies);};
const user_setCookie=function(){setCookie(_keystore,gv(_keystore));alert(hi_alert_cookieset);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const do_signmess=function(t){if(noLogin())return;;dv(_signature,BLANK);t=signmess(gv(_smessage),senderPte);if(!t)return;dv(_signature,t[SIGNATURE]);};
const do_smverify=function(t){if(badAddr(gv(_signatory)))return;;t=srecover(gv(_smessage),gv(_signature));if(t==gv(_signatory)){dw(_accverify,OK);}else{ww(_accverify,ERROR);}};
const do_srecover=function(t){dw(_accverify,BLANK);t=srecover(gv(_smessage),gv(_signature));if(!t)return;dw(_accverify,t);};
////////////////////////////////////////////////////////////
const do_register=function(to,xut,div='_register_status'){if(bad_register(to,xut))return;;;transferFor(to,xut,REFREG);send(null,null,div);};
const do_setFee=function(div='_setRegisterLevel_status'){if(bad_setFee())return;;;setFee(gv(_levels));send(null,null,div);};
////////////////////////////////////////////////////////////
const do_setPenny=function(div='_setPenny_status'){if(bad_setPenny())return;;;setPenny(gv(_tpeSell),gv(_tpeBuy));send(null,null,div);};
const do_setAllow=function(div='_setAllow_status'){if(bad_setAllow())return;;;setAllow(gc(_setBA),gc(_setSA),gc(_setTA),gc(_setEA));send(null,null,div);};
const do_setRole=function(div='_setRegisterLevel_status'){if(bad_setRole())return;;;setRole(gv(_roleTo),gv(_roleVal));send(null,null,div);};
const do_setTick=function(div='_setRegisterLevel_status'){if(bad_setTick())return;;;setTick(gv(_tickTo),gv(_tickVal));send(null,null,div);};
const do_setType=function(div='_setType_status'){if(bad_setType())return;;;setType(getDocType(0),gc(_setTR),gc(_setTB),gc(_setTP));send(null,null,div);};
const do_setTypePrice=function(div='_setType_status'){if(bad_setTypePrice())return;;;setTypePrice(getDocType(0),gv(_setPT),gv(_setPE));send(null,null,div);};
////////////////////////////////////////////////////////////
const do_setName=function(div='_setName_status'){if(bad_setName())return;;;setName(gv(_name));send(null,null,div);dv(_name,BLANK);};
const do_setOwner=function(div='_setOwner_status'){if(bad_setOwner())return;;;setOwner(gv(_refex));send(null,null,div);};
const do_changeOwner=function(div='_setOwner_status'){if(bad_changeOwner())return;;;changeOwner(gv(_owner));send(null,null,div);};
const do_mintPenny=function(div='_setup_status'){if(bad_mintPenny())return;;;mintPenny(gv(_mintTo),gv(_mintVal));send(null,null,div);dv(_mintTo,OxOO);;};
const do_pennyPush=function(div='_setup_status'){if(bad_pennyPush())return;;;pennyPush(gv(_pushVal));send(null,null,div);dv(_pushVal,0);};
const do_pennyTransfer=function(div='_revenue_status'){if(bad_pennyTransfer())return;;;pennyTransfer(gv(_xutTo),gv(_xutVal));send(null,null,div);dv(_xutVal,0);};
const do_weiTransfer=function(div='_revenue_status'){if(bad_weiTransfer())return;;;weiTransfer(gv(_ethTo),gv(_ethVal));send(null,null,div);dv(_ethVal,0);};
////////////////////////////////////////////////////////////
const do_transfer=function(out='_transfer_hash',status='_transfer_status'){if(bad_transfer())return;;;transfer(gv(_transTo),gv(_transVal));send(null,out,status);dv(_transTo,OxOO);;};
const do_transfer2xut=function(out='_transfer2xut_hash',status='_transfer2xut_status'){if(bad_transfer2xut())return;;;sell(gv(_transThis));send(null,out,status);dv(_transThis,0);};
const do_transfer2admin=function(out='_transfer_hash',status='_transfer_status'){if(bad_transfer2admin())return;;;transfer(gv(_transToAdmin),gv(_transVal));send(null,out,status);};
////////////////////////////////////////////////////////////
const do_sendeth=function(out='_sendeth_hash',status='_sendeth_status'){if(bad_sendeth())return;;;sendeth(gv(_sendTo),gv(_sendVal),out,status);dv(_sendTo,OxOO);;};
const do_sendeth2admin=function(out='_sendeth_hash',status='_sendeth_status'){if(bad_sendeth2admin())return;;;sendeth(gv(_sendToAdmin),gv(_sendVal),out,status);};
////////////////////////////////////////////////////////////
const do_sendeth2xut=function(out='_sendeth2xut_hash',status='_sendeth2xut_status'){if(bad_sendeth2xut())return;;;buy(gv(_sendThis));send(null,out,status);dv(_sendThis,0);};
const do_sendeth2sys=function(out='_sendeth2xut_hash',status='_sendeth2xut_status'){if(bad_sendeth2sys())return;;;sendeth2sys(gv(_sendThis),out,status);dv(_sendThis,0);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const author_buyFromSeller=function(out='_buyfrom_hash',status='_buyfrom_status'){if(bad_buyFromSeller())return;;;buyFromSeller(gv(_sellerAddress),g2(_sellerPostNum)-1,gn(_sellingNum),gv(_eth2send));send(null,out,status);};
const author_sellToBuyer=function(out='_sellto_hash',status='_sellto_status'){if(bad_sellToBuyer())return;;;sellToBuyer(gv(_buyerAddress),g2(_buyerPostNum)-1,gn(_buyingNum),gv(_xut2send));send(null,out,status);};
////////////////////////////////////////////////////////////
const author_userStopBuy=function(out='_hash',status='_buying_status',t=0){t=g2(_buyPostNum);if(bad_userStopBuy(t))return;;;userStopBuy(t-1);send(null,out,status);};
const author_userStopSell=function(out='_hash',status='_selling_status',t=0){t=g2(_sellPostNum);if(bad_userStopSell(t))return;;;userStopSell(t-1);send(null,out,status);};
////////////////////////////////////////////////////////////
const author_userSetBuy=function(out='_tobuy_hash',status='_tobuy_status'){if(bad_userSetBuy())return;;;userSetBuy(gv(_buyrate),gv(_eth2pay));send(null,out,status);};
const author_userSetSell=function(out='_tosell_hash',status='_tosell_status'){if(bad_userSetSell())return;;;userSetSell(gv(_xut2sell),gv(_sellrate));send(null,out,status);};
////////////////////////////////////////////////////////////
const author_setFee=function(status='_personal_status'){do_setFee(status);};
const author_regs2sys=function(status='_register_status'){do_register(contractAddress,gv(_reglev),status);};
const author_regs2usr=function(status='_user_status'){do_register(gv(_user),gv(_regmem),status);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const promm_sendeth2xut=function(){if(bad_sendeth2xut())return;;;mm_buy(gv(_sendThis));;dv(_sendThis,0);};
const promm_transfer2xut=function(){if(bad_transfer2xut())return;;;mm_sell(gv(_transThis));;dv(_transThis,0);};
////////////////////////////////////////////////////////////
const promm_buyFromSeller=function(){if(bad_buyFromSeller())return;;;mm_buyFromSeller(gv(_sellerAddress),g2(_sellerPostNum)-1,gn(_sellingNum),gv(_eth2send));;};
const promm_sellToBuyer=function(){if(bad_sellToBuyer())return;;;mm_sellToBuyer(gv(_buyerAddress),g2(_buyerPostNum)-1,gn(_buyingNum),gv(_xut2send));;};
////////////////////////////////////////////////////////////
const promm_userStopBuy=function(t){t=g2(_buyPostNum);if(bad_userStopBuy(t))return;;;mm_userStopBuy(t-1);;};
const promm_userStopSell=function(t){t=g2(_sellPostNum);if(bad_userStopSell(t))return;;;mm_userStopSell(t-1);;};
////////////////////////////////////////////////////////////
const promm_userSetBuy=function(){if(bad_userSetBuy())return;;;mm_userSetBuy(gv(_buyrate),gv(_eth2pay));;};
const promm_userSetSell=function(){if(bad_userSetSell())return;;;mm_userSetSell(gv(_xut2sell),gv(_sellrate));;};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const promm_setFee=function(){if(bad_setFee())return;;;mm_setFee(gv(_levels));;};
const promm_regs2sys=function(to,xut){to=contractAddress;xut=gv(_reglev);if(bad_register(to,xut))return;;;mm_transferFor(to,xut,REFREG);;};
const promm_regs2usr=function(to,xut){to=gv(_user);xut=gv(_regmem);if(bad_register(to,xut))return;;;mm_transferFor(to,xut,REFREG);;};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[6]
const playMove=function(gaddr,holder=FAILADDR,status=TEST){mm_setHolder(gaddr,holder,status);};
const playSend=function(gaddr,gxut,status=TEST){xuteng.methods.holderOf(gaddr).call().then(addr=>{if(!addr||addr==FAILADDR||addr==ZEROADDR)return(alert(FAILED));mm_transfer(gaddr,gxut,status);});};
const gameSend=function(game=window.txLottoGame,eth='gameeth',bet='gamebet',bets='gamebets',status='_game_status',t){eth=g2(eth);t=invalids(game,eth,ethnow());if(t)return(dw(status,t));t=gv(bet);if(isNaN(t))t=gv(bets);mm_sendeth(game.txAuthor,eth,setInput({ref:game.txh,bet:t.split(COMMA).map(Number)}),status);};
const gamePlay=function(game=window.txLottoGame,xut='gamexut',hash='txhash',addr='_txaddress',status='_game_status'){xut=g2(xut);hash=gv(hash);addr=gt(addr);if(avalid(hash)&&hvalid(addr)){addr=hash}else{if(avalid(addr)&&hvalid(hash)){;}else{return(alert(ERROR+'ADDRESS'))}};return(invalide(game,xut,addr,ethnow(),status,confirm,playSend,alert));};
const invalids=function(game,eth,uts=ethnow(),error=function(e){console.error(e);return(e)}){if(!game)return(error(INVALID+'REF'));if(!GAMES[game.frm])return(error(INVALID+'FORM'));if(!game.dat||game.dat.pay!=COIN.toLowerCase())return(error(INVALID+'TERM'));if(!eth||eth<game.min||eth>game.max)return(error(INVALID+'ETHER'));if(!uts||uts<game.txUts||uts>game.uts||uts>game.exp)return(error(INVALID+'TIME'));return(false);};
const invalide=function(game,xut,addr,uts,status=TEST,ask=null,run=null,error=function(e){console.error(e);return(e)},val=null,dec=null){if(!avalid(addr)||addr==ZEROADDR)return(error(INVALID+'ADDRESS'));if(!game)return(error(INVALID+'INPUT'));window.gameForm=GAMES[game.frm];/*IgnoreCheckingHash*/
;if(!window.gameForm)return(error(INVALID+'FORMAT'));window.gameAddress=addr;window.gameBet=xut;window.gameUts=uts;if(gameBet<game.min||gameBet>game.max)return(error(INVALID+'AMOUNT'));if(gameUts<game.txUts||gameUts>game.uts)return(error(INVALID+'TIME'));val=decs(gameBet,gameForm.dec);
;if(!val)return(error(INVALID+'VALUES'));dec=_Set(val[1]);if(gameForm.num&&(gameForm.num!=val[1].length))return(error(UNCHECKED+gameForm.num+SPACE+'NUMBERS'));if(!gameForm.dup&&(dec.size!=val[1].length))return(error(FOUND+'DUPLICATES'+SPACE+val[1]));window.gameVals=val;
;if(ask&&!ask('AMOUNT:\t'+gameBet+NEWLINE+'NUMBERS:\t'+gameVals[1]))return(CANCELED);if(run)run(gameAddress,gameBet,status);return(false);};
////////////////////////////////////////////////////////////[3]
const userInit=function(user,divUser='user'){user=hashParam(ARGADDR);if(!user){dv(divUser,BLANK);return(console.error(hi_alert_data));};dv(divUser,user);window.setTimeout(menu.onUserGoUser,1000);};
const gameInit=function(game,divAddr='txhash',divUser='user'){game=hashParam(ARGADDR);game=(avalid(game)||hvalid(game))?game:BLANK;if(!game){dv(divAddr,BLANK);dv(divUser,BLANK);return(console.error(hi_alert_data));};dv(divAddr,game);window.setTimeout(menu.onUserTxView,1000);};
const reLotter=function(cbf,status='_gameresult',varAddr='txhash',divHash='_txaddress',a,h){a=gv(varAddr);h=gt(divHash);if(avalid(a)&&hvalid(h)){window.targetAddress=a;}else{if(avalid(h)&&hvalid(a)){window.targetAddress=h;}else{window.targetAddress=null;return(cbf(null,null));}};showLoad(status);
;deaddrLottoGame(window.targetAddress,HYPHEN,function(err,result){if(err){dw(status,ERROR);return(cbf(err,null));}if(result){window.lottoGame=result;lottoGame.game=GAMES[lottoGame.frm];if(!lottoGame.game||lottoGame.game.rev){dw(status,HYPHEN);return(cbf(null,undefined));}
;lotter(result.uts,lottoGame.game.num,lottoGame.game.dec,function(err,result){if(err){dw(status,ERROR);return(cbf(err,null));};dw(status,result.toString());cbf(null,result);});}else{dw(status,ASK);window.lottoGame=null}});};
////////////////////////////////////////////////////////////[4]
const dwDomainWithFee=function(ua,divDom,divFee,cbf){deaddrMyDomains(ua,divDom,cbf);xutengDomainAnnualETH(function(e,fee){if(cbf)cbf(e,fee);dw(divFee,'FEE&nbsp;'+fee+'&nbsp;'+COIN+'/YEAR')})};
const dwDomainRegInfo=function(dn,divUser,divTime,divIp,divNote,cbf){xutengDomainStatus(dn).then(data=>{if(cbf)cbf(null,data);if(!data)data={};db(divUser,data.user);db(divTime,data.time);db(divIp,data.json&&data.json.obj?data.json.obj.ref.ip:HYPHEN);db(divNote,data.json&&data.json.obj?data.json.obj.ref.note:HYPHEN);});};
const dwTxHashContent=function(txh,divAddr,divNote,divData,cbf){dw(divAddr,HYPHEN);dw(divNote,HYPHEN);dw(divData,HYPHEN);if(avalid(txh)){divHashFromAddr(txh,divAddr);deaddrLottoGame(txh,divData,cbf);}if(hvalid(txh)){divAddrFromHash(txh,divAddr);dehashLottoGame(txh,divData,cbf);getInput(txh,function(e,obj){dw(divNote,obj?obj.ref:HYPHEN)});}};
const dwAddrAliasInfo=function(alias,divHash,divOwner,divAddr,cbf){alias=alias.toLowerCase();db(divHash,toHash(alias));xutengAliasesOwner(alias,function(e,ua){if(cbf)cbf(e,ua);if(ua!=ZEROADDR)db(divOwner,ua);else{db(divOwner,HYPHEN)}});xuteng.methods.addressOf(gv(divHash)).call(function(e,oa){if(cbf)cbf(e,oa);if(oa!=ZEROADDR)db(divAddr,oa);else{db(divAddr,HYPHEN)}});}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const rawFilterTx=function(r){return({bal:fromSat(r.final_balance),usl:r.txrefs.filter(item=>!item.spent_by&&item.tx_output_n!==-1)})};
const rawCypherUs=function(acc,scid,cbf=console.log){rawCypherTx(acc,scid,(e,r)=>{if(e)return(cbf(e,null));if(!r||!r.final_balance)return(cbf(hi_alert_balance,null));cbf(null,rawFilterTx(r))})};
const rawCypherTx=function(acc,scid,cbf=console.log){axios.get(BROXIES[0].getTransactionList(acc,scid)).then(r=>{if(r.status===200){cbf(null,r.data)}else{_Error(r.status)}}).catch(e=>{cbf(e,null)})};
const rawGenBtcTx=function(usl,bal,acc,wif,to,amt,scid,fee,status=TEST,out=TEST,b,w){showLoad(status);try{b=_Builder(scid);b.setVersion(1);w=_BWallet(wif,scid);/*wif=newaccount.key*/;usl.forEach(item=>b.addInput(item.tx_hash,item.tx_output_n));b.addOutput(to,1*toSat(amt));b.addOutput(acc,1*bitChange(bal,amt,fee));/*acc=sender*/;usl.forEach((item,index)=>{b.sign(index,w)});db(out,b.build().toHex());dw(status,DONE);}catch(e){return(db(status,e))}};
const rawSetBtcTx=function(acc,wif,to,amt,scid,fee,status=TEST,out=TEST){showLoad(status);rawCypherUs(acc,scid,(e,r)=>{if(e)return(db(status,e));return(rawGenBtcTx(r.usl,r.bal,acc,wif,to,amt,scid,fee,status,out))})};
const rawPopBtcTx=function(dat,acc,wif,to,amt,scid,fee,status=TEST,out=TEST,r){try{r=JSON.parse(dat);r=rawFilterTx(r)}catch(e){return(db(status,e))};rawGenBtcTx(r.usl,r.bal,acc,wif,to,amt,scid,fee,status,out)};
////////////////////////////////////////////////////////////
const rawTransfer=function(acc,pte,to,amt,scid,price,gas,status=TEST,out=TEST,eth=0){if(!EXTOKENS[scid])return(dw(status,INVALID));showLoad(status);getUserNonce(acc,network,function(err,nonce){if(err)return(dw(status,err));Transfer(to,amt,EXTOKENS[scid]().dec,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},scid,eth,price,gas,nonce,acc,pte,true,false);});};
const rawPayEther=function(acc,pte,to,eth,msg,price,gas,status=TEST,out=TEST){showLoad(status);getUserNonce(acc,network,function(err,nonce){if(err)return(dw(status,err));PayEther(to,eth,msg,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},price,gas,nonce,acc,pte,true,false);});};
const rawGenEther=function(acc,pte,to,eth,msg,price,gas,nonce,status=TEST,out=TEST){showLoad(status);PayEther(to,eth,msg,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},price,gas,nonce,acc,pte,true,false);};
////////////////////////////////////////////////////////////
const rawTokenSum=function(addr=XUTENG[network].addr,cbf=console.log){axios.get(PROXIES[0].getTokenTotalSupply(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*pennies*/
const rawAccToken=function(addr=XUTENG[network].addr,acc=sender,cbf=console.log){axios.get(PROXIES[0].getUserTokenBalance(addr,acc,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*pennies*/
const rawAccEther=function(acc=sender,cbf=console.log){axios.get(PROXIES[0].getUserEtherBalance(acc,network)).then(r=>{cbf(null,fromWHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*ethers*/
////////////////////////////////////////////////////////////
const rawDecimals=function(addr=XUTENG[network].addr,cbf=console.log){axios.get(PROXIES[0].getContractDecimals(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};
const rawGetNonce=function(addr=sender,cbf=console.log){axios.get(PROXIES[0].getTransactionCount(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};
const rawGetPrice=function(cbf=console.log){axios.get(PROXIES[0].getGasPrice(network)).then(r=>{cbf(null,fromHex(r.data.result)/1000000000)}).catch(e=>{cbf(e,null)});};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const help_ContentMod=function(w){ww(_help_content,w);};
////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////
const MD5=function(e){
h=function(a,b,N,c,d,e,f,g){e=a&2147483648;f=b&2147483648;c=a&1073741824;d=b&1073741824;g=(a&1073741823)+(b&1073741823);return(c&d?g^2147483648^e^f:c|d?g&1073741824?g^3221225472^e^f:g^1073741824^e^f:g^e^f);};
k=function(a,b,c,d,e,f,g){a=h(a,h(h(b&c|~b&d,e),g));return(h(a<<f|a>>>32-f,b));};l=function(a,b,c,d,e,f,g){a=h(a,h(h(b&d|c&~d,e),g));return(h(a<<f|a>>>32-f,b));};m=function(a,b,d,c,e,f,g){a=h(a,h(h(b^d^c,e),g));return(h(a<<f|a>>>32-f,b));};
n=function(a,b,d,c,e,f,g){a=h(a,h(h(d^(b|~c),e),g));return(h(a<<f|a>>>32-f,b));};p=function(a,N,b,c,d,e,f,g,r,s,t){b="";d="";for(c=0;3>=c;c++)d=a>>>8*c&255,d="0"+d.toString(16),b+=d.substr(d.length-2,2);return(b);};f=[];
e=function(a){a=a.replace(/\r\n/g,"\n");for(b="",d=0;d<a.length;d++){c=a.charCodeAt(d);128>c?b+=String.fromCharCode(c):(127<c&&2048>c?b+=String.fromCharCode(c>>6|192):(b+=String.fromCharCode(c>>12|224),b+=String.fromCharCode(c>>6&63|128)),b+=String.fromCharCode(c&63|128));};return(b);}(e);
f=function(b){c=b.length;a=c+8;for(d=16*((a-a%64)/64+1),e=Array(d-1),f=0,g=0;g<c;)a=(g-g%4)/4,f=g%4*8,e[a]|=b.charCodeAt(g)<<f,g++;a=(g-g%4)/4;e[a]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return(e);}(e);a=1732584193;b=4023233417;c=2562383102;d=271733878;for(e=0;e<f.length;e+=16)q=a,r=b,s=c,t=d,
a=k(a,b,c,d,f[e+0],7,3614090360),d=k(d,a,b,c,f[e+1],12,3905402710),c=k(c,d,a,b,f[e+2],17,606105819),b=k(b,c,d,a,f[e+3],22,3250441966),a=k(a,b,c,d,f[e+4],7,4118548399),d=k(d,a,b,c,f[e+5],12,1200080426),c=k(c,d,a,b,f[e+6],17,2821735955),b=k(b,c,d,a,f[e+7],22,4249261313),
a=k(a,b,c,d,f[e+8],7,1770035416),d=k(d,a,b,c,f[e+9],12,2336552879),c=k(c,d,a,b,f[e+10],17,4294925233),b=k(b,c,d,a,f[e+11],22,2304563134),a=k(a,b,c,d,f[e+12],7,1804603682),d=k(d,a,b,c,f[e+13],12,4254626195),c=k(c,d,a,b,f[e+14],17,2792965006),b=k(b,c,d,a,f[e+15],22,1236535329),
a=l(a,b,c,d,f[e+1],5,4129170786),d=l(d,a,b,c,f[e+6],9,3225465664),c=l(c,d,a,b,f[e+11],14,643717713),b=l(b,c,d,a,f[e+0],20,3921069994),a=l(a,b,c,d,f[e+5],5,3593408605),d=l(d,a,b,c,f[e+10],9,38016083),c=l(c,d,a,b,f[e+15],14,3634488961),b=l(b,c,d,a,f[e+4],20,3889429448),
a=l(a,b,c,d,f[e+9],5,568446438),d=l(d,a,b,c,f[e+14],9,3275163606),c=l(c,d,a,b,f[e+3],14,4107603335),b=l(b,c,d,a,f[e+8],20,1163531501),a=l(a,b,c,d,f[e+13],5,2850285829),d=l(d,a,b,c,f[e+2],9,4243563512),c=l(c,d,a,b,f[e+7],14,1735328473),b=l(b,c,d,a,f[e+12],20,2368359562),
a=m(a,b,c,d,f[e+5],4,4294588738),d=m(d,a,b,c,f[e+8],11,2272392833),c=m(c,d,a,b,f[e+11],16,1839030562),b=m(b,c,d,a,f[e+14],23,4259657740),a=m(a,b,c,d,f[e+1],4,2763975236),d=m(d,a,b,c,f[e+4],11,1272893353),c=m(c,d,a,b,f[e+7],16,4139469664),b=m(b,c,d,a,f[e+10],23,3200236656),
a=m(a,b,c,d,f[e+13],4,681279174),d=m(d,a,b,c,f[e+0],11,3936430074),c=m(c,d,a,b,f[e+3],16,3572445317),b=m(b,c,d,a,f[e+6],23,76029189),a=m(a,b,c,d,f[e+9],4,3654602809),d=m(d,a,b,c,f[e+12],11,3873151461),c=m(c,d,a,b,f[e+15],16,530742520),b=m(b,c,d,a,f[e+2],23,3299628645),
a=n(a,b,c,d,f[e+0],6,4096336452),d=n(d,a,b,c,f[e+7],10,1126891415),c=n(c,d,a,b,f[e+14],15,2878612391),b=n(b,c,d,a,f[e+5],21,4237533241),a=n(a,b,c,d,f[e+12],6,1700485571),d=n(d,a,b,c,f[e+3],10,2399980690),c=n(c,d,a,b,f[e+10],15,4293915773),b=n(b,c,d,a,f[e+1],21,2240044497),
a=n(a,b,c,d,f[e+8],6,1873313359),d=n(d,a,b,c,f[e+15],10,4264355552),c=n(c,d,a,b,f[e+6],15,2734768916),b=n(b,c,d,a,f[e+13],21,1309151649),a=n(a,b,c,d,f[e+4],6,4149444226),d=n(d,a,b,c,f[e+11],10,3174756917),c=n(c,d,a,b,f[e+2],15,718787259),b=n(b,c,d,a,f[e+9],21,3951481745),
a=h(a,q),b=h(b,r),c=h(c,s),d=h(d,t);return((p(a)+p(b)+p(c)+p(d)).toLowerCase());};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const Menu=function(element){self=this;
 element.onclick=function(e){setAction(e,self,ACTION,BUTACT)};
 element.onchange=function(e){setAction(e,self,CHANGE,DATACT)};
 self.onSetFee=function(){promm_setFee();}
 self.onEthXut=function(){promm_sendeth2xut();}
 self.onXutXut=function(){promm_transfer2xut();}
 self.onSysReg=function(){promm_regs2sys(0,0);}
 self.onSetBuy=function(){promm_userSetBuy();}
 self.onDisBuy=function(){promm_userStopBuy(0);}
 self.onSetSel=function(){promm_userSetSell();;}
 self.onDisSel=function(){promm_userStopSell(0);}
 self.onBuyOfr=function(){promm_buyFromSeller();}
 self.onSelReq=function(){promm_sellToBuyer();}
 self.onGoUser=function(){getUserData(gv(_user),getDocType(0));}
 self.onGetBuy=function(){getOwnRequest(g2(_buyPostNum));}
 self.onGetSel=function(){getOwnOffer(g2(_sellPostNum));}
 self.onGetOfr=function(){getUserOffer(gv(_sellerAddress),g2(_sellerPostNum));}
 self.onGetReq=function(){getUserRequest(gv(_buyerAddress),g2(_buyerPostNum));}
 self.goXutGet=function(){dv(_sendThis,(g2(_xutThis)/s2n(sellTpe)));}
 self.goEthGet=function(){dv(_ethThis,(g2(_transThis)/s2n(buyTpe)));}
 self.goEthSet=function(){dv(_eth2pay,(g2(_xut2buy)/g2(_buyrate)+s2n(typePriceEth)));}
 self.goXutSet=function(){dv(_eth2recv,((g2(_xut2sell)-s2n(typePriceXut))/g2(_sellrate)));}
 self.goXutBuy=function(){dv(_eth2send,(g2(_xut2gain)/gn(_sellingTpe)));}
 self.goXutSel=function(){dv(_eth2gain,(g2(_xut2send)/gn(_buyingTpe)));}
 self.goUtcGet=function(){getUts('year','month','day','hour','minute','_uts','_utstring');}
 self.onBipeDecode=function(){BipeDecode('_keystore_status_bipe')};
 self.onV3ksDecode=function(){V3ksDecode('_keystore_status')};
 self.onAuthKstDec=function(){author_getAccount();}
 self.onAuthAccNew=function(){author_newAccount();}
 self.onAuthAccImp=function(){author_oldAccount();}
 self.onAuthAccExp=function(){author_PrivateKey();}
 self.onAuthSigSig=function(){do_signmess(0);}
 self.onAuthSigVer=function(){do_smverify(0);}
 self.onAuthPayEth=function(){do_sendeth();}
 self.onAuthPayXut=function(){do_transfer();}
 self.onAuthEthXut=function(){do_sendeth2xut('_help_buy','mm_buy');}
 self.onAuthXutXut=function(){do_transfer2xut('_help_sell','mm_sell');}
 self.onAuthSetFee=function(){author_setFee('mm_setFee');}
 self.onAuthSysReg=function(){author_regs2sys('_help_register');}
 self.onAuthSetBuy=function(){author_userSetBuy('_help_tobuy','mm_userSetBuy');}
 self.onAuthDisBuy=function(){author_userStopBuy('_help_buying','mm_userStopBuy');}
 self.onAuthSetSel=function(){author_userSetSell('_help_tosell','mm_userSetSell');}
 self.onAuthDisSel=function(){author_userStopSell('_help_selling','mm_userStopSell');}
 self.onAuthBuyOfr=function(){author_buyFromSeller('_help_buyfrom','mm_buyFromSeller');}
 self.onAuthSelReq=function(){author_sellToBuyer('_help_sellto','mm_sellToBuyer');}
 self.onAuthCpyKst=function(){tcopy(_keystore,hi_alert_kstcopy);}
 self.onAuthCpyKey=function(){tcopy(_newprivate,hi_alert_kstcopy);}
 self.onAuthCpyExp=function(){tcopy(_expprivate,hi_alert_kstcopy);}
 self.onAuthCpySig=function(){tcopy(_signature,hi_alert_kstcopy);}
 self.onAuthCokGet=function(){user_getCookie();}
 self.onAuthCokSet=function(){user_setCookie();}
 self.onAuthCokDel=function(){user_delCookie();}
 self.goAuthNetPut=function(){selectNet(gv(_network));}
 self.goAuthNetFix=function(){selectNet(network);}
 self.goAuthGasWei=function(){txgwei=g2(_txgwei);}
 self.goAuthGasMax=function(){maxgas=g2(_maxgas);}
 self.goRawBxValue=function(){db('change',gv('exp_btc'));}
 self.goRawExToken=function(){PROXIES[0].setApiKey(gv('token'),network)}
 self.goRawBxToken=function(){BROXIES[0].setApiKey(gv('token'),network)}
 self.goRawBxChain=function(){switchBtc(gv(_network));swapBtcId(network)}
 self.goRawTxChain=function(){switchNet(gv(_network));getGwei()}
 self.goRawNetwork=function(){switchNet(gv(_network));}
 self.onGameResult=function(){reLotter(console.log);}
 self.onGameTxPlay=function(){gamePlay(window.txLottoGame);}
 self.onGameTxSend=function(){gameSend(window.txLottoGame);}
 self.onUserGetPro=function(){deaddrMyProfile(sender,'_profile');}
 self.onUserGetDom=function(){dwDomainWithFee(sender,'_domain','_domfee');}
 self.onUserSetPro=function(){createMyProfile(gv('proname'),gv('protext'),gv('prostyle'));}
 self.onUserSetDom=function(){createOneDomain(gv('domname'),{ip:gv('domip'),note:gv('domref')},g2('dometh'),function(e,r){if(e)dw('mm_setDomain',ERROR+e)},'mm_setDomain');}
 self.onUserDomReg=function(){createOneDomain(gv('domain'),{ip:gv('dip'),note:gv('dnote')},g2('regeth'),function(e,r){if(e)dw('_domain_status',ERROR+e)},'_domain_status');}
 self.onUserDocSet=function(){createSimpleDoc(gv('docform'),gn('_uts'),g2('xutMin'),g2('xutMax'),g2('doctype'),{name:gv('docdat')},gv('rewards').split(COMMA),'_doc_hash','_doc_status');}
 self.onGameDocSet=function(){createSimpleDoc(gv('docform'),gn('_uts'),g2('xutMin'),g2('xutMax'),0,{name:gv('docdat')},genArray('rewards'),'_doc_hash','_doc_status');}
 self.onGameDocLet=function(){createSimpleRef(gv('docform'),gn('_uts'),g2('ethMin'),g2('ethMax'),TYPES.gaming,{name:gv('docdat'),pay:'eth'},genArray('rewards'),0,BLANK,null,null,BLANK,BLANK,BLANK,BLANK,'_doc_hash');}
 self.onUserPayXut=function(){xutengRemitFor(gv('xutTo'),g2('xut'),gv('xutNote'),console.log,'_userxut_status',false);}
 self.onUserPayEth=function(){ethereumRemitFor(gv('to'),g2('eth'),gv('ethNote'),console.log,'_usereth_status',false);}
 self.onUserTxView=function(){dwTxHashContent(gv('txhash'),'_txaddress','_txnote','_txdata',function(e,data){dv('user',data?data.txAuthor:BLANK);menu.onUserGoUser()})}
 self.onUserGoUser=function(){getAliasData(gv(_user),1,function(addr){dw('_userWallet',addr);deaddrMyProfile(addr,'_userProfile');deaddrMyDomains(addr,'_userDomain')})}
 self.onUserAaAddr=function(){if(avalid(gv('_aowner')))return(alert(ERROR));mm_ping(toHash(gv('alias').toLowerCase()),g2('atype'));}
 self.onUserAAlias=function(){dwAddrAliasInfo(gv('alias'),'_ahash','_aowner','_address');}
 self.onUserDomain=function(){dwDomainRegInfo(gv('domain'),'_downer','_dexp','dip','dnote');}
 self.onBipeAccNew=function(){bipNewAccount('_account_status','new_btc','new_eth','new_key','new_hex','new_web');}
 self.onBipEncrypt=function(){bipOldAccount('_encrypt_status','old_key','enc_pwd','old_btc','old_eth','enc_bip','old_web');}
 self.onBipDecrypt=function(){bipKeyDecrypt('_decrypt_status','dec_bip','dec_pwd','exp_btc','exp_eth','exp_key','exp_hex','exp_web');}
 self.onBipeUnlock=function(){bipKeyDecrypt('_keystore_status','keystore','password','100','wallet','200','300');}
 self.onBip2AccNew=function(){bipSolNewAddr('_account_status','new_sol','new_key');}
 self.onBip2Encrpt=function(){bipSolOldAddr('_encrypt_status','old_key','enc_pwd','old_sol','enc_bip');}
 self.onBip2Decrpt=function(){bipSolDecAddr('_decrypt_status','dec_bip','dec_pwd','exp_sol','exp_key');}
 self.onBip2Unlock=function(){bipSolDecrypt('_keystore_status','keystore','password','wallet','_sols');}
 self.onAuthPaySol=function(){bipSolTransfer('_sendeth_status','to','sol','_sols');}
 self.onBip3AccNew=function(){bipAlgoNewAddr('_account_status','new_algo','new_key');}
 self.onBip3Encrpt=function(){bipAlgoOldAddr('_encrypt_status','old_key','enc_pwd','old_algo','enc_bip');}
 self.onBip3Decrpt=function(){bipAlgoDecAddr('_decrypt_status','dec_bip','dec_pwd','exp_algo','exp_key');}
 self.onBip3Unlock=function(){bipAlgoDecrypt('_keystore_status','keystore','password','wallet','_algos','rpcs','apikey','idxs');}
 self.onAuthPayAgr=function(){bipAlgoTransfer('_sendeth_status','to','algo','_algos','note');}
 self.onAuthRefAgr=function(){bipAlgoRefresh('_algos');}
 self.onRawTxDoBtc=function(){dbm(['txdata','txlink'],EMPTY);swapBtcId(gv(_network));if(noLogin())return;rawSetBtcTx(gv('exp_btc'),newaccount.key,gv('to'),gv('btc'),gv('network'),gv('fee'),'_txdata_status','txdata')}
 self.onRawPureBtc=function(){dbm(['txdata','txlink'],EMPTY);swapBtcId(gv(_network));if(noLogin())return;rawPopBtcTx(gv('input'),gv('exp_btc'),newaccount.key,gv('to'),gv('btc'),gv('network'),gv('fee'),'_txdata_status','txdata')}
 self.onRawTxDoEth=function(){dbm(['txdata','txlink'],EMPTY);if(noLogin())return;rawPayEther(gv('exp_eth'),window.newaccount.hex,gv(_sendTo),gv(_sendVal),gv(_smessage),g2(_txgwei),g2(_maxgas),'_txdata_status','txdata')}
 self.onRawPureEth=function(){dbm(['txdata','txlink'],EMPTY);if(noLogin())return;rawGenEther(gv('exp_eth'),window.newaccount.hex,gv(_sendTo),gv(_sendVal),gv(_smessage),g2(_txgwei),g2(_maxgas),g2('nonce'),'_txdata_status','txdata')}
 self.onRawPushEth=function(){self.goRawExToken();dv('txlink',PROXIES[0].sendRawTransaction(gv('txdata'),network))}
 self.onRawPushBtc=function(){self.goRawBxToken();dv('txlink',BROXIES[0].sendRawTransaction(gv('txdata'),network))}
 self.onRawCopyHex=function(){tcopy('txdata',hi_alert_kstcopy);}
 self.onRawCopyApi=function(){tcopy('txlink',hi_alert_kstcopy);}
 self.goUserRedXut=function(a){a=gv('xutTo');if(avalid(a))return(dv('xutTarget',a));xutengUserRedirect(a,function(e,r){dv('xutTarget',r)})}
 self.goUserRedEth=function(a){a=gv('to');if(avalid(a))return(dv('ethTarget',a));xutengUserRedirect(a,function(e,r){dv('ethTarget',r)})}
 self.goUserGoUser=self.onUserGoUser;
 self.goUserDomain=self.onUserDomain;
 self.goUserAAlias=self.onUserAAlias;
 self.onAuthGoUser=self.onGoUser;
 self.onAuthGetBuy=self.onGetBuy;
 self.onAuthGetSel=self.onGetSel;
 self.onAuthGetOfr=self.onGetOfr;
 self.onAuthGetReq=self.onGetReq;
 self.onClearInput=clearTags;
 //TokenMiningDefinitions
 self.onDefiHackProgJoinMine=function(){defiHackProgJoinMine('form_status','pro_token','pro_id_mine');}
 self.onDefiHackProgJoin=function(){defiHackProgJoin('form_status','pro_token','pro_id');}
 self.onDefiHackProgLoad=function(){defiHackProgLoad('form_status','pro_token','pro_amt','pro_sum');}
 self.goDefiHackProgIdno=function(){checkPositiveInt('pro_id',_warnPrgIdno);}
 self.goDefiHackProgIdnoMine=function(){checkPositiveInt('pro_id_mine',_warnPrgIdno);}
 self.goDefiHackProgLoad=function(){checkTokenAllowed('pro_token',_warnPrgCoin);self.onDefiHackProgLoad()}
 self.onDefiDigLoad=function(){defiDigLoad('dig_token','dig_amt','dig_sum','dig_mine','dig_rate');}
 self.onDefiDigJoin=function(){defiDigJoin('dig_keystore','dig_passcode','dig_address');}
 self.goDefiDigLoad=self.onDefiDigLoad;
 self.onDefiDigNonce=function(){defiDigNonce('dig_nonce');}
 self.onDefiDigMine=function(){defiDigMine('dig_wait','form_status');}
 self.onDefiDigSend=function(){defiDigSend('dig_in_nonce','form_status');}
 //GemtTokenDefinitions
 self.onDefiProgramProgDraw=function(){confirmPositiveInt('pro_program_id',_warnPrgDraw);defiProgramProgStop('form_status','pro_program_id',true)}
 self.onDefiProgramProgDrawRaw=function(){confirmPositiveInt('pro_program_id',_warnPrgDraw);defiProgramProgStopRaw('form_status','pro_program_id',true)}
 self.onDefiProgramProgOpen=function(){defiProgramProgOpen('form_status','pro_program_id','pro_program_apr','pro_program_gemt');}
 self.onDefiProgramProgOpenRaw=function(){defiProgramProgOpenRaw('form_status','pro_program_id','pro_program_apr','pro_program_gemt');}
 self.onDefiProgramProgRead=function(){defiProgramProgRead('form_status','pro_program_id','pro_program_apr','pro_program_gemt');}
 self.onDefiProgramProgStop=function(){confirmPositiveInt('pro_program_id',_warnPrgStop);defiProgramProgStop('form_status','pro_program_id',false)}
 self.onDefiProgramProgStopRaw=function(){confirmPositiveInt('pro_program_id',_warnPrgStop);defiProgramProgStopRaw('form_status','pro_program_id',false)}
 self.goDefiProgramProgIdno=function(){checkPositiveInt('pro_program_id',_warnPrgIdno);self.onDefiProgramProgRead()}
 self.goDefiProgramProgInit=function(){checkPositiveNum('pro_program_gemt',_warnPrgInit);}
 self.goDefiProgramProgRate=function(){checkNumsInRange('pro_program_apr',_warnPrgRate,PROGMINRATE,PROGMAXRATE);}
 self.onDefiProgramProgReId=function(){defiProgramProgRead('form_status','pro_invest_id','pro_invest_apr','pro_invest_sum','pro_invest_age','pro_invest_own','pro_invest_amt','pro_invest_agi');}
 self.onDefiProgramProgJoin=function(){defiProgramProgJoin('form_status','pro_invest_gemt');}
 self.onDefiProgramProgJoinRaw=function(){defiProgramProgJoinRaw('form_status','pro_invest_gemt');}
 self.onDefiProgramProgGain=function(){defiProgramProgGain('form_status','pro_invest_id');}
 self.onDefiProgramProgGainRaw=function(){defiProgramProgGainRaw('form_status','pro_invest_id');}
 self.goDefiProgramProgInst=function(){checkPositiveNum('pro_invest_gemt',_warnPrgInit);}
 self.goDefiProgramProgReId=self.onDefiProgramProgReId;
 self.goDefiGameLodeNumStr=function(){checkLodeNumsStr('lode_numstr',_warnPrgData);}
 self.goDefiGameLodeAmount=function(){checkPositiveNum('lode_amount',_warnPrgInit);}
 self.goDefiGameLodeLoad=function(){self.onDefiGameLodeLoad();}
 self.onDefiGameLodeLoad=function(){defiGameLodeLoad('form_status','lode_money','pro_amt');}
 self.onDefiGameLodeJoin=function(){defiGameLodeJoin('form_status','lode_type','lode_money','lode_numstr','lode_amount');}
 self.onDefiGameLodeJoinRaw=function(){defiGameLodeJoinRaw('form_status','lode_type','lode_money','lode_numstr','lode_amount');}
 self.goDefiGemtPayLoad=function(){defiGameLodeLoad('form_status','pay_money','pro_amt');}
 self.goDefiGemtPayTxhRef=function(){checkTxHash('pay_ref',_warnDatHash);}
 self.goDefiGemtPayAddrTo=function(){checkAddress('pay_to',_warnDatAddr);}
 self.goDefiGemtPayAmount=function(){checkPositiveNum('pay_amount',_warnPrgInit);}
 self.onDefiGemtPayWithRef=function(){defiGemtPayWithRef('form_status','pay_ref','pay_to','pay_amount','pay_note','pay_money');}
 self.onDefiGemtPayWithRefRaw=function(){defiGemtPayWithRefRaw('form_status','pay_ref','pay_to','pay_amount','pay_note','pay_money');}
 self.onDefiGemtPayLoad=function(){self.goDefiGemtPayLoad();}
 //TokenBuyingDefinitions
 self.onDefiProgJoin=function(){defiProgJoin('form_status','pro_buy_gemt');}
 self.onDefiProgReId=function(){defiProgRead('form_status','pro_buy_id','pro_apr','pro_age','pro_sum','pro_own');}
 self.goDefiProgInit=function(){checkPositiveNum('pro_buy_gemt',_warnPrgInit);}
 self.goDefiProgInst=self.goDefiProgInit;
 self.goDefiProgReId=self.onDefiProgReId;
 //TokenSellingDefinitions
 self.onDefiProsJoin=function(){defiProgJoin('form_status','pro_sell_gemt');}
 self.onDefiProsReId=function(){defiProgRead('form_status','pro_sell_id','pro_apr','pro_age','pro_sum','pro_own');}
 self.goDefiProsGemt=function(){checkPositiveNum('pro_sell_gemt',_warnPrgInit);db('pro_sell_conv',n2s(gv('pro_sell_gemt').t2e(gv('pro_apr')),6))}
 self.goDefiProsConv=function(){checkPositiveNum('pro_sell_conv',_warnPrgInit);db('pro_sell_gemt',n2s(gv('pro_sell_conv').e2t(gv('pro_apr')),6))}
 self.goDefiProsReId=self.onDefiProsReId;
 //TokenOfferingDefinitions
 self.onDefiOfferOpen=function(){defiProgOpen('form_status','pro_offer_id','pro_offer_apr','pro_offer_age','pro_offer_gemt');}
 self.onDefiOfferRead=function(){defiProgRead('form_status','pro_offer_id','pro_offer_apr','pro_offer_age','pro_offer_gemt');}
 self.onDefiOfferStop=function(){confirmPositiveInt('pro_offer_id',_warnPrgStop);defiProgStop('form_status','pro_offer_id')}
 self.goDefiOfferIdno=function(){checkPositiveInt('pro_offer_id',_warnPrgIdno);self.onDefiOfferRead()}
 self.goDefiOfferRate=function(){checkPositiveNum('pro_offer_apr',_warnPrgPrix);db('pro_offer_rev',n2s(1/s2n(gv('pro_offer_apr')),6))}
 self.goDefiOfferRvrt=function(){checkPositiveNum('pro_offer_rev',_warnPrgPrvt);db('pro_offer_apr',n2s(1/s2n(gv('pro_offer_rev')),6))}
 self.goDefiOfferSAge=function(){checkPositiveOr0('pro_offer_age',_warnPrgSAge);}
 self.goDefiOfferInit=function(){checkPositiveNum('pro_offer_gemt',_warnPrgInit);}
 //TokenOrderingDefinitions
 self.onDefiOrderOpen=function(){defiProgOpen('form_status','pro_order_id','pro_order_apr','pro_order_age','pro_order_gemt');}
 self.onDefiOrderRecv=function(){defiProgRead('form_status','pro_order_id','pro_order_apr','pro_order_age','pro_order_conv');}
 self.onDefiOrderStop=function(){confirmPositiveInt('pro_order_id',_warnPrgStop);defiProgStop('form_status','pro_order_id')}
 self.goDefiOrderIdno=function(){checkPositiveInt('pro_order_id',_warnPrgIdno);self.onDefiOrderRecv()}
 self.goDefiOrderRate=function(){checkPositiveNum('pro_order_apr',_warnPrgPrix);db('pro_order_rev',n2s(1/s2n(gv('pro_order_apr')),6))}
 self.goDefiOrderRvrt=function(){checkPositiveNum('pro_order_rev',_warnPrgPrvt);db('pro_order_apr',n2s(1/s2n(gv('pro_order_rev')),6))}
 self.goDefiOrderSAge=function(){checkPositiveOr0('pro_order_age',_warnPrgSAge);}
 self.goDefiOrderGemt=function(){checkPositiveNum('pro_order_gemt',_warnPrgInit);db('pro_order_conv',n2s(gv('pro_order_gemt').t2e(gv('pro_order_apr')),6))}
 self.goDefiOrderConv=function(){checkPositiveNum('pro_order_conv',_warnPrgInit);db('pro_order_gemt',n2s(gv('pro_order_conv').e2t(gv('pro_order_apr')),6))}
 //Mobile:Buy/Sell/Offer/Order
 self.onDefiProgJoinRaw=function(){defiProgJoinRaw('form_status','pro_buy_gemt');}//BUYTOKEN=false
 self.onDefiProsJoinRaw=function(){defiProgJoinRaw('form_status','pro_sell_gemt');}//BUYTOKEN=true
 self.onDefiOfferOpenRaw=function(){defiProgOpenRaw('form_status','pro_offer_id','pro_offer_apr','pro_offer_age','pro_offer_gemt');}//BUYTOKEN=false
 self.onDefiOfferStopRaw=function(){confirmPositiveInt('pro_offer_id',_warnPrgStop);defiProgStopRaw('form_status','pro_offer_id')}//BUYTOKEN=false
 self.onDefiOrderOpenRaw=function(){defiProgOpenRaw('form_status','pro_order_id','pro_order_apr','pro_order_age','pro_order_gemt');}//BUYTOKEN=true
 self.onDefiOrderStopRaw=function(){confirmPositiveInt('pro_order_id',_warnPrgStop);defiProgStopRaw('form_status','pro_order_id')}//BUYTOKEN=true
};//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[3]
const wasmRust=async(wasm,imports,cbf,r,b,o)=>{r=await(fetch(wasm));b=await(r.arrayBuffer());o=await(WebAssembly.instantiate(b,imports));/***WebAssembly.Module***/;window.wasmInstance=o.instance;cbf(null,o.instance);};
const wasmCAsc=async(wasm,imports,cbf,r,b,o)=>{r=await(fetch(wasm));b=await(r.arrayBuffer());b=(new Uint8Array(b));o=(new WebAssembly.Module(b));o=(new WebAssembly.Instance(o,imports));window.wasmInstance=o;cbf(null,o);};
const wasmCbin=function(wasm,imports,cbf){loadUint8(wasm,function(err,result){if(err)return(cbf(err,null));cbf(null,(new WebAssembly.Instance((new WebAssembly.Module(result)),imports)));});};
////////////////////////////////////////////////////////////[6]
const loadUint8=function(path,cbf){fetch(path).then(response=>response.arrayBuffer()).then(buffer=>{return(cbf(null,(new Uint8Array(buffer))));}).catch(err=>{cbf(err,null)});};
const loadWCode=function(code,imports={env:{}}){window.wasmInstance=(new WebAssembly.Instance((new WebAssembly.Module(wasmCode)),imports));return(window.wasmInstance);};
const loadILB64=function(b64,s,a,i){s=window.atob(b64);a=(new Uint8Array(s.length));for(i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return(a);};
const wasmILB64=function(b64,memory){if(!memory)memory=wasmCache();window.wasmInstance=(new WebAssembly.Instance((new WebAssembly.Module(loadILB64(b64))),{env:{memory}}));return(window.wasmInstance);};
const wasmCache=function(ini=256,max=256){window.wasmMemory=(new WebAssembly.Memory({initial:ini,maximum:max}));return(window.wasmMemory);};
const getBuffer=function(){window.wasmBuffer=(new Uint8Array(window.wasmInstance.exports.memory.buffer));return(window.wasmBuffer);};
////////////////////////////////////////////////////////////[9]
const setCbinWasmString=function(str,pos=0,ins,b,i){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer));for(i=pos;i<pos+str.length;i++)b[i]=str.charCodeAt(i);b[i]='\0';return(pos);};
const getCbinWasmString=function(pointer,ins,b,i,s){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer));s='';for(i=pointer;b[i];i++)s+=String.fromCharCode(b[i]);return(s);};
const setCWasmNewStr=function(str,exports,e,b,l,m,p,i){if(!exports)exports=window.wasmInstance.exports;e=(new TextEncoder('UTF-8'));b=e.encode(str);l=b.length;p=exports.strAlloc(l+1);m=(new Uint8Array(exports.memory.buffer));for(i=0;i<l;i++){m[p+i]=b[i];}m[p+l]=0;/**NULL**/;return(p);};
const getCWasmMemStr=function(ptr,exports,o,b,c,d,m,u){if(!exports)exports=window.wasmInstance.exports;o=ptr;c=function*(){m=(new Uint8Array(exports.memory.buffer));while(m[ptr]!==0){if(m[ptr]===undefined){throw(Error('MEMORY'))};yield(m[ptr]);ptr++;}};b=(new Uint8Array(c()));d=(new TextDecoder('UTF-8'));u=d.decode(b);exports.strFree();return(u);};
const setWasmNewStr=function(str,exports,e,b,l,m,p,i){/**RUST**/;if(!exports)exports=window.wasmInstance.exports;e=(new TextEncoder('UTF-8'));b=e.encode(str);l=b.length;p=exports.alloc(l+1);m=(new Uint8Array(exports.memory.buffer));for(i=0;i<l;i++){m[p+i]=b[i];}m[p+l]=0;/**NULL**/;return(p);};
const getWasmMemStr=function(ptr,exports,o,b,c,d,m,u){/**RUST**/;if(!exports)exports=window.wasmInstance.exports;o=ptr;c=function*(){m=(new Uint8Array(exports.memory.buffer));while(m[ptr]!==0){if(m[ptr]===undefined){throw(Error('MEMORY'))};yield(m[ptr]);ptr++;}};b=(new Uint8Array(c()));d=(new TextDecoder('UTF-8'));u=d.decode(b);exports.dealloc_str(o);return(u);};
const setWasmString=function(str,pointer=0,ins,b,i){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer));for(i=pointer;i<pointer+str.length;i++)b[i]=str.charCodeAt(i);b[i]='\0';return(str.length);};
const getWasmString=function(pointer,len,ins,b,i,s){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer,pointer,len));s='';for(i=0;i<len;i++)s+=String.fromCharCode(b[i]);return(s);};
const getWasmStrEnd=function(pointer,ins,b,i,s){/**/if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer,pointer));s='';for(i=0;b[i];i++)s+=String.fromCharCode(b[i]);return(s);};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const faceResetList=function(){rstart()};
const faceListNext=function(...args){return(defiProgList(...args))};
const faceListItem=function(ask=true,...args){if(ask){faceGoOffer()}else{faceGoOrder()}return(defiProgList(...args))};
const faceGoOffer=function(form='post'){BUYTOKEN=false;DATAFORM=form;rstart()};//ask
const faceGoOrder=function(form='post'){BUYTOKEN=true;DATAFORM=form;rstart()};//bid
////////////////////////////////////////////////////////////
const defiProgList=function(status,divId,divList,page=1,NOS=25,i){
showLoad(status);i=gaddr(divId);if(!i)i=ZEROADDR;if(!avalid(i))return(dw(status,_errInput));if(window.searchitem!=i){window.searchitem=i;window.resultpage=undefined};if(window.resultpage===undefined){window.resultpage=page>1?(page>>0)-1:0}else{window.resultpage+=1};db(divList,EMPTY);
ercCall(xutengFemt,MPROGNOS,[i,DATAFORM,BUYTOKEN?'E':'T',NOS*window.resultpage],status,null,function(err,res){checkResult(err,res,status);console.warn('RESULTSET_DATA',res);window.resultsize=Number(res.size);window.resultnos=res.nos;for(let j=0;j<NOS;j++){if(window.resultnos[j]==0){db(status,_errFinds);break;}
ercCall(xutengFemt,MPROGDAT,[window.resultnos[j]],status,null,function(err,res){checkResult(err,res,status);console.warn('ITEM',window.resultnos[j],res);if(res.value!=0&&(res.time==0||res.time>=nowDate())){da(divList,htmlItem(window.resultnos[j],res))}});}});};
////////////////////////////////////////////////////////////
const htmlItem=function(id,item,popup,dcls,bcls){if(!dcls)dcls=BUYTOKEN?'gb':'ob';if(!bcls)bcls=BUYTOKEN?'sell':'buy';if(!popup)popup=BUYTOKEN?'./gemtsell.html':'./gemtbuy.html';popup+='#oid='+id;return(`<div\tclass="${dcls}">#${id}<br/>${dispRate(item.ppe)}<br/>${dispAmnt(item.value)}<div\tclass="${bcls}"\tonclick="window.open('${popup}','_blank')"></div></div>`);};
const htmlWarn=function(text){return(`<span\tclass="textwarn">${text}</span>`);};
const dispAmnt=function(data,dec=5,lang='en'){return(`${upCoin(labelSum(lang))}\t${htmlWarn(w2s(data,dec))}`);};
const dispRate=function(data,dec=5,lang='en'){return(`${upCoin(labelAPR(lang))}\t${htmlWarn(w2s(data,dec*2))}`);};
const dispTime=function(data,pst=0,lang='en'){return(`${upCoin(labelAge(lang))}\t${htmlWarn(showItemAge(data,pst))}`);};
const dispUser=function(data,xxx=0,lang='en'){return(`${upCoin(labelOwn(lang))}\t${htmlWarn(showAddrUrl(data,xxx))}`);};
const labelSum=function(lang='en'){return(LABELS[lang][`_label_${BUYTOKEN?'orders':'offers'}_DefiProgSum`])};
const labelAPR=function(lang='en'){return(LABELS[lang][`_label_${BUYTOKEN?'orders':'offers'}_DefiProgAPR`])};
const labelAge=function(lang='en'){return(LABELS[lang][`_label_${BUYTOKEN?'orders':'offers'}_DefiProgAge`])};
const labelOwn=function(lang='en'){return(LABELS[lang][`_label_${BUYTOKEN?'orders':'offers'}_DefiProgOwn`])};
const upCoin=function(s){return(s.replace(CAPCLASSCOIN,COIN))};
const rstart=function(){window.resultpage=undefined};
////////////////////////////////////////////////////////////
const defiProgJoinRaw=function(status,divAmount,token=0,eth=0,tlim=ZERO,elim=ZERO){return(defiProgJoin(status,divAmount,token,eth,tlim,elim,ercsend))};
const defiProgStopRaw=function(status,divId,half=true){return(defiProgStop(status,divId,half,ercsend))};
const defiProgOpenRaw=function(status,divId,divRate,divAge,divAmount,token=0,eth=0){return(defiProgOpen(status,divId,divRate,divAge,divAmount,token,eth,ercsend))};
////////////////////////////////////////////////////////////
const defiProgJoin=function(status,divAmount,token=0,eth=0,tlim=ZERO,elim=ZERO,execute=ercSend,a){
showLoad(status);a=s2n(gv(divAmount));if(!positiveNum(a)||!window.trader||!window.trader.ppe)return(dw(status,_errInput));if(!window.trader.ppe.gt(0)||!window.trader.value.gt(0))return(dw(status,_errValue));if(window.trader.buytoken!=BUYTOKEN)return(dw(status,_errItNon));if(window.trader.time>0&&window.trader.time<nowDate())return(dw(status,_errInvst));if(BUYTOKEN){token=a;tlim=fromWei(window.trader.value.w2p(window.trader.ppe));elim=fromWei(window.trader.value)}else{eth=a/fromWei(window.trader.ppe);tlim=fromWei(window.trader.value);elim=fromWei(window.trader.value.p2w(window.trader.ppe))};console.warn('INPUT_DATA',{token,eth,tlim,elim});if(token>tlim||eth>elim)return(dw(status,_errValim));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_BALANCE',w2s(res,9));if(fromWei(res)<token)return(dw(status,_errDepos));
ercCoin(sender,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_COIN_BALANCE_'+COIN,w2s(res,9));if(fromWei(res)<eth)return(dw(status,_errCoins));/*CoinOnly*/
execute(xutengFemt,MPROGBUY,[window.trader.refno,s2w(token)],eth,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADERS_TRANSACTION_RECEIPT',res);});});});};
////////////////////////////////////////////////////////////
const defiProgStop=function(status,divId,half=true,execute=ercSend,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGDAT,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADING_DATA',res);if(res.buytoken!=BUYTOKEN)return(dw(status,_errItNon));if(res.maker==ZEROADDR)return(dw(status,_errItNot));if(!twoHexEqual(res.maker,sender))return(dw(status,_errOwner));if(res.time>=nowDate())return(dw(status,_errXTime));if(res.value===ZERO)return(dw(status,_errValue));
execute(xutengFemt,MPROGCLR,[i],0,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADERS_CANCELLATION_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgRead=function(status,divId,divRate,divAge,divAmount,divOwner,dec=5,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));iniProgData(i);
ercCall(xutengFemt,MPROGDAT,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADING_DATA',res);if(res.buytoken!=BUYTOKEN)return(dw(status,_errItNon));getProgData(res);dz(divRate,w2s(res.ppe,dec*2));db(divAmount,w2s(res.value,dec));db(divOwner,showAddrUrl(res.maker));db(divAge,showItemAge(res.time,false));});};
////////////////////////////////////////////////////////////
const defiProgOpen=function(status,divId,divRate,divAge,divAmount,token=0,eth=0,execute=ercSend,i,r,t,a){
showLoad(status);i=Number(gv(divId));r=s2n(gv(divRate));t=s2n(gv(divAge));a=s2n(gv(divAmount));t=t<=0?0:daysToStamp(t);if(!positiveInt(i)||!positiveNum(r)||!positiveNum(a))return(dw(status,_errInput));if(BUYTOKEN){eth=a/r}else{token=a};
ercCall(xutengFemt,MPROGDAT,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADING_DATA',res);if(res.maker!=ZEROADDR)return(dw(status,_errIdNot));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_BALANCE',w2s(res,9));if(fromWei(res)<token)return(dw(status,_errDepos));
ercCoin(sender,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADER_COIN_BALANCE_'+COIN,w2s(res,9));if(fromWei(res)<eth)return(dw(status,_errCoins));/*CoinOnly*/
execute(xutengFemt,MPROPOST,[i,s2w(token),s2w(r),t],eth,status,null,function(err,res){checkResult(err,res,status);console.warn('TRADERS_CREATION_RECEIPT',res);});});});});};
////////////////////////////////////////////////////////////
const iniProgData=function(uint){window.trader={};window.trader.refno=uint;};
const getProgData=function(data){window.trader.ppe=data.ppe;window.trader.time=data.time;window.trader.value=data.value;window.trader.maker=data.maker;window.trader.buytoken=data.buytoken;};
////////////////////////////////////////////////////////////
const defiGemtPayWithRefRaw=function(status,divRef,divTo,divAmount,divNote,divMoney){defiGemtPayWithRef(status,divRef,divTo,divAmount,divNote,divMoney,hook)};
const defiGemtPayWithRef=function(status,divRef,divTo,divAmount,divNote,divMoney,fn=Exec,a,t){showLoad(status);a=s2n(gv(divAmount));t=gv(divMoney).as('coin')?false:true;(t?Tokens:Ethers)(sender,function(r){if(String(r).GE(a))return(gemtPayWithRef(gv(divRef),gv(divTo),a,gv(divNote),t,fn,function(err,res){checkResult(err,res,status,true);console.warn('PAY_RECEIPT',res)}));dw(status,_errInput)})};
////////////////////////////////////////////////////////////
const defiGameLodeJoinRaw=function(status,divGame,divMoney,divNumStr,divAmount){defiGameLodeJoin(status,divGame,divMoney,divNumStr,divAmount,hook)};
const defiGameLodeJoin=function(status,divGame,divMoney,divNumStr,divAmount,fn=Exec,n,a){showLoad(status);n=gv(divNumStr);a=gv(divAmount);if(!n.lode()||!positiveNum(a))return(dw(status,_errInput));playLodeHanoi(n,a,gv(divGame),gv(divMoney),fn,function(err,res){checkResult(err,res,status,true);console.warn('PLAY_RECEIPT',res)})};
const defiGameLodeLoad=function(status,divMoney,spanAmount){showLoad(status);(gv(divMoney).as('coin')?Ethers:Tokens)(sender,function(r){showOkay(status);db(spanAmount,r)})};
////////////////////////////////////////////////////////////
const playNumberGameGEMT9=function(gamehash,number,amount,to,cbf=console.log,fn=Exec,start=startGemt){start();fn('pay',0,cbf,gamehash,to,s2w(amount),setInput(number))};
const playNumberGameInBNB=function(gamehash,number,amount,to,cbf=console.log,fn=Exec,start=startGemt){start();fn('pay',amount,cbf,gamehash,to,0,setInput(number))};
////////////////////////////////////////////////////////////
const defiProgramProgGainRaw=function(status,divId){return(defiProgramProgGain(status,divId,ercsend))};
const defiProgramProgJoinRaw=function(status,divAmount){return(defiProgramProgJoin(status,divAmount,ercsend))};
const defiProgramProgStopRaw=function(status,divId,half=true){return(defiProgramProgStop(status,divId,half,ercsend))};
const defiProgramProgOpenRaw=function(status,divId,divRate,divAmount,eth=0){return(defiProgramProgOpen(status,divId,divRate,divAmount,eth,ercsend))};
////////////////////////////////////////////////////////////
const defiProgramProgGain=function(status,divId,execute=ercSend,i){
showLoad(status);i=Number(gv(divId));if(!window.investor||window.investor.refno!=i||!window.investor.amount)return(dw(status,_errInput));if(window.investor.amount.le(0)||window.investor.amount.ge(window.investor.value))return(dw(status,_errClear));
execute(xutengFemt,MPROGWDR,[i],0,status,null,function(err,res){checkResult(err,res,status);console.warn('WITHDRAWAL_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiProgramProgJoin=function(status,divAmount,execute=ercSend,a){
showLoad(status);a=s2n(gv(divAmount));if(!positiveNum(a)||!window.investor||!window.investor.value)return(dw(status,_errInput));if(window.investor.start!=0||window.investor.value.le(0))return(dw(status,_errInvst));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('INVESTOR_BALANCE',w2s(res,9));if(fromWei(res)<a)return(dw(status,_errDepos));
execute(xutengFemt,MPROGPAY,[window.investor.refno,s2w(a)],0,status,null,function(err,res){checkResult(err,res,status);console.warn('INVESTMENT_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgramProgRead=function(status,divId,divRate,divAmount,divAge,divOwner,divInvest,divInAge,dec=5,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));window.investor={};window.investor.refno=i;
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);db(divRate,gemtPetriToApr(res.petri));db(divAmount,w2s(res.value,dec));db(divAge,showItemAge(res.open));db(divOwner,showAddrUrl(res.maker));window.investor.value=res.value;console.warn('PROGRAM_DATA',res);
ercCall(xutengFemt,MPROGINV,[i,sender],status,null,function(err,res){checkResult(err,res,status);db(divInvest,w2s(res.amount));db(divInAge,showItemAge(res.start));window.investor.amount=res.amount;window.investor.start=res.start;console.warn('INVEST_DATA',res);});});};
////////////////////////////////////////////////////////////
const defiProgramProgStop=function(status,divId,half=true,execute=ercSend,i){
showLoad(status);i=Number(gv(divId));if(!positiveInt(i))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_DATA',res);if(res.maker==ZEROADDR)return(dw(status,_errItNot));if(!twoHexEqual(res.maker,sender))return(dw(status,_errOwner));if(res.value===ZERO)return(dw(status,_errValue));
execute(xutengFemt,MPROGSTP,[i,half],0,status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_STOP_RECEIPT',res);});});};
////////////////////////////////////////////////////////////
const defiProgramProgOpen=function(status,divId,divRate,divAmount,eth=0,execute=ercSend,i,r,a){
showLoad(status);i=Number(gv(divId));r=s2n(gv(divRate));a=s2n(gv(divAmount));if(!positiveInt(i)||!positiveNum(a)||!numsInRange(r,PROGMINRATE,PROGMAXRATE))return(dw(status,_errInput));
ercCall(xutengFemt,MPROGGET,[i],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_DATA',res);if(res.maker!=ZEROADDR)return(dw(status,_errIdNot));
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAMER_BALANCE',w2s(res,9));if(fromWei(res)<a)return(dw(status,_errDepos));
execute(xutengFemt,MPROHYIP,[i,gemtAprToPetri(r),s2w(a)],eth,status,null,function(err,res){checkResult(err,res,status);console.warn('PROGRAM_CREATION_RECEIPT',res);});});});};
////////////////////////////////////////////////////////////
const gamePctToPetri=function(pct){return(Math.round(10**9*pct/100))};
const gamePetriToPct=function(upb){return(100*upb/10**9)};
const gameUnitToPetri=function(unt){return(gamePctToPetri(unt)*100)};
const gamePetriToUnit=function(upb){return(gamePetriToPct(upb)/100)};
////////////////////////////////////////////////////////////
const MineLogTopic='0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const tokenAllowed=function(token){return(MONEYS[token]?true:false)};
const selectTokens=function(token){if(tokenAllowed(token)){TOKEN=token;MONEYS[token]();capApply()}};
const rpcSelTokens=function(token){if(tokenAllowed(token)){TOKEN=token;RPCMONEYS[token]();capApply()}};
const getLogApiUrl=function(block,blocks=1000,topic=MineLogTopic,sc=xutengFemt){return(PROXIES[0].getContractPastLogs(sc._address,block-blocks,block,topic))};
const getMinApiUrl=function(block,blocks=1000,topic=MineLogTopic,sc=xutengFemt){return(PROXIES[0].getContractLastLogs(sc._address,block-blocks,block,topic,h2t(ZEROADDR)))};
const getAdvApiUrl=function(block,blocks=1000,topic='',afrom='',ato='',sc=xutengFemt){return(PROXIES[0].getContractLastLogs(sc._address,block-blocks,block,topic,afrom,ato))};
const getLastMined=function(cbf=console.log,LP='lastProof',RS='rewardStamp'){try{if(Func(LP))ercFuncCall(LP).then(r=>{return(cbf(null,r))});else{if(Func(RS))ercFuncCall(RS).then(r=>{return(cbf(null,r))});else{nsBlock().then(r=>{getJSON(getMinApiUrl(r),function(r){r=r.result;return(cbf(null,fromHex(r[r.length-1].timeStamp)))})})}}}catch(e){cbf(ERROR,null)}};
const getTransLogs=function(cbf=console.log,blocks=1000){nsBlock().then(block=>{getJSON(getLogApiUrl(block,blocks),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getTSendLogs=function(addr,blocks=1000,cbf=console.log,sc=xutengFemt){nsBlock().then(block=>{getJSON(getAdvApiUrl(block,blocks,'',h2t(addr),'',sc),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getTRecvLogs=function(addr,blocks=1000,cbf=console.log,sc=xutengFemt){nsBlock().then(block=>{getJSON(getAdvApiUrl(block,blocks,'','',h2t(addr),sc),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getTxTopLogs=function(topic,afrom,ato,blocks=1000,cbf=console.log,sc=xutengFemt){nsBlock().then(block=>{getJSON(getAdvApiUrl(block,blocks,h2t(topic),h2t(afrom),h2t(ato),sc),function(data){if(data.status!='1')return(cbf(UNKNOWN,null));cbf(null,data.result)})})};
const getPastMines=function(cbf=console.log,blocks=1000){return(getTransLogs(cbf,blocks))};
////////////////////////////////////////////////////////////
const defiDigNonce=function(divNonce,pops=15,kc=kek,pf='basicRate'){showLoad(divNonce);nonce(pops,kc,pf,function(err,res){checkResult(err,res,divNonce);db(divNonce,res)})};
const defiDigMine=function(divWait,status,pops=15,wmLoad=window.menu.onDefiDigLoad,t){showLoad(status);t=s2n(gv(divWait));setTimeout(function(){sap(status,wmLoad,pops)},long(positiveNum(t)?t:0))};
const defiDigSend=function(divInNonce,status,pops=15,wmLoad=window.menu.onDefiDigLoad,t){showLoad(status);t=s2n(gv(divInNonce));if(!positiveInt(t)){alert('START AUTO MINE');return(defiDigMine(null,status,pops,wmLoad))};ercRaws(xutengFemt,MPROGRAM,[t],0,status,null,console.warn,true).then(r=>{wmLoad();db(status,DONE)}).catch(e=>{checkResult(e,null,status)})};
////////////////////////////////////////////////////////////
const defiDigLoad=function(divToken,divAmt,divSum,divMine,divRate,dec=5,k){
showLoad(divMine);k=gv(divToken);if(!tokenAllowed(k))return(db(divAmt,_errInput));selectTokens(k);
ercCall(xutengFemt,MBALANCE,[sender],divAmt,null,function(err,res){checkResult(err,res,divAmt);db(divAmt,w2s(res,dec));});
ercCall(xutengFemt,MTSUPPLY,[],divSum,null,function(err,res){checkResult(err,res,divSum);db(divSum,w2s(res,dec));});
ercCall(xutengFemt,'basicRate',[],divRate,null,function(err,res){checkResult(err,res,divRate);db(divRate,res);});
getLastMined(function(err,res){checkResult(err,res,divMine);db(divMine,mindif(res));});};
////////////////////////////////////////////////////////////
const defiDigJoin=function(divKey,divPwd,divAddr,k,p){showLoad(divAddr);k=gv(divKey);p=gv(divPwd);
if(k.is3ks()){return(v3ksDecode(k,p,true,function(err,res){checkResult(err,res,divAddr);db(divAddr,res.address)}))};
if(k.isBip()){return(bipeDecode(k,p,true,function(err,res){checkResult(err,res,divAddr);db(divAddr,res.address)}))};
if(k.isKey()){arouseKey(k);return(db(divAddr,sender))};db(divAddr,ERROR)};
////////////////////////////////////////////////////////////
const defiHackProgJoin=function(status,divToken,divId,wmLoad=window.menu.onDefiHackProgLoad,execute=ercSend,k,i){
showLoad(status);k=gv(divToken);i=s2n(gv(divId));if(!tokenAllowed(k)||!positiveNum(i))return(dw(status,_errInput));
execute(xutengFemt,MPROGRAM,[i],0,status,null,function(err,res){checkResult(err,res,status);wmLoad();console.warn('TRANSACTION_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiHackProgJoinMine=function(status,divToken,divId,wmLoad=window.menu.onDefiHackProgLoad,execute=ercSend,k,i){
showLoad(status);k=gv(divToken);i=s2n(gv(divId));if(!tokenAllowed(k))return(dw(status,_errInput));if(!positiveNum(i))return(Dig(function(tokens){if(!s2n(tokens)){showFail(status)}else{wmLoad()}},true,20,kek,function(){showError(status)}));
execute(xutengFemt,MPROGRAM,[i],0,status,null,function(err,res){checkResult(err,res,status);wmLoad();console.warn('TRANSACTION_RECEIPT',res);});};
////////////////////////////////////////////////////////////
const defiHackProgLoad=function(status,divToken,outBalance,outSupply,dec=5,k){
showLoad(status);k=gv(divToken);if(!tokenAllowed(k))return(dw(status,_errInput));selectTokens(k);
ercCall(xutengFemt,MBALANCE,[sender],status,null,function(err,res){checkResult(err,res,status);db(outBalance,w2s(res,dec));});
ercCall(xutengFemt,MTSUPPLY,[],status,null,function(err,res){checkResult(err,res,status);db(outSupply,w2s(res,dec));});};
////////////////////////////////////////////////////////////[1]
const PayTokens=function(tid=GEMT,tos=[],tokens=[],ref='',nid='binance',doc='pmt',cbf=console.log,s=tokens.sum()){setTToken(tid,nid);ercFuncCall('balanceOf',xutengFemt,sender)
.then(r=>{if(r.lt(s2w(s)))return(cbf('BALANCE NOT ENOUGH'));return(ercFuncCall('allowance',xutengFemt,sender,setBroker(true,nid)))})
.then(r=>{if(r.lt(s2w(s)))return(cbf('ALLOWANCE NOT ENOUGH'));exec('transfer',0,cbf,tid[nid].addr,tos,setWeiArr(tokens),setInput({[doc]:ref}))}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const PayEthers=function(tos=[],ethers=[],ref='',nid='binance',doc='pmt',cbf=console.log,s=ethers.sum()){setBroker(false,nid);web3.eth.getBalance(sender).then(r=>{if(r.lt(s2w(s)))return(cbf('COIN BALANCE NOT ENOUGH'));exec('transfer',s,cbf,tos,setWeiArr(ethers),setInput({[doc]:ref}))})};
const setBroker=function(token=true,nid='binance',abi=token?ABIBROKER:ABIBROKERE,broker=token?BROKER[nid]:BROKERE[nid]){xutengFemt=_Contract(abi,broker.addr);return(broker.addr)};
const setTToken=function(tid=GEMT,nid='binance'){xutengFemt=_Contract(ABIERC20,tid[nid].addr);return(tid[nid].addr)};
const setWeiArr=function(vals=[]){Object.keys(vals).forEach(i=>{vals[i]=s2w(vals[i])});return(vals)};
////////////////////////////////////////////////////////////[1]
const marketEtherBuyRaw=function(refno,tokens,cbf=console.log){return(marketEtherBuy(refno,tokens,cbf,hook))};
const marketEtherBuy=function(refno,tokens,cbf=console.log,func=exec,b=0,v=0,p=0,a=0,x=false){tokens=s2w(tokens);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{[b,v,p,a,x]=getEtherBuy(r,w2s(tokens));if(r.maker==ZEROADDR||v.le(0)||p.le(0))return(cbf('INVALID ITEM'));if(!x)return(cbf('INVALID REQUEST'));return(ercFuncCall('balanceOf',xutengFemt,sender))})
.then(r=>{if(r.lt(tokens))return(cbf('INVALID BALANCE'));func('acquire',0,cbf,refno,tokens)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketTokenBuyRaw=function(refno,coins,cbf=console.log){return(marketTokenBuy(refno,coins,cbf,hook))};
const marketTokenBuy=function(refno,coins,cbf=console.log,func=exec,b=0,v=0,p=0,a=0,x=false){coins=s2w(coins);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{[b,v,p,a,x]=getTokenBuy(r,w2s(coins));if(r.maker==ZEROADDR||v.le(0)||p.le(0))return(cbf('INVALID ITEM'));if(!x)return(cbf('INVALID REQUEST'));return(web3.eth.getBalance(sender))})
.then(r=>{if(r.lt(coins))return(cbf('INVALID BALANCE'));func('acquire',w2s(coins),cbf,refno,0)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketEtherSellRaw=function(refno,coins,perCoin,cbf=console.log){return(marketEtherSell(refno,coins,perCoin,cbf,window.remtEnabled,putt))};
const marketEtherSell=function(refno,coins,perCoin,cbf=console.log,remt=window.remtEnabled,func=post){coins=s2w(coins);perCoin=s2w(perCoin);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{if(r.maker!=ZEROADDR)return(cbf('INVALID ITEM NUMBER'));return(web3.eth.getBalance(sender))})
.then(r=>{if(r.lt(coins))return(cbf('INVALID AMOUNT'));return(ercFuncCall('totalSupply',xutengFemt))})
.then(r=>{if(r.le(perCoin)||perCoin.le(0))return(cbf('INVALID PRICE'));func(w2s(coins),refno,0,perCoin,remt)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketTokenSellRaw=function(refno,tokens,perCoin,cbf=console.log){return(marketTokenSell(refno,tokens,perCoin,cbf,window.remtEnabled,putt))};
const marketTokenSell=function(refno,tokens,perCoin,cbf=console.log,remt=window.remtEnabled,func=post){tokens=s2w(tokens);perCoin=s2w(perCoin);ercFuncCall('markets',xutengFemt,refno)
.then(r=>{if(r.maker!=ZEROADDR)return(cbf('INVALID ITEM NUMBER'));return(ercFuncCall('balanceOf',xutengFemt,sender))})
.then(r=>{if(r.lt(tokens))return(cbf('INVALID VOLUME'));return(ercFuncCall('totalSupply',xutengFemt))})
.then(r=>{if(r.le(perCoin)||perCoin.le(0))return(cbf('INVALID PRICE'));func(0,refno,tokens,perCoin,remt)}).catch(e=>cbf(e.toString()))};
////////////////////////////////////////////////////////////[1]
const marketCheck=function(refno,cbf=console.log){ercFuncCall('markets',xutengFemt,refno).then(r=>{if(r.maker==ZEROADDR)return(cbf('ITEM NOT FOUND'));cbf('ITEM ALREADY EXISTS')})};
const GetTokenBuy=function(refno,coins,cbf=console.log,b,v,p,a,x){ercFuncCall('markets',xutengFemt,refno).then(r=>{[b,v,p,a,x]=getTokenBuy(r,coins);if(b)return(cbf('ITEM NOT MATCHED'));cbf('ABOUT TO BUY',w2s(a),'TOKENS');cbf(x?'AVAILABLE':'NOT AVAILABLE')}).catch(e=>cbf(e.toString()))};
const GetEtherBuy=function(refno,tokens,cbf=console.log,b,v,p,a,x){ercFuncCall('markets',xutengFemt,refno).then(r=>{[b,v,p,a,x]=getEtherBuy(r,tokens);if(!b)return(cbf('ITEM NOT MATCHED'));cbf('ABOUT TO GET',w2s(a),'COINS');cbf(x?'AVAILABLE':'NOT AVAILABLE')}).catch(e=>cbf(e.toString()))};
const getTokenBuy=function(data,coins,a=s2w(coins).mul(data.ppe).div(PPT)){return([data.buytoken,data.value,data.ppe,a,!data.buytoken&&a.le(data.value)&&a.gt(0)])};
const getEtherBuy=function(data,tokens,a=s2w(tokens).mul(PPT).div(data.ppe)){return([data.buytoken,data.value,data.ppe,a,data.buytoken&&a.le(data.value)&&a.gt(0)])};
////////////////////////////////////////////////////////////[1]
const Func=function(func,sc=xutengFemt){return(sc.methods.hasOwnProperty(func))};
const rset=function(func,data,cbf,...args){cbf(`[${func}]`,...args,NEWLINE+NEWLINE,data)};
const call=function(func,...args){ercFuncCall(func,xutengFemt,...args).then(r=>rset(func,r,console.log,...args))};
const pick=function(func,...args){ercFuncCall(func,xutengFemt,...args).then(r=>rset(func,w2s(r),console.log,...args))};
const make=function(func,cbf,...args){exec(func,0,cbf,...args)};
const goto=function(contract){xutengFemt=contract;contractAddress=contract._address};
const toto=function(to,tokens,cfm=true,cbf=console.log){ercRaws(xutengFemt,'transfer',[to,s2w(tokens)],0,null,null,cbf,cfm).then(cbf)};
const coto=function(to,ethers,input={},cbf=console.log){return(out(input,to,ethers,cbf))};
const hook=function(func,eth,cbf,...args){ercFuncRaws(func,xutengFemt,eth,null,...args).then(r=>cbf(null,r)).catch(e=>cbf(e.toString(),null))};
const Exec=function(func,eth,cbf,...args){ercFuncSend(func,xutengFemt,eth,null,...args).then(r=>cbf(null,r)).catch(e=>cbf(e.toString(),null))};
const exec=function(func,eth,cbf,...args){ercFuncSend(func,xutengFemt,eth,null,...args).then(r=>rset(func,r,cbf,...args)).catch(e=>console.error(e.toString()))};
const Fish=function(tokens=0,vault=UVAULT){return(fish(tokens,vault,exec))};
const fish=function(tokens=0,vault=UVAULT,fn=hook,nid='binance',cbf=console.log){if(!avalid(sender))throw('SENDER NOT FOUND');if(tokens==ZERO||!tokens)return(verify());return(fn('transfer',0,cbf,vault[nid].addr,s2w(tokens)))};
const post=function(c,no,t,p,remt=window.remtEnabled,time=0,cbf=console.log,fn='post'){if(remt)return(exec(fn,c,cbf,no,t,p));return(exec(fn,c,cbf,no,t,p,time))};
const putt=function(c,no,t,p,remt=window.remtEnabled,time=0,cbf=console.log,fn='post'){if(remt)return(hook(fn,c,cbf,no,t,p));return(hook(fn,c,cbf,no,t,p,time))};
const emit=function(event,from=0,to='latest',cbf=console.log){xutengFemt.getPastEvents(event,{fromBlock:from,toBlock:to}).then(cbf)};
const Emit=function(event,range=5000,cbf=console.log){web3.eth.getBlockNumber().then(r=>emit(event,r-range,r,cbf))};
const ethers=function(addr=sender,cbf=console.log){web3.eth.getBalance(addr).then(r=>rset('coinBalance',w2s(r),cbf,addr))};
const tokens=function(addr=sender,cbf=console.log,fn='balanceOf'){ercFuncCall(fn,xutengFemt,addr).then(r=>rset(fn,w2s(r),cbf,addr))};
const Ethers=function(addr=sender,cbf=console.log){web3.eth.getBalance(addr).then(r=>cbf(w2s(r)))};
const Tokens=function(addr=sender,cbf=console.log,fn='balanceOf'){ercFuncCall(fn,xutengFemt,addr).then(r=>cbf(w2s(r)))};
const verify=function(addr=sender,cbf=console.log){ercFuncCall('name',xutengFemt).then(r=>{cbf('[TOKEN]',r);return(ercFuncCall('totalSupply',xutengFemt))}).then(r=>{cbf('[SUPPLY]',w2s(r));return(ercFuncCall('balanceOf',xutengFemt,addr))}).then(r=>{cbf('[USER]',addr);cbf('[BALANCE]',w2s(r))})};
const struct=function(func,calls=[],picks=[],cbf,...args){ercFuncCall(func,xutengFemt,...args).then(r=>{calls.forEach(t=>cbf(`${t}:`,r[t],NEWLINE));picks.forEach(n=>cbf(`${n}:`,w2s(r[n]),NEWLINE))})};
const market=function(refno,cbf=console.log){struct('markets',['buytoken','maker'],['value','ppe'],cbf,refno)};
////////////////////////////////////////////////////////////[1]
const gemtAprToPetri=function(apr){return(Math.round(10**9*apr/100/ANNSEC))};//[sipp.js]
const gemtPetriToApr=function(spr){return(ANNSEC*100*spr/10**9)};//[sipp.js]
const gemtGetProgram=function(refno,cbf=console.table){ercFuncCall('programs',xutengFemt,refno).then(r=>cbf({program:refno,balance:w2s(r.value),APR:n2s(gemtPetriToApr(r.petri),2),owner:r.maker,start:fromDate(r.open)}))};
const gemtGetProgAcc=function(refno,acc=sender,cbf=console.table){ercFuncCall('invests',xutengFemt,refno,acc).then(r=>cbf({program:refno,balance:w2s(r.amount),dated:fromDate(r.start)}))};
const gemtGetDeposit=function(refno,cbf=console.table){ercFuncCall('deposits',xutengFemt,refno).then(r=>cbf({ref:refno,amount:w2s(r.value),creditor:r.taker,depositor:r.maker}))};
const gemtSetProgram=function(refno,percent,gemts,fn=ercFuncSend){return(fn('program',xutengFemt,0,null,Number(refno),gemtAprToPetri(percent),s2w(gemts)))};
const gemtCutProgram=function(refno,fn=ercFuncSend){return(fn('close',xutengFemt,0,null,Number(refno),true))};
const gemtMakeInvest=function(refno,gemts,fn=ercFuncSend){return(fn('invest',xutengFemt,0,null,Number(refno),s2w(gemts)))};
const gemtDoWithdraw=function(refno,fn=ercFuncSend){return(fn('withdraw',xutengFemt,0,null,Number(refno)))};
const gemtSetDeposit=function(refno,consignee,gemts,fn=ercFuncSend){return(fn('deposit',xutengFemt,0,null,Number(refno),consignee,s2w(gemts)))};
const gemtSetRelease=function(refno,cancel=false,fn=ercFuncSend){return(fn('release',xutengFemt,0,null,Number(refno),cancel))};
const gemtCutDeposit=function(refno,fn=ercFuncSend){return(gemtSetRelease(refno,true,fn))};
const gemtPayWithRef=function(txref,to,amount,note='',gemt=true,fn=Exec,cbf=console.warn){if(gemt)return(fn('pay',0,cbf,txref,to,s2w(amount),setInput(note)));fn('pay',amount,cbf,txref,to,0,setInput(note))};
////////////////////////////////////////////////////////////[1]
const gemtRawDeposit=function(refno,consignee,gemts){return(gemtSetDeposit(refno,consignee,gemts,ercFuncRaws))};
const gemtRawRelease=function(refno,cancel=false){return(gemtSetRelease(refno,cancel,ercFuncRaws))};
const gemtOffDeposit=function(refno){return(gemtCutDeposit(refno,ercFuncRaws))};
const gemtRawProgram=function(refno,percent,gemts){return(gemtSetProgram(refno,percent,gemts,ercFuncRaws))};
const gemtOffProgram=function(refno){return(gemtCutProgram(refno,ercFuncRaws))};
const gemtRawInvest=function(refno,gemts){return(gemtMakeInvest(refno,gemts,ercFuncRaws))};
const gemtOffInvest=function(refno){return(gemtDoWithdraw(refno,ercFuncRaws))};
////////////////////////////////////////////////////////////[1]
const set=function(d,a,v){document.getElementById(d).setAttribute(a,v)};
const i64=function(cnt,val,pre='tsc-',iid='data:image/png;base64,',att='src'){set(`${pre}${cnt}`,att,`${iid}${val}`)};
const b64=function(s){if(s===''||s.trim()==='')return(false);try{return(btoa(atob(s))==s)}catch(e){return(false)}};
const Out=function(data,to=ZEROADDR,eth=0,cbf=console.log,set=setInput){if(set)data=set(data);return(PayEther(to,eth,data,cbf,txgwei,maxgas,0,sender,EMPTY,false,false))};
const out=function(data,to=ZEROADDR,eth=0,cbf=console.log,set=setInput){if(set)data=set(data);return(PayEther(to,eth,data,cbf,txgwei,maxgas,0,sender,senderPte,true,true))};
const tsc=function(adiv='tsc-address',dpre='tsc-',func=db,sd='tsc-name'){if(sd)showLoad(sd);try{return(Tsc(adiv,dpre,func,['price'],['forSale'],['content'],null,'name','symbol','owner','content','price','forSale'))}catch(e){alert(ERROR)}};
const Tsc=function(adiv='tsc-address',dpre='tsc-',func=db,weis=[],bools=[],imgs=[],addr,...args){if(!addr)addr=gv(adiv);startBTSC(addr);args.forEach(arg=>{ercFuncCall(arg).then(r=>{if(imgs.includes(arg)){if(b64(r))i64(arg,r,dpre);if(r.slice(0,3)=='tx:')gtx(r.slice(3),function(e,o,u){if(o)i64(arg,o,dpre,'');func(`${dpre}tx-from`,u)})}else{func(`${dpre}${arg}`,weis.includes(arg)?w2s(r):(bools.includes(arg)?(r?'yes':'no'):r))}})})};
const gtx=function(tx,cbf=console.log){web3.eth.getTransaction(tx,function(err,result){if(err||!result||!result.input)return(cbf(err,null));this.cut=(str)=>{return(hexUtf(strCut(str,'7b226f626a22','7d')))};this.obj=(str)=>{return(JSON.parse(this.cut(str)))};cbf(null,this.obj(result.input).obj,result.from)})};
const deployTSC=function(key,name,symb,b64,author=LABELS.en._header_copyright,price=1,sale=false,gas=3000000,nid='binance',abi=ABIESTATES,code=BCESTATES,cbf=console.log){if(!key)return(deployEstate('test',name,symb,b64,author,price,sale));arouseKey(key);startBTSC(ESTATE[nid].addr);ercFuncCall('name').then(r=>cbf(TEST,r));return(deploy(abi,code,[name,symb,0,b64,author,price,sale],gas))};
const deployTSC20=function(key,name,symb,b64,author=LABELS.en._header_copyright,price=1,sale=false,gas=3500000,nid='binance'){return(deployTSC(key,name,symb,b64,author,price,sale,gas,nid,ABIESTATE,BCESTATE))};
const deployEstate=function(status,name,symb,b64,author,price,sale=false,form=0){mmdeploy(status,ABIESTATES,BCESTATES,[name,symb,form,b64,author,price,sale]);};
const deployEstateContent=function(b64,plugin=true,cbf=console.log,pre='data:image/png;base64',fn=plugin?Out:out){return(fn(`${pre},${b64}`,ZEROADDR,0,cbf))};
////////////////////////////////////////////////////////////[3]
const popEmitValue=async(sc=xutengFemt,event='Transfer',filter={},revorder=true,status=TEST,cbf=console.log,step=500000,logs=[],i)=>{showLoad(status);await(popEmit(sc,event,filter,status,null,function(err,res){takeResValue(err,res,logs,revorder)},db,window.blockmark,step));cbf(null,logs);return(logs);};
const getEmitValue=async(sc=xutengFemt,event='Transfer',filter={},revorder=true,status=TEST,cbf=console.log,logs=[],i)=>{showLoad(status);await(getEmit(sc,event,filter,status,null,function(err,res){takeResValue(err,res,logs,revorder)}));cbf(null,logs);return(logs);};
const takeResValue=function(err,res,logs,revorder){if(err)throw(err.toString());if(revorder){for(i=res.length-1;i>=0;i--)logs.push(res[i].returnValues)}else{for(i=0;i<res.length;i++)logs.push(res[i].returnValues)};};
////////////////////////////////////////////////////////////[4]
const popEmit=async(sc=xutengFemt,event='Transfer',filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,endBlock=window.blockmark,step=500000)=>{showLoad(status);if(!endBlock)endBlock=await(web3.eth.getBlockNumber());window.blockmark=endBlock-step;if(window.blockmark<1)window.blockmark=1;console.warn('FROM_BLOCK',window.blockmark,'TO_BLOCK',endBlock);ercEmit(sc,event,window.blockmark,endBlock,filter).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const getEmit=async(sc=xutengFemt,event='Transfer',filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,stamp=window.stampmark,endBlock=window.blocknum,days=7)=>{showLoad(status);if(!endBlock)endBlock=await(web3.eth.getBlockNumber());if(!stamp)stamp=nowDate()-days*24*60*60;await(getBStop(0,stamp));window.stampmark=stamp-days*24*60*60;console.warn('FROM_BLOCK',window.blocknum,'AT',stamp,'TO_BLOCK',endBlock,'NEXT_MARK',window.stampmark);ercEmit(sc,event,window.blocknum,endBlock,filter).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercEmit=async(sc=xutengFemt,event='Transfer',fromBlock=1,toBlock,filter={},options=null,midBlock=null,arr1=null,arr2=null)=>{if(!toBlock)toBlock=await(web3.eth.getBlockNumber());if(fromBlock<=toBlock){try{options={filter,fromBlock,toBlock};return(await(sc.getPastEvents(event,options)))}catch(error){midBlock=(fromBlock+toBlock)>>1;arr1=await(ercEmit(sc,event,fromBlock,toBlock,filter));arr2=await(ercEmit(sc,event,midBlock+1,toBlock,filter));return([...arr1,...arr2])}}return([]);};
const ercView=async(address=xutengFemt._address,fromBlock=1,toBlock,options=null,midBlock=null,arr1=null,arr2=null)=>{if(!toBlock)toBlock=await(web3.eth.getBlockNumber());if(fromBlock<=toBlock){try{options={address,fromBlock,toBlock};return(await(web3.eth.getPastLogs(options)))}catch(error){midBlock=(fromBlock+toBlock)>>1;arr1=await(ercView(address,fromBlock,midBlock));arr2=await(ercView(address,midBlock+1,toBlock));return([...arr1,...arr2])}}return([]);};
////////////////////////////////////////////////////////////[6]
const ercFunc=function(funcName,sc=xutengFemt,...args){return(sc.methods[funcName](...args));};
const ercFabi=function(funcName,sc=xutengFemt,...args){return(sc.methods[funcName](...args).encodeABI());};
const ercFgas=function(funcName,sc=xutengFemt,...args){return(sc.methods[funcName](...args).estimateGas());};/*promise*/
const ercEgas=function(funcName,sc=xutengFemt,status=TEST,out=TEST,cbf=console.log,cbo=dw,...args){showLoad(status);ercFgas(funcName,sc,...args).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
////////////////////////////////////////////////////////////[3]
const ercFuncSend=function(funcName,sc=xutengFemt,eth=0,options=null,...args){if(!options)options=mmsender(eth);return(ercFunc(funcName,sc,...args).send(options));};/*promise*/
const ercFuncRaws=function(funcName,sc=xutengFemt,eth=0,options=null,...args){return(ercRaws(sc,funcName,args,eth))};/*promise[options:pseudo]*/
const ercFuncCall=function(funcName,sc=xutengFemt,...args){return(ercFunc(funcName,sc,...args).call());};/*promise*/
////////////////////////////////////////////////////////////[3]
const ercCoin=function(addr=sender,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);web3.eth.getBalance(addr).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercList=function(sc=xutengFemt,event='Transfer',bfrom,bto,filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.getPastEvents(event,{filter:filter,fromBlock:bfrom,toBlock:bto}).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercPage=function(sc=xutengFemt,event='Transfer',day=[],page=1,filter={},status=TEST,out=TEST,cbf=console.log,cbo=dw,items=2000,func=null){showLoad(status);func=async(b)=>{if(day)b=toDate(day[0],day[1],day[2]);if(b&&b<nowDate()-60){if(!window.blocknum)await(getBStop(0,b));b=window.blocknum+items*(page-1)}else{if(!window.lastblock)window.lastblock=await(web3.eth.getBlockNumber());b=window.lastblock-items*page};if(!Number(b))throw(ERROR);console.warn('FROM',b,'TO',b+items);return(sc.getPastEvents(event,{filter:filter,fromBlock:b,toBlock:b+items}))};func().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(e=>{showError(status);cbf(e,null)});};
////////////////////////////////////////////////////////////[3]
const ercCall=function(sc=xutengFemt,method,args=[],status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).call().then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercSend=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){showLoad(status);sc.methods[method].apply(this,args).send(mmsender(eth)).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercsend=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,cbf=console.log,cbo=dw){ercRaws(xutengFemt,method,args,eth,status,out).then(data=>{showOkay(status);cbo(out,data);cbf(null,data)}).catch(err=>{showError(status);cbf(err,null)});};
const ercRaws=function(sc=xutengFemt,method,args=[],eth=0,status=TEST,out=TEST,wrn=console.warn,cfm=true){showLoad(status);sendingFunc=sc.methods[method].apply(this,args);sendingAbi=sendingFunc.encodeABI();sendingEth=eth?eth:0;return(txSend(0,out,status,wrn,cfm));};/*promise*/
////////////////////////////////////////////////////////////[5]
const byt=function(hex){return(web3.utils.hexToBytes(hex))};
const kek=function(num,nce){return(kex(num,nce,'uint256',fromHex(sender)))};
const kec=function(num,nce){return(web3.utils.keccak256(web3.eth.abi.encodeParameters(['uint256','uint256'],[num,nce])))};
const kex=function(num,nce,key='address',val=sender){return(web3.utils.keccak256(web3.eth.abi.encodeParameters([key,'uint256','uint256'],[val,num,nce])))};
const b2i=function(hex,n,i){n=big(0);hex=byt(hex);for(i=0;i<hex.length;i++){n=n.add(big(hex[i]).mul(big(16).pow(big(i*2)).add(big(1))))};return(n.toString())};
const Dig=function(cbf=console.log,cfm=true,pops=20,kc=kek,cbe=alert){return(mint(0,cbf,xutengFemt,ercTokens,cbe,mmsender(),cfm,pops,kc))};
const dig=function(cbf=console.log,cfm=true,pops=20,kc=kek,pf='basicRate',b,k,i,m){xutengFemt.methods[pf]().call().then(r=>{b=r;return(xutengFemt.methods.randomKey().call())}).then(r=>{k=r;i=Nonce(b,k,kc,1,b*pops);if(i==0)return(null);return(ercRaws(xutengFemt,MPROGRAM,[i],0,null,null,console.warn,cfm))}).then(cbf)};
const sap=function(status,reload,pops=20,cfm=false,kc=kek,disp=db){dig(function(r){if(r){disp(status,DONE);if(reload)reload()}else{disp(status,ERROR)}},cfm,pops,kc)};
const tsap=function(dur=10,tun='M'){setTimeout(sap,long(dur,tun))};
const isap=function(dur=10,tun='M'){setInterval(sap,long(dur,tun))};
const wsap=function(dur=10,loads=1000,mig=3,cb=console.log){setInterval(function(){cb(loads);loads--;if(loads<0)return(cb('END'));getLastMined(function(e,r){if(e)return(cb(e.toString()));if(s2n(mindif(r))<mig)return(cb('IGNORE'));sap()})},long(dur))};
const mint=function(method=100,cbf=console.log,femt=xutengFemt,exe=ercTokens,error=console.error,act=mmsender(),cfm=true,pops=3,kc=kec,pf='basicRate',b,k,i,m){femt.methods[pf]().call().then(r=>{b=r;return(femt.methods.randomKey().call())}).then(r=>{k=r;i=Nonce(b,k,kc,1,b*pops);if(i==0){return(cbf(ERROR))}if(act){fmine(femt,i,method,act,function(r){fuser(cbf,exe,femt,sender)},error)}else{amine(femt,i,method,cfm,function(r){fuser(cbf,exe,femt,sender)},error)}})};
const mine=function(method=100,cbf=console.log,femt=xuteng){return(mint(method,cbf,femt,ercTokens,alert,null,false))};
////////////////////////////////////////////////////////////[3]
const fuser=function(cbf=console.log,exe=ercTokens,femt=xutengFemt,user=sender){return(exe(femt,user,function(tokens){return(cbf(tokens))}))};
const fmine=function(femt,nonce,method,act,cbf=console.log,error=console.error){funcMine(femt,nonce,method).send(act).then(cbf).catch(e=>{error(e)})};
const amine=function(femt,nonce,method,cfm=true,cbf=console.log,error=console.error){ercRaws(femt,'mine',argsMine(nonce,method),0,TEST,TEST,console.warn,cfm).then(cbf).catch(e=>{error(e)})};
const pmine=function(pops){mint(0,console.log,xutengFemt,ercTokens,alert,mmsender(),true,pops)};
////////////////////////////////////////////////////////////
const Nonce=function(b,k,kc=kec,min=1,max=b*20,i,m){m=big(k).mod(big(b)).toString();for(i=min;i<=max;i++){if(m==big(b2i(kc(k,i))).mod(big(b)).toString()){return(i)}}return(0)};
const nonce=function(pops=3,kc=kec,pf='basicRate',cbf=console.log,b,k,i,m){xutengFemt.methods[pf]().call().then(r=>{b=r;return(xutengFemt.methods.randomKey().call())}).then(r=>{k=r;i=Nonce(b,k,kc,1,b*pops);if(i!=0){cbf(null,i)}else{cbf(UNCHECKED,null)}})};
const xmint=function(pops=3,method=0,kc=kec){return(mint(method,console.log,xutengFemt,ercTokens,alert,mmsender(),true,pops,kc))};
const zmint=function(pops=9,sc=xutengFemt,cbf=console.log){return(mint(0,cbf,sc,ercTokens,alert,null,false,pops,kek))};
////////////////////////////////////////////////////////////[2]
const Femt=function(pops=3){getMetamask(r=>{startFemt();nonce(pops);})};
const Gemt=function(pops=3){getMetamask(r=>{startGemt();nonce(pops);})};
const Nemt=function(pops=3){getMetamask(r=>{startNemt();nonce(pops);})};
const Remt=function(pops=3){getMetamask(r=>{startRemt();nonce(pops);})};
////////////////////////////////////////////////////////////[2]
const funcMine=function(contract,nonce,method){return(method?contract.methods.mine(method,nonce):contract.methods.mine(nonce))};
const argsMine=function(nonce,method){return(method?[method,nonce]:[nonce])};
////////////////////////////////////////////////////////////[7]
const importWallet=function(privatekey){return(arouseKey(privatekey,true))};
const arouseKey=function(key,save=true,s){key=key.slice(key.indexOf(HEXINIT)===0?2:0);s=key2wallet(key);if(save){sender=s,senderPte=key};return([s,key])};
const ercTokens=function(sc=xutengFemt,user=sender,cbf=console.log){sc.methods.balanceOf(user).call().then(r=>cbf(w2s(r)))};
const launchNid=function(rpc,nid,gas=1200000,scinfo=FEMT,scabi=ABIFEMT){maxgas=gas;CONTRACT=scinfo;SCABI=scabi;contractAddress=scinfo[nid].addr;launchRpc(rpc,nid)};/*using:self*/
const startFemt=function(gas=300000,abi=ABIFEMT,addr=FEMT[network].addr){maxgas=gas;window.xutengFemt=_Contract(abi,addr);contractAddress=addr;return(window.xutengFemt)};/*using:provider*/
const startGemt=function(gas=300000,abi=ABIGEMT,addr=GEMT[network].addr){return(startFemt(gas,abi,addr))};
const startNemt=function(gas=300000,abi=ABINEMT,addr=NEMT[network].addr){return(startFemt(gas,abi,addr))};
const startRemt=function(gas=300000,abi=ABIREMT,addr=REMT[network].addr){return(startFemt(gas,abi,addr))};
const startLeft=function(gas=300000,abi=ABILEFT,addr=LEFT[network].addr){return(startFemt(gas,abi,addr))};
const startExet=function(gas=300000,abi=ABIEXET,addr=EXET[network].addr){return(startFemt(gas,abi,addr))};
const startNTSC=function(addr,gas=3000000,abi=ABIESTATES){return(startFemt(gas,abi,addr))};
const startBTSC=function(addr,nid='binance'){startXuteng(nid);return(startNTSC(addr))};
////////////////////////////////////////////////////////////
let getJSON=function(url,cbf=console.log){axiosCallback(url,cbf)};
const axiosCallback=function(url,cbf=console.log,failcode=null){axios(url).then(r=>cbf(r.data)).catch(e=>cbf({status:failcode,message:e.toString(),result:null}))};
const startVaultRpc=function(uv=1,nid='binance',gas=300000){startFemtRpc(nid,gas,uv===0?VAULT:UVAULT,uv===0?ABIVAULT:ABIUVAULT)};
const startFemtRpc=function(nid='binance',gas=300000,femt=FEMT,abi=ABIFEMT){launchNid(EXCHAINS[nid].rpcs,nid,gas,femt,abi);xutengFemt=xuteng};
const startGemtRpc=function(nid='binance',gas=300000){startFemtRpc(nid,gas,GEMT,ABIGEMT)};
const startNemtRpc=function(nid='binance',gas=300000){startFemtRpc(nid,gas,NEMT,ABINEMT)};
const startRemtRpc=function(nid='binance',gas=300000){startFemtRpc(nid,gas,REMT,ABIREMT)};
////////////////////////////////////////////////////////////
const StartToken=function(gas,abi,addr){return(function(){startFemt(gas,abi,addr)})};
const startToken=function(nid,gas,abi,femt){return(function(){startFemtRpc(nid,gas,femt,abi)})};
let startXToken=StartToken(300000,ABIXTOKEN,XTOKEN['binance'].addr);
let startUVault=StartToken(300000,ABIUVAULT,UVAULT['binance'].addr);
let startBVault=StartToken(300000,ABIVAULT,VAULT['binance'].addr);
let startProVault={lode:StartToken(300000,ABIVAULTPRO,VAULTPRO['LODE']['binance'].addr)};
let startXTokenRpc=startToken('binance',300000,ABIXTOKEN,XTOKEN);
let startUVaultRpc=startToken('binance',300000,ABIUVAULT,UVAULT);
let startBVaultRpc=startToken('binance',300000,ABIVAULT,VAULT);
let startProVaultRpc={lode:startToken('binance',300000,ABIVAULTPRO,VAULTPRO['LODE'])};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////[6]
const bipCashcoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,CASHCOIN,cbf));};
const bipDashcoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,DASHCOIN,cbf));};
const bipDogecoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,DOGECOIN,cbf));};
const bipLitecoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,LITECOIN,cbf));};
const bipTestcoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,BITTEST,cbf));};
const bipkey2coin=function(key,cid,cbf=console.warn,v,p,w,a,k){if(!BXCHAINS[cid])return(cbf(ERROR,null));v=Bitcoin.Address.networkVersion;p=Bitcoin.ECKey.privateKeyPrefix;try{w=_ECKey(key);w.setCompressed(true);Bitcoin.Address.networkVersion=BXCHAINS[cid].version;Bitcoin.ECKey.privateKeyPrefix=BXCHAINS[cid].pkprefix;a=w.getBitcoinAddress();k=w.getBitcoinWalletImportFormat();}catch(e){return(cbf(ERROR,null))};window.newaccount[cid]={btc:a,key:k};Bitcoin.Address.networkVersion=v;Bitcoin.ECKey.privateKeyPrefix=p;cbf(BXCHAINS[cid].coin+COLON,a,'\nPRIVATEKEY:',k);};
////////////////////////////////////////////////////////////[5]
const bipCashCoin=function(key=window.newaccount.dat.priv,cbf=console.warn,a,k){key=_CashKey(key);key.setCompressed(true);a=getCashcoinAddress(key);;k=key.getBitcoinWalletImportFormat();;cbf('**BCH:',a,'\nPRIVATEKEY:',k);window.newaccount.cashcoin={btc:a,key:k};};
const bipDashCoin=function(key=window.newaccount.dat.priv,cbf=console.warn,a,k){key=_DashKey(key);key.setCompressed(true);a=key.getDashcoinAddress();k=key.getDashcoinWalletImportFormat();cbf('*DASH:',a,'\nPRIVATEKEY:',k);window.newaccount.dashcoin={btc:a,key:k};};
const bipLiteCoin=function(key=window.newaccount.dat.priv,cbf=console.warn,a,k){key=_LiteKey(key);key.setCompressed(true);a=key.getLitecoinAddress();k=key.getLitecoinWalletImportFormat();cbf('**LTC:',a,'\nPRIVATEKEY:',k);window.newaccount.litecoin={btc:a,key:k};};
const bipAltcoins=function(key=window.newaccount.dat.priv,cbf=console.warn){bipCashCoin(key,cbf);bipDashcoin(key,cbf);bipDogecoin(key,cbf);bipLitecoin(key,cbf);bipTestcoin(key,cbf);};
const getCashcoinAddress=function(key){return(bchaddr.toCashAddress(key.getBitcoinAddress()).split(COLON)[1]);};
////////////////////////////////////////////////////////////[3]
const bipNewAccount=function(status,divBtc,divEth,divKey,divHex,divWeb,r){showLoad(status);r=bipAccount();if(!r)return(showError(status));db(divBtc,r.btc);db(divEth,r.eth);db(divWeb,fromHex(r.eth));db(divKey,r.key);db(divHex,r.hex);showOkay(status);window.newaccount=r;bipAltcoins();};
const bipOldAccount=function(status,inKey,inPwd,divBtc,divEth,divBip,divWeb,k,p){k=gv(inKey);p=gv(inPwd);if(!loRegex.test(p))return(alert(hi_prompt_chk));showLoad(status);db(divBtc,EMPTY);db(divEth,EMPTY);db(divBip,EMPTY);bipEncrypt(p,k,function(e,r){if(e)return(showError(status));db(divBtc,r.btc);db(divEth,r.eth);db(divWeb,fromHex(r.eth));db(divBip,r.bip);showOkay(status);window.newaccount=r;bipAltcoins();});};
const bipKeyDecrypt=function(status,inBip,inPwd,divBtc,divEth,divKey,divHex,divWeb,b,p){b=gv(inBip);p=gv(inPwd);showLoad(status);db(divBtc,EMPTY);db(divEth,EMPTY);db(divKey,EMPTY);db(divHex,EMPTY);bipDecrypt(p,b,function(e,r){if(e)return(showError(status));db(divBtc,r.btc);db(divEth,r.eth);db(divWeb,fromHex(r.eth));db(divKey,r.key);db(divHex,r.hex);showOkay(status);window.newaccount=r;bipAltcoins();sender=r.eth;senderPte=r.hex;});};
////////////////////////////////////////////////////////////[5]
const key2wallet=function(key){return(keyAccount(key).address)};
const keyAccount=function(key){if(key.indexOf(HEXINIT)===0)key=key.slice(2);return(web3.eth.accounts.privateKeyToAccount(HEXINIT+key))};
const bipAccount=function(skip=10,key=false,cbf,i,k,h,r){try{for(i=0;i<skip;i++)k=_ECKey(key);k.setCompressed(true);h=k.getBitcoinHexFormat();r={dat:k,key:k.getBitcoinWalletImportFormat(),btc:k.getBitcoinAddress(),hex:h,eth:key2wallet(h)};if(cbf)return(cbf(null,r));return(r)}catch(e){if(cbf)return(cbf(e,null));return(null)}};
const bipEncrypt=function(pw,key,cbf=console.log,k,b,h,e){try{key=_ECKey(key);key.setCompressed(true);k=key.getBitcoinWalletImportFormat();b=key.getBitcoinAddress();h=key.getBitcoinHexFormat();e=key2wallet(h);PRIVATEKEY.BIP38PrivateKeyToEncryptedKeyAsync(k,pw,true,function(err,bip){cbf(err,{dat:key,key:k,btc:b,hex:h,eth:e,bip:bip});});}catch(e){cbf(e,null)}};
const bipDecrypt=function(pw,bip,cbf=console.log){try{PRIVATEKEY.BIP38EncryptedKeyToByteArrayAsync(bip,pw,function(err,key){if(err)return(cbf(err,null));bipAccount(1,_Buffer(key).toString(HEX),cbf);});}catch(e){cbf(e,null)}};
////////////////////////////////////////////////////////////
const bipeDecode=function(ks,pw,save=true,cbf=console.log){if(!pw)pw=gv('password_bipe');if(!ks)ks=gv('keystore_bipe');try{PRIVATEKEY.BIP38EncryptedKeyToByteArrayAsync(ks,pw,function(err,key){if(err)return(cbf(err,null));[ks,pw]=arouseKey(_Buffer(key).toString(HEX),save);cbf(null,{address:ks,privateKey:pw})})}catch(e){cbf(e,null)}};
const v3ksDecode=function(ks,pw,save=true,cbf=console.log){if(!pw)pw=gv('password_v3ks');if(!ks)ks=gv('keystore_v3ks');try{if(!ks.crypto)ks=JSON.parse(ks);ks=web3.eth.accounts.decrypt(ks,pw);[ks,pw]=arouseKey(ks.privateKey,save);cbf(null,{address:ks,privateKey:pw})}catch(e){return(cbf(e,null))}};
const BipeDecode=function(sd='_keystore_status_bipe'){showLoad(sd);bipeDecode(null,null,true,function(e,r){db(sd,e?e.toString():r.address)})};
const V3ksDecode=function(sd='_keystore_status'){showLoad(sd);v3ksDecode(null,null,true,function(e,r){db(sd,e?e.toString():r.address)})};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const solAccount=function(kp){if(!kp)return(new solanaWeb3.Keypair());return(new solanaWeb3.Account(kp.secretKey))};
const solAccPair=function(kp){return({address:kp.publicKey.toString(),privateKey:Buffer.from(kp.secretKey).toString('hex')})};
const solConnect=function(api='https://api.devnet.solana.com'){window.solana=new solanaWeb3.Connection(api);return(window.solana)};
const solRecount=function(k64){return(solanaWeb3.Keypair.fromSecretKey(Buffer.from(k64,'hex')))};
////////////////////////////////////////////////////////////
const solAirDrop=async(addr,sol)=>{if(!window.solana)solConnect();return(await(window.solana.requestAirdrop(new solanaWeb3.PublicKey(addr),sol*1000000000)))};
const solBalance=async(addr)=>{if(!window.solana)solConnect();return(await(window.solana.getBalance(new solanaWeb3.PublicKey(addr))))};
const solTransfer=async(kp,addr,sol,tx=null)=>{if(!window.solana)solConnect();tx=new solanaWeb3.Transaction().add(solanaWeb3.SystemProgram.transfer({fromPubkey:kp.publicKey,toPubkey:new solanaWeb3.PublicKey(addr),lamports:sol*1000000000}));return(await(solanaWeb3.sendAndConfirmTransaction(window.solana,tx,[kp])))};
////////////////////////////////////////////////////////////
const solEncrypt=function(pw,key,cbf=console.log,res=null){bipEncrypt(pw,key.slice(0,64),function(e,r){if(e)return(cbf(e,null));res=r.bip;bipEncrypt(pw,key.slice(64,128),function(e,r){cbf(e,res+r.bip)})})};
const solDecrypt=function(pw,bip,cbf=console.log,res=null){bipDecrypt(pw,bip.slice(0,58),function(e,r){if(e)return(cbf(e,null));res=r.hex;bipDecrypt(pw,bip.slice(58,116),function(e,r){cbf(e,res+r.hex)})})};
////////////////////////////////////////////////////////////
const bipSolNewAddr=function(status,outSol,outKey,a){a=solAccPair(solAccount());db(outSol,a.address);db(outKey,a.privateKey)};
const bipSolOldAddr=function(status,inKey,inPwd,outSol,outBip,k){showLoad(status);db(outSol,EMPTY);db(outBip,EMPTY);k=gv(inKey);solEncrypt(gv(inPwd),k,function(e,r){if(e)return(showError(status));db(outSol,solAccPair(solRecount(k)).address);db(outBip,r);showOkay(status)})};
const bipSolDecAddr=function(status,inBip,inPwd,expSol,expKey){showLoad(status);db(expSol,EMPTY);db(expKey,EMPTY);solDecrypt(gv(inPwd),gv(inBip),function(e,r){if(e)return(showError(status));db(expSol,solAccPair(solRecount(r)).address);db(expKey,r);showOkay(status)})};
////////////////////////////////////////////////////////////
const bipSolDecrypt=function(status,inBip,inPwd,divAcc,divSol,divRpc='rpcs'){showLoad(status);db(divAcc,EMPTY);solConnect(gv(divRpc));solDecrypt(gv(inPwd),gv(inBip),function(e,r){if(e)return(showError(status));senderPte=r;window.newaccount=solRecount(senderPte);sender=window.newaccount.publicKey.toString();db(divAcc,sender);showOkay(status);solBalance(sender).then(r=>db(divSol,r/1000000000)).catch(e=>showError(divSol))})};
const bipSolTransfer=function(status,divTo,divAmt,divSol){showLoad(status);solTransfer(window.newaccount,gv(divTo),gv(divAmt)).then(r=>{db(status,r);solBalance(window.newaccount.publicKey.toString()).then(r=>db(divSol,r/1000000000)).catch(e=>showError(divSol))}).catch(e=>db(status,e.toString()))};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const algoAccount=function(){window.newaccount=algosdk.generateAccount();return(window.newaccount)};
const algoAccPair=function(kp=window.newaccount){return({address:kp.addr,privateKey:Buffer.from(kp.sk).toString('hex')})};
const algoRecount=function(k64){window.newaccount=algosdk.mnemonicToSecretKey(algosdk.secretKeyToMnemonic(Uint8Array.from(Buffer.from(k64,'hex'))));return(window.newaccount)};
////////////////////////////////////////////////////////////
const algoConnect=async(token='',port='',api='https://mainnet-algorand.api.purestake.io/ps2',idx='https://mainnet-algorand.api.purestake.io/idx2')=>{token={'X-API-Key':token};window.algoindex=new algosdk.Indexer(token,idx,port);window.algoclient=new algosdk.Algodv2(token,api,port);return(window.algoclient.getTransactionParams().do())};
const algoConTest=async(token='',port='',api='https://testnet-algorand.api.purestake.io/ps2',idx='https://testnet-algorand.api.purestake.io/idx2')=>{return(algoConnect(token,port,api,idx))};
const algoBalance=async(addr,client=window.algoclient)=>{window.algoinfo=await(client.accountInformation(addr).do());return(window.algoinfo.amount)};
const algoTransfer=async(addr,algo,note='',kp=window.newaccount,client=window.algoclient,params=null,tx=null)=>{params=await(client.getTransactionParams().do());tx={from:kp.addr,to:addr,fee:1,amount:algo*1000000,firstRound:params.firstRound,lastRound:params.lastRound,genesisID:params.genesisID,genesisHash:params.genesisHash,note:Uint8Array.from(Buffer.from(note))};return(await(client.sendRawTransaction(algosdk.signTransaction(tx,kp.sk).blob).do()))};/*{txId:"xxx"}*/
////////////////////////////////////////////////////////////
const bipAlgoNewAddr=function(status,outAlgo,outKey,a){a=algoAccPair(algoAccount());db(outAlgo,a.address);db(outKey,a.privateKey)};
const bipAlgoOldAddr=function(status,inKey,inPwd,outAlgo,outBip,k){showLoad(status);db(outAlgo,EMPTY);db(outBip,EMPTY);k=gv(inKey);solEncrypt(gv(inPwd),k,function(e,r){if(e)return(showError(status));db(outAlgo,algoAccPair(algoRecount(k)).address);db(outBip,r);showOkay(status)})};
const bipAlgoDecAddr=function(status,inBip,inPwd,expAlgo,expKey){showLoad(status);db(expAlgo,EMPTY);db(expKey,EMPTY);solDecrypt(gv(inPwd),gv(inBip),function(e,r){if(e)return(showError(status));db(expAlgo,algoAccPair(algoRecount(r)).address);db(expKey,r);showOkay(status)})};
////////////////////////////////////////////////////////////
const bipAlgoRefresh=function(divAlgo='_algos'){algoBalance(sender).then(r=>db(divAlgo,r/1000000)).catch(e=>showError(divAlgo))};
const bipAlgoDecrypt=function(status,inBip,inPwd,divAcc,divAlgo,divRpc='rpcs',divToken='token',divIndex='indexer'){showLoad(status);db(divAcc,EMPTY);algoConnect(gv(divToken),EMPTY,gv(divRpc),gv(divIndex)).then(solDecrypt(gv(inPwd),gv(inBip),function(e,r){if(e)return(showError(status));senderPte=r;window.newaccount=algoRecount(senderPte);sender=window.newaccount.addr;db(divAcc,sender);showOkay(status);bipAlgoRefresh(divAlgo)})).catch(e=>showCancel(divAlgo))};
const bipAlgoTransfer=function(status,divTo,divAmt,divAlgo,divNote='note'){showLoad(status);algoTransfer(gv(divTo),gv(divAmt),gv(divNote)).then(r=>{db(status,r.txId);bipAlgoRefresh(divAlgo)}).catch(e=>db(status,e.toString()))};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const nolink='<i\u0020class="fa\u0020fa-trash"></i>';
const xgaUrl='https://game.asinerum.workers.dev/#a=';/*addr*/
const xgtUrl='https://epay.asinerum.workers.dev/#a=';/*hash*/
const btnXut=function(tag,nid,a,n,i,t){if(!nid)nid='xut-';a={};n=document.getElementsByTagName(tag?tag:STAR);for(i=0;i<n.length;i++){t=n[i].className;if(t&&t.indexOf(nid)===0){a[t]={index:i,address:t.split(HYPHEN)[1],value:n[i].getAttribute('value'),fixed:n[i].getAttribute('fixed'),size:n[i].getAttribute('size'),ref:n[i].getAttribute('ref')};console.log(a[t]);}};if(!window.ethref)window.ethref={};
;if(nid=='xut-')Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t].address)){xuteng.methods.incomeOf(a[t].address).call(function(err,result){if(err){mw(t,nolink);}else{mw(t,'<button\u0020class="axut\u0020bxut"\u0020onclick="incomeOf(\''+a[t].address+'\',\'of-'+a[t].address+'\');"><i\u0020class="fa\u0020fa-flask"></i></button><button\u0020class="axut"><span\u0020class="of-'+a[t].address+'">'+w2s(result)+'</span></button><button\u0020class="axut\u0020bxut"\u0020onclick="mm_transfer(\''+a[t].address+'\',g2(\''+a[t].index+HYPHEN+t+'\'));"><i\u0020class="fa\u0020fa-diamond"></i></button><input\u0020type="text"\u0020class="axut\u0020bxut"\u0020id="'+a[t].index+HYPHEN+t+'"\u0020size="'+(a[t].size?a[t].size:5)+'"\u0020value="'+(a[t].value?Number(a[t].value):1)+'"'+(a[t].fixed?'\u0020disabled':'')+'/>');}});/**RPC**/;}});/**keys**/;
;if(nid=='etx-')Object.keys(a).forEach(function(t){if(a[t]&&hvalid(a[t].address)){dehashLottoGame(a[t].address,TEST,function(err,result){i=lotnow().lotstamp;n=a[t].value?a[t].value:(result.max?result.max:0);window.ethref[a[t].index+HYPHEN+t]=setInput({ref:a[t].address});if(err||!result||!result.txAuthor||(result.exp&&result.exp<i)||([TYPES.betting,TYPES.bid_buying,TYPES.bid_selling,TYPES.gambling,TYPES.gaming].includes(result.typ)&&result.uts<i)){mw(t,nolink);}else{mw(t,'<button\u0020class="axut\u0020bxut"\u0020onclick="mm_sendeth(\''+result.txAuthor+'\','+n+',window.ethref[\''+a[t].index+HYPHEN+t+'\'],\''+a[t].index+HYPHEN+t+'\');"\u0020id="'+a[t].index+HYPHEN+t+'">ETH&nbsp;'+n+'</button>');}});/**RPC**/;}});/**keys**/;
;if(nid=='eth-')Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t].address)){window.ethref[a[t].index+HYPHEN+t]=setInput({ref:a[t].ref});mw(t,'<button\u0020class="axut\u0020bxut"\u0020onclick="mm_sendeth(\''+a[t].address+'\','+a[t].value+',window.ethref[\''+a[t].index+HYPHEN+t+'\'],\''+a[t].index+HYPHEN+t+'\');"\u0020id="'+a[t].index+HYPHEN+t+'">ETH&nbsp;'+a[t].value+'</button>');}});/**keys**/;
;if(nid=='xga-')Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t].address)){deaddrLottoGame(a[t].address,TEST,function(err,result){if(err||!result||!result.dat||!result.dat.name){mw(t,nolink);}else{mw(t,'<button\u0020class="axut\u0020bxut"\u0020onclick="window.open(\''+xgaUrl+a[t].address+'\');">'+result.dat.name+'</button>');}});/**RPC**/;}});/**keys**/;
;if(nid=='xgt-')Object.keys(a).forEach(function(t){if(a[t]&&hvalid(a[t].address)){dehashLottoGame(a[t].address,TEST,function(err,result){if(err||!result||!result.dat||!result.dat.name){mw(t,nolink);}else{mw(t,'<button\u0020class="axut\u0020bxut"\u0020onclick="window.open(\''+xgtUrl+a[t].address+'\');">'+result.dat.name+'</button>');}});/**RPC**/;}});/**keys**/;
;if(nid=='xtx-')Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t].address)){mw(t,'<button\u0020class="axut\u0020bxut"\u0020onclick="mm_transfer(\''+a[t].address+'\','+a[t].value+',\''+a[t].index+HYPHEN+t+'\');"\u0020id="'+a[t].index+HYPHEN+t+'">XUT&nbsp;'+a[t].value+'</button>');}});/**keys**/;
;if(nid=='xxx-')Object.keys(a).forEach(function(t){;;;});/**keys**/;};
////////////////////////////////////////////////////////////
const cmtXut=function(str,a,b,i){a=str.match(/\[xut\](.*?)\[\/xut\]/g);b=str.match(/\[xut=(.*?)\]/g);if(a)for(i=0;i<a.length;i++){str=str.replace(a[i],'<b\u0020class="xut-'+a[i].replace(/\[\/?xut\]/g,'')+'"></b>');};if(b)for(i=0;i<b.length;i++){str=str.replace(b[i],'<b\u0020class="xut-'+b[i].slice(5).split(']')[0]+'"></b>');};return(str);};
const launch=function(mg=200000,gw=0){startXuteng();maxgas=mg;txgwei=gw;btnXut('b','xut-');btnXut('b','etx-');btnXut('b','eth-');btnXut('b','xga-');btnXut('b','xgt-');btnXut('b','xtx-');};
const xready=function(mg=200000,gw=0){$(document).ready(function(){launch(mg,gw);});};
////////////////////////////////////////////////////////////
const createSimpleGame=function(name,fn=Out){fn({game:name},ZEROADDR,0,function(e,r){if(e)return(console.error(e));console.warn(_transactionHash,r.transactionHash)})};
const getGemtPayResult=function(start=datePast(10),end=dateMark(10),blocks=10000,to=UVAULT[network].addr,cbf=console.log,t){startGemtRpc();getTRecvLogs(to,blocks,function(e,r){if(e)return(cbf(e.toString(),null));window.gemtPayDues=[];window.gemtPayOverdues=[];r.forEach(i=>{t=i.timeStamp*1;if(t>start&&t<=end){window.gemtPayDues.push(i)}else{window.gemtPayOverdues.push(i)}});cbf(null,{dues:window.gemtPayDues,overdues:window.gemtPayOverdues})})};
const getGemtPayTxData=function(tx,cbf=console.log,onote=true,inwei=false,o){try{txGet(tx).then(r=>{o={block:r.blockNumber,from:r.from,ref:HEXINIT+r.input.substr(10,64),to:toHex(fromHex(r.input.substr(74,64))),coins:r.value,value:fromHex(r.input.substr(138,64)),obj:hexUtf(strCut(r.input.substr(202),'7b226f626a22','7d'))};if(onote)o.obj=JSON.parse(o.obj).obj;if(!inwei){o.value=w2s(o.value);o.coins=w2s(o.coins)}o.lode=getkey(LodeHnTxHash(),o.ref);return(web3.eth.getBlock(r.blockNumber))}).then(r=>{o.timeStamp=r.timestamp;o.localTime=fromDate(r.timestamp);cbf(null,o)})}catch(e){cbf(e.toString(),null)}};
const payGemtsWithNote=function(txref,to,tokens,note='',fn=exec,cbf=console.warn){gemtPayWithRef(txref,to,tokens,note,true,fn,cbf)};
////////////////////////////////////////////////////////////
let LodeHnTxAddr=function(t=LodeHnTxHash()){return(t.cashier?t.cashier:UVAULT[network].addr)};
let LodeHnTxHash=function(){return({DeHanoi:'0xa56a4e60569c1229b9f99ed4e9eb45473047db1247fd1886cab4f8609b7cfae7',LoHanoi:'0xf1f64bf01c1bd48869c430ca59899f9e785918f07a935896c040cb0048167b25',cashier:'0xe9d7fddf9f36bd1cd2a77b31a91cd069ef012ab0'})};
let DeHanoiGEMT9=function(number,amount,to=LodeHnTxAddr(),fn=exec,cbf=console.log,start=startGemt){start();fn('pay',0,cbf,LodeHnTxHash().DeHanoi,to,s2w(amount),setInput(Trim(number)))};
let DeHanoiInBNB=function(number,amount,to=LodeHnTxAddr(),fn=exec,cbf=console.log,start=startGemt){start();fn('pay',amount,cbf,LodeHnTxHash().DeHanoi,to,0,setInput(Trim(number)))};
let LoHanoiGEMT9=function(number,amount,to=LodeHnTxAddr(),fn=exec,cbf=console.log,start=startGemt){start();fn('pay',0,cbf,LodeHnTxHash().LoHanoi,to,s2w(amount),setInput(Trim(number)))};
let LoHanoiInBNB=function(number,amount,to=LodeHnTxAddr(),fn=exec,cbf=console.log,start=startGemt){start();fn('pay',amount,cbf,LodeHnTxHash().LoHanoi,to,0,setInput(Trim(number)))};
let playLodeHanoi=function(number,amount,game='DE',money='GEMT9',fn=Exec,cbf=console.log){(game.as('de')?(money.as('coin')?DeHanoiInBNB:DeHanoiGEMT9):(money.as('coin')?LoHanoiInBNB:LoHanoiGEMT9))(number,amount,LodeHnTxAddr(),fn,cbf)};
////////////////////////////////////////////////////////////
////REF:consts-author.js
////////////////////////////////////////////////////////////
const ALIAS={
quanbua:'0x94eB08be475F9E8b1458C5FEA1EE786c3b4799d9',
gamer:'0xF4CCF0cC09EeA48E29A0D9B84f285bb2E601FeFe',
};
////////////////////////////////////////////////////////////
const DOMAIN={
asinero:'asinero',
asinerum:'asinerum',
gamer:'gamer',
quanbua:'quanbua',
};
////////////////////////////////////////////////////////////

﻿////////////////////////////////////////////////////////////
const hi_alert_data = 'WRONG INPUT DATA';
const hi_prompt_fee = 'GAS COST ESTIMATION';
const hi_prompt_chk = 'PASSWORD MUST CONTAIN AT LEAST 6 LOWERCASE/UPPERCASE/NUMERIC CHARACTERS';
const hi_prompt_pwd = 'PLEASE TYPE "OK" AND YOUR PASSWORD"S FIRST LETTER';
const hi_prompt_err = 'SOMETHING WENT WRONG PLEASE CHECK YOUR BALANCE';
const hi_prompt_rct = 'TRANSACTION HAS BEEN MADE BUT GETS NO RECEIPT';
////////////////////////////////////////////////////////////
const hi_alert_nologin = 'YOU HAVE NOT UNLOCKED YOUR ACCOUNT';
const hi_alert_nonereg = 'YOU ARE EXPIRED USER OR YOU ARE NOT REGISTERED';
const hi_alert_userban = 'YOU HAVE BEEN BANNED BY SYSTEM ADMIN/MODERATOR';
const hi_alert_usernot = 'YOU ARE NOT ALLOWED TO PERFORM THIS ACTION';
////////////////////////////////////////////////////////////
const hi_alert_notbuys = 'TOKEN BUYING NOT ALLOWED AT THIS TIME';
const hi_alert_notexch = 'TOKEN EXCHANGE NOT ALLOWED AT THIS TIME';
const hi_alert_notsell = 'TOKEN SELLING NOT ALLOWED AT THIS TIME';
const hi_alert_nottran = 'TOKEN TRANSFER NOT ALLOWED AT THIS TIME';
////////////////////////////////////////////////////////////
const hi_alert_notregs = 'YOU ARE REGISTERED USER PLEASE CLICK OK TO CONTINUE';
const hi_alert_yestran = 'PLEASE STOP TOKEN TRANSFER ALLOWANCE';
////////////////////////////////////////////////////////////
const hi_alert_address = 'ADDRESS INVALID';
const hi_alert_badpair = 'VALUE PAIR INVALID';
const hi_alert_balance = 'AMOUNT INVALID OR BALANCE NOT ENOUGH';
const hi_alert_lessval = 'AMOUNT INVALID';
const hi_alert_moreval = 'BALANCE NOT ENOUGH';
const hi_alert_noether = 'YOU HAVE NO ETHERS TO MAKE TRANSACTIONS';
////////////////////////////////////////////////////////////
const hi_alert_ethfund = 'ETH-PAY-FUND NOT ENOUGH OR AMOUNT INVALID';
const hi_alert_xutfund = 'XUT-MAX-BUY VOLUME EXCEEDED OR AMOUNT INVALID';
////////////////////////////////////////////////////////////
const hi_alert_lessamt = 'AMOUNT IS LESS THAN SYSTEM FEE';
const hi_alert_moreamt = 'AMOUNT IS HIGHER THAN YOUR BALANCE';
const hi_alert_nocheck = 'CHECKS FAILED PLEASE TRY LATER';
const hi_alert_noindex = 'ITEM INDEX IS OUT OF BOND';
////////////////////////////////////////////////////////////
const hi_alert_kstcopy = 'THE TEXT WAS COPIED';
////////////////////////////////////////////////////////////
﻿////////////////////////////////////////////////////////////
const hi_prompt_setpwd = 'PLEASE ENTER AND KEEP A PASSWORD TO CREATE AND UNLOCK YOUR ACCOUNT';
const hi_prompt_impkey = 'YOU ARE ABOUT TO IMPORT AN EXISTING ACCOUNT WITH ITS PRIVATE KEY';
////////////////////////////////////////////////////////////
const hi_alert_savepwd = 'PLEASE KEEP YOUR PRIVATE KEY AND PASSWORD ABSOLUTELY SECRET FROM ANYBODY';
const hi_alert_savekey = 'DON"T FORGET TO SAVE YOUR KEYSTORE FOR FUTURE USE';
const hi_alert_imptkey = 'ACCOUNT HAS BEEN IMPORTED PLEASE SAVE YOUR KEYSTORE';
////////////////////////////////////////////////////////////
const rem_createnewkey = 'ETHEREUM ADDRESS';
const rem_ncprivatekey = '';
const rem_imprivatekey = '';
const rem_exprivatekey = '';
////////////////////////////////////////////////////////////
﻿////////////////////////////////////////////////////////////
const hi_warn_authorsdoc = 'Warning: a document stores partial content outside blockchains';
const hi_warn_publicnote = 'Warning: a note costs much less but cannot attach money button';
const hi_warn_addrdomain = 'Warning: a domain has its expiry date that requires paying fee';
const hi_warn_pubprofile = 'Warning: a user public profile cannot be modified once created';
const hi_warn_obdraftdoc = 'Warning: a draft stores its whole content outside blockchains';
////////////////////////////////////////////////////////////
const hi_alert_nocookies = 'THERE IS NO DATA STORED IN COOKIES';
const hi_alert_cookieset = 'THE DATA IS BEING STORED IN COOKIES';
const hi_alert_cookiedel = 'THE DATA HAS BEEN REMOVED FROM COOKIES';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const CANCELED='CANCELED\t';
const CHECKED='CHECKED\t';
const DONE='DONE\t';
const ERROR='ERROR\t';
const FAILED='FAILED\t';
const FOUND='FOUND\t';
const INVALID='INVALID\t';
const OK='OK\t';
const UNCHECKED='UNCHECKED\t';
const UNKNOWN='UNKNOWN\t';
const ALERTS={en:{CANCELED,CHECKED,DONE,ERROR,FAILED,FOUND,INVALID,OK,UNCHECKED,UNKNOWN}};
////////////////////////////////////////////////////////////
const DOCGASPRICE='<a href="https://asinerum.github.io/project/doc/ethereum/gasprice" target="_blank">GAS PRICE</a>';
const DOCGASLIMIT='<a href="https://asinerum.github.io/project/doc/ethereum/gaslimit" target="_blank">GAS LIMIT</a>';
const DOCETXNONCE='<a href="https://asinerum.github.io/project/doc/ethereum/nonce" target="_blank">TX NONCE</a>';
const DOCBTCINPUT='<a href="https://asinerum.github.io/project/doc/bitcoin/inputs" target="_blank">INPUT DATA</a>';
const DOCBTCTXFEE='<a href="https://asinerum.github.io/project/doc/bitcoin/fee" target="_blank">FEE</a>';
////////////////////////////////////////////////////////////
const CAPCLASSTOKEN='<span class="token">TOKEN</span>';
const CAPCLASSCOIN='<span class="coin">COIN</span>';
const CAPNODISCLOS='<span class="textwarn">without disclosing</span>';
const CAPBIP38EKEY='<span class="textwarn">bip38 encrypted key</span>';
const LNKITLICENSE='<a href="https://asinerum.github.io/project/LICENSE" target="_blank">MIT LICENSE</a>';
const LNKBTCPUSHTX='<a href="https://www.blockchain.com/btc/pushtx" target="_blank">broadcasting services</a>';
const LNKETHPUSHTX='<a href="https://etherscan.io/pushtx" target="_blank">broadcasting services</a>';
const LNKGITWALLET='<a href="https://asinerum.github.io/project/wallet" target="_blank">github repository</a>';
const LNKBTCWALLET='<a href="https://api.blockcypher.com/v1/btc/main/addrs/1CXsNnd148Dv7Nj9p4oTBYkVJ8NDvghac5" target="_blank">transaction input</a>';
const LNKETHWALLET='<a href="https://etherscan.io/address/0x537ca62B4c232af1ef82294BE771B824cCc078Ff" target="_blank">transactions listing</a>';
const LNKETHGASFEE='<a href="https://etherscan.io/gastracker" target="_blank">transaction cost</a>';
const LNKUSERNONCE='<a href="https://kb.myetherwallet.com/en/transactions/what-is-nonce" target="_blank">transaction nonce</a>';
const LNKEXOFFLINE='<a href="https://asinerum.github.io/project/raweth">offline approach</a>';
const LNKBXOFFLINE='<a href="https://asinerum.github.io/project/rawbit">offline approach</a>';
const NOTEEXGASFEE='EXCLUDING GAS FEE';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const PLACES={en:{
dig_in_nonce: `manual nonce`,
dig_keystore: `keystore or private key`,
dig_passcode: `password to unlock wallet`,
dig_wait: `waiting time in minutes`,
pro_id: `Guess the secret number`,
pro_id_mine: `Enter the nonce number`,
pro_buy_id: `Offer ID`,
pro_buy_gemt: `Amount of TOKEN$ to buy`,
pro_sell_id: `Order ID`,
pro_sell_gemt: `Amount of TOKEN$ to sell`,
pro_sell_conv: `Number of Coin$ to receive`,
pro_program_id: `Program Unique ID`,
pro_program_apr: `Annual Percentage Rate {%}`,
pro_program_gemt: `Initial Deposit {TOKEN$}`,
pro_invest_id: `Program ID`,
pro_invest_gemt: `Amount to invest {TOKEN$}`,
pro_offer_id: `Offer Unique ID`,
pro_offer_apr: `Price: TOKEN$ per one Coin$`,
pro_offer_rev: `Price: Coin$ per one TOKEN$`,
pro_offer_age: `Live sale expires in {days}`,
pro_offer_gemt: `Amount of TOKEN$ to offer`,
pro_order_id: `Order Unique ID`,
pro_order_apr: `Price: TOKEN$ per one Coin$`,
pro_order_rev: `Price: Coin$ per one TOKEN$`,
pro_order_age: `Purchase expires in {days}`,
pro_order_gemt: `Amount of TOKEN$ to order`,
pro_order_conv: `Number of Coin$ to deposit`,
}}//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const LABELS={en:{
_button_AuthAccExp: `EXPORT PRIVATE KEY`,
_button_AuthAccImp: `IMPORT PRIVATE KEY`,
_button_AuthAccNew: `CREATE NEW`,
_button_AuthCokDel: `DEL COOKIE/`,
_button_AuthCokGet: `GET COOKIE/`,
_button_AuthCokSet: `SET COOKIE/`,
_button_AuthCpyKst: `COPY THIS/`,
_button_AuthCpyExp: `COPY THIS KEY`,
_button_AuthCpyKey: `COPY THIS KEY`,
_button_AuthCpySig: `COPY THIS SIGNATURE`,
_button_AuthKstDec: `UNLOCK`,
_button_AuthPayBnb: `SEND BNB`,
_button_AuthPayEtc: `SEND ETC`,
_button_AuthPayEth: `SEND ${CAPCLASSCOIN}`,
_button_AuthPayXut: `SEND XUT`,
_button_AuthSigSig: `SIGN`,
_button_AuthSigVer: `VERIFY`,
_button_BipDecrypt: `DECRYPT`,
_button_BipEncrypt: `ENCRYPT`,
_button_BipeAccNew: `CREATE`,
_button_BuyOfr: `BUY NOW`,
_button_DisBuy: `STOP THIS REQUEST`,
_button_DisSel: `STOP THIS OFFER`,
_button_EthXut: `BUY NOW`,
_button_GameDocSet: `PUBLISH`,
_button_GameGoUser: `OWNER ADDRESS`,
_button_GameResult: `GAME RESULT`,
_button_GameTxAddr: `GAME ADDRESS`,
_button_GameTxPlay: `PAY TO PLAY`,
_button_GameTxView: `GAME HASH`,
_button_GetBuy: `BUYING REQUEST#`,
_button_GetOfr: `SELLER OFFER#`,
_button_GetReq: `BUYER REQUEST#`,
_button_GetSel: `SELLING OFFER#`,
_button_GoUser: `USER ADDRESS`,
_button_RawCopyApi: `COPY PROXY LINK`,
_button_RawCopyCmd: `COPY CURL COMMAND`,
_button_RawCopyHex: `COPY HEX DATA`,
_button_RawPushBtc: `GET CURL COMMAND`,
_button_RawPushEth: `GET PROXY LINK`,
_button_RawTxDoEth: `GENERATE TXHEX`,
_button_SelReq: `SELL NOW`,
_button_SetBuy: `POST THIS REQUEST`,
_button_SetFee: `SET MEMBER FEE`,
_button_SetSel: `POST THIS OFFER`,
_button_SysReg: `PAY TO REGISTER`,
_button_UserAaAddr: `ASSIGN`,
_button_UserAAlias: `ADDRESS ALIAS`,
_button_UserDocSet: `POST`,
_button_UserDomain: `DOMAIN NAME`,
_button_UserDomReg: `REGISTER`,
_button_UserGetDom: `GET DOMAIN`,
_button_UserGetPro: `GET PROFILE`,
_button_UserGoUser: `ADDRESS OR ALIAS`,
_button_UserPayEth: `SEND ${CAPCLASSCOIN}`,
_button_UserPayXut: `SEND XUT`,
_button_UserSetDom: `SET DOMAIN`,
_button_UserSetPro: `SET PROFILE`,
_button_UserTxView: `TRANSACTION HASH`,
_button_XutXut: `SELL NOW`,
_header_account: `CREATING OR IMPORTING A PRIVATE KEY`,
_header_alias: `ASSIGNING AN ADDRESS ALIAS`,
_header_allow: `XUTENG TRANSFER PERMISSION`,
_header_author: `USER INFORMATION AND STATS`,
_header_BipAccount: `CREATING A PERMANENT ACCOUNT`,
_header_BipDecrypt: `DECRYPTING AN ENCRYPTED KEY`,
_header_BipEncrypt: `ENCRYPTING AN ORIGINAL PRIVATE KEY`,
_header_BipProject: `APPLICATION DESCRIPTION`,
_header_BipUnlock: `SELECTING NETWORK AND DECRYPTING KEYSTORE`,
_header_BipDecode: `UNLOCKING PAPER WALLET`,
_header_BipPrereq: `BEFORE YOU BEGIN`,
_header_BipTarget: `APPLICATION MISSION`,
_header_RawTxData: `GENERATING TRANSACTION DATA`,
_header_RawTxInput: `ENTERING TRANSACTION INPUTS`,
_header_buy: `DIRECTLY BUYING XUTENG FROM SYSTEM FUND`,
_header_buyfrom: `BUYING XUTENG FROM ANOTHER USER`,
_header_buying: `REVIEWING A BUYING REQUEST`,
_header_copyright: `(C)2019 ASINERUM INTERNATIONAL PROJECT`,
_header_cost: `${CAPCLASSCOIN} TRANSACTION COST`,
_header_costBnb: `BNB TRANSACTION COST`,
_header_costEtc: `ETC TRANSACTION COST`,
_header_doc: `POSTING A VALUED DOCUMENT`,
_header_docgame: `PUBLISHING A XUTENG GAME`,
_header_domain: `REGISTERING A DOMAIN NAME`,
_header_game: `GAME INFORMATION`,
_header_gamer: `GAME OWNER INFORMATION AND STATS`,
_header_keystore: `SELECTING NETWORK AND UNLOCKING KEYSTORE`,
_header_profile: `PERSONAL PROFILE AND DOMAIN`,
_header_rate: `XUTENG OFFICIAL EXCHANGE RATE`,
_header_register: `REGISTERING AS A LEVELED USER`,
_header_review: `REVIEWING A TRANSACTION`,
_header_reviewgame: `REVIEWING A PUBLISHED GAME`,
_header_sell: `DIRECTLY SELLING XUTENG TO SYSTEM FUND`,
_header_selling: `REVIEWING A SELLING OFFER`,
_header_sellto: `SELLING XUTENG TO ANOTHER USER`,
_header_sender: `PERSONAL INFORMATION AND STATS`,
_header_sendeth: `PERSONAL ${CAPCLASSCOIN} BALANCE`,
_header_sendBnb: `PERSONAL BNB BALANCE`,
_header_sendEtc: `PERSONAL ETC BALANCE`,
_header_sign: `SIGNING AND VERIFYING A MESSAGE`,
_header_stats: `XUTENG MARKETPLACE STATS`,
_header_system: `XUTENG SYSTEM OVERVIEWS`,
_header_tobuy: `REQUESTING TO BUY XUTENG`,
_header_tosell: `OFFERING TO SELL XUTENG`,
_header_transfer: `PERSONAL XUTENG BALANCE`,
_header_user: `ANOTHER USER INFORMATION AND STATS`,
_header_usereth: `SENDING ${CAPCLASSCOIN} WITH NOTE`,
_header_userxut: `SENDING XUTENG WITH NOTE`,
_label_AllowToBuy: `USER CAN BUY`,
_label_AllowToSel: `USER CAN SELL`,
_label_AllowToTrs: `USER TRANSFER`,
_label_AllowToTrx: `USER EXCHANGE`,
_label_AuthAccKey: `NEW PRIVATE KEY`,
_label_AuthAdrBnb: `BNB RECIPIENT`,
_label_AuthAdrEtc: `ETC RECIPIENT`,
_label_AuthAdrEth: `${CAPCLASSCOIN} RECIPIENT`,
_label_AuthAdrXut: `XUT RECIPIENT`,
_label_AuthGasMax: `${DOCGASLIMIT}`,
_label_AuthGasWei: `${DOCGASPRICE}`,
_label_AuthKstNet: `NETWORK`,
_label_AuthKstPwd: `PASSWORD`,
_label_AuthKstRpc: `RPC SERVER`,
_label_AuthKstore: `V3 KEYSTORE`,
_label_AuthorAddr: `ETHEREUM WALLET`,
_label_AuthorAWeb: `WEBCOIN WALLET`,
_label_AuthSigMsg: `MESSAGE`,
_label_AuthSigUsr: `SIGNATORY ADDRESS`,
_label_AuthSumBnb: `BNB BALANCE`,
_label_AuthSumEtc: `ETC BALANCE`,
_label_AuthSumEth: `${CAPCLASSCOIN} BALANCE`,
_label_AuthSumXut: `XUT BALANCE`,
_label_BipAdAbout: `ABOUT`,
_label_BipAdPrBtc: `BTC DONATION`,
_label_BipAdPrEth: `ETH & BNB DONATION`,
_label_BipAdPrWeb: `WEB DONATION`,
_label_BipAdPrLtc: `LTC DONATION`,
_label_BipAdPrDsh: `DASH DONATION`,
_label_BipAdPrDog: `DOGE DONATION`,
_label_BipAdRight: `COPYRIGHT`,
_label_BipAdUsage: `USAGE`,
_label_BipCaution: `CAUTION`,
_label_BipeAccBtc: `BITCOIN WALLET`,
_label_BipeAccEth: `ETHEREUM WALLET`,
_label_BipeAccWeb: `WEBCOIN WALLET`,
_label_BipeAccHex: `ETH/WEB PRIVATE KEY`,
_label_BipeAccKey: `BTC PRIVATE KEY`,
_label_BipeDecBip: `BIP38 ENCRYPTED KEY`,
_label_BipeDecPwd: `PASSCODE TO DECRYPT`,
_label_BipeEncBip: `BIP38 ENCRYPTED KEY`,
_label_BipeEncPwd: `PASSCODE TO ENCRYPT`,
_label_BipeExpBtc: `BITCOIN WALLET`,
_label_BipeExpEth: `ETHEREUM WALLET`,
_label_BipeExpWeb: `WEBCOIN WALLET`,
_label_BipeExpHex: `ETH/WEB PRIVATE KEY`,
_label_BipeExpKey: `BTC PRIVATE KEY`,
_label_BipeOldBtc: `BITCOIN WALLET`,
_label_BipeOldEth: `ETHEREUM WALLET`,
_label_BipeOldWeb: `WEBCOIN WALLET`,
_label_BipeOldKey: `BTC/ETH PRIVATE KEY`,
_label_BipPrereqHead: `!`,
_label_BipTargetHead: `!`,
_label_BipWarning: `WARNING`,
_label_Buying0Xut: `YOUR XUT BALANCE`,
_label_Buying1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Buying2Adr: `SELLER ADDRESS`,
_label_Buying4Tpe: `EXCHANGE RATE`,
_label_Buying5Dep: `SELLER DEPOSIT`,
_label_Buying6Num: `SYSTEM COUNT`,
_label_Buying7Get: `XUT TO BUY`,
_label_Buying8Pay: `${CAPCLASSCOIN} TO PAY`,
_label_Counts0Buy: `REQUESTS TO BUY`,
_label_Counts1Sel: `OFFERS TO SELL`,
_label_GameDocDat: `GAME HEADER`,
_label_GameDocMax: `MAXIMUM BET`,
_label_GameDocMin: `MINIMUM BET`,
_label_GameDocFrm: `GAME FORMAT`,
_label_GameDocRew: `ODDS/REWARDS`,
_label_GameDocUtc: `GAME CLOSING TIME`,
_label_GameDocUts: `GAME TIMESTAMP`,
_label_GameTxAddr: `GAME ADDRESS`,
_label_GameTxData: `GAME DATA`,
_label_GameTxHash: `GAME HASH`,
_label_GameTxInfo: `SPECIAL INFO`,
_label_GameTxNote: `SYSTEM WARNING`,
_label_GameTxOArr: `PLAY OPTIONS`,
_label_GameTxOpts: `PLAY OPTION`,
_label_Ofrsel0Xut: `YOUR XUT BALANCE`,
_label_Ofrsel1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Ofrsel1Tpe: `EXCHANGE RATE`,
_label_Ofrsel2Cnt: `POSTED OFFERS`,
_label_Ofrsel2Dep: `XUT DEPOSITED`,
_label_Ofrsel3Fee: `POSTING FEE`,
_label_Ofrsel4Ask: `EXPECTED RATE`,
_label_Ofrsel5Pay: `XUT TO DEPOSIT`,
_label_Ofrsel6Rec: `${CAPCLASSCOIN} TO RECEIVE`,
_label_RawBxCAddr: `CHANGE ADDRESS`,
_label_RawBxChain: `BITCOIN CHAIN ID`,
_label_RawBxInput: `ACCOUNT ${DOCBTCINPUT}`,
_label_RawBxPrice: `TRANSACTION ${DOCBTCTXFEE}`,
_label_RawTxChain: `ETHEREUM CHAIN ID`,
_label_RawTxEther: `AMOUNT TO BE SENT`,
_label_RawTxLimit: `${DOCGASLIMIT} USAGE`,
_label_RawTxNonce: `ACCOUNT ${DOCETXNONCE}`,
_label_RawTxOpMsg: `MESSAGE: OPTIONAL`,
_label_RawTxPrice: `${DOCGASPRICE} IN GWEI`,
_label_RawTxRecvr: `RECIPIENT ADDRESS`,
_label_RawTxToken: `BCYPHER API KEY`,
_label_Reqbuy0Xut: `YOUR XUT BALANCE`,
_label_Reqbuy1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Reqbuy1Tpe: `EXCHANGE RATE`,
_label_Reqbuy2Cnt: `POSTED REQUESTS`,
_label_Reqbuy2Dep: `${CAPCLASSCOIN} DEPOSITED`,
_label_Reqbuy3Fee: `POSTING FEE`,
_label_Reqbuy4Ask: `EXPECTED RATE`,
_label_Reqbuy5Rec: `XUT TO RECEIVE`,
_label_Reqbuy6Pay: `${CAPCLASSCOIN} TO DEPOSIT`,
_label_Seling0Xut: `YOUR XUT BALANCE`,
_label_Seling1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Seling2Adr: `BUYER ADDRESS`,
_label_Seling4Tpe: `EXCHANGE RATE`,
_label_Seling5Dep: `BUYER DEPOSIT`,
_label_Seling6Num: `SYSTEM COUNT`,
_label_Seling7Pay: `XUT TO SELL`,
_label_Seling8Get: `${CAPCLASSCOIN} TO GET`,
_label_Sender0Buy: `REQUESTS TO BUY`,
_label_Sender1Sel: `OFFERS TO SELL`,
_label_Sender2Msg: `MESSAGES`,
_label_Sender3Rol: `ROLE`,
_label_Sender4Rnk: `RANK`,
_label_Sender5Lvl: `LEVEL`,
_label_Sender6Mem: `MEMBERS`,
_label_Sender7Fee: `MEMBER FEE`,
_label_Sys0TpeSel: `SELLING RATE`,
_label_Sys1TpeBuy: `BUYING RATE`,
_label_Sysbuy0Xut: `YOUR XUT BALANCE`,
_label_Sysbuy1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Sysbuy2Tpe: `EXCHANGE RATE`,
_label_Sysbuy3Max: `XUT MAX BUY`,
_label_Sysbuy4Get: `XUT TO BUY`,
_label_Sysbuy5Pay: `${CAPCLASSCOIN} TO PAY`,
_label_Sysreg0Xut: `YOUR XUT BALANCE`,
_label_Sysreg1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Sysreg2Lvl: `YOUR CURRENT LEVEL`,
_label_Sysreg3Exp: `EXPIRATION TIME`,
_label_Sysreg4Fee: `REGISTER FEE`,
_label_Sysreg5Amt: `REGISTER AMOUNT`,
_label_Syssel0Xut: `YOUR XUT BALANCE`,
_label_Syssel1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Syssel2Tpe: `EXCHANGE RATE`,
_label_Syssel3Max: `${CAPCLASSCOIN} PAY FUND`,
_label_Syssel4Pay: `XUT TO SELL`,
_label_Syssel5Get: `${CAPCLASSCOIN} TO GET`,
_label_Tok0IdName: `NAME`,
_label_Tok1Symbol: `SYMBOL`,
_label_Tok2Supply: `TOTAL SUPPLY`,
_label_Tok3SysXut: `TOKENS FOR SALE`,
_label_Tok4SysEth: `${CAPCLASSCOIN} BALANCE`,
_label_UserAaAddr: `ASSIGNED ADDRESS`,
_label_UserAaHash: `ALIAS HASH`,
_label_UserAaTxhs: `ACTION HASH`,
_label_UserAaType: `ADDRESS TYPE`,
_label_UserAaUser: `OWNER`,
_label_UserDocDat: `NAME OR HEADER`,
_label_UserDocFrm: `DOC FORM`,
_label_UserDocMax: `MAX DEPOSIT`,
_label_UserDocMin: `MIN DEPOSIT`,
_label_UserDocRew: `REWARDS`,
_label_UserDocTyp: `DOC TYPE`,
_label_UserDocUtc: `DOCUMENT TIME`,
_label_UserDocUts: `DOC TIMESTAMP`,
_label_UserDomain: `DOMAIN NAME`,
_label_UserDomEth: `${CAPCLASSCOIN} TO PAY`,
_label_UserDomIpa: `IP`,
_label_UserDomRef: `NOTE`,
_label_UserDrAddr: `IP`,
_label_UserDrExpt: `EXPIRATION`,
_label_UserDrNote: `NOTE`,
_label_UserDrUser: `OWNER`,
_label_UserExAddr: `OWNER WALLET`,
_label_UserExFile: `USER PROFILE`,
_label_UserExHome: `USER DOMAIN`,
_label_UserPsName: `SCREEN NAME`,
_label_UserPsText: `FILE`,
_label_UserPstyle: `STYLE`,
_label_UserRefEth: `NOTE TO RECIPIENT`,
_label_UserRefXut: `NOTE TO RECIPIENT`,
_label_UserTgtXut: `RECIPIENT WALLET`,
_label_UserTgtEth: `RECIPIENT WALLET`,
_label_UserTxAddr: `STORAGE ADDRESS`,
_label_UserTxData: `SENDER DATA`,
_label_UserTxNote: `SENDER NOTE`,
_label_Wallet1Xut: `XUT BALANCE`,
_label_Wallet2Eth: `${CAPCLASSCOIN} BALANCE`,
_label_Wallet3Req: `REQUESTS TO BUY`,
_label_Wallet4Ofr: `OFFERS TO SELL`,
_label_Wallet5Rol: `ROLE`,
_label_Wallet6Rnk: `RANK`,
_label_Wallet7Lvl: `LEVEL`,
_label_Wallet8Mem: `MEMBERS`,
_label_Wallet9Fee: `MEMBER FEE`,
_note_BipAccount: `BE SURE THAT NOBODY CAN SEE YOUR SCREEN THEN CLICK CREATE`,
_note_BipAdAbout: `CLIENT SIDE PAPER WALLET GENERATOR`,
_note_BipAdRight: `FREE TO USE UNDER ${LNKITLICENSE}`,
_note_BipAdUsage: `PAGES SHOULD BE SAVED AND SEEN OFFLINE`,
_note_BipCaution: `PRIVATE KEYS MUST BE KEPT SAFE AND SECRET`,
_note_BipEncrypt: `TIPS: ENCRYPTED KEY SHOULD BE PRINTED TO PAPER`,
_note_BipBxAbout: `OFFLINE BITCOIN RAW TRANSACTION GENERATOR`,
_note_BipExAbout: `OFFLINE ETHEREUM RAW TRANSACTION GENERATOR`,
_note_BipTxAbout: `INDEPENDENT RAW TRANSACTION GENERATOR`,
_note_BipWarning: `PASSCODE CAN BE NEITHER RESTORED NOR RESET`,
_note_BuyOfr: `${NOTEEXGASFEE}`,
_note_DisBuy: `${NOTEEXGASFEE}`,
_note_DisSel: `${NOTEEXGASFEE}`,
_note_EthXut: `${NOTEEXGASFEE}`,
_note_BtcAbout: `This applet has been created for bitcoin professionals to send bitcoins [with change amount sent back to sender] from their paper wallet to another wallet ${CAPNODISCLOS} the wallet's private key by generating transaction's raw data and push it over bitcoin network using free ${LNKBTCPUSHTX};`,
_note_EthAbout: `This applet has been created for ethereum professionals to send ethers or erc-tokens from their paper wallet to another wallet ${CAPNODISCLOS} the wallet's private key by generating transaction's raw data and push it over ethereum network using free ${LNKETHPUSHTX};`,
_note_BtcBegin: `First, you do be sure that you have your own paper wallet already with its ${CAPBIP38EKEY} and the very decrypting passcode; In case of having none, you are suggested to try our tool at ${LNKGITWALLET};<br/>Second, a stable internet connection is required to get ${LNKBTCWALLET}, otherwise you may take the ${LNKBXOFFLINE};`,
_note_EthBegin: `First, you do be sure that you have your own paper wallet already with its ${CAPBIP38EKEY} and the very decrypting passcode; In case of having none, you are suggested to try our tool at ${LNKGITWALLET};<br/>A stable internet connection is required to get ${LNKETHGASFEE} and ${LNKUSERNONCE}, otherwise you may take the ${LNKEXOFFLINE};`,
_note_GameDocSet: `${NOTEEXGASFEE}`,
_note_GameTxNote: `THIS GAME IS OWNED AND MANAGED BY ITS VERY OWNER<br/>SO PEOPLE PLEASE BE AWARE OF SCAMMING BEHAVIOURS`,
_note_SelReq: `${NOTEEXGASFEE}`,
_note_SetBuy: `${NOTEEXGASFEE}`,
_note_SetSel: `${NOTEEXGASFEE}`,
_note_SysReg: `${NOTEEXGASFEE}`,
_note_UserAaAddr: `${NOTEEXGASFEE}`,
_note_UserDocSet: `${NOTEEXGASFEE}`,
_note_UserDomReg: `${NOTEEXGASFEE}, USERS ONLY`,
_note_UserSetDom: `${NOTEEXGASFEE}`,
_note_UserSetPro: `${NOTEEXGASFEE}`,
_note_XutXut: `${NOTEEXGASFEE}`,///
_button_AuthPayAgr: `SEND ALGO`,
_button_AuthPaySol: `SEND SOL`,
_header_AgrUnlock: `SELECT ALGORAND API ENDPOINT AND DECRYPT KEYSTORE`,
_header_SolUnlock: `SELECT SOLANA API ENDPOINT AND DECRYPT KEYSTORE`,
_header_sendAgr: `PERSONAL ALGORAND BALANCE`,
_header_sendSol: `PERSONAL SOLANA BALANCE`,
_label_AuthAdrAgr: `ALGO RECIPIENT`,
_label_AuthAdrSol: `SOL RECIPIENT`,
_label_AuthKstApi: `API KEY`,
_label_AuthKstIdx: `INDEX SERVER`,
_label_AuthSumAgr: `ALGO BALANCE`,
_label_AuthSumSol: `SOL BALANCE`,
_label_Bip2AccKey: `SOLANA PRIVATE KEY`,
_label_Bip2AccSol: `SOLANA WALLET`,
_label_Bip2ExpKey: `SOLANA PRIVATE KEY`,
_label_Bip2ExpSol: `SOLANA WALLET`,
_label_Bip2OldKey: `SOLANA PRIVATE KEY`,
_label_Bip2OldSol: `SOLANA WALLET`,
_label_Bip3AccAgr: `ALGORAND WALLET`,
_label_Bip3AccKey: `ALGORAND PRIVATE KEY`,
_label_Bip3ExpAgr: `ALGORAND WALLET`,
_label_Bip3ExpKey: `ALGORAND PRIVATE KEY`,
_label_Bip3OldAgr: `ALGORAND WALLET`,
_label_Bip3OldKey: `ALGORAND PRIVATE KEY`,
_label_BipAdPrAgr: `ALGORAND DONATION`,
_label_BipAdPrSol: `SOLANA DONATION`,///
_button_dig_DefiJoin: `UNLOCK WALLET`,
_button_dig_DefiLoad: `RELOAD STATUS`,
_button_dig_DefiMine: `START AUTO MINE`,
_button_dig_DefiSend: `MINE WITH NONCE`,
_button_dig_DefiNonce: `CALCULATE NONCE`,
_button_hack_DefiProgJoin: `START`,
_button_offer_DefiProgJoin: `BUY`,
_button_offer_DefiProgOpen: `CREATE OFFER`,
_button_offer_DefiProgStop: `CANCEL OFFER`,
_button_offers_DefiProgNext: `MORE RESULTS`,
_button_order_DefiProgJoin: `SELL`,
_button_order_DefiProgOpen: `CREATE ORDER`,
_button_order_DefiProgStop: `CANCEL ORDER`,
_button_orders_DefiProgNext: `MORE RESULTS`,
_button_program_DefiProgDraw: `HALF REDEEM`,
_button_program_DefiProgGain: `REDEEM`,
_button_program_DefiProgJoin: `INVEST`,
_button_program_DefiProgOpen: `CREATE PROGRAM`,
_button_program_DefiProgStop: `STOP PROGRAM`,
_label_dig_DefiAddress: `Wallet`,
_label_dig_DefiAmt: `Balance`,
_label_dig_DefiSum: `Supply`,
_label_dig_DefiLastMine: `Last mine`,
_label_dig_DefiLastRate: `Mine depth`,
_label_dig_DefiNonce: `Nonce`,
_label_dig_panelHeader: `JS MOBILE MINER`,
_label_hack_DefiProgAmt: `My balance`,
_label_hack_DefiProgSum: `Total supply`,
_label_hack_panelHeader: `JS HACKING MACHINE`,
_label_hack_panelHeaderMine: `JS MINING MACHINE`,
_label_offer_DefiProgAge: `Sale expires in`,
_label_offer_DefiProgAPR: `${CAPCLASSCOIN}/${CAPCLASSTOKEN} price`,
_label_offer_DefiProgOwn: `Supplier`,
_label_offer_DefiProgSum: `${CAPCLASSTOKEN} supply`,
_label_offer_investor: `${CAPCLASSTOKEN} PURCHASE`,
_label_offer_programer: `${CAPCLASSTOKEN} OFFER`,
_label_offers_DefiProgAge: `Sale expires in`,
_label_offers_DefiProgAPR: `${CAPCLASSCOIN}/${CAPCLASSTOKEN} price`,
_label_offers_DefiProgOwn: `Supplier`,
_label_offers_DefiProgSum: `${CAPCLASSTOKEN} supply`,
_label_offers_panelHeader: `${CAPCLASSTOKEN} OFFERS`,
_label_order_DefiProgAge: `Purchase expires in`,
_label_order_DefiProgAPR: `${CAPCLASSCOIN}/${CAPCLASSTOKEN} price`,
_label_order_DefiProgOwn: `Depositor`,
_label_order_DefiProgSum: `${CAPCLASSCOIN} deposit`,
_label_order_investor: `${CAPCLASSTOKEN} SALE`,
_label_order_programer: `${CAPCLASSTOKEN} ORDER`,
_label_orders_DefiProgAge: `Purchase expires in`,
_label_orders_DefiProgAPR: `${CAPCLASSCOIN}/${CAPCLASSTOKEN} price`,
_label_orders_DefiProgOwn: `Depositor`,
_label_orders_DefiProgSum: `${CAPCLASSCOIN} deposit`,
_label_orders_panelHeader: `${CAPCLASSTOKEN} ORDERS`,
_label_program_DefiProgAge: `Age`,
_label_program_DefiProgAgi: `My investment age`,
_label_program_DefiProgAmt: `My invested sum`,
_label_program_DefiProgAPR: `APR {%}`,
_label_program_DefiProgOwn: `Owner`,
_label_program_DefiProgSum: `Balance`,
_label_program_investor: `INVESTOR'S PANEL`,
_label_program_programer: `PROGRAMER'S PANEL`,
}}//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const hi_alert_metamasks = 'YOU NEED METAMASK PLUGIN TO RUN THIS APP';
const hi_alert_ismainnet = 'THE MAIN ETHEREUM NETWORK IS BEING CONNECTED';
const hi_alert_nomainnet = 'PLEASE SWITCH TO THE MAIN NETWORK USING METAMASK PLUGIN';
const hi_alert_accdenied = 'YOU HAVE DENIED CONNECTION TO ETHEREUM NETWORK VIA METAMASK';
const hi_alert_checkcost = 'PLEASE CHECK THE GAS BEFORE CONFIRMING TRANSACTION';
const hi_alert_netchange = 'ETHEREUM NETWORK HAS JUST BEEN CHANGED';
////////////////////////////////////////////////////////////

