const submitButton = document.querySelector("#submit");
const emailValidator = document.querySelector("#email-validator");
const errorIcon = document.querySelector("#error-icon");

submitButton.addEventListener("click", (event) => {
  let emailComponent = document.querySelector("#email");
  validateEmail(emailComponent, event);
});

validateEmail = (email, event) =>{
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(!email.value.match(validRegex)){
    emailValidator.classList.remove("display-none");
    errorIcon.classList.remove("display-none");
    email.classList.add("border-accented-red");
    event.preventDefault();
  }else{
    emailValidator.classList.add("display-none");
    errorIcon.classList.add("display-none");
    email.classList.remove("border-accented-red");
  }
}