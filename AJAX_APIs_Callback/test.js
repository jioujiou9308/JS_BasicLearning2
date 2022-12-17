function fn(callback){
  callback() // 執行傳入的 callback
}

function abc(){
  console.log("callback!!!")
}

fn(abc) // 印出 callback!!!