var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");

btnSignin.addEventListener("click",  () => {
   body.classList.toggle("sign-in-js"); 
});

btnSignup.addEventListener("click",  () => {
    body.classList.toggle("sign-up-js");
})