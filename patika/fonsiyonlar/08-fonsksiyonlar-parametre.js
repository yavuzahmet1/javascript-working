let firtName = "Ahmet";

function greeting(firstName) {
  console.log(`Merhaba ${firstName ? firstName : ""}`);
  // console.log(`Merhaba ${firstName}`)
}
function greeting2(firstName = "", lastName = "") {
  //console.log(`Merhaba ${firstName?firstName:""}`);
  console.log(`Merhaba ${firstName}`);
}
let greetingInfo = greeting2("firstName", "lastName");
//console.log(`Merhaba ${firstName?firstName:""}`);
// console.log(`Merhaba ${firstName} ${lastName}`);
console.log(greetingInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

greeting2("dasdasd");
greeting(firtName);


console.log("--------")
domIdWriteInfo('greetting',greeting2("Ahmet","YAVUZ"))
