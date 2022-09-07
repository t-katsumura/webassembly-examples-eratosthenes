---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

Build webassembly from prime.cpp using [Emscripten](https://emscripten.org/).

This is the minimal command to build .wasm from .c for browsers.
This command generate `prime.js` and `prime.wasm` files. We need both to run the webassembly on browsers.

Note this commands increasing initial wasm memory size to 512 MB.
If the sample program is to consume memory over this size, it will stop because it does not implement the growing memory function.

```bash title="minimal build command"
emcc prime.cpp -o prime.js -sWASM=1 -sEXIT_RUNTIME=1 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=512mb
```

Build with more options.

```bash title="build with more options"
emcc prime.cpp -o prime.js -O2 -sWASM=1 -sEXIT_RUNTIME=1 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=512mb
```

If optimization options is `-O3` or higher, function names would be broken and the sample won't work on browser.
Other important options like `-sEXPORTED_RUNTIME_METHODS=ccall,cwrap`, `-sINVOKE_RUN=1` or `-sALLOW_MEMORY_GROWTH=1` can be found at [Emscripten Compiler Frontend (emcc)](https://emscripten.org/docs/tools_reference/emcc.html).

## Build for Standalone

When building the program for standalone runtime, `-sSTANDALONE_WASM=1` option is used.
Because main function is commented out, `--no-entry` option is used here.
We need to tell the commands what function should be exported so that we can call them.

```
emcc prime.cpp -o prime.js -O3 -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry
```
