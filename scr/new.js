////////////////////////////////////////////////////////////[7]
const _Time=function(){return(new Date().getTime())};
const _Array=function(size){return(new Array(size))};
const _Random=function(){return(new SecureRandom())};
const _Integer=function(dat,base){return(new BigInteger(dat,base))};
const _Address=function(hash){return(new Bitcoin.Address(hash))};
const _ECKey=function(key){return(new Bitcoin.ECKey(key))};
const _QRCode=function(typ,ec){return(new QRCode(typ,ec))};
////////////////////////////////////////////////////////////[8]
const _Set=function(val){return(new Set(val))};
const _Date=function(val){return(new Date(val))};
const _Regex=function(pat){return(new RegExp(pat))};
const _Uint8=function(val){return(new Uint8Array(val))};
const _Option=function(txt,val){return(new Option(txt,val))};
const _Promise=function(res,rej){return(new Promise(res,rej))};
const _Encoder=function(code='utf-8'){return(new TextEncoder(code))};
const _Decoder=function(code='utf-8'){return(new TextDecoder(code))};
////////////////////////////////////////////////////////////[6]
const big=function(val){return(new web3.utils.BN(val))};
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