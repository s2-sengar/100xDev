const fs=require('fs');

fs.appendFile('write-fo-file.txt','Hello World\n',(err)=>{
    console.log({err})
})