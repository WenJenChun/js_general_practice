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
let sentence = "This is A nice book that I like to read it";
console.log(sentence.replace(/[aeiou]/gi, ''));