let total = 0;
for (let i = 0; i <= 10; i++) {
  console.log(i);
  total += i;
  //console.log("Hello !" + total)
}

let numbers = [1, 7, 11, 15, 25];

//console.log(numbers[3]);
let totalIndex = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  totalIndex += numbers[i];
}

console.log("total index : " + totalIndex);

let user={
    name:"Ahmet YAVUZ",
    userName:"ahmetyavuz",
    password:"11111",
    email:"infos@info.com"
}

for(let key in user){
    console.log(key);
    console.log("-")
    console.log(user[key]);

}


