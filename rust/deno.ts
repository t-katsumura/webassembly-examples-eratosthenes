// wasm should be compiled with wasm-pack
// run the script with command
// $ deno run --allow-read deno.ts -- 10000

const wasmCode = await Deno.readFile("./pkg/prime_bg.wasm");

// this can be used alternatively
// const wasmCode = await Deno.readFile("./target/wasm32-unknown-unknown/release/prime_standalone.wasm");

const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const prime = wasmInstance.exports.prime as CallableFunction;

let n = +Deno.args[Deno.args.length - 1];

let startTime = performance.now();
let maxPrime = prime(n);
let endTime = performance.now();

console.log("given number =", n);
console.log("max prime =", maxPrime);
console.log("duration [ms] =", (endTime - startTime).toFixed(2));
