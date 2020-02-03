// The Node.js file system module allows you to work with the file system on your computer.
const fs = require('fs');

// delete opertaion Asynchronus

/*
fs.unlink('read.html',(err)=>{
    if(err) throw err;
    console.log(`file deleted`);
});

*/

// delete  by synchronus call
/*
try {
    fs.unlinkSync('read.html');
    console.log('file deleted');
}catch(err){

}
*/

// file rename opertaions
/*
fs.rename('test.txt', 'renamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
  */

//  file read operations
/*
fs.readFile('renamedfile.txt', 'utf8',  function(err, data) {
    if (err) throw err;
    console.log(data);
  });

*/

// create file operations
/**
 * 
 * The File System module has methods for creating new files:
 * fs.appendFile()
 * fs.open()
 * fs.writeFile()
 * 
 * The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
 * 
 */

 /*
fs.appendFile('filename.txt', 'And file content is here!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  */

//   add text to the same file
/*
fs.appendFile('filename.txt', 'change in same file ', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  */
 