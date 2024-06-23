function happyBirthDay(params) {
  console.log(`Happy Birth Day ${params}`);
}
happyBirthDay("Ahmet");

const numbers = [1, 25, 36, 91];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

const hello = () => console.log("hello");

hello();
