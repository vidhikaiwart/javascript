// DOM (document object model)

// html element selection

let a = document.querySelector("h1");
console.dir(a);

 let ab = document.querySelectorAll("h1");
//  create a node list 
 console.log(ab);

let abc = document.getElementById("abc");
console.log(abc);
console.dir(abc);
// dir-  opening form

 let abcd = document.getElementsByClassName("abcd");
console.log(abcd);
// arr like structure 


// changing inner text 
let h2 = document.querySelector("h2");
console.dir(h2);
// h2.textContent = " hey buddy who are you ";

h2.innerText = " hey vidhi  who are you ";
// h2.outerText = " hey DK who are you ";

// change the inner html
// h2.outerHTML= "<i> hey cutiie who are you </>";
// h2.innerHTML = "<i> hey guys  who are you </i>";

// attribute manipulation - src , href 

let v = document.querySelector("a");
a.setAttribute("href", "http//www.google.com");
// console.log(v.getAttribute("href"));
// a.removeAttribute("href");


let img  = document.querySelector("img");
img.setAttribute("src",
    "https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D");


// dynamic DOM manipulation 

let h3 = document.createElement("h3");
// create element 

h3.innerText = "create element ";
// put text into element 

console.log(h3);
// print in console

// attach in body

// document.body.appendChild(h3);
// add bottom in body 

document.querySelector("body").prepend(h3);
// add top on body 

// style updates - change in css 

let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor ="black";

// attch class on html tag 

let h4 = document.querySelector("h4");
h4.classList.add("change");
// h4.classList.remove("change");
// h4.classList.toggle("change");




