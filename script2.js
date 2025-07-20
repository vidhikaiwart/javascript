// object


let obj = {
    name : "vidhi",
    age : 11,


};
console.log(obj);

// access 

// obj.name;
// obj['age'];
// let o = obj;
// obj[o];

// key value structure 

let obj1={
     name : "chhaya",
     age : 11,
// key value pair
}

// dot and bracket notation

console.log(obj1);
let a = obj1;
console.log(a);
let b = obj1['name']
console.log(b);

// nesting and deep acess

const user = {
    name : "dk",
    sem : 8,
    branch : "cse",
    age : 22,
    address :{
        city : "raigarh",
        pin : "495001",
        location :{
            lat :23,
            lng :45,
        },
    },
    //create  multiple obj inside the obj ;
};

let loc = user.address.location.lng;
console.log(loc);
// obj destrucring 
let {lat,lng} = user.address.location;
console.log(lat , lng);
// now lat, lng should be variables;

// for in loop

let obj2={
     name : "chhaya",
     age : 11,
     email : "chhaya@gmail.com",
     mobile_no : 343425346,
     course : "btech ",

}

for(let key in obj2){
    // key is variable name and obj 
    console.log(key);
//    with pair 
  console.log(key , obj2[key]);
}

// object.keys - put obj key into array 

//  Object.keys(obj2);

// Object.entries(obj);

// copy object - spread , Object.assign , deep clone
let u = {...obj2};
console.log(u);
let v = Object.assign({},obj2);
let d = Object.assign({role : "software devloper"},obj2);
console.log(v);
console.log(d);