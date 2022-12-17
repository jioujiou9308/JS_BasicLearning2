const fs = require('fs')

let p = new Promise((resolve,reject)=>{

fs.readFile('readfile.txt','utf-8',(err,data)=>{
     if(err){
         reject(err)
     } else{
          resolve(data)
     }
     })
})

p.then((result)=>{
     console.log(`resolved: ${result}`);
}).catch((error)=>{
     console.log(error);
}).finally(()=>{
     console.log("完成所有運行結果");
})
