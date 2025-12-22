let members;
const urlJsonData1 = 'https://cdn.jsdelivr.net/gh/asinerum/project/team/buas.json';
const urlJsonData2 = 'https://asinerum.github.io/project/team/buas.json';

const loadMembers = function(cbf=console.log, url=urlJsonData1){
  var xhr = new XMLHttpRequest();
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

loadMembers(function(err, res){if(!err){members=res}else{console.error(err)}});
