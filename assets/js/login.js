//login 
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupForm = document.querySelector(".register");

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  signupForm.style.display = "block";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  signupForm.style.display = "none";
});
