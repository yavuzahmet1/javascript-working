function perfectNumber(number) {
    let total=0

    for (let i = 1; i < number; i++) {

        if (number % i === 0) {
            //console.log(number + "=>is not prime")
            total+=i
        }

    }

    if (total===number) {
        console.log(i + " =>is perfect number")
    }

}

for (let x = 0; x < 1000; x++) {

    perfectNumber(x)

}
