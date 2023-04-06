function friendNumbers(...params) {
    let total0 = 0
    let total1 = 0

    for (let x = 1; x < params[0]; x++) {

        if (params[0] % x === 0) {
            total0 += x
        }

    }

    for (let x = 1; x < params[1]; x++) {

        if (params[1] % x === 0) {
            total1 += x
        }

    }

    if (total0 === params[1] || total1 === params[0]) {

        console.log(params[0] + " and " + params[1] + " friend number")

    } else {

        console.log(params[0] + " and " + params[1] + " not friend number")

    }

}

friendNumbers(229, 284)

