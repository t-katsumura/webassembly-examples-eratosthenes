// build for browser
// wasm-pack build --release --out-name prime --target web
// build for standalone
// cargo build --release --target wasm32-unknown-unknown

use num::integer;
use std::env;
use std::time::Instant;
use wasm_bindgen::prelude::*;

#[no_mangle]
#[wasm_bindgen]
pub fn prime(n: usize) -> usize {
    // n is required to be grater than 2
    if n == 2 {
        return 2;
    } else if n <= 2 {
        return 0;
    }

    // length of sieve array
    let n_cap = (n - 1) / 2;

    // max value to divide
    let n_max = integer::sqrt(n);

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    let mut arr = vec![true; n_cap];

    let mut x: usize;
    let mut y: usize;

    for i in 0..n_cap {
        x = 2 * (i + 1) + 1;

        // no need to check the value grater than sqrt(n)
        if x > n_max {
            break;
        }

        for j in i + 1..n_cap {
            if !arr[j] {
                continue;
            }
            y = 2 * (j + 1) + 1;
            if y % x == 0 {
                arr[j] = false;
            }
        }
    }

    let mut max_value = 2;
    for i in (0..n_cap).rev() {
        if arr[i] {
            max_value = 2 * (i + 1) + 1;
            break;
        }
    }

    return max_value;
}

#[no_mangle]
#[wasm_bindgen]
pub fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("no arguments found");
        return;
    }

    let n: usize = args[1].parse().unwrap();
    if args.len() < 2 {
        println!("given number = {:?}", n);
    }

    // get start time
    let start = Instant::now();

    // calculate prime
    let max_prime = prime(n);

    // get end time
    let end = start.elapsed();

    println!("given number = {:?}", max_prime);
    println!("max prime = {:?}", max_prime);
    println!(
        "duration [ns] = {:?}",
        1000_000_000 * end.as_secs() + (end.subsec_nanos() as u64)
    );
}
