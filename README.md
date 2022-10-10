# webassembly-examples-eratosthenes

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Github pages available](https://img.shields.io/badge/Github-Pages-brightgreen.svg)](https://t-katsumura.github.io/webassembly-examples-eratosthenes/)

This repository provides some examples and benchmarks of WebAssembly implementation compiled from various languages. 
Note that WebAssembly is not always faster than JavaScript. It depends on the tasks.   
Samples implement the [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) which algorithm is old but very simple and **calculate the max prime below given "N"**.

## Run samples

Check my git-pages (https://t-katsumura.github.io/webassembly-examples-eratosthenes/).  
How to compile or how to run the samples are briefly described there.

## Demos

Demos are available for these languages.  
To compare the performance between WebAssembly and JavaScript, there are also demos of JavaScript and TypeScript.

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
2. Create feature branch (`git checkout -b <your branch name>`)
3. Develop on the branch
4. Commit your changes (`git commit -m "<commit comment>"`)
5. Push to the branch (`git push -u origin <your branch name>`)
6. Create new Pull Request on Github

Git pages are created using [docusaurus](https://docusaurus.io/).  
When updating the pages,

- change or add markdown in `website/docs/`
- resources of demos are in `website/static/demos/`
- check the updates with `npm run start`
- run `npm run build` to generate static pages in `docs/`
- finally push your updates
