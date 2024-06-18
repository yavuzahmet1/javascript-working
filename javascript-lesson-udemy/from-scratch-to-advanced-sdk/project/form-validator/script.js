const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(username);

  function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
  }

  function succes(input) {
    input.className = "form-control is-valid";
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  if (username.value === "") {
    //username.className='form-control error'; veya
    error(username, "username is required"); //boostrap olduğundan bu şekilde de kullanılabilir.
  } else {
    //username.className='form-control is-valid';
    succes(username);
  }
  if (email.value === "") {
    error(email, "email is required");
  } else if (!validateEmail(email.value)) {
    error(email, "The email you entered does not comply with the format");
    console.log("çalıştı")
  } else {
    succes(email);
  }
  if (phone.value === "") {
    error(phone, "phone is required");
  } else {
    succes(phone);
  }
  if (password.value === "") {
    error(password, "password is required");
  } else {
    succes(password);
  }
  if (repassword.value === "") {
    error(repassword, "repassword is required");
  } else {
    succes(repassword);
  }
});
