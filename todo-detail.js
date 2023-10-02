let todoTitle = document.querySelector("#todoTitle");
let todoDetail = document.querySelector("#todoDetail");
const id = location.href.split("=")[1];
const url = "http://localhost:3000";

axios.get(`${url}/todos/${id}`)
.then(function(response){
    console.log(response);
    todoTitle.textContent = response.data.title;
    todoDetail.textContent = response.data.description;

});