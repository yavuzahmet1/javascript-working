function addUpTo(n) {
  let total = 0;
  for (let index = 0; index <= n; index++) {
    total += index;
  }
  return total;
}
console.log(addUpTo(100));

function addUpTo2(params) {
  return (params * (params + 1)) / 2;
}

console.log(addUpTo2(100));
