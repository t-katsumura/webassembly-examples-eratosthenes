// build for standalone
// $ em++ src/print_prime.cpp src/prime.cpp -o print_prime-standalone.wasm -O3 -flto -sWASM=1 -sEXPORTED_FUNCTIONS=_prime,_print_prime -sSTANDALONE_WASM=1 --no-entry

#include <iostream>
#include "prime.hpp"

// this function is for test use
void print_prime(int n)
{
    std::cout << "max prime = " << prime(n) << std::endl;
}
