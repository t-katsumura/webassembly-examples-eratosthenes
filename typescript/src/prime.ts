// run typescript
// $ ts-node src/main.ts 1000000
// transpile typescript to javascript
// $ tsc --module es2015 --outDir ./ src/prime.ts

export function prime(n: number): number {
    // n is required to be grater than 2
    if (n == 2) {
        return 2;
    } else if (n < 2) {
        return 0;
    }

    // length of sieve array
    let N: number = Math.floor((n - 1) / 2);

    // max value to divide
    let Nmax: number = Math.floor(Math.sqrt(n));

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    let arr: Array<Boolean> = Array(N);
    for (let i = 0; i < N; i++) {
        arr[i] = true;
    }

    let x, y: number;
    for (let i = 0; i < N; i++) {
        x = 2 * (i + 1) + 1;

        // no need to check the value grater than sqrt(n)
        if (x > Nmax) {
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
    let max_val: number = 2;
    for (let i = N - 1; i >= 0; i--) {
        if (arr[i]) {
            max_val = 2 * (i + 1) + 1;
            break;
        }
    }
    return max_val;
}
