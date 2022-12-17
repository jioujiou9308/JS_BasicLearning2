const fs = require('fs/promises')

fs.readFile('readfile/readfile.txt','utf-8')
     .then((result)=>{
          console.log('這是個內建 promise 版本的 readfile',result);
     })
     .catch((err)=>{
          console.error(err);
     })