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