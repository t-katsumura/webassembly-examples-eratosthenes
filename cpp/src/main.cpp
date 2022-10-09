// build with command
// $ g++ src/main.cpp src/prime.cpp -O3 -o main

#include <iostream>
#include <chrono>
#include "prime.hpp"

int main(int argc, char const *argv[])
{

    if (argc <= 1)
    {
        printf("no arguments found");
        return 1;
    }

    int n = atoi(argv[1]);
    std::cout << "given number = " << n << std::endl;

    // get start time
    auto start = std::chrono::steady_clock::now();

    // calculate prime
    int result = prime(n);

    // get end time
    auto end = std::chrono::steady_clock::now();

    std::cout << "max prime = " << result << std::endl;
    std::cout << "duration [ms] = "
              << std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count()
              << std::endl;

    return 0;
}