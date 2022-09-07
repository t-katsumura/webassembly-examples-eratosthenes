---
sidebar_position: 100
title: Run WebAssembly
slug: /run-webassembly
---

# Run WebAssembly

## Run on Browser

Now, let's run wasm on browser.  
First, confirm that these files are exist in the working directory.

- **index.html** : sample html calling prime.wasm
- **prime.wasm** : this wasm have to be build for browsers
- **prime.js** : glue javascript program

Second, run a http server.  
Just opening the index.html may not work because of the CORS policy of the browsers.

In the case of using python, this command starts a http server.

```bash title="Run a http server"
python -m http.server 8000
```

Third, access to the server from browser.  
Then the page of sample index.html is shown and primes can be calculated by clicking `Run` buttons.

![run-wasm-on-browser.png](./img/run-wasm-on-browser.png)

Many browsers support showing the wasm file in developper tools.  
This is an example of google chrome.

![run-wasm-on-browser-devtool.png](./img/run-wasm-on-browser-devtool.png)

## Run Standalone

Now, let's run wasm standalone.  
First, prepare wasm program built for standalone environment.  
No html or javascript file needed.

- **prime.wasm** : wasm file built for browsers

### wasmtime

[wasmtime](https://wasmtime.dev/) is standalone runtime for webassembly.  
Executable file can be downloaded from [github releases](https://github.com/bytecodealliance/wasmtime/releases).

Command line options can be found at [CLI Options for wasmtime](https://docs.wasmtime.dev/cli-options.html).

This command invokes the prime() function.

```bash title="invoke prime function with wasmtime"
wasmtime run prime.wasm --invoke prime 10000
```

```bash title="output"
warning: using `--invoke` with a function that takes arguments is experimental and may break in the future
warning: using `--invoke` with a function that returns values is experimental and may break in the future
9973
```

### wasmer

[wasmer](https://wasmer.io/) is also favorite standalone runtime for webassembly.

Command line options can be found at [CLI Usage](https://docs.wasmer.io/ecosystem/wasmer/usage).
Executable files can be downloaded at [github releases](https://github.com/wasmerio/wasmer/releases).  
This command invokes the prime() function.

```bash title="invoke prime function with wasmer"
wasmer run --invoke prime prime.wasm -- 10000
```

```bash title="output"
9973
```

### wasm3

[wasm3](https://github.com/wasm3/wasm3) is an interpreter for webassembly.  
Executable files can be downloaded at [github releases](https://github.com/wasm3/wasm3/releases).  
wasm3 options can be found by the command `wasm3 --help`.

This command invokes the prime() function.

```bash title="invoke prime function with wasm3"
wasm3 --func prime prime.wasm 10000
```

```bash title="output"
Result: 9973
```
