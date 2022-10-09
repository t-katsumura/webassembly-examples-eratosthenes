// build for standalone (for WAVM)
// $ emcc src/print_prime.c src/prime.c -o print_prime_standalone.wasm -O3 -flto -sWASM=1 -sEXPORTED_FUNCTIONS=_prime,_print_prime -sSTANDALONE_WASM=1 --no-entry

#include <stdio.h>
#include "prime.h"

void print_prime(int n)
{
    printf("max prime = %d\n", prime(n));
}
