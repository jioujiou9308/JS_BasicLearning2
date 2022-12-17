function getData2(name) {
	if(name == 'wilson'){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({ name: 'wilson ren', age: Math.floor(Math.random() * 10)},2000)
            })
        })
    }else{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject(new Error('Not allowed to access data'))
            },2000)
        })
    }
}


function getMovie(age) {
	if (age < 12) {
	    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({text:'cartoon'})
            },1500)
            })	
	} else if (age < 18) {
		return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({text:'teen movies'})
            },1500)
            })	
	} else {
		return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({text:'too old'})
            },1500)
            })	
	}
}

// .then 可以再更精簡成 async、await的方法

async function showMovie(){
    try{
        const obj = await getData2('wilson')
        console.log(obj);
        const movie = await getMovie(obj.age)
        console.log(movie.text);
    }catch(e){
        console.log(e);
    }
}

showMovie()