const catFile = 'xuteng12.js'; //Total:39;
const msgFile = 'xutmsg12.js'; //Total:4;
////
const catList = [
 'abis.js',
 'abis-lot.js',
 'babies.js',
 'base.js',
 'consts.js',
 'consts.web.js',
 'consts-author.js',
 'consts-author.web.js',
 'consts-dat.js',
 'consts-lot.js',//10
 'consts-net.js',
 'consts-user.js',
 'consts-user.web.js',
 'consts-userdat.js',
 'ethercall.js',
 'ethercall-author.js',
 'ethercall-lot.js',
 'ethercall-user.js',
 'ethercallpro.js',
 'ethersend.js',//20
 'ethersend-user.js',
 'ethersendpro.js',
 'ethersendpro-lot.js',
 'forms.js',
 'forms.web.js',
 'forms-lot.js',
 'gapgui.js',
 'gaps.js',
 'gui.js',
 'gui-author.js',//30
 'gui-lot.js',
 'gui-user.js',
 'guidat.js',
 'guidat-author.js',
 'guidat-author-pro.js',
 'help-user.js',
 'index.js',
 'md5.js',
 'wasm.js',//39
];
const msgList = [
 'hi.js',
 'hi-author.js',
 'hi-user.js',
 'hx.js',//4
];
////
let catText;
let msgText;
let dirName = './';
let fs = require('fs');
let util = require('util');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);
function getStuff(file){
  return(readFile(file));
}
function setStuff(file, content){
  return(writeFile(file, content));
}
async function takeFiles(files, mod){
  for(i=0;i<files.length;i++){
    await getStuff(files[i]).then(content=>{
      if(mod=='cat') catText += content + '\r\n';
      if(mod=='msg') msgText += content + '\r\n';
     console.log(files[i]);
    });
  }
}
async function run(){
  await takeFiles(catList, 'cat');
  await setStuff(catFile, catText).then((ok)=>{console.log(catFile,'....................saved');});
  await takeFiles(msgList, 'msg');
  await setStuff(msgFile, msgText).then((ok)=>{console.log(msgFile,'....................saved');});
}
catText = '';
msgText = '';
run();
