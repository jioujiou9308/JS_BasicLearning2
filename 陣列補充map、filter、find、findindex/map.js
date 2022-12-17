// Js array Map
// 1. 能將原始陣列運算後，重新組合回傳一個新陣列
// 2. 不會影響到原陣列
const arr = [1,5,10]
const newArr = arr.map(function(item){
     return item*item
})
console.log(newArr);
//------------------------
const data = [1,8,13,15]
const newData = data.map(function(item){
     let obj = {}
     obj.checked = item>10
     return obj
})
console.log(newData);
//------------------------


// map 的補充  與forEach的不同
// 1. map 因為會回傳一個新的陣列所以必須要有 return ，forEach就不用
// 2. forEach 比較用在對裡面的資料作處理，沒有想要回傳一個完整的陣列