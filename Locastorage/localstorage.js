//JSON.stringify() - 將資料轉成Json格式
//JSON.parse() - 將資料轉換成原本的格式

let players = {
	player1: 'mike',
	player2: 'sandy',
	player3: 'peter2',
};

console.log(players);
//要將物件儲存在localstorage一定要先將其變成json格式
localStorage.setItem('playerList2', JSON.stringify(players));

let fruits = {
	fruit1: 'apple',
	fruit2: 'banana',
};
console.log(typeof fruits); //object
let jsonFruit = JSON.stringify(fruits);
console.log(typeof jsonFruit); // string
console.log(jsonFruit); //已經都轉換成字串格式了
localStorage.setItem('fruitList', jsonFruit);

//如果只有指提取資料並沒有轉換成原來的格式localStorage.getItem("fruitList")，那還是一樣字串
//所以要加上JSON.parse
//如果要將資料再提取出來並轉匯成原本的格式
let abc = JSON.parse(localStorage.getItem('fruitList'));
console.log(abc);
