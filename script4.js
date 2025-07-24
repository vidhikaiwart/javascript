// // EVENT HANDLING-  any action/interection  in broswer page 

// // add event listener 

// // element.addEventListener("event name ", function(){

// // })


// // let p = document.querySelector("p");

// // p.addEventListener("click", function ()  {
// //   p.style.color = "red";
// // })


// // double click 

// let p = document.querySelector("p");

//  function dblclick() {
//   p.style.color = "red";
// }

// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);

// // common events

// // 1 . click 

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function ()  {
//   h1.style.color = "green";
// })

// // 2. input 
// // let i = document.querySelector("input");

// // i.addEventListener("input", function (dets)  {
// //   console.log(dets.data);
// // })

// let i = document.querySelector("input");

// i.addEventListener("input", function (dets)  {
//   if (dets.data !== null){
//     console.log(dets.data);
//   }
// })

// // change event - when input are selected and change in text areas

// let s = document.querySelector("select");
// s.addEventListener("change",function(dets){
//     console.log(dets.target.value);
// })

// let dev = document.querySelector("#h3");
// s.addEventListener("change", function (dets){
// dev.textContent=` ${dets.target.value} device selected`;
// });

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//  if (dets.key === " "){
//    h1.textContent = "SPC";
//  }
// else{
//     h1.textContent= dets.key;
// }
// // })



// let btn = document.querySelector(".btn");
// let f = document.querySelector("input");

// btn.addEventListener("click", function(dets){
//     f.click();
// })

// f.addEventListener("change", function(dets){
//     console.log(dets.target.files[0].name);
// })

// f.addEventListener("change", function(dets){
//     const file = dets.target.files[0];
//     if(file){
//   btn.textContent = file.name;
//   }
// });

// sumbmit 

// let f = document.querySelector("form");
// let i = document.querySelectorAll("input");
// let m = document.querySelector("#main")
// let card = document.createElement("div");
// let profile = document.createElement("div");
// let img  = document.createElement("img");

// f.addEventListener("submit",function(dets) {
//     dets.preventDefault();

//     // console.log(
//     //     i[0].value,
//     //     i[1].value,
//     //     i[2].value,
//     //     i[3].value,
//     // )

// card.classList.add("card");



// profile.classList.add("profile");

// // card.appendChild(profile);
// // console.log(card);



// img.setAttribute("src",i[0].value);

// let h3 = document.createElement("h3");
// h3.textContent =i[1].value;
// let h5 = document.createElement("h5");
// h5.textContent=i[2].value;
// let p = document.createElement("p");
// p.textContent= i[3].value;

// profile.appendChild(img);
// card.appendChild(profile);
// card.appendChild(h3);
// card.appendChild(h5);
// card.appendChild(p);

// m.appendChild(card);



// i.forEach(function(i){
//     if(i.type !== "submit"){
//      i.value = "";
//     }
   
// })

// });


// mouse hover event 

// let ab =document.querySelector(".ab");
// ab.addEventListener("mouseover", function(){
//     ab.style.backgroundColor = "red";
// })
//     ab.addEventListener("mouseout", function(){
//     ab.style.backgroundColor = "pink";
// })


// mouse move 

// window.addEventListener("mousemove", function (dets) {
//     console.log(dets.clientX, dets.clientY);
//     ab.style.top = dets.clientY + "px";
//     ab.style.left = dets.clientX+ "px";

// });


// event object - target , type , preventDefault

// ab.addEventListener("click", function(dets){
// console.log(dets);
// console.log(dets.target);

// // dets - which is call event object
// });



/*event bubbling - when event occur and listener not found that 
 case event find listner in  parent */
// event flow child to parsent

//  document.querySelector("#nav").addEventListener("click", function(){
//     alert("clicked");
//  })



// event capturing - event flow parent to child
// first capture phase 
// then secondly excute bubbling  ;

// let a =document.querySelector(".a");
// let b =document.querySelector(".b");
// let c =document.querySelector(".c");
// let btn =document.querySelector("button");

// btn.addEventListener("click",function() {
//  console.log("clicked");
// })


// c.addEventListener("click",function() {
//  console.log(" c clicked");
// },true);

// b.addEventListener("click",function() {
//  console.log(" b clicked");
// })
// a.addEventListener("click",function() {
//  console.log(" a clicked");
// }, true );

let i = document.querySelector("input");
let s = document.querySelector("span");

i.addEventListener("input", function (){
    // console.log(i.value.length);
    s.textContent = i.value.length;
})








