const http = require('http');
const fs = require('fs');

//const data = fs.readFileSync('./WWW/file.txt');

 http.createServer((request, response)=>{
   console.log(request.url);
   const file= request.url == '/'? './WWW/file.txt' : `./WWW${request.url}`;
   fs.readFile(file, (err,data)=>{
     if(err){
       response.writeHead(400,{"Content-Type":"text/plain"});
       response.write("N0o0 SEnCUNETTRA");
       response.end();
     }else{
       response.writeHead(200,{"Content-Type":"text/plain"});
       response.write(data);
       response.end();
     }

   });
 }).listen(4444);
