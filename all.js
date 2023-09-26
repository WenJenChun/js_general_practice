//計算客戶體溫

// let temp = 36;
// if(temp>=37.5){
//     console.log('Not allow to come in');
// } else {
//     console.log('welcome!');
// }

//計算成績是否及格
// let studentScore = 30;
// let passScore = 60;

// if(studentScore>=passScore){
//     console.log('成績及格');
// } else {
//     console.log('成績不及格');
// }

//計算成績平等，80以上優秀、60-79普通、59以下不及格
// let studentScore = 80;

// if(studentScore>=80){
//     console.log('優秀');
// } else if (studentScore>=60 && studentScore<=79){
//     console.log('普通');
// } else {
//     console.log('不及格');
// }


//計算 function 跑幾次

// let count = 0;

// function counting(){
//     count+=1
//     console.log(`${count}次`);
// }

// counting();
// counting();


//計數器＋歸零按鈕
const btn = document.querySelector('.btn');
const zero = document.querySelector('.empty');
const h3 = document.querySelector('h3');
let count = 0;
btn.addEventListener("click", function(e){
    count++;
    h3.innerText = `已點擊${count}次`;
})

zero.addEventListener("click", function(e){
    count = 0;
    h3.innerText = `標題`;
})