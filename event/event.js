//範例   1    事件監聽功能
// const btn = document.querySelector(".btn");
// console.log(btn);
// const text = document.querySelector(".text");
// console.log(text);

// //監聽  事件
// btn.addEventListener("click", function () {
//   text.textContent = "我已經被點擊過了";
// });
// -----------------------------------------------------
//範例   2   簡易加法功能
// const btn = document.querySelector(".btn");
// console.log(btn);
// const btn2 = document.querySelector(".btn2");
// console.log(btn2);
// const text = document.querySelector("h1");
// console.log(text);

// console.log(btn.nodeName);

// let count = 0;
// btn.addEventListener("click", function (e) {
//   console.log(e);
//   count = count + 1;
//   text.textContent = count;
// });
// btn2.addEventListener("click", function (e) {
//   count = count - 1;
//   text.textContent = count;
// });
//---------------------------------------------------------
// 範例  3  e.target 搭配nodeName節點 ，抓取你預期要做的事情
// const list = document.querySelector(".list");
// console.log(list);
// list.addEventListener("click", function (e) {
//   console.log(e.target.textContent);
//   if (e.target.nodeName == "INPUT") {
//     console.log("你點到了input按鈕了");
//   } else {
//     console.log("你點到的是li拉");
//   }
// });
//----------------------------------------------------------
//範例 4  取消HTML 標籤的默認行為
const link = document.querySelector("a");
const h1 = document.querySelector("h1");
link.addEventListener("click", function (e) {
  e.preventDefault();
  h1.textContent = "你點擊了按鈕";
});
