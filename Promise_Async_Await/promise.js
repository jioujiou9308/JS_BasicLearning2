//NOTE 建構你的第一個Promise
//先註冊一個Promise
//可以自訂狀況

//檢查成績分數
// const checkScore = new Promise((resolve, reject) => {
//   console.log("作業批改中");
//   setTimeout(() => {
//     const score = Math.floor(Math.random() * 100);
//     console.log(score);
//     if (score >= 60) {
//       resolve("及格");
//     } else {
//       reject("不及格");
//     }
//   }, 2000);
// });

// checkScore
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//----------------------------------------------------
//promise帶參數的寫法
//將new Promise 變成要return的值

// const checkScore2 = (score) => {
// 	return new Promise((resolve, reject) => {
// 		console.log('作業分數觀察中');
// 		setTimeout(() => {
// 			console.log(score);
// 			if (score >= 60) {
// 				resolve('及格');
// 			} else {
// 				reject('不及格');
// 			}
// 		}, 2000);
// 	});
// };

// checkScore2(90)
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));
//-------------------------------------------------------
//EX  撰寫批改作業的邏輯
//NOTE 第一步先寫出是否及格或是退學
// const correctTest = (name) => {
//   console.log("作業批改中");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const score = Math.floor(Math.random() * 100);
//       if (score >= 60) {
//         resolve({
//           name,
//           score,
//         });
//       } else {
//         reject("你已達到退學的門檻");
//       }
//     }, 2000);
//   });
// };

// correctTest("小黃")
//   //data會接到new Promise丟出來的resolve的值
//   .then((data) => console.log(data))
//   //error會接到new Promise丟出來的error的值
//   .catch((error) => console.log(error));

//---------------
//NOTE 第二步如果沒有要退學，根據分數選出要給予的獎勵
//score>=90給一張電影票
//score<90 && score>=60 給一個嘉獎
//score<60 && score>40 打手心10下
//score<20 退學
const correctTest = (name) => {
  console.log("作業批改中");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      console.log(score);
      if (score >= 20) {
        resolve({
          name,
          score,
        });
      } else {
        resolve("你已達到退學的門檻");
      }
    }, 500);
  });
};

const checkReward = (data) => {
  console.log("正在檢查獎品中");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.score >= 90) {
        resolve("獲得一張電影票");
      } else if (data.score < 90 && data.score >= 60) {
        resolve("獲得一個嘉獎");
      } else {
        reject("打手心10下");
      }
    }, 2000);
  });
};

correctTest("小黃")
  .then((data) => {
    return checkReward(data);
  })
  .then((reward) => console.log(reward))
// reject的catch寫一個就可以
  .catch((error) => console.log(error));
//------
//NOTE 點then可以有更優化的寫法 Async、Await
//要先設計一個函式
//用到 try、catch
// const init = async function () {
//   try {
//     const studentA = await correctTest("小白");
//     //過了一秒才執行下斷語法
//     const reward = await checkReward(studentA);
//     console.log(reward);
//   } catch (error) {
//     console.log(error);
//   }
// };
// init();
