const math = [0, 1, 2, 3, 4, 5, 6];
const math2 = math.splice(1, 2, 'hi');
console.log(math); //[0,'hi',3,4,5,6]
console.log(math2); //[1,2]

// const math = [0,1,2,3,4,5,6]
// const math2 = math.splice(1,0,'hi')
// console.log(math); // [ 0, 'hi', 1, 2,3, 4, 5, 6]
// console.log(math2); // []

// const math = [0,1,2,3,4,5,6]
// const math2 = math.splice(-1,0,'hi')
// console.log(math); //[0,1,2,3,4,5,'hi',6]
// console.log(math2); // []
