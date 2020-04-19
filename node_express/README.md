# Express JS
---

Express js is a middleware which helps in handling http requests.

- install express in our app
```bash
npm i express
```

- For using express 1st we have to require the express in our application.
```js
// require express in our application
const express = require("express");
```
- we have to create express app.
```js
// create an express app
const app = express();
```
- define port on which our server runs 
```js
const port = 3000 //port no
```

- create routes 
```js
app.get('path' , (req,res)=>{
    // callback
})

```
- listen or run server
```js
app.listen(port,()=>{
    // callback
});

```