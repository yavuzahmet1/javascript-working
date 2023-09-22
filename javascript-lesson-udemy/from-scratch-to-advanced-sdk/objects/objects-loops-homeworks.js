let numbers = [1, 5, 7, 15, 3, 25, 22, 18];
//console.log("1-square : ");

for (let number of numbers) {
  console.log(number + "'s square : " + number * number);
}

for (let number of numbers) {
  if (number % 5 == 0) {
    console.log(number + " is a multiple of 5.");
  }
}

for (let number of numbers) {
  if (number % 2 == 0) {
    console.log(number + " number is an even number.");
  }
}

let products = ["iphone 11", "samsung s22", "iphone 13", "samsung s23"];

for (let product of products) {
  console.log(product.toUpperCase());
}
let count=0;
for(let product of products){
    if (product.includes("samsung")) {
        count++;
    }
}
console.log("inculdes of samsung : "+count);

let students = [
  { name: "Yiğit", lastName: "Kaya", grades: [60, 70, 90] },
  { name: "Ada", lastName: "Yaya", grades: [59, 75, 80] },
  { name: "Çinar", lastName: "Kasa", grades: [69, 50, 85] },
];

let passingGrade = 70;

  

for (let student of students) {
    let total = 0, average = 0;
    for(let studentGrade of student.grades){
        total+=studentGrade;
    }
    average=total/3
    console.log(student.name+" "+student.lastName+" average "+average);
    if(average>70){
        console.log(student.name+" "+student.lastName+" PASS")
    }else{
        console.log(student.name+" "+student.lastName+" STAYED")
    }
}
