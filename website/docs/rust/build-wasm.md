---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

Building rust program to wasm for browsers uses [wasm-pack](https://github.com/rustwasm/wasm-pack).  
Run `cargo install wasm-pack` or installer is available at [github releases](https://github.com/rustwasm/wasm-pack/releases) or [here](https://rustwasm.github.io/wasm-pack/).

Run this command to build wasm.  
More command line options available at [wasm-pack build](https://rustwasm.github.io/docs/wasm-pack/commands/build.html).

```bash title="build wasm"
wasm-pack build --release --out-name prime --target web
```

This command generate `prime.js` , `prime_bg.wasm` etc..

**Targeting wasm32-unknown-emscripten**
When building wasm with [emscripten](https://emscripten.org/).  
`wasm32-unknown-emscripten` target have to be installed.

This command shows all of the targets supported by rust.  
Check that `wasm32-unknown-emscripten` is installed.

```bash title="list all targets"
rustup target list
```

```bash title="targets list ouput"
// omit...
wasm32-unknown-emscripten (installed)
// omit...
```

Or, you can install target with

```bash title="add target"
rustup target add wasm32-unknown-emscripten
```

Additionally, [emscripten](https://emscripten.org/) have to be installed.  
Then add link option in `.cargo/config.toml` (see [Configuration - The Cargo Book](https://doc.rust-lang.org/cargo/reference/config.html)).

This command build and generate `prime.wasm`.

```bash title="build with targeting wasm3-wasi"
cargo build --release --target wasm32-unknown-emscripten
```

## Build for Standalone

When building the program for standalone runtime, `cargo build` command is used.

Before building standalone wasm, we need to check the build targets installed.  
This command shows all of the targets supported by rust.

```bash title="list all targets"
rustup target list
```

```bash title="targets list ouput"
// omit...
wasm32-unknown-unknown (installed)
wasm32-wasi (installed)
// omit...
```

These targets are briefly expalined [here](https://docs.wasmtime.dev/wasm-rust.html).  
You can install target using `rustup` command.

```bash title="add target"
rustup target add wasm32-unknown-unknowns
```

Now, let's build standalone wasm.  
First, we need to comment out the `wasm_bindgen` attribute, because wasm_bindgen adds or removes symbols for combining JavaScript.
More document on `wasm_bindgen` can be found at [The wasm-bindgen Guide](https://rustwasm.github.io/wasm-bindgen/), [wasm-bindgen - crates.io](https://crates.io/crates/wasm-bindgen/).

**Targeting wasm32-unknown-unknown**  
This command build standalone wasm for WASI and generates `prime.wasm` etc...
Then we can use .wasm standalone.

```bash title="build with targeting wasm3-unknown-unknown"
cargo build --release --target wasm32-unknown-unknown
```

**Targeting wasm32-wasi**  
When targeting `wasm32-wasi`, it may requires [wasi crate](https://crates.io/crates/wasi) and may requires fixing source code.

```bash title="build with targeting wasm3-wasi (sample program does not works on wasmer)"
cargo build --release --target wasm32-wasi
```

This command generates `prime.wasm`.  

:::caution
This works on wasmtime and wasm3 but does not work on wasmer
:::