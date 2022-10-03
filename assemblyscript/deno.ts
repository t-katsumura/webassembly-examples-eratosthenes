// wasm should be compiled as standalone wasm
// run this script with command
// $ deno run --allow-read deno.ts -- 10000

const wasmCode = await Deno.readFile("./build/prime_standalone.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const prime = wasmInstance.exports.prime as CallableFunction

let n = +Deno.args[Deno.args.length - 1]

let startTime = performance.now();
let maxPrime = prime(n);
let endTime = performance.now();

console.log("given number =", n);
console.log("max prime =", maxPrime);
console.log("duration [ms] =", (endTime - startTime).toFixed(2));
