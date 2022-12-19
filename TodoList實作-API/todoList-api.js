const login = document.querySelector('.login');
const logout = document.querySelector('.logout');
const h1 = document.querySelector('.myH1');

// 將重複的api拉出來
const apiUrl = 'https://todoo.5xcamp.us';

//設置一個存放 token的地方
let token = '';

// 會員註冊功能
function signUp(email, nickname, password) {
	axios
		.post(`${apiUrl}/users`, {
			user: {
				email: email,
				nickname: nickname,
				password: password,
			},
		})
		.then((res) => {
			console.log(res);
		})
		.catch((error) => {
			console.log(error.response);
		});
}

// 會員登入
function logIn() {
	axios
		.post(`${apiUrl}/users/sign_in`, {
			user: {
				email: '123@gmail.com',
				password: '123456',
			},
		})
		// 會員登入後就會拿到一個專屬於自己的token
		.then((res) => {
			// 如果再登入的時候使用這個，接下來的所有api都可以不用再多寫token，這裡就會自動帶入
			// axios.defaults.headers.common['Authorization'] = res.headers.authorization;
			token = res.headers.authorization;
			// console.log(token);
			h1.textContent = '登入成功';
		})
		.catch((error) => console.log(error.response));
}

// 會員登出
function logOut() {
	axios
		.delete(`${apiUrl}/users/sign_out`, {
			headers: {
				authorization: token,
			},
		})
		.then((res) => {
			h1.textContent = '';
			alert('已成功登出');
			// 不知道為什麼如果使用登入自動夾帶token的後不能連續的登入登出，但如果強制整理夜面就可以
			location.reload();
		})
		.catch((error) => console.log(error.response));
}

// 拿到會員的todoList 列表
function getTodo() {
	axios
		.get(`${apiUrl}/todos`, {
			headers: {
				authorization: token,
			},
		})
		.then((res) => console.log(res))
		.catch((error) => console.log(error.response));
}

// 新增todo代辦事項
function addTodo(content) {
	axios
		.post(
			`${apiUrl}/todos`,
			{
				todo: {
					content: content,
				},
			},
			{
				headers: {
					authorization: token,
				},
			}
		)
		.then((res) => {
			console.log(res);
		})
		.catch((error) => console.log(error.res));
}

// put 修改todolist中的內容
function updateTodo(todo, todoId) {
	axios
		.put(
			`${apiUrl}/todos/${todoId}`,
			{
				todo: {
					content: todo,
				},
			},
			{
				headers: {
					authorization: token,
				},
			}
		)
		.then((res) => console.log(res))
		.catch((error) => console.log(error.response));
}

// 刪除todolist中的內容
function deleteTodo(todoId) {
	axios
		.delete(`${apiUrl}/todos/${todoId}`, {
			headers: {
				authorization: token,
			},
		})
		.then((res) => console.log(res))
		.catch((error) => console.log(error.response));
}

// 切換tolist 是否完成，使用patch
function toggleTodo(todoId) {
	axios
		.patch(
			`${apiUrl}/todos/${todoId}/toggle`,
			{},
			{
				headers: {
					authorization: token,
				},
			}
		)
		.then((res) => console.log(res))
		.catch((error) => console.log(error.response));
}

login.addEventListener('click', logIn);
logout.addEventListener('click', logOut);
