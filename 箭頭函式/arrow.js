//函式”陳述式” & 函式”表達式”
//差異
//陳述式中console.log放前面放後面都沒有差別
//表達式，因為式將函式放在一個變數中
//如果將console.log放在函式前，降抓不到值

//陳述式
function numA(x) {
  return x * x;
}
console.log(numA(3));

//表達式
const numB = function(x){
     return x * x
}
console.log(numB(3));


//--------------------------------------------------------------

//箭頭函式基本寫法
const numC = (x,y) => {
  return x*y
}
console.log(numC(4,5));

//箭頭函示的縮寫
//如果函式有搭配return而且只有一條，則可以省略大括號還有return
//ex
const numD = (x) => x*x
console.log(numD(5));
//如果參數只有一個的話可以中省略括號
//ex
const numE = x => x*x
console.log(numE(10));
//but 如果沒有參數的話還是必須要有中括號
//ex
const numF = () => `數字顯示的是${10}`
console.log(numF());
//----------------------------------------------------------------------
//陣列操作map、filter 
//縮寫函示可以寫成怎麼樣
const data = [4,7,9,10,15]
const newData = data.map(function(item){
  return item+5
})
console.log(newData);

//可以縮寫成
//省略了item的中括號
//省略的箭頭後面的大括號 & return

const newData2 = data.map(item => item+10)
console.log(newData2);