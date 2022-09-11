---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

Build webassembly from prime.c using [Emscripten](https://emscripten.org/).

This is the command to build .wasm from .c for browsers.
This command generate `prime.js` and `prime.wasm`. We need both to run on browsers.

Note this commands increasing initial wasm memory size to 32 MB.
If the sample program is to consume memory larger than this size, it would be aborted.

```bash title="build for browsers"
emcc src/prime.c -o prime.js -O3 -flto -sWASM=1 -sEXIT_RUNTIME=1 -sINVOKE_RUN=0 -sEXPORTED_FUNCTIONS=_prime -sMODULARIZE=1
```

```bash title="build for browsers with more options"
emcc prime.c -o prime.js -O3 -flto -sWASM=1 -sEXIT_RUNTIME=1 -sINVOKE_RUN=0 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=32mb -sALLOW_MEMORY_GROWTH=1 -sMODULARIZE=1
```

-   `-O3` : optimize from the standpoint of speed
-   `-flto` : enable link time optimization
-   `-sWASM=1` : compile targeting wasm
-   `-sEXIT_RUNTIME=1` : do not exit wasm at the exit of the function because we want to read the memory of the wasm
-   `-sINVOKE_RUN=0` : do not invoke `main()` function on instantiation
-   `-sEXPORTED_FUNCTIONS=_prime,_malloc` : make the functions available from javascript
-   `-sINITIAL_MEMORY=32mb` : enlarge initialmemory size ([default is 16 MB](https://github.com/emscripten-core/emscripten/blob/126f1716359ce73ba32fe66d65f9c4a5bf5ba0e8/src/settings.js#L167))
-   `-sMODULARIZE=1` : modularize javascript to enable reuse. if not set, module is initialize globally in the emitted javascript

If optimization options is set to `-O3` or higher, function names will be broken. This is not the big problem when using the glue javascript code emmitted on compile.  
Other important options like `-sEXPORTED_RUNTIME_METHODS=ccall,cwrap` or `-sINVOKE_RUN=1` can be found at [Emscripten Compiler Frontend (emcc)](https://emscripten.org/docs/tools_reference/emcc.html).

## Build for Standalone

When building the program for standalone runtime, `-sSTANDALONE_WASM=1` option is used.  
Because `main()` function is commented out, `--no-entry` option is used here.  
We need to tell the commands what function should be exported so that we can call them.

The following command generates only `prime.wasm`.

```bash title="build for standalone"
emcc prime.c -o prime_standalone.wasm -O3 -flto -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry
```

-   `--no-entry` : this is required when not setting `_main` in the `EXPORTED_FUNCTIONS` option
