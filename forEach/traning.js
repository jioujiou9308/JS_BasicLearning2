//充電站資料表
const data = [
      {
            Charge: "免費",
            name: "小傑充電站",
      },
      {
            Charge: "投幣式",
            name: "小黃充電站",
      },
      {
            Charge: "免費",
            name: "小白充電站",
      },
      {
            Charge: "投幣式",
            name: "小德充電站",
      },
      {
            Charge: "投幣式",
            name: "小咖充電站",
      },
];
//NOTE預設載入函示
//使用function 目的在於一開始當網頁執行的時候，就可以將抓到的資料全部顯示出來
function init() {
      //將字料顯示在網頁上
      const list = document.querySelector(".list");
      let str = "";
      data.forEach(function (item, index) {
            //抓出各陣列要顯示的內容
            let content = `<li>${item.name},${item.Charge}</li>`;
            //   console.log(content);
            //<li>**充電站，免費/投幣式</li>
            str = str + content;
            //將資料標籤加入HTML中
            list.innerHTML = str;
      });
}
init();

//NOTE 篩選器邏輯_______________________________________________方法1 (我自己)
//  新增免費 OR 投幣式按鈕來影響顯示的資料
// const list = document.querySelector(".list");
const free = document.querySelector(".free");
const coin = document.querySelector(".coin");
//---只顯示免費的充電站
// free.addEventListener("click", function (e) {
//   let str = "";
//   data.forEach(function (item, index) {
//     if (item.Charge == "免費") {
//       let content = `<li>${item.name},${item.Charge}</li>`;
//       str = str + content;
//       console.log(str);
//       list.innerHTML = str;
//     }
//   });
// });
//---只顯示投幣式充電站
// coin.addEventListener("click", function (e) {
//   let str = "";
//   data.forEach(function (item, index) {
//     if (item.Charge == "投幣式") {
//       let content = `<li>${item.name},${item.Charge}</li>`;
//       str = str + content;
//       console.log(str);
//       list.innerHTML = str;
//     }
//   });
// });
//NOTE 篩選器邏輯---------------------方法2(六腳學院)

//先抓取大範圍按鈕的值
const stationFilter = document.querySelector(".filter");
console.log(stationFilter);
//如果再函式內都有用到相同的命名，就可以拉出來放在最外面
const list = document.querySelector(".list");

stationFilter.addEventListener("click", function (e) {
      if (e.target.value == undefined) {
            console.log("你沒有點到按鈕拉");
            //加上return是為了不要再跑下面的e.target.value不然會再出現undefined
            return;
      }
      let str = "";
      let str2 = "";

      data.forEach(function (item, index) {
            //設定全部的按鈕
            if (e.target.value == "全部") {
                  str = str + `<li>${item.name},${item.Charge}</li>`;
                  list.innerHTML = str;
            }
            if (e.target.value == "免費" && item.Charge == "免費") {
                  //也可以寫成e.target.value == item.Charge
                  //這樣後面的else if也就可以不用寫
                  //因為會自動使用true flase去判斷
                  str += `<li>${item.name},${item.Charge}</li>`;
                  list.innerHTML = str;
                  console.log(str);
            } else if (e.target.value == "投幣式" && item.Charge == "投幣式") {
                  str2 += `<li>${item.name},${item.Charge}</li>`;
                  list.innerHTML = str2;
                  console.log(str2);
            }
      });
});
//_____________________________________________________________________

//NOTE製作新增資料
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
      console.log("資料已經送出囉");
      //拿到input要傳送的value
      let nameValue = stationName.value;
      let chargeValue = stationCharge.value;
      data.push({ Charge: chargeValue, name: nameValue });
      // let str = "";
      // data.forEach(function (item, index) {
      //   console.log(item);
      //   str += `<li>${item.name},${item.Charge}</li>`;
      //   console.log(str);
      //   list.innerHTML = str;
      // });

      //data.push後就已經後就已經把資料帶進去了，所以只要在執行一次函式載入即可
      init();
      //資料送出後input變為空值
      stationCharge.value = "免費";
      stationName.value = "";
});
