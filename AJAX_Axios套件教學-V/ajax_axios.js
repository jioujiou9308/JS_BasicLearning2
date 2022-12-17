let obj = {
  email: "pp175569@gmail.com",
  password: "123456",
};

axios
  .post("https://hexschool-tutorial.herokuapp.com/api/signup", obj)
  .then(function (response) {
    console.log(response);
    //抓取是否註冊成功的資料
    let arr = response.data;
    const title = document.querySelector(".title");
    //在網頁上顯示出是否註冊成功或以註冊
    title.textContent = arr.message;
  })
  .catch(function (error) {
    console.log(error);
  });
