let numbers=[1,5,7,10,22,59,3,4]
let maximum=Math.max(...numbers)
console.log(maximum)

let username="Ahmet YAVUZ";
let letters=[...username].join("-")
console.log(letters);

console.log("-------------------");

let fruits=["apple","orange","banana"];
let vegetables=["carrots","celery","patatoes"];

let foods=[fruits,vegetables,"eggs","milk"];

console.log(foods)