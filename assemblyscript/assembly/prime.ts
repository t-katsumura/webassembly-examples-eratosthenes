// buildfor browser
// $ asc assembly/prime.ts --target release -Ospeed -o build/prime.wasm
// build for standalone
// $ asc assembly/prime.ts --target release -Ospeed --use abort=assembly/prime/abort -o build/prime_standalone.wasm

export function prime(n: i32): i32 {
    // n is required to be grater than 2
    if (n == 2) {
        return 2;
    } else if (n < 2) {
        return 0;
    }

    // length of sieve array
    let N = (n - 1) / 2;

    // max value to divide
    let Nmax = Mathf.floor(Mathf.sqrt(n as f32)) as u32;

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    let arr = new StaticArray<bool>(N).fill(true);

    let x: u32;
    let y: u32;

    for (let i = 0; i < N; i++) {
        x = 2 * (i + 1) + 1;

        // no need to check the value grater than sqrt(n)
        if (x > Nmax) {
            break;
        }

        for (let j = i + 1; j < N; j++) {
            if (!unchecked(arr[j])) {
                continue;
            }
            y = 2 * (j + 1) + 1;
            if (y % x == 0) {
                unchecked(arr[j] = false);
            }
        }
    }

    // check max prime below n
    let max_val: i32 = 2;
    for (let i = N - 1; i >= 0; i--) {
        if (unchecked(arr[i])) {
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
