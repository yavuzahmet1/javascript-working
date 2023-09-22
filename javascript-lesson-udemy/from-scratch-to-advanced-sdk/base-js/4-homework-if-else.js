let number = 49;

console.log(10 < number < 50?" exercise ":"exercise 22");

if (10 < number < 50) {
  console.log("number is between 10 and 50");
}

if (number % 2 == 1) {
  console.log("number is single");
} else {
  console.log("number is double");
}

if (number < 0) {
  console.log("number is negative");
} else {
  console.log("number is positive");
}

let x = 5,
  y = 8,
  z = 1;

if (x > y && x > z) {
  console.log("x is the biggest");
} else if (y > x && y > z) {
  console.log("y is the biggest");
} else if (z > y && z > x) {
  console.log("z is the biggest");
} else {
  console.log("numbers are equal");
}

let visa1 = 50,
  visa2 = 75,
  final = 80;

  let average=((visa1+visa2)/2)*0.4+(final*0.6);
  if (average>=50) {
    console.log("you have passed");
  }else{
    console.log("you have stayed")
  }
