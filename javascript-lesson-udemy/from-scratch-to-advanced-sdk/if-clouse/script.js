const result = document.getElementById("result");
const mySubmit = document.getElementById("enterData");
const btn = document.getElementById("btn");
let age = 0;

/*btn.onclick = function () {
  age = mySubmit.value;
  age = Number(age);
  console.log(typeof age);
  result.textContent = age;
};*/
btn.addEventListener("click", submitForResult);
function submitForResult() {
  age = mySubmit.value;
  age = Number(age);
  if (age >= 100) {
    console.log("You are Too old to enter this site");
    result.innerHTML = `Your age : ${age} => too old to enter this site.`;
  } else if (age == 0) {
    console.log("You can not enter. You are just born");
    result.innerHTML = `Your age : ${age} => not enter. You are just born.`;
  } else if (age >= 18) {
    console.log("You are old enough to enter this site.");
    result.innerHTML = `Your age : ${age} => old enough to enter this site.`;
  } else if (age < 0) {
    console.log("Your age can not be below 0");
    result.innerHTML = `Your age : ${age} => can not be below 0.`;
  } else {
    console.log("You must be 18+ to enter this site");
    result.innerHTML = `Your age : ${age} => you must be 18+ to enter this site.`;
  }
}
