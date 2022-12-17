const express = require('express');
const app = express();
// 可以使用path
const path = require('path');

// 想要接收form表單傳過來的資訊，讓其資訊放在body裡面要以下兩個設定
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extends: true })); //用app.use是一個middle ware

// 這裡要做的是使用html的form表單提出請求
// 檔案為 routing_query.html

app.get('/', (req, res) => {
	// 有用path就不用 + 相連，也就不要再檔案名稱前面多一個 /
	res.sendFile(path.join(__dirname, 'routing_query.html'));
});

// routing for query
app.post('/formHandling', (req, res) => {
	// 如果想要接收前面form表單裡面傳過來的資料
	// 就必須在上方加上兩個設定
	console.log(req.body);
	let { fullname, age } = req.body;
	res.send(`Thanks for positing. Your name is ${fullname}, and your age is ${age}`);
});

app.listen(3000, () => {
	console.log('Sever is running on port 3000');
});
