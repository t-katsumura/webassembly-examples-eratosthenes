# Run Raw JavaScript

Raw JavaScript implementation of Sieve of Eratosthenes is contained in this repository to comapre the raw JavaScript and WebAssembly.

## Write Program

JavaScript program will be like this.

```javascript reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/raw-javascript/prime.js
```

## Run on Browser

Now, let's run raw JavaScript on browser.  
First, confirm that these files are exist in the working directory.

-   **index.html** : sample html calling prime.wasm
-   **prime.js** : glue javascript program

Second, run a http server.  
Just opening the index.html may not work because of the CORS policy of the browsers.

In the case of using python, this command starts a http server.

```bash title="Run a http server"
python -m http.server 8000
```

Third, access to the server from browser.  
Then the page of sample index.html is shown and primes can be calculated by clicking `Run` buttons.

![run-wasm-on-browser.png](./img/run-wasm-on-browser.png)
