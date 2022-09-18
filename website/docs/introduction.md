---
sidebar_position: 1
slug: /
---

# Introduction

This repository shows some examples of [WebAssembly](https://webassembly.org/) application in languages.  
Sample programs calculate the maximum prime below "N" given as an argument. Those programs implement the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) which has very simple algorithm.

## Languages

**WebAssembly Available**

-   ✅ [**C**](/category/c)
-   ✅ [**C++**](/category/c-1)
-   ✅ [**Go**](/category/go)
-   ✅ [**Rust**](/category/rust)
-   ✅ [**JavaScript**](/category/javascript)
-   ✅ [**AssemblyScript**](/category/assemblyscript)
-   ⏳ [**Java**](https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/java-jwebassembly)
-   ⏳ [**Grain**](https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/grain)
-   ❌ **Elixir**
-   ❌ **Julia**
-   ❌ **Motoko**

**WebAssembly Unavailable**

These languages cannot be compiled into WebAssembly directory.  
But amazingly, there are some projects compiling interpreters or runtime to WebAssembly which make these languages available on browsers.

-   ✅ [**Python**](https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/python)
-   **Perl**
-   **Ruby**
-   **PHP**
-   **C#/.NET**

## Demos

-   ✅ [**C**](pathname:///webassembly-examples-eratosthenes/demos/c/) (Compiled with emcc)
-   ✅ [**C++**](pathname:///webassembly-examples-eratosthenes/demos/cpp/) (Compiled with em++)
-   ✅ [**Go**](pathname:///webassembly-examples-eratosthenes/demos/go/) (Compiled with Go)
-   ✅ [**Go**](pathname:///webassembly-examples-eratosthenes/demos/tinygo/) (Compiled with TinyGo)
-   ✅ [**Rust**](pathname:///webassembly-examples-eratosthenes/demos/rust/) (Compiled with wasm-pack)
-   ✅ [**AssemblyScript**](pathname:///webassembly-examples-eratosthenes/demos/assemblyscript/) (Compiled with asc)
-   ✅ [**Java**](pathname:///webassembly-examples-eratosthenes/demos/java-jwebassembly/) (Compiled with JWebAssembly)
-   ✅ [**Python**](pathname:///webassembly-examples-eratosthenes/demos/python/) (Using pyodide WASM interpreter)
-   ✅ [**TypeScript**](pathname:///webassembly-examples-eratosthenes/demos/typescript/) (Not WASM)
-   ✅ [**Raw JavaScript**](pathname:///webassembly-examples-eratosthenes/demos/raw-javascript/) (Not WASM)

## Reference Implementation

Reference implementation of the algorithm of Sieve of Eratosthenes is written in python.

```python reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/python/prime.py
```
