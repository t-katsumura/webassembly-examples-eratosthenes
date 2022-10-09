// wasm should be compiled as standalone wasm
// run this script with command
// $ deno run --allow-read deno.ts -- 10000

// this is for defining syscall "proc_exit"
// https://deno.land/std@0.155.0/wasi/README.md
import Context from "https://deno.land/std@0.155.0/wasi/snapshot_preview1.ts";
const context = new Context({
    args: Deno.args,
    // env: Deno.env.toObject(),   // this requires "--allow-env" flag in deno command
});

const wasmCode = await Deno.readFile("./prime_standalone.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule, {
    wasi_snapshot_preview1: context.exports,
});
const prime = wasmInstance.exports.prime as CallableFunction;

let n = +Deno.args[Deno.args.length - 1];

let startTime = performance.now();
let maxPrime = prime(n);
let endTime = performance.now();

console.log("given number =", n);
console.log("max prime =", maxPrime);
console.log("duration [ms] =", (endTime - startTime).toFixed(2));
