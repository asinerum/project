let members;
const urlJsonData1 = 'https://cdn.jsdelivr.net/gh/asinerum/project/team/buas.json';
const urlJsonData2 = 'https://asinerum.github.io/project/team/buas.json';

const loadMembers = function(cbf=console.log, url=urlJsonData1){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function(){
    var status = xhr.status;
    if(status===200){
      cbf(null, xhr.response);
    }else{
      cbf(status, null);
    }
  }
  xhr.send();
}

const loadMembersSync = function(url=urlJsonData1){
  let xhr = new XMLHttpRequest();
  try{
    xhr.open('GET', url, false);
    xhr.send(null);
    if(xhr.status===200){
      console.log('Done');
      return(JSON.parse(xhr.responseText));
    }
  }catch(e){
    console.error(`ERROR: ${e}`);
  }
  return({});
}

// loadMembers(function(err, res){if(!err){members=res.members}else{console.error(err)}});
members = loadMembersSync().members;
