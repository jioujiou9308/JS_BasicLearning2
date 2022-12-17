// 範例1 -----將第2小節的案例寫成 promise版本
// { name: name, age: Math.floor(Math.random() * 30), major: 'cs' }
function getData2(name) {
	if(name == 'wilson'){
        return new Promise((resolve,reject)=>{
            const age =Math.floor(Math.random() * 30)
            setTimeout(()=>{
                resolve({ name: 'wilson ren', age: age},2000)
            })
        })
    }else{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject(new Error('Not allowed to access data'))
            },2000)
        })
    }
}


function getMovie(age) {
	if (age < 12) {
	    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({text:'cartoon'})
            },1500)
            })	
	} else if (age < 18) {
		return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({text:'teen movies'})
            },1500)
            })	
	} else {
		return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({text:'too old'})
            },1500)
            })	
	}
}


// 如果是return 一個promise的時候我們就可以用.then接
getData2("wilson")
    .then(obj=>{
        console.log(obj);
        return getMovie(obj.age)
})
.then((meg)=>{
        console.log(meg.text);
    })
    .catch((e)=>{
        console.log(e);
    })




// 範例2-------------------------------
//先註冊一個Promise
//可以自訂狀況
//檢查成績分數

const checkScore = new Promise((resolve, reject) => {
  console.log("作業批改中");
  setTimeout(() => {
    const score = Math.floor(Math.random() * 100);
    console.log(score);
    if (score >= 60) {
      resolve("及格");
    } else {
      reject("不及格");
    }
  }, 2000);
});

checkScore
  .then((data) => console.log(data))
  .catch((error) => console.log(error));