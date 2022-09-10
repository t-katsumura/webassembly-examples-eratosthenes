import assert from "assert";
import { prime } from "../build/prime.js";
assert.strictEqual(prime(100), 97);
console.log("test ok");

let startTime = performance.now();
let maxPrime = prime(10000);
let endTime = performance.now();

console.log("max prime =", maxPrime);
console.log("duration [ms] =", (endTime - startTime).toFixed(2));
