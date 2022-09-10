import { prime } from "./prime";

function main() {
    if (process.argv.length < 3) {
        console.log("no arguments found");
        return;
    }

    let n: number = +process.argv[2];

    let startTime = performance.now();
    let maxPrime = prime(n);
    let endTime = performance.now();

    console.log("given number =", n);
    console.log("max prime =", maxPrime);
    console.log("duration [ms] =", (endTime - startTime).toFixed(2));
}

main();
