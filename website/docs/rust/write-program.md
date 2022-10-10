---
sidebar_position: 1
---

# Write Program

## Write

In Rust, [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) can be written as

```rust reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/rust/src/prime.rs
```

## Build for Test

Build the program with `cargo`.   
This command generates `target/release/main.exe`.

```bash title="build with cargo"
cargo build --release
```

## Run and Test

Now, run executable file with an argument like

```bash title="invoke main function"
cd target/release/
main.exe 10000
```

```bash title="output"
given number = 9973
max prime = 9973
duration [ns] = 1291000
```

Or, `cargo` command can directly invoke the program and results in same output.

```bash title="directly invoke main function"
cargo run --release 10000
```

The following table shows the calculated prime for given "N".

| given N | prime |
| ------- | ----- |
| 2       | 2     |
| 3       | 3     |
| 10      | 7     |
| 100     | 97    |
| 1000    | 997   |
| 10000   | 9973  |
| 100000  | 99991 |
