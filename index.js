//計數器&歸零按鈕
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const zero = document.querySelector('.zero');
const text = document.querySelector('p');
let count = 0;
add.addEventListener("click", function(e){
    count++;
    text.innerText = `${count}次`;
})

minus.addEventListener("click", function(e){
    count--;
    text.innerText = `${count}次`;
})

zero.addEventListener("click", function(e){
    count = 0;
    if(text.innerText!=""){
        text.innerText = `一切已歸零!`;
    }
})


