
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
const addNewTodo = document.querySelector('#addNewTodo');

const url = "http://localhost:3000";

function init(){
    axios.get(url+"/todos")
    .then(function(res){
        let str = '';
        res.data.forEach(function(item, index){
            str += `<li class="mb-3 d-flex align-items-center justify-content-between">
                      <div>
                        ${item.title} 
                        <br> 
                        <span>${item.description}</span>
                      </div>
                      <div>
                        <button type="submit" data-num="${index}" class="bg-red align-middle">刪除</button>
                      </div>
                    </li>
                    `;
        });
        todos.innerHTML = str;
        
    });
}

init();

