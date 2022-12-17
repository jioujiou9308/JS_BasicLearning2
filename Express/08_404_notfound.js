const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
	// 每個都有statusCode可以看
	console.log(res.statusCode);
	res.send('This is homepage');
});

app.get('/wilson', (req, res) => {
	// 每個都有statusCode可以看
	// console.log(res.statusCode)
	// 還有一種情況
	res.send('This is wilosns page');
});

app.get('*', (req, res) => {
	res.status(404);
	console.log(res.statusCode);
	res.sendFile(path.join(__dirname, '08_404_notfound.html'));
});

app.listen(3000, () => {
	console.log('Sever is running on port 3000');
});
