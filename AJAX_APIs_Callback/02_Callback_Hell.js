// https://ithelp.ithome.com.tw/articles/10306416 - callback 參考文章
// https://blog.huli.tw/2019/10/04/javascript-async-sync-and-callback/ - 推薦文章2

// 假設模擬我們發請求從資料庫要拿取資料
function getData(name) {
	setTimeout(() => {
		return { name: name, age: Math.random() * 20, major: 'cs' };
	}, 2000);
}
// console.log('start');
// let data = getData('wilson')
// console.log(data); // 拿不到資料undefined
// console.log('end');

// 這裡執行的結果為
// start -> undefined -> end 因為要兩秒鐘後才能拿到結果，所以console.log(data)會是undefined，接者跑end，所以過去的人會用callback的方式來解決，算是小技巧
// 請看以下寫法

function getData2(name, callback) {
	setTimeout(() => {
		callback({ name: name, age: Math.floor(Math.random() * 30), major: 'cs' });
	}, 2000);
}
// ----------結果1
// console.log('start');
//  getData2('wilson',(obj)=>{
// 		console.log(obj);
// 	 })
// console.log('end');

// 接者我們要將拿到的資料再作運用
// 拿到使用者的資料，再將其中的年齡做電影票的判斷

function getMovie(age, callback) {
	if (age < 12) {
		setTimeout(() => {
			callback('cartoon movie');
		}, 1500);
	} else if (age < 18) {
		setTimeout(() => {
			callback('teen movie');
		}, 1500);
	} else {
		setTimeout(() => {
			callback('adult movie');
		}, 1500);
	}
}
//-------------------結果2
getData2('wilson',(obj)=>{
	getMovie(obj.age,(str)=>{
		console.log(str);
	})
})

// --------------------------------------------

// mdn 的 callback ex
