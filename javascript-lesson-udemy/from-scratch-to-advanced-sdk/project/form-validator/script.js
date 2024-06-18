const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

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

  if (emailRegex.test(email.value)) {
    succes(email);
  } else {
    error(email, "The email you entered does not comply with the format");
  }

  //return emailRegex.test(String(email).toLowerCase());
}
function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      succes(input); //dizi şeklinde aldık alanları tek tek dolaştık
    }
  });
  /*
  console.log(input.value);
  if (inputs.value === "") {
    error(inputs, `${inputs.id} is required`);
  } else {
    succes(inputs);
  }*/
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `The ${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    error(input, `The ${input.id} must be at most ${max} characters`);
  } else {
    succes(input);
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "passwords do not match");
  }
}

function checkPhone(input) {
  const regexPhone =
    /^(05)[0-9][0-9][\s]([0-9]){3}[\s]([0-9]){2}[\s]([0-9]){2}/;

  if (!regexPhone.test(Number(input))) {
    error(input, `${input.id} is not valid format. Exemple: 5_________`);
  }

  // return regexPhone.test(Number(input));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, phone, password, repassword]);
  validateEmail(email);
  checkLength(username, 3, 20);
  checkLength(password, 7, 15);
  checkPassword(password, repassword);
  checkPhone(phone);
  /*checkRequired(username);
  checkRequired(email);
  checkRequired(phone);
  checkRequired(password);
  checkRequired(repassword);*/

  //console.log(username);
  /*
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
  }*/
});
