//1. create a function that return the last elememt of an array 

// function lastElement(arr){
// return arr[(arr.length-1)]; 

// // return arr.pop(); 

// }

// let arr = [1, 4, 6, 8, 9, 5,7];

// let getElement = lastElement(arr);
// console.log(getElement);
// console.log(arr);



//2. find the combination of two arrays 

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];


// // let combinationArr = [...arr1, ...arr2];
// let combined = arr1.concat(arr2);
// console.log(combined);

// 3. generate a random integer between 0 to 20 

// let num = Math.floor(Math.random()*21);
// console.log(num);


// 4. create a funciton that takes an array containing both number and string 
// and return a new array containing only the string values


// let arr = [1, 'hello', 2, 'world', 3, 'JavaScript'];

// let resArr = arr.filter(element =>{
    // if(typeof element === 'string'){
    //     return true;
    // }else{
    //     return false;
    // }

//     return typeof element === 'string';
// })

// console.log(resArr);

// 5. Find the maximum number in an array


// let arr = [1, 4, 6, 8, 9, 5, 7];

// let maxNum = Math.max(...arr);
// console.log(maxNum);

// 6. write a function that return the  length of a given object (number of keys)

// let obj ={
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// let getObj = () =>{
//      return Object.keys(obj);
// }
// let res = getObj(obj);
// console.log(res);
// console.log(Object.keys(obj).length);


//7. in an array of object filter out those objects which have gender value male.

// let array = [
//     { name: "John", age: 30, gender: "male" },
//     { name: "Jane", age: 25, gender: "female" },
//     { name: "Mike", age: 35, gender: "male" },
//     { name: "Emily", age: 28, gender: "female" }
// ];

// let response = array.filter(array => {
//     // if (array.gender === 'male'){
//     //     return true;
//     return array.gender === 'male';
// })
// console.log(response);

// 8. given an array of string , return a new array where all string are in uppercase


// let str = ['chhata','gupchup', 'chowmin','eggroll','pizza','burger'];

// let strUpp = str.map(ele => {
//     return (ele.toUpperCase());

// })
// console.log(strUpp);


// 9. check if object is empty

let obj ={
  
}

// let keyA = Object.keys(obj);
//   let len = keyA.length < 1;
// if (len){
//     console.log('object is empty ');
    
// }else{
//     console.log('object is not empty');
// }


// 10. create an array of number and double each value using .map().

// let arr = [1, 2, 3, 4, 5];

// let doubleArr = arr.map(num =>{
//     return num*2;
// })

// console.log(doubleArr);


// 11. convert an array of string into a single comma-separated string 

// let A = [1,'E',53,'YU',5,9,'UA']

// let output = A.join()
// console.log(typeof output);



//12 . write a function to flatten a nested array (one level deep)

// let Arr = [1, 2, [3, 4], 5, [6, 7]];

// let flattenedArr = Arr.flat(1);
// console.log(flattenedArr);

//13 write a function thats checks if all element in arr are number 

// let arr = [1, 2, 3, 4, 5 , 'a'];

// function checkNum(){
//     let isNUM = true;
//     arr.forEach(ele => {
//         if(typeof ele !== 'number'){
//             isNUM = false;
//         }
//     })
//     return isNUM;
// }

// console.log(checkNum());

// let res = arr.every(ele => typeof ele === 'number') ? console.log('All elements are numbers') : console.log('Not all elements are numbers');


// 14. biuid a simple isprime() function to check if a number is prime 

// let n = 7 ;

// function primNum(n){

// if (n === 0 || n === 1){
//     return false;
// }
// 
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;   

// for(let i =  2; i<= Math.sqrt(n); i++){
//     if(n % i === 0){
//         return false;
//     }
// }
// return true;

// } 


// console.log(primNum(n));

// 15. create a funciton that remove duplecates value from a array 


// function  remDul(arr){
//     let set = new Set(arr);
//     return [...set];
// }

// let resp = remDul([1, 2, 2, 3, 4, 4, 5]);
// console.log(resp);

// 16. difference between parseInt and Number

// console.log(parseInt(133.53445));
// console.log(Number(133.53445.toFixed(2))); // 133.53

// console.log(parseInt('133.534px'));
// console.log(Number('133.534px'));

// 17. why does 0.1 + 0.2 !== 0.3 ?

// console.log(0.1 + 0.2 !== 0.3);
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2 );


// 18. how would you handle high-precision floating-point math in JS

// let sum = Number((0.1 + 0.2).toFixed(2));
//     console.log(sum);
//         console.log(typeof sum);

//             console.log(sum === 0.3);

// 19. how would you handle high-precision decimal math in JS
// let num = require('decimal.js');
// let n = num(0.1 );
// let m = num(0.3 );

// let sum = n.plus(m)
// console.log(sum);




// let sum = Number((0.1 + 0.2).toFixed(2));
//     console.log(sum);
//         console.log(typeof sum);

// 20. what is difference between slice and splice ?

// let str = "string"

// console.log(str.slice(-4));
// using with array and string  slice cut the given 
// part in array and string 
// but dont change in original array and string   

// console.log(str.slice(1,4));

// using with array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 4));
// console.log(arr);


// using splice only change original array ,slice , update , delete, 
// no change string
// console.log(arr.splice(1, 4 ,0, 'a' , 'd'));
// console.log(arr);

// 21. create a function that reverse each word of a given sentence 


// let sent = "Hello World";

// let finalres = sent.split(' ').map
// (word => word.split('').reverse().join(''));
// console.log(finalres);

// 22. in array of number and stirng olny add those number
// which are not string 

// let arr = [1, 'hello', 2, 'world', 3, 'JavaScript'];

// let sum = 0;
// arr.forEach(item => {
//     if (typeof item === 'number') {
//         sum += item;
//     }
// });
// console.log(sum);

// 23. how would you check if a number is an integer ?

// let n = 134.34

// console.log(Number.isInteger(n));
// console.log(n % 1 === 0)

// 24.write a js fun that reverse a numder

// function reverseNumber(num) {
//  return Number(num.toString().split('')
//  .reverse().join(''));
  
// }

// console.log(reverseNumber(12345));

// 25. WRITE A JS THAT RETURN A PASSED STRING WITH LETTERS IN ALPHABETICAL ORDER

function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
    
}

console.log(sortStringAlphabetically("hello"));

