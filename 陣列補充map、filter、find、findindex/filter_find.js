// Js array filter & find 篩選
// 1. 篩選出符合條件的內容，組合後回傳新陣列
// 2. 不會影響到原陣列
// 3. 可能用在  比價，下拉選擇市區，有誰及格
// 4. Find 只會找到符合的第一筆資料，找到後就不會在往下做

const data = [1, 3, 5, 7];
const newData = data.filter(function (item) {
	return item > 4;
});
// [5,7]
console.log(newData);

//-----------------------------
//分數題
const scoreData = [
	{
		name: '小名',
		score: 88,
	},
	{
		name: '小陳',
		score: 63,
	},
	{
		name: '小薛',
		score: 53,
	},
];
const newFilter = scoreData.filter(function (item) {
	return item.score >= 60;
});
console.log(newFilter);
console.log(newFilter);
