const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');

// 製作渲染裝有代辦事項的data容器
let data = [];
render();

// render的渲染畫面要拉出來製作，不然好像沒有辦法製作刪除功能
function render() {
	let str = '';
	data.forEach((item, index) => {
		str += `<li>${item.content}<input type="button" data-num=${index} class="delete" value="刪除待辦" /></li>`;
	});
	list.innerHTML = str;
	// 渲染完成就清除框框內的內容
	txt.value = '';
}

// 新增代辦事項
function saveList(e) {
	let txtValue = txt.value;
	if (txtValue == '') {
		alert('請輸入代辦事項');
		return;
	}
	data.push({ content: txtValue });
	render();
}

// 刪除代辦事項
function deleItem(e) {
	if (e.target.dataset.num) {
		const index = e.target.dataset.num;
		data.splice(index, 1);
		render();
	}
}
list.addEventListener('click', deleItem);
save.addEventListener('click', saveList);
