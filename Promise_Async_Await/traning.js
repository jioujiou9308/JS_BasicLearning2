// const checkScore = new Promise((resolve, reject) => {
// 	console.log('作業批改中');
// 	setTimeout(() => {
// 		const score = Math.floor(Math.random() * 100);
// 		console.log(score);
// 		if (score >= 60) {
// 			resolve('及格');
// 		} else {
// 			reject('不及格');
// 		}
// 	}, 2000);
// });

// checkScore
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// -------------------------------------------

// const checkScore2 = function (score){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(score);
//             if(score>=60){
//                 resolve('你及格囉')
//             } else{
//                 reject('你不及格請多加油')
//             }
//         },2000)
//     })
// }
// checkScore2(65)
//     .then(res=>{
//         console.log(res);
//     })
//     .catch(error=>{
//         console.log(error);
//     })

// -----------------------------------------------
const correctTest = function(name){
    return new Promise((resolve,reject)=>{
        console.log('作業批改中');
        setTimeout(()=>{
            const score = Math.floor(Math.random() * 100)
            if(score >=60){
                resolve(`${name}你你的分數為${score}，很棒繼續保持`)
            } else{
                resolve(`分數是${score}，你已經達到退學門檻回家吧`)
            }
        },2000)
    })
}


const checkScore = function(score){
    console.log('檢查分數，發放對應的獎品中');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(score<20){
                resolve(`分數${score}，除了被退學，還要被揍`) 
            }else if(score<60){
                resolve(`分數${score}，就退學就好了`) 
            }else if(score<90) {
                resolve(`分數${score}，不錯送你一張電影票`) 
            }else{
                resolve(`分數${score}，讚讚讚送你兩張電影票`) 
    
            }
        },2000)
    })
}




correctTest("小黃")
  .then((data) => {
    return checkScore(data.score);
  })
  .then((reward) => console.log(reward))
// reject的catch寫一個就可以
  .catch((error) => console.log(error));