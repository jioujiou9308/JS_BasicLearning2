//NOTE   TODOLIST API 串接製作步驟
//NOTE 1. 透過axios 搭配 API 設計註冊功能
//NOTE 2. 抽出網址變數
//NOTE 3. 透過 postman 設計網址請求
//NOTE 4. 
//NOTE
//NOTE
//NOTE
//----------------------------------------------------


const apiUrl = `https://todoo.5xcamp.us`
let token ="Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTg0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjYwMjk0ODE5LCJleHAiOjE2NjE1OTA4MTksImp0aSI6ImFkOGU2MDI0LTAzZTgtNDM5YS04OTk3LTBlY2FjMTViZjRiYiJ9.QpCDO5zcbCmkJ55S9x6Bb2ntjcvfh02PUJbNgrKDQRk"
//Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTg0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjYwMjk0ODE5LCJleHAiOjE2NjE1OTA4MTksImp0aSI6ImFkOGU2MDI0LTAzZTgtNDM5YS04OTk3LTBlY2FjMTViZjRiYiJ9.QpCDO5zcbCmkJ55S9x6Bb2ntjcvfh02PUJbNgrKDQRk

//NOTE 註冊 API
function signUp(email,nickname,pwd){
     axios.post(`${apiUrl}/users`,{
       "user": {
         "email": email,
         "nickname": nickname,
         "password": pwd
       }
     })
          .then(response => console.log(response))
          //axios的規則，要在error後加長response才看的到設定後的錯誤資訊
          .catch(error =>console.log(error.response))
}
//在postman中註冊的格式使用 raw 的 json格式 這都是要先跟後端工程師溝通好，
//因為有時候可能會使用form-data  或是 x-www-form-urlencoded


//NOTE 登入 API
function login(email,pwd){
     axios.post(`${apiUrl}/users/sign_in`,{
  "user": {
    "email": email,
    "password": pwd
  }
  //取出token
  //辨別此使用者的資訊
  //放在network headers 中response header 的 authorization
}).then(res=>{
     token = res.headers.authorization
     console.log(res);
})
     .catch(error=>console.log(error.response))
}

//NOTE 拿到我的待辦事項
function getTodo(){
     axios.get(`${apiUrl}/todos`,{
          //當登入後夾帶token的方法
          headers:{
               'Authorization':token
          }
     })
     .then(res=>console.log(res))
     .catch(error=>console.log(error.response))
}

//NOTE 新增TODO
function addTodo(todo){
     axios.post(`${apiUrl}/todos`,{
          //要藉此api新增的內容
  "todo": {
    "content": todo
  }
  },{
     //要記得攜帶header的token資訊不然會失敗
          headers:{
               'Authorization':token
          }
})
     .then(res=>console.log(res))
     .catch(error=>console.log(error.response))
}

//NOTE 修改 TODO
function updateTodo(todo,todoId){
     axios.put(`${apiUrl}/todos/${todoId}`,{
  "todo": {
    "content": todo
  }
  },{
     //要記得攜帶header的token資訊不然會失敗
          headers:{
               'Authorization':token
          }
})
     .then(res=>console.log(res))
     .catch(error=>console.log(error.response))
}

//NOTE 刪除 TODO
function deleteTodo(todoId){
     axios.delete(`${apiUrl}/todos/${todoId}`,{
     //要記得攜帶header的token資訊不然會失敗
          headers:{
               'Authorization':token
          }
})
     .then(res=>console.log(res))
     .catch(error=>console.log(error.response))
}

//NOTE 更新 TODO 是否已完成
function compoleteTodo(todoId){
     //只是讓他自動更新沒有要帶入什麼參數所以要放空物件
     axios.patch(`${apiUrl}/todos/${todoId}/toggle`,{},{
     //要記得攜帶header的token資訊不然會失敗
          headers:{
               'Authorization':token
          }
})
     .then(res=>console.log(res))
     .catch(error=>console.log(error.response))
}