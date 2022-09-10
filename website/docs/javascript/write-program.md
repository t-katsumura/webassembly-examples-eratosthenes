---
sidebar_position: 1
---

# Write Program

## Write

JavaScript can also be compiled to WebAssembly.  
The sample program is written like this.

```javascript reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/javascript/prime.js
```

Here, `Shopify` object is a special object as described in [JavaScript and WASI](https://www.wasm.builders/deepanshu1484/javascript-and-wasi-24k8).  
This sample JavaScript program set `run()` method as the entry-point of the WebAssembly.

> Well the Javy Toolchain expects that our JavaScript code needs to define a global object where Shopify.main points to our main function.

```javascript
var Shopify = {
    main: run,
};
```
