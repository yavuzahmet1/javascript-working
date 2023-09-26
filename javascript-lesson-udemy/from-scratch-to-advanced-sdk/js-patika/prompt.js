let fullName=prompt("Enter Name");
console.log(fullName);
let gretting=document.querySelector("#gretting");
gretting.innerHTML=`${gretting.innerHTML}<small>${fullName}</small>`