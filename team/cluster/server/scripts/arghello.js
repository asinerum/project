try{
  var name = JSON.parse(process.argv[2])['who'];
}catch(e){}
name = name ? name : 'Unknown';
console.log(`Hello ${name} from NodeJS`);
