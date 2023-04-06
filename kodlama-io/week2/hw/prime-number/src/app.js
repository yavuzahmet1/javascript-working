function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < 2) {
            console.log(numbers[i] + " is not prime number")

        }

        for (let t = 2; t < numbers[i]; t++) {

            if (numbers[i] % t === 0) {
                console.log(numbers[i] + " is not prime")
                break;
            } else {
                console.log(numbers[i] + " is prime number")
            }

        }

        console.log("*******")

    }

}

findPrime(0, 1, 23, 7, 8, 1)
findPrime(3, 5)