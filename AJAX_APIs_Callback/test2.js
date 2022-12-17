function getData2(name) {
	if (name == 'wilson') {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ name: 'wilson ren', age: Math.floor(Math.random() * 30) }, 2000);
			});
		});
	} else {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(new Error('not allow'));
			}, 2000);
		});
	}
}

function getMovie(age) {
	if (age < 12) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('');
			});
		});
	}
}
