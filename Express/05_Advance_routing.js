const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('This is homepage');
});

// routing for pattern
// 假設有很多的水果要找，我們想要的是
// http://localhost:3000/fruit/水果名稱)，我們只要在網址發送新的水果名稱請求，得到的res就會是我們要的水果
app.get('/fruit/:someFruit', (req, res) => {
	// console.log(req.params);
	let { someFruit } = req.params;
	res.send('You are looking for ' + someFruit);
});

// routing for all
// NOTE: 一定要放在最後面
app.get('*', (req, res) => {
	res.send('沒有辦法找到你要的東西喔請重新查找');
});

app.listen(3000, () => {
	console.log('Sever is running on port 3000');
});
