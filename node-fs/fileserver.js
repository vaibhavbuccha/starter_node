// The Node.js file system module allows you to work with the file system on your computer.
const fs = require('fs');
const http = require('http');


// read file 
http.createServer((req,res)=>{
    fs.readFile('read.html',(data,err)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000,'localhost',(exists)=>{
    console.log('server running');
});
