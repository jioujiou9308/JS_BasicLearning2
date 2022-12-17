// const math = [0,1,2,3,4,5,6]
// const math2 = math.splice(1,2,'hi')
// console.log(math); //[0,'hi',3,4,5,6]
// console.log(math2); //[1,2]

// const math = [0,1,2,3,4,5,6]
// const math2 = math.splice(1,0,'hi')
// console.log(math); // [ 0, 'hi', 1, 2,3, 4, 5, 6]
// console.log(math2); // []

// const math = [0,1,2,3,4,5,6]
// const math2 = math.splice(-1,0,'hi')
// console.log(math); //[0,1,2,3,4,5,'hi',6]
// console.log(math2); // []

// const math =['a','b','c','d','e']
// const math2 = math.slice(-1)
// const math3 = math.slice(-3)
// const math4 = math.slice(-8)
// console.log(math2); //[ 'e' ]
// console.log(math3); //[ 'c', 'd', 'e' ]
// console.log(math4); //[ 'a', 'b', 'c', 'd', 'e' ]


const math =['a','b','c','d','e']

// 從索引值 1 擷取 至 2 (2+1=3) 
const math2 = math.slice(1,3)
console.log(math2); //[ 'b', 'c' ]

// 只要第二個參數是 0 就會回傳空陣列
const math3 = math.slice(3,0)
console.log(math3); //[]

// -2 是從尾端開始數回來
const math4 = math.slice(1,-1)
console.log(math4);//[ 'b', 'c', 'd' ]

//
const math5 = math.slice(2,2)
console.log(math5); //[]