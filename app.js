const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// connection to db
mongoose.connect('mongodb://localhost:27017/test', {
	useNewUrlParser: true, 
	useUnifiedTopology: true
})
.then(response => console.log('Taking to db'))
.catch(console.log('getting error'));

app.get('/test',(req,res)=>{
	res.send("hello world");
})

app.listen(port,()=>{
	console.log(`app is running on port ${port}`);
})

