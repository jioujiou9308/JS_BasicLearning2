const express = require('express');
const app = express();

// routting in express

app.get('/', (req, res) => {
	// console.log(req); //發出請求的時候有非常巨量的資訊
	// 在res.send裡面也可以寫html的程式碼
	res.send('<h1>You are on the homepage...</h1>');
	// res.send('<p>this is p</p>');//只能送一次，有兩個res.send會報錯誤
});

// 如果我要送一個html出去呢，可以嗎
app.get('/wilson', (req, res) => {
	// 使用_dirname
	res.sendFile(__dirname + '/index.html');
});

//如果我想要送一個物件出去
app.get('/obj', (req, res) => {
	let something = {
		name: 'steve',
		age: '20',
	};
	res.send(something);
});

app.get('/mike', (req, res) => {
	// console.log(req); //發出請求的時候有非常巨量的資訊
	// console.log(res); //發出請求的時候有非常巨量的資訊
	res.send('This is mikes page');
});

app.listen(3000, () => {
	console.log('Sever is running on port 3000');
});
