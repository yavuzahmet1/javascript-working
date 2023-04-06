function isPrime(number) {
    let prime = true

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            //console.log(number + "=>is not prime")
            prime = false
        }

    }

    if (prime) {
        console.log(i + " =>is prime")
    }

}

for (let x = 0; x < 1000; x++) {

    isPrime(x)

}
