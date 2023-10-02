let todoTitle = document.querySelector("#todoTitle");
let todoDetail = document.querySelector("#todoDetail");
let editTodoBtn = document.querySelector("#editTodo");
let editArea = document.querySelector("#editArea");
let editSaveBtn = document.querySelector("#editSave");
let newTitle = document.querySelector("#newTitle");
let newDetail = document.querySelector("#newDetail");
const id = location.href.split("=")[1];
//location是一個複雜的物件
//locatoin.href是乾淨的網址: http://127.0.0.1:5500/todo-detail.html?id=7
//用.split("=")把網址依"="變成兩筆資料的陣列，[1]就是取第二筆資料 id，

const url = "http://localhost:3000";

function init(){
    axios.get(`${url}/todos/${id}`)
    .then(function(response){
        // console.log(response);
        todoTitle.textContent = response.data.title;
        todoDetail.textContent = response.data.description;
    });
}

init();

editTodoBtn.addEventListener("click", function(e){
    editArea.setAttribute("class", "d-block");
});

editSaveBtn.addEventListener("click", function(e){
    let obj = {};
    obj.title = newTitle.value;
    obj.description = newDetail.value;
    console.log(obj);
    axios.patch(`${url}/todos/${id}`,obj)
    .then(function(){
        init();
        editArea.setAttribute("class", "d-none");
    }
    );
});