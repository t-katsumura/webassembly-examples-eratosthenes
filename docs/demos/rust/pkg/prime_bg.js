import * as wasm from './prime_bg.wasm';

/**
* @param {number} n
* @returns {number}
*/
export function prime(n) {
    const ret = wasm.prime(n);
    return ret >>> 0;
}

