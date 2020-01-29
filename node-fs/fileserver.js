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



