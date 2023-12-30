const fs=require('fs');

fs.readFile('3-read-from-file.js','utf8',(_,res)=>{
    console.log({res})
})
