//NOTE Promise all
//會等到資料全部跑完才會執行下一個
//假設今天我們串了很多不同地方的api
//我們可以等到接收到了全部的資料後在執行下一步驟

const correctTest = (name) => {
  console.log("作業批改中");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      resolve({
        name,
        score,
      });
    }, Math.random() * 10000);
  });
};

Promise.all([
  correctTest("小黃"),
  correctTest("小白"),
  correctTest("小安"),
]).then((data) => console.log(data));
