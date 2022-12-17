const data = [30, 27, 36, 41, 50, 3, 46];
// data.forEach(function (item, index, arry) {
//   console.log(item);
//   console.log(index);
//   console.log(arry);
// });

//使用forEach 相加陣列中的數字
// let total = 0;
// data.forEach(function (item, index) {
//   total = total + item;
// });
// console.log(total);

// 使用forEach 取得陣列中偶數的值
// let even = [];
// let cardinality = [];
// 設定執行的次數，也可知道到底有幾個偶數
// let total = 0;
// data.forEach(function (item, index) {
//   if (item % 2 == 0) {
//     total = total + 1;
//     even.push(item);
//   } else {
//     cardinality.push(item);
//   }
// });
// console.log(total);
// console.log(even);
// console.log(cardinality);
//-----------------------------------
//物件中可以包含各種類型的資料，但得出來的資料會是物件
// const data2 = [{ name: "peter", age: 20 }, { name: "sam" }, 40, 70, "hellow"];

// data2.forEach(function (item, index) {
//   console.log(item);
// });
//-----------------------------------
//計算男女生的人數並產生新的陣列將其分開

const data3 = [
  { name: "peter", sex: "men" },
  { name: "julia", sex: "women" },
  { name: "sam", sex: "men" },
  { name: "steve", sex: "men" },
  { name: "mandy", sex: "women" },
];
// let detail = [(menName = []), (womenName = []), (men = 0), (women = 0)];

// data3.forEach(function (item, index) {
//   if (item.sex == "men") {
//     detail[2] = detail[2] + 1;
//     detail[0].push(item.name);
//     console.log("這是男生");
//   } else {
//     detail[3] = detail[3] + 1;
//     detail[1].push(item.name);
//     console.log("這是女生");
//   }
// });
// console.log(detail[0], detail[1]);
// console.log(detail[2], detail[3]);

let detail = {
  menName: [],
  womenName: [],
  men: 0,
  women: 0,
};

data3.forEach(function (item, index) {
  if (item.sex == "men") {
    detail.menName.push(item.name);
    detail.men = detail.men + 1;
  } else {
    detail.womenName.push(item.name);
    detail.women = detail.women + 1;
  }
});
console.log(detail);
