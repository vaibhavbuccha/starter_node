# NODE fs module
---

> The Node.js file system module allows you to work with the file system on your computer.
> - Read files
> - Create files
> - Update files
> - Delete files
> - Rename files


> require fs module
```js
const fs = require('fs');

```

> - 1. delete operation . 
> - unlink() use for delete file aync call always takes a call back so we have to pass a call back function sd 2nd parameter .

```js 
fs.unlink('read.html',(err)=>{
    if(err) throw err;
    console.log(`file deleted`);
});
```

> unlinkSync() for synchronous delete call

```js
try {
    fs.unlinkSync('read.html');
    console.log('file deleted');
}catch(err){
    
}
```