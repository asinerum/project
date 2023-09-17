const htmlPort = 3333;
const jsonPort = 3355;
const fs = require('fs');
const http = require('http');
const execFolder = './scripts';
const {execFile} = require('child_process');
const execApps = {
  py: 'python',
  js: 'node',
};
const querystring = require('querystring');
const port = process.argv.length>2 ? process.argv[2] : htmlPort;
const requestHandler = (request, response)=>{
  let reqUrl = request.url.split('?');
  let script = reqUrl[0].split('/').pop().split('.');
  let scriptFile = `${execFolder}/${script.join('.')}`;
  let scriptType = script.pop();
  let params = querystring.parse(reqUrl.length>1?reqUrl[1]:null);
  if(!execApps[scriptType] || !fs.existsSync(scriptFile)){
    response.writeHead(500);
    response.end('Bad request');
  }else{
    const fileProcess = execFile(execApps[scriptType], [scriptFile, JSON.stringify(params)]);
    fileProcess.stdout.on('data', (data)=>{
      response.writeHead(200, {
        'Content-Length': Buffer.byteLength(data),
        'Content-Type': port==htmlPort ? 'text/plain' : 'application/json',
      });
      response.end(data);
    });
    fileProcess.stderr.on('data', (data)=>{
      response.writeHead(500);
      response.end('Process ended with errors');
    });
    fileProcess.on('exit', (code)=>{
      console.log(`Process ended with ${code}`);
    });
  }
}
const server = http.createServer(requestHandler)
server.listen(port, ()=>{
  console.log(`Server running on ${port}`)
});
