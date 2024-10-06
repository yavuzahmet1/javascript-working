// let numbers=[1,2,3,4,5,6];

// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum(...numbers))


// let username="Ahmet";

// console.log(username[0]);

let a=77777;
let b=2;
let c=3;
let d=4;
let e=100;
let f=234;

function concats(numbers, ...numbers2){
    console.log(numbers,...numbers2);
    let arrayss=[numbers,...numbers2].join("");
    console.log(arrayss)
}

concats(a,b,c,d,e,f);