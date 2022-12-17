//抓取結點
const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");

//待辦事項
const data = [];

//將待辦事項渲染在網頁上
function renderData() {
  //Q如果放在function外層，資料都會重複，因為在function等於是新的，所以再重新抓取data的時候會重新渲染，可以如果放在外面
  //是全域的情況下，上一次渲染過的資料，又會被渲染一次
  let str = "";
  data.forEach(function (item, index) {
    //   console.log(item.content);
    str += `<li >${item.content}<input type="button" class="delete" data-num="${index}" value="刪除待辦" /></li>`;
  });
  list.innerHTML = str;
}

//建立save的click事件
save.addEventListener("click", function (e) {
  let obj = {};
  if (txt.value == "") {
    alert("請輸入資料");
    return;
  }
  //抓取到了txt的值
  obj.content = txt.value;
  //   console.log(obj);
  data.push(obj);
  txt.value = "";
  renderData();
});

//刪除待辦事項功能
list.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    alert("你不是點到按鈕喔");
    return;
  }
  let num = e.target.getAttribute("data-num");
  console.log(num);
  data.splice(num, 1);
  renderData();
});

//當開啟網頁的初始化，包在function裡在執行它
// renderData();

//Question
//為什麼str 還有obj 都不能放在最外面
//只能放在function 裡面不然要馬重複印出要馬所有東西都變相同的
