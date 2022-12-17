const express = require('express');
const app = express();
const path = require('path');

// 我們有在index.html 裡面導入 07_Static_file.css ，在將index.html呈現在/的畫面上，但是卻沒辦法，因為在node.js是不知道我們導入這支css 檔案是在做什麼，原因是因為這是一個伺服器，所有的路徑都要做特別的設定，就像是index.html也要用__dirname才能顯示
// 解決辦法是我們要設置一個靜態的檔案，製作一個 middleware
// serving a static file
// 這個意思是我們基本上會把靜態網頁的東西放在一個我們創建public的資料夾
// 接者在裡面創styles資料夾在建立scss的檔案
// 最後再從index.html裡面引入public裡面的css檔案
app.use(express.static('public'));

app.get('/', (req, res) => {
	// 有用path就不用 + 相連，也就不要再檔案名稱前面多一個 /
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
	console.log('Sever is running on port 3000');
});
