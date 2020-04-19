// require express in our application
const express = require("express");

// create an express app
const app = express();
const port = 3000;

// create get route
app.get('/',(req,res)=>{
    res.send("helloworld!");
});

// create server
app.listen(port,()=>{
    console.log("app is running on the port:"+port);
});
