var catFile = 'xuteng11.js'; //Total:43;
var catText = '';
var dirName = './';
var fileList = [
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
 'hi.js',
 'hi-author.js',
 'hi-user.js',
 'hx.js',//40
 'index.js',
 'md5.js',
 'wasm.js'];
////
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
async function takeFiles(files){
  for(i=0;i<files.length;i++){
    await getStuff(files[i]).then(content=>{
     catText += content + '\r\n';
     console.log(files[i]);
    });
  }
}
catText = '';
async function run(){
  await takeFiles(fileList);
  setStuff(catFile, catText).then((ok)=>{console.log('JS saved');});
}
run();
