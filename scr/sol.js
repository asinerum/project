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