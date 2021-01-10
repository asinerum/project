////////////////////////////////////////////////////////////
const ABIERC20=[
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
////////////////////////////////////////////////////////////
const EXTOKENS={
usdc:{dec:6,addr:'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',abi:ABIERC20},
usdt:{dec:6,addr:'0xdac17f958d2ee523a2206206994597c13d831ec7',abi:ABIERC20},
exec:{dec:18,addr:'0x28e5fe0ad29597dc290c055eef59c4f582a7a056',abi:ABIERC20},
left:{dec:18,addr:'0x4244f169be509aa6f0a49e537d1bd89800451264',abi:ABIERC20},
nemt:{dec:18,addr:'0x208871E7f29C0C0e131Dc275f1FCfc9e73C2b06e',abi:ABIERC20},
gemt:{dec:18,addr:'0x4f8e54e2e840561e5aa8a296ad5f7b0ae18e6eff',abi:ABIERC20},
femt:{dec:18,addr:'0x17634BDcC40c6Bad899D4bB0d825641ec8370f1D',abi:ABIERC20},
xut:{dec:18,addr:'0x872Bc37697f45526fc0C960E19654c8714dB6957',abi:ABIERC20}};
////////////////////////////////////////////////////////////