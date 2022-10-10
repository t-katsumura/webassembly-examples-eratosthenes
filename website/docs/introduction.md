---
sidebar_position: 1
slug: /
---

# Introduction

This repository shows examples of [WebAssembly](https://webassembly.org/) application in some languages.  
Sample application calculates the maximum prime below "N" for given "N".  
[**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) which is an old but very simple algorithm is used for calculation.

## Languages

**WebAssembly Available**

These are the part of languages which can be compiled to WebAssembly.

-   ✅ [**C**](/category/c)
-   ✅ [**C++**](/category/c-1)
-   ✅ [**Go**](/category/go)
-   ✅ [**Rust**](/category/rust)
-   ✅ [**AssemblyScript**](/category/assemblyscript)
-   ✅ [**JavaScript**](/category/javascript)
-   ⏳ [**Java**](https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/java-jwebassembly)
-   ⏳ [**Grain**](https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/grain)
-   ❌ **Elixir**
-   ❌ **Julia**
-   ❌ **Motoko**

**WebAssembly Unavailable**

These languages cannot be compiled to WebAssembly directory.  
But, there are some projects compiling interpreters or runtime to WebAssembly which make these languages available on browsers.  

-   ✅ [**Python**](https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/python)
-   **Perl**
-   **Ruby**
-   **PHP**
-   **C#/.NET**

## Demos

Demos are available for these languages.  
The performance will depends on the environment. But generally, WebAssembly shows better performance than JavaScript for this type of calculation.

:::caution
WebAssembly does not always show better performance than JavaScript. It depends on the tasks.
:::

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

This is the Python implementation of [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).  
Demos in other languages are written to corresponds to this program as possible.

```python reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/python/prime.py
```
