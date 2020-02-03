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

fs.readFile('renamedfile.txt', 'utf8',  function(err, data) {
    if (err) throw err;
    console.log(data);
  });

