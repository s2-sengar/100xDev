const fs=require('fs');
const cleanFile=()=>{
    fs.readFile('clean-me.txt','utf-8',(_,data)=>{
        const cleanData=trimExtraSpace(data);
        fs.writeFile('clean-me.txt',cleanData,(err)=>{
            console.log(err)
        })
    })
}
const trimExtraSpace=(str)=>{
    return str?.replace(/\s+/g,' ');
}
cleanFile();