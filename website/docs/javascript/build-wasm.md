---
sidebar_position: 2
---

# Build WASM

## Build for Browsers

Currently, there is no way to build JavaScript to WebAssembly for browsers.

## Build for Standalone

JavaScript can be build for standalone runtime using [Shopify/javy](https://github.com/Shopify/javy).  
Executable file of javy is available at [github releases](https://github.com/Shopify/javy/releases).

Now, confirm that there is the sample JavaScript program in the working directory.

- **prime.js**

Following command generate `prime.wasm` program.

```bash title="build wasm with javy command"
javy prime.js -o prime.wasm
```
