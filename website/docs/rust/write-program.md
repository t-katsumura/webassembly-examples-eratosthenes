---
sidebar_position: 1
---

# Write Program

## Write

Rust program becomes like this.

```rust reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/rust/src/lib.rs#L13-L61
```

## Build for Test

Build Rust program to executable file `prime.exe`.  
`cargo` is used here to build.  
This command generates `prime.exe`.

```bash title="build"
cargo build --release
```

## Run and Test

Run executable file with argument like

```bash title="invoke prime function"
prime.exe 10000
```

It outputs

```bash title="output"
given number = 9973
max prime = 9973
duration [ns] = 1291000
```

Or, `cargo` command can directly invoke the program and results in same output.

```bash title="directly invoke prime function"
cargo run 10000

or

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
