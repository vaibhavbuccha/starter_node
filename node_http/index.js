const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = "localhost";
const port = 3000;


// create server

const server = http.createServer((req,res)=>{
    // print entire headers
    // console.log(req.headers); 

    // print sufficient headers
    console.log(`Request for ${req.url} by method ${req.method} `);

    // setup the response header or complete response.
    // status code for response. 
    /*
    res.statusCode = 200; // status code 200 as we set it shows that every thing is ok.
    res.setHeader('content-Type','text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');  // -> response that send back from server
    */

    // examin only get requests
    if(req.method == 'GET')
    {
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl); // it converts the full fledged path
        const fileExt = path.extname(filePath); // check file extention and according to extention we serve the file
        if(fileExt == '.html'){
            // exists() method checks the file is exists on specific location or not 
            fs.exists(filePath,(exists)=>{
                if(!exists)
                {
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end(`<html><body><h1>${fileUrl} not found</h1></body></html>`);
                    return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);

            });
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end(`<html><body><h1>${fileUrl} is not a html file</h1></body></html>`);
            return;
        }
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end(`<html><body><h1>${req.method} not supported</h1></body></html>`);
        return;
    }
});

server.listen(port,hostname,()=>{
    console.log(`server is running http://${hostname}:${port} `);
});