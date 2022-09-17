// buildfor browser
// $ asc assembly/prime.ts --target release -o build/prime.wasm
// build for standalone
// $ asc assembly/prime.ts --target release --use abort=assembly/prime/abort -o build/prime_standalone.wasm

export function prime(n: i32): i32 {
    // n is required to be grater than 2
    if (n == 2) {
        return 2;
    } else if (n < 2) {
        return 0;
    }

    // length of sieve array
    let N: i32 = NativeMathf.floor(f32((n - 1) / 2)) as i32;

    // max value to divide
    let Nmax: i32 = NativeMathf.floor(NativeMathf.sqrt(f32(n))) as i32;

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    let arr = new StaticArray<bool>(N);
    arr.fill(true);

    let x: i32;
    let y: i32;
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
    let max_val: i32 = 2;
    for (let i = N - 1; i >= 0; i--) {
        if (arr[i]) {
            max_val = 2 * (i + 1) + 1;
            break;
        }
    }
    return max_val;
}

// In some environment, special functions are required like 'abort'
// https://www.assemblyscript.org/concepts.html#special-imports
export function abort(
    message: usize,
    fileName: usize,
    line: u32,
    column: u32
): void {
    throw new Error("aborted");
}
