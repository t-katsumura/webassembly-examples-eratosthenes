---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

Building WebAssembly from AssemblyScript uses `asc` command.

The following command builds AssemblyScript and generates `prime.js` and `prime.wasm` in `build` directory.

```bash title="build for browsers"
asc assembly/prime.ts --target release -o build/prime.wasm
```

Other asc command options can be found at [Using the compiler](https://www.assemblyscript.org/compiler.html).

## Build for Standalone

When building the program for standalone runtime, `abort` function have to be defined.  

```typescript
export function abort(
    message: usize,
    fileName: usize,
    line: u32,
    column: u32
): void {
    throw new Error("aborted");
}
```

The following command builds AssemblyScript and generates `prime_standalone.js` and `prime_standalone.wasm` in `build` directory.

```bash title="build for standalone"
asc assembly/prime.ts --target release --use abort=assembly/prime/abort -o build/prime_standalone.wasm
```

Additional options have to be well considered.  
For example, wasmi runtime does not support bulk memory operation. So `--disable bulk-memory` option have to be set on build.

```bash title="build for standalone with disabling bulk memory operation"
asc assembly/prime.ts --target release --use abort=assembly/prime/abort -o build/prime_standalone.wasm --disable bulk-memory
```
