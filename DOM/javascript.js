// const a =0.7
// const price = 100
// let number = 5
// let total = a*price*number
// console.log(total);

// number = 10
// total = a*price*number
// console.log(total);
//--------------------------
// let arr=["steve","allen","mike"]
// console.log(arr);
// arr[0]="sam"
// arr[3]="team"
// arr.push("judy")
// console.log(arr);
//----------------------
// let home = {
//      mother : "judy",
//      father: "sam",
//      dogNumber:3

// }
// let a = "father"
// console.log(home[a]);
//---------------------
// let arr = [{
//      father:"mike",
//      mother:"judy"
// },{
//      father:"sam",
//      mother:"landy"
// }]
// arr[1].mother = "jean"
// console.log(arr[1]["mother"]);
//----------------
// function sayHi(){
//      console.log('hi');
//      console.log("my name is ren");
//      return 'hi my name is ren'
// }
// let a = sayHi()
// console.log(a);
//----------------------------------------
{
  /* <NOTE>querySelector用法</NOTE>; */
}
// const el = document.querySelector(".header");
// el.textContent = "哈囉你好嗎";

// el.innerHTML = '<div class="header2">這是使用innerHTML</div>';
// el.setAttribute("class", "red");

const link = document.querySelector("a");
link.textContent = "這是連結";
link.setAttribute("href", "https://www.google.com.tw/?hl=zh_TW");
link.setAttribute("class", "red");
//----------------------------------
//取值的方法
// const value123 = document.querySelector(".test");
// console.log(value123);
// console.log(value123.innerHTML);
// let abc = value123.getAttribute("class");
// console.log(abc);
// console.log(value123.textContent);

// const value2 = document.querySelectorAll("h1");
// console.log(value2);
// console.log(value2[0].innerHTML);
// console.log(value2[0].textContent);

//表單元素取值的方法

// const text = document.querySelector(".text");
// console.log(text);
// console.log(text.value);
// console.log(text.getAttribute("value"));
// text.value = "button";
// console.log(text.value);
// console.log(text.getAttribute("value"));
// const list = document.querySelector(".list");
// console.log(list);
// console.log(list.value);
// list.value = "桃園市";
