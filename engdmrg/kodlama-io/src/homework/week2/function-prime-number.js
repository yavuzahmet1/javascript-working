//find prime numbers
let findPrime = (...numbers) => {
  let divisor = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] > 1 && numbers[i] % j == 0) {
        divisor++;
      }
    }
    if (divisor == 2) {
      console.log(`${numbers[i]} is prime number`);
    }
    divisor = 0;
  }
};
findPrime(211, 7, 2,39,58,59,71,98);
