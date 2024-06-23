const prices = [5, 70, 105, 15, 200];

const total = prices.reduce((acc, element) => acc + element, 0);

console.log(total);

//long solution
const result = prices.reduce(totalResult);

function totalResult(accumulator, element) {
  return accumulator + element;
}

console.log(result);
