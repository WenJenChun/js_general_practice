// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//     let ary = [...String(n)].map(Number).reverse();
//     return ary;
//   }

//split()
// let manName = "Robin Singh Mark Wood Smith";

// console.log(manName.split(" ",9));
// 引號之間放的是將字串區隔的元素，結果不包含該元素
// [”Robin”, ”Singh”]


// let enStr = 'I like eating like ice like cream！！！';

// console.log(enStr.split(" ",2));
// //like eating ice cream!!!

// console.log(enStr.split("like", 4));
// // l

// console.log(enStr.split("i", 10));
// //like eating ice cream!!


//取代多個字符元素及其大小寫，以刪去母音為例
// let sentence = "This is A nice book that I like to read it";
// console.log(sentence.replace(/[aeiou]/gi, ''));


//==========  How good are you really?  ==========
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//     //如果我的分數比平均分數高，return true，反之 false
//     //平均分數算法：(classPoints + yourPoints)/(classPoints.length + 1)
   
//     let sum = 0;
//     let average = 0;
    
//     //先算出所有 classPoints
//     for(i=0;  i<classPoints.length; i++){
//       sum+=classPoints[i];
//       console.log(classPoints[i]);
//     }
//     //classPoints + yourPoints然後再去算平均分數
//     sum+=yourPoints;
//     average = sum / (classPoints.length + 1 );
//     console.log(average);

//     //判斷並回傳結果
//     if(yourPoints >= average){
//         return true;
//     } else {
//         return false;
//     }
    
//   }

//   betterThanAverage([2,4,9],10);



// ==========  Vowel Count ==========  

function getCount(str) {
    //把字串裡有母音的字符挑出來
    //把母音都列出來
    //把字串去對照母音陣列
    let vowelNum = 0;
    for(let i = 0; i<=str.length; i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            vowelNum++;
        }
    }
    console.log(vowelNum);
}
getCount('aeiou');