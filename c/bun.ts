// wasm should be compiled as standalone wasm
// run this script with command
// $ bun run bun.ts -- 10000

import * as fs from "fs";

const wasmCode = fs.readFileSync("./prime_standalone.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const prime = wasmInstance.exports.prime as CallableFunction;

let n = +Bun.argv[Bun.argv.length - 1];

let startTime = performance.now();
let maxPrime = prime(n);
let endTime = performance.now();

console.log("given number =", n);
console.log("max prime =", maxPrime);
console.log("duration [ms] =", (endTime - startTime).toFixed(2));
