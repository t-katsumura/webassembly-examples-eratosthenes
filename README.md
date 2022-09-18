# webassembly-examples-eratosthenes

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Github pages available](https://img.shields.io/badge/Github-Pages-brightgreen.svg)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/)

> **Note**  
> **This project is just in progress.**  
> **Breaking changes will be made sometimes.**

This repository provides some examples of WebAssembly implementation compiled from other languages.  
Sample programs implement the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) and calculate max prime below "N" which is given by argument.

## Run samples

Check my pages (https://t-katsumura.github.io/webassembly-examples-eratosthenes/).  
How to compile or how to run the samples are briefly described there.

## Demos

Demos are available for these languages.  
To compare WebAssembly and JavaScript, there are also demos of JavaScript and TypeScript

- [C (Compiled with emcc)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/c/)
- [C++ (Compiled with em++)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/cpp/)
- [Go (Compiled with Go)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/go/)
- [Go (Compiled with TinyGo)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/tinygo/)
- [Rust (Compiled with wasm-pack)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/rust/)
- [AssemblyScript (Compiled with asc)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/assemblyscript/)
- [Java (Compiled with JWebAssembly)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/java-jwebassembly//)
- [Python (Using pyodide WASM interpreter)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/python/)
- [TypeScript (Not WASM)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/typescript/)
- [JavaScript (Not WASM)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/demos/raw-javascript/)

## Contributing

Any contributions are always be appreciated!

1. Fork it
1. Create feature branch (`git checkout -b <your branch name>`)
1. Develop on the branch
1. Commit your changes (`git commit -m "<commit comment>"`)
1. Push to the branch (`git push -u origin <your branch name>`)
1. Create new Pull Request on Github

Git pages are created using [docusaurus](https://docusaurus.io/).  
When updating the pages,

- change or add markdown in `website/docs/`
- resources of demos are in `website/static/demos/`
- run `npm run build` to generate static pages in `docs/`
