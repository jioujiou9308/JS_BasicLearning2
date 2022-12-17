const data = [4,7,9,10,15]

const newData = data.filter(item => item > 5 && item<12)
console.log(newData);

const data2 = data.map(item => item +5)
console.table(data2);