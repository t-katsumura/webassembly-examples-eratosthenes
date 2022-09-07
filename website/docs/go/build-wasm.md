---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

## with go

Build webassembly from prime.go using go command.

Before build, `main()` function and `getPrime()` wrapper function have to be uncommented.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/prime.go#L75-L87
```

Set the environmental variables for targeting.

```bash title="set target"
// Windows
set GOOS=js
set GOARCH=wasm

// Linux
GOOS=js
GOARCH=wasm
```

This is the minimal command to build.

```bash title="minimal build command"
go build -o prime.wasm
```

Build with optimize options.

```bash title="build with optimize options"
go build -o prime.wasm -tags=release -ldflags="-s -w"
```

These command generate `prime.wasm`.  
JavaScript should be fetched from `${GOROOT}/misc/wasm/wasm_exec.js`.  
(js is renamed to `wasm_exec_go.js` in this repository)

:::caution
select `wasm_exec_go.js` in index.html before running on browser
:::

```html reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/index.html#L108
```

## with tinygo

Before build, `main()` function have to be uncommented.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/prime.go#L92-L94
```

Then, build with

```bash title="minimal build command"
tinygo build -wasm-abi=generic -target=wasm -o prime.wasm prime.go
```

Build with optimize options.

```bash title="build with optimize options"
tinygo build -opt=2 -wasm-abi=generic -target=wasm -tags=release -o prime.wasm prime.go
```

These command generate `prime.wasm`.  
JavaScript should be fetched from `${TINYGOROOT}/targets/wasm_exec.js`.  
(js is renamed to `wasm_exec_tinygo.js` in this repository)

:::caution
select `wasm_exec_tinygo.js` in index.html before running on browser
:::

```html reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/index.html#L109
```

## Build for Standalone

Buildgin go program to standalone wasm is not currently supported by go command.  
So, `tinygo` is used here.
Make sure [tinygo](https://tinygo.org/) is installed. Binaries can be downloaded at [github releases](https://github.com/tinygo-org/tinygo/releases).

Before build, `main()` function have to be uncommented.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/prime.go#L92-L94
```

```bash title="build with minimal"
tinygo build -wasm-abi=generic -target=wasi -o prime.wasm prime.go
```

```bash title="build with optimize options"
tinygo build -opt=2 -wasm-abi=generic -target=wasi -tags=release -o prime.wasm prime.go
```

Those commands generate `prime.wasm`.  

:::caution
This wasm works on wasmtime or wasm3 and does not work on wasmer
:::