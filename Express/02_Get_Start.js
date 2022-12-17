// 使用express第一步驟
const express = require('express');
const app = express();

// 使用express 第二步驟，先創一個網頁
app.get('/', (req, res) => {
	res.send('You are on the homepage');
});

// 使用express 第三步驟， 在locallhost 3000開啟
app.listen(3000, () => {
	console.log('Sever is running on port 3000');
});
