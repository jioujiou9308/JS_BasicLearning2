const fs = require('fs')

function getReadFilePromise(path){
     return new Promise((resolve,reject)=>{
     fs.readFile(path,'utf-8',(err,data)=>{
     if(err){
         reject(err)
     } else{
          resolve(data)
     }
     })
})
}

getReadFilePromise('readfile.txt')
.then((result)=>{
     console.log(`resolved: ${result}`);
}).catch((error)=>{
     console.log(error);
})

getReadFilePromise('123456.txt')
.then((result)=>{
     console.log(`resolved: ${result}`);
}).catch((error)=>{
     console.log(error);
})
