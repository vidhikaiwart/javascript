//1. create a function that return the last elememt of an array 

function lastElement(arr){
return arr[(arr.length-1)]; 
}

let arr = [1, 4, 6, 8, 9, 5,7];

let getElement = lastElement(arr);
console.log(getElement);
console.log(arr);
