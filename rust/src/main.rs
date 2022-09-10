// build with command
// $ cargo build --release

mod prime;

use std::env;
use std::time::Instant;

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
    let max_prime = prime::prime(n);

    // get end time
    let end = start.elapsed();

    println!("given number = {:?}", max_prime);
    println!("max prime = {:?}", max_prime);
    println!(
        "duration [ns] = {:?}",
        1000_000_000 * end.as_secs() + (end.subsec_nanos() as u64)
    );
}
