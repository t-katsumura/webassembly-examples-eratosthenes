/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/prime/prime
 * @param n `i32`
 * @returns `i32`
 */
export declare function prime(n: number): number;
/**
 * assembly/prime/abort
 * @param message `usize`
 * @param fileName `usize`
 * @param line `u32`
 * @param column `u32`
 */
export declare function abort(message: number, fileName: number, line: number, column: number): void;
