// 
let e = document.querySelector("#email");
let form = document.querySelector("form");
let p = document.querySelector("#password");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

     document.querySelector("#emailError").textContent="";
     document.querySelector("#passwordError").textContent="";


const emailRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

let eans = emailRegex.test(email.value);
let pans = passwordRegex.test(password.value);

let isVaild = true;

if(!eans){
    document.querySelector("#emailError").textContent="Email is incorrect";
   document.querySelector("#emailError").style.display = "initial";
   isVaild = false;
}

if(!pans){
    document.querySelector("#passwordError").textContent="password is incorrect";
     document.querySelector("#passwordError").style.display = "initial";
     isVaild = false;
    }    

    if(isVaild){
        console.log("code is correct");
    }
});


// // testing regex
// let e = document.querySelector(".email");
// let f = document.querySelector("form");

// f.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     const regex = /^[a-zA-Z ]{3,}$/;
//     let ans = regex.test("chhaya@fds.");
//     console.log(ans);
// });



// reading value from input ,textarea and select 
// prevent default submission
// let n = document.querySelector(".name");
// let f = document.querySelector("form");

// f.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     if(n.value.length <= 2 ){
//         document.querySelector(".hide").style.display = "initial";

//     }
//       else{
//         document.querySelector(".hide").style.display = "none";

//     }


// })