//fetch式其中一種用ajax撈資料的方法
//本身就是一種透過promise包裝的語法之一，所以會支援.then && .catch
//適用瀏覽器申請請求的方法，所以無法使用nodejs開啟

// console.log("test");
const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
fetch(url)
	//一定要先變成json的格式
	.then((response) => response.json())
	//變成json會直接進到下一個點then
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

//axios 本身也是用promise包裝出來了

// Swal.fire({
// 	icon: 'success',
// 	title: '你成功了',
// 	text: 'Something went wrong!',
// 	footer: '<a href="">Why do I have this issue?</a>',
// });
