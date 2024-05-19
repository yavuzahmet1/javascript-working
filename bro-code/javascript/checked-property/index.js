const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const troyBtn = document.getElementById("troyBtn");
const americanBtn = document.getElementById("americanBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subcribed!";
  } else {
    subResult.textContent = "You are not subcribed!";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa";
  } else if (masterBtn.checked) {
    paymentResult.textContent = "You are paying with Master Card";
  } else if (troyBtn.checked) {
    paymentResult.textContent = "You are paying with Troy";
  } else if (americanBtn.checked) {
    paymentResult.textContent = "You are paying with American Express";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with Pay Pal";
  } else {
    paymentResult.textContent = "You must payment checked";
  }
};
