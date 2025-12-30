// Web Version

const urlJsonData1 = 'https://cdn.jsdelivr.net/gh/asinerum/project/team/buas.json';
const urlJsonData2 = 'https://asinerum.github.io/project/team/buas.json';

globalThis.loadMembers = function (cbf=console.log, url=urlJsonData1) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      cbf(null, xhr.response);
    } else {
      cbf(status, null);
    }
  }
  xhr.send();
}

globalThis.loadMembersSync = function (url=urlJsonData1) {
  let xhr = new XMLHttpRequest();
  try {
    xhr.open('GET', url, false);
    xhr.send(null);
    if (xhr.status === 200) {
      console.log('Team loaded');
      return JSON.parse(xhr.responseText);
    }
  } catch(e) {
    console.error(`ERROR: ${e}`);
  }
  return {};
}

globalThis.members = loadMembersSync().members;

globalThis.numIndexVip1 = members.numIndexVip1;
globalThis.numIndexVip2 = members.numIndexVip2;
globalThis.UserVIPs = members.UserVIPs;
globalThis.UserBLs = members.UserBLs;
