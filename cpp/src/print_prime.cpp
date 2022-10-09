// build for standalone (for WAVM)
// $ em++ src/print_prime.cpp src/prime.cpp -o print_prime_standalone.wasm -O3 -flto -sWASM=1 -sEXPORTED_FUNCTIONS=_prime,_print_prime -sSTANDALONE_WASM=1 --no-entry

#include <iostream>
#include "prime.hpp"

extern "C" void print_prime(int n)
{
    std::cout << "max prime = " << prime(n) << std::endl;
}
