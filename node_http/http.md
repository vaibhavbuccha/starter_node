# NODE HTTP MODULE
---
## Networking Essentials
> <u>HTTP</u> - The protocol which is use for communicating between client and server. 
> - This is an application layer protocol. 
> - the http protocol for work it to work needs a URL to be supplied to it. 
> - <abbr>URL</abbr> (uniform resourse locator).
> - JSON (Javascript object notation) -> it is the one way of encoding data that is being shipped from the server side to the client side or vice versa .
> - XML another way of encoding data. 
> - higher level protocol called SOAP it allows to communication between distributed entities within their entire network.
> - REST (Representational State Transfer).
> Requests - <br> - get <br> - put <br> -post <br> - delete

<fieldset>
<h1> Node HTTP Module</h1>
</fieldset>

 -  core networking supporting a high-performance foundation for a HTTP stack.
 - Using the module : <br> const http = require('http');
 - create a server : <br> const server = createServer((req,res)=>{...});
 - starting a server <br> server.listen(port,..);
 - incoming request message information is available throught hte first parameter "req" <br> - req.headers , req.body,..
 - Response message is constructed on the second parameter "res" <br> - res.setHeader("Content-Type","text/html"); <br> - res.statusCode = 200 ; <br> - res.write("hello world"); <br> - res.end("Response");


# NODE PATH MODULE

> - Using the path module. <br> const path = require('path');
> - some example path methods. <br> path.resolve('./public'+fileUrl); <br> path.extname(filePath);

# NODE fs MODULE

<fieldset>
for read and write file
</fieldset>

> - use fs module in app.
 <br> const fs = require('fs');
> - some examples of fs methods:
    <br>
    fs.exists(filePath,(exists)=>{...});
    <br>
    fs.createReadSStream(filePath).pipe(res);
