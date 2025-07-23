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
// })



let btn = document.querySelector(".btn");
let f = document.querySelector("input");

btn.addEventListener("click", function(dets){
    f.click();
})

f.addEventListener("change", function(dets){
    console.log(dets.target.files[0].name);
})

f.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
  btn.textContent = file.name;
  }
});

// sumbmit 