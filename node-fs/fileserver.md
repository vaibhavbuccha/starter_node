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

> file rename opertaions

```js
fs.rename('test.txt', 'renamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
 
 // 1st arg - actual filename
 // 2nd arg - renamed filename

```

> file read opertation

```js
fs.readFile('renamedfile.txt', 'utf8',  function(err, data) {
    if (err) throw err;
    console.log(data);
  });

```

> file create operations

The File System module has methods for creating new files:
- *fs.appendFile()*
- *fs.open()*
- *fs.writeFile()*

> The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

```js
fs.appendFile('filename.txt', 'And file content is here!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
```

```js
//   add text to the same file

fs.appendFile('filename.txt', 'change in same file ', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
```
> fs.open() create file

The **fs.open()** method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing.

```js
fs.open('newfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('created!');
  });
```

> fs.writeFile() create file

The *fs.writeFile()* method replaces the specified file and content if it exists. If the file does not exist,
a new file, containing the specified content, will be created:

```js
 fs.writeFile('newfile3.txt', 'This is also an content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

```