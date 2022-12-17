

const fs = require('fs')
fs.readFile('readfile/readfile.txt','utf-8',(err,data)=>{
     if(err){
          console.log('沒有讀取到資料喔');
     } else{
          console.log(data);
     }
})
