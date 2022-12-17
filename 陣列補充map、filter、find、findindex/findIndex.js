// find 值提取出來
// findIndex 索引 編號

const colors = ["blue", "yellow","red"]
const newColors = colors.findIndex(function(item){
     return item == "yellow"
})
console.log(newColors);

//訂單編號
const orders = [
     {
          name:"小陳",
          orderId:"123456"
     },{
          name:"小白",
          orderId:"789456"
     },{
          name:"小酒",
          orderId:"963852"
     }
]
const newOrder = orders.findIndex(function(item){
     return item.orderId == "963852"
})
console.log(newOrder);
console.log(`這個訂單是${orders[newOrder].name}的`);