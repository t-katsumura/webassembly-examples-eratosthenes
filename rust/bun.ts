// wasm should be compiled with wasm-pack
// run this script with command
// $ bun run bun.ts -- 10000

import * as fs from "fs";

const wasmCode = fs.readFileSync("./pkg/prime_bg.wasm");
// const wasmCode = fs.readFileSync("./target/wasm32-unknown-unknown/release/prime_standalone.wasm");
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
