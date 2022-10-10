---
sidebar_position: 3
title: Run WASM
---

# Run WebAssembly

## Run on Browser

Currently, there is no way to build JavaScript to WebAssembly for browsers.

## Run Standalone

Let's run JavaScript wasm standalone.  
First, prepare wasm program built for standalone environment.  
No html or javascript file needed.

- **prime.wasm** : wasm file built for browsers

### wasmtime

[wasmtime](https://wasmtime.dev/) is standalone runtime for WebAssembly.  
Executable file can be downloaded from [github releases](https://github.com/bytecodealliance/wasmtime/releases).

Command line options can be found at [CLI Options for wasmtime](https://docs.wasmtime.dev/cli-options.html).

This command invokes the entity function, or run().

```bash title="invoke prime function with wasmtime"
echo "100000" | wasmtime prime.wasm
```

```bash title="output"
given number = 100000
max prime = 99991
duration [ms] = 989
0
```

### wasmer

[wasmer](https://wasmer.io/) is also famous standalone runtime for WebAssembly.

Command line options can be found at [CLI Usage](https://docs.wasmer.io/ecosystem/wasmer/usage).
Executable files can be downloaded at [github releases](https://github.com/wasmerio/wasmer/releases).  
This command invokes the prime() function.

```bash title="invoke prime function with wasmer"
echo "100000" | wasmer run  prime.wasm
```

```bash title="output"
given number = 100000
max prime = 99991
duration [ms] = 890
0
```

### wasm3

It seemed that the wasm built by javy cannot be run on wasm3.
