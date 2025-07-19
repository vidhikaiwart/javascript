// Array 


let arr = [1,2,3,4,5,6,];
console.log(arr);

let arr1 = new Array();

arr[4] = 14;
console.log(arr);

arr.push(50);
console.log(arr);


arr.pop();
//last element remove
console.log(arr);

arr.shift();
// first element remove
console.log(arr);

arr.unshift(9);
// add element in first position
console.log(arr);

arr.splice(2,2);
//starting from  second element and remove two element
console.log(arr);

let newarr = arr.slice(0,3);
// give new arr 0 to 3 element 
console.log(newarr);

arr.reverse();
// reverse arr
console.log(arr);

let as  = arr.sort(function (a,b){
    return b-a;
});
// return in descending order
console.log(arr);


arr.forEach(function(val){
    console.log(val + 5)
});
// foreach like loop
console.log(arr);


let ans = arr.map(function(val){
    return 11;
});
// map can  used when create new arr which size equal to old arr
console.log(ans);

let newa = arr.filter(function(val){
    if (val >2) return true;
    // filter old arr and create new arr
})
console.log (newa);

let newab = arr.reduce(function(accumulator,val){
     return accumulator + val;
    // reduce array and  add all 
},0);
console.log (newab);

let newabc = arr.find(function(val){
    if (val === 9) return true;
    // find element in array 
})
console.log (newabc);

let a = arr.some(function(val){
 return val>3;
    // return true and false if any satisfy condition
})
console.log(a);

let b = arr.every(function(val){
    if (val >2) return true;
    // opposite of some function return true if all element satisfy the condition
})
console.log (b);

let newA = [1,2,3,4,5,6,];
console.log (newA);

let [X,Y, ,z] = newA;
// Destructuring 

let v = [...newA];
console.log (v);