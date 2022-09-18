function prime(n) {
    // n is required to be grater than 2
    if (n == 2) {
        return 2;
    } else if (n < 2) {
        return 0;
    }

    // length of sieve array (ignore even number)
    var N = Math.floor((n - 1) / 2);

    // max value to divide
    var sqrtn = Math.floor(Math.sqrt(n));

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    var arr = Array(N);
    for (let i = 0; i < N; i++) {
        arr[i] = true;
    }

    var x, y;
    for (let i = 0; i < N; i++) {
        x = 2 * (i + 1) + 1;

        // theoretically, no need to check the value grater than sqrt(n)
        if (x > sqrtn) {
            break;
        }

        for (let j = i + 1; j < N; j++) {
            if (!arr[j]) {
                continue;
            }
            y = 2 * (j + 1) + 1;
            if (y % x == 0) {
                arr[j] = false;
            }
        }
    }

    // check max prime below n
    var max_val = 2;
    for (let i = N - 1; i >= 0; i--) {
        if (arr[i]) {
            max_val = 2 * (i + 1) + 1;
            break;
        }
    }
    return max_val;
}

function run(n) {
    var startTime = new Date().getTime();
    var maxPrime = prime(n);
    var endTime = new Date().getTime();

    console.log("given number = " + n);
    console.log("max prime = " + maxPrime);
    console.log("duration [ms] = " + (endTime - startTime));
    return 0;
}

var Shopify = {
    main: run,
};
