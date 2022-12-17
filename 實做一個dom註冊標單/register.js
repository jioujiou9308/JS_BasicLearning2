const account = document.querySelector('.account');
const password = document.querySelector('.password');
const submit = document.querySelector('.submit');
let obj = {};
// console.log(account);

// NOTE 建立資料送出的事件監聽功能
submit.addEventListener('click', function (e) {
	//   register();---------原本是想要將輸入帳號密碼的值拉出來再做一個function但設定的如果為空值會return 但還是會繼續跑callSignUp的funtion，所以將其放在一起
	callSignUp();
});

// NOTE 將帳號密碼的值為輸入的值
// function register() {
//   //做判斷如果帳號密碼為空值的話
//   if (account.value == "" || password.value == "") {
//     alert("輸入的資料不正確");
//     return;
//   }
//   obj.email = account.value;
//   obj.password = password.value;

//   console.log(obj);
// }

// NOTE 將帳號密碼發送網路請求
function callSignUp() {
	//做判斷如果帳號密碼為空值的話
	if (account.value == '' || password.value == '') {
		alert('輸入的資料不正確');
		return;
	}
	//將用戶輸入的帳密寫入
	obj.email = account.value;
	obj.password = password.value;
	axios
		.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
		.then(function (response) {
			if (response.data.message == '帳號註冊成功') {
				alert('恭喜你，帳號註冊成功了喔');
			} else {
				alert('註冊帳號失敗，email可能已被註冊過');
			}
			account.value = '';
			password.value = '';
		})
		.catch(function (error) {
			console.log(error);
		});
}
