---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

### with go

Build WebAssembly using go command.  
Following two files are used in this section.

-   **prime.go**
-   **main_go.go**

Set the environmental variables for targeting.

```bash title="set target"
// Windows
set GOOS=js
set GOARCH=wasm

// Linux
GOOS=js
GOARCH=wasm
```

Build WebAssembly with command

```bash title="build for browsers with go"
go build -o prime.wasm -tags=release -ldflags="-s -w" src/main_go.go src/prime.go
```

These command generate `prime.wasm`.  
JavaScript should be fetched from `${GOROOT}/misc/wasm/wasm_exec.js`.  
(js is renamed to `wasm_exec_go.js` in this repository)

:::caution
select `wasm_exec_go.js` in **index.html** before running on browser
:::

```html reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/index.html#L109-L110
```

### with tinygo

Build WebAssembly using [tinygo](https://tinygo.org/).  
Following two files are used in this section.

-   **prime.go**
-   **main_tinygo.go**

Before build, we need to uncomment `main()` function for build.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/pkg/prime.go#L74-L78
```

Let's build WebAssembly with this command.  

```bash title="build for browsers with tinygo"
tinygo build -opt=2 -wasm-abi=generic -target=wasm -tags=release -o prime.wasm src/prime.go
```

These command generate `prime.wasm`.  
JavaScript should be fetched from `${TINYGOROOT}/targets/wasm_exec.js`.  
(js is renamed to `wasm_exec_tinygo.js` in this repository)

:::caution
select `wasm_exec_tinygo.js` in index.html before running on browser
:::

```html reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/index.html#L109-L110
```

## Build for Standalone

### with tinygo

Building go program to standalone wasm is not currently supported by go command.  
So, `tinygo` is used here.  
Make sure [tinygo](https://tinygo.org/) is installed. Binaries can be downloaded at [github releases](https://github.com/tinygo-org/tinygo/releases).

Before build, `main()` function have to be uncommented.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/src/prime.go#L75-L79
```

```bash title="build with minimal"
tinygo build -wasm-abi=generic -target=wasi -o prime_standalone.wasm src/prime.go
```

```bash title="build with optimize options"
tinygo build -opt=2 -wasm-abi=generic -target=wasi -tags=release -o prime_standalone.wasm src/prime.go
```

Those commands generate `prime_standalone.wasm`.

When using WAVM runtime, uncomment `print_prime()` function and build WebAssembly with

```bash title="build for WAVM runtime"
tinygo build -wasm-abi=generic -target=wasi -o print_prime_standalone.wasm src/prime.go
```

This generate `print_prime_standalone.wasm`.
