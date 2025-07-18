// hosting

c();

function c(){
    console.log("hosting");
    // function can used befor created 
}

// IIFE

(function (){
    console.log("IIFE - immediately invoke function expression ")
})();

// clouser and lexical scope

function fhg(){
    let h = 9;
    // h also used by both inner funtion 
    function wer(){
        let q = 8;
        // q used by in wer and uio
        function uio(){
            let l = 6;
            // only used by its self
        }
    }
}

function rst(){
    let d = 11;
    console.log('clouser');
    return function(){
        console.log(d);
        
    }
}
// function can return function and return fun used parent function 
rst();

// pure vs impure function

let f = "function";

function klm(){
    console.log("pure");
    // which function that dont effect out side value
}

function uxv(){
    console.log ( 'impure ' +  ' ' + f );
    // which function that change and effect out side value
}

klm();
uxv();

// higher order function

function higher (ans){
    ans();
    console.log ("if fun can return any function or accept any function in parameter")
}

higher(function(){
    console.log("higher order function")
})

// return function 

function ijk (){
    return function(){

    }
}

ijk();
// () function can return 


// first class function 

function first(val){
    val();
}

  first (function()  {
    console.log("first class function");
    // function can treated like value 
 });

// return value 

function abc(){
    return 12;
}

let val = abc();
console.log(val);

// default , rest , spread parameters

function chhaya(a,b,c,...val){
    console.log(a,b,c,val);
}
// when arguments are more then one create parameter for them 
// that time we can use rest ... when 
// ... in function parameter space is called rest operator 
// its prototype array
chhaya(1,2,3,4,5,6,7,8);


function sum(s1 = 4, s2 = 2){
    // default parameter 
    console.log(s1 + s2);
    // if value not assign then print NAN (NOT A NUMBER)
}

sum();

// parameter and argument

function add(a1 , a2){
    // () its is called parameter
    console.log(a1 -a2);
}

add(7,4); 
// argument (7,4)

function coding (p1){
    console.log(` ${p1} love coding`);
}

coding("vidhi");
coding("chhaya");
coding("shourya");
coding("arjit");
coding("titu");

// what is function in javascript

let ck = ( )=>{
    console.log("fat arrow function");
}

let vk = function (){
         console.log("function experssion ");
}

function dk(){
    console.log("function declaration/function statement ");
}
dk();
vk();
ck();