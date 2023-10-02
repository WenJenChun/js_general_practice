
let server = document.querySelector("#server");
server.textContent = "伺服器還沒醒來(;´༎ຶД༎ຶ`)";
// axios.get("http://localhost:3000/todos")
// .then(function(response){
//     if(response.status == 200){
//         server.textContent = "伺服器目前醒著 (⁎⁍̴̛ᴗ⁍̴̛⁎)";
//     } 
//     console.log(response)
// });



// axios.patch("http://localhost:3000/todos/7", {
//     "title": "不猜", 
//     "description": "正常一點",
//     "isFinish": true
// })
// .then(function(response){
//     if(response.status == 200 || response.status == 201){
//         server.textContent = "伺服器目前醒著唷唷 (⁎⁍̴̛ᴗ⁍̴̛⁎)";
//     } 
//     console.log(response)
// });



const todos = document.querySelector('#todos');
const newTodo = document.querySelector('#newTodo');
const newTodoDetail = document.querySelector('#newTodoDetail');
const addNewTodoBtn = document.querySelector('#addNewTodo');


const url = "http://localhost:3000";

function init(){
    axios.get(url+"/todos")
    .then(function(res){
        if(res.status == 200 || res.status == 201){
            server.textContent = "伺服器目前醒著唷唷 (⁎⁍̴̛ᴗ⁍̴̛⁎)";
        }
        let str = '';
        res.data.forEach(function(item){
            str += `<li class="mb-3 d-flex align-items-center justify-content-between">
                      <h5>
                        ${item.title} 
                      </h5>
                      <div>
                        <button onclick="location.href='todo-detail.html?id=${item.id}'" data-num="${item.id}" class="text-dark bg-yellow align-middle">看詳細</button>
                        <button id="deleteTodo" type="submit" data-num="${item.id}" class="bg-red align-middle">刪除</button>
                      </div>
                    </li>
                    <hr>
                    `;
        });
        todos.innerHTML = str;
        
    });
}

init();

addNewTodoBtn.addEventListener("click", function(e){
    axios.post(url+"/todos", {
    "title": newTodo.value, 
    "description": newTodoDetail.value,
    "isFinish": false
    })
    .then(function(response){
        console.log(response);
        init();
        newTodo.value = '';
        newTodoDetail.value = '';
    });

});

//這邊不能直接用 deleteBtn 加 addEventListener
todos.addEventListener("click", function(e){
    console.log(e.target);
    if(e.target.getAttribute("id")!=="deleteTodo"){
        console.log('not on target');
        return;
    } 

    let num = e.target.getAttribute("data-num");
    axios.delete(`${url}/todos/${num}`)
    .then(function(res){
        alert("刪除成功！");
        init();
    })

});