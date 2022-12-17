//NOTE 先了解setTimeout
const timeOut = setTimeout(function () {
  console.log("2秒後觸發");
}, 2000);
const timeOut1 = setTimeout(() => console.log("3秒後觸發"), 3000);

//可以把callback function拿出來
//Q:如果使永const可以但是要放在timeOut2的前面，不可放在最後面
//Q:在setTimeout裡面的callFun不用加上()，不然會自動執行就會出錯
// const callFun = () => console.log("4秒後觸發");
const timeOut2 = setTimeout(callFun, 4000);
function callFun() {
  console.log("4秒後觸發");
}


