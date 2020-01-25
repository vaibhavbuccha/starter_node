const http = require('http');
const hostname = "localhost";
const port = 3000;


// create server

const server = http.createServer((req,res)=>{
    console.log(req.headers); 

    // setup the response header or complete response.
    // status code for response. 
    res.statusCode = 200; // status code 200 as we set it shows that every thing is ok.
    res.setHeader('content-Type','text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');  // -> response that send back from server
});

server.listen(port,hostname,()=>{
    console.log(`server is running http://${hostname}:${port} `);
});