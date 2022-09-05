// Build for browsers
// emcc prime.cpp -o prime.js -O2 -sWASM=1 -sEXIT_RUNTIME=1 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=512mb
// Build for standalone
// emcc prime.cpp -o prime.js -O3 -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry

#include <iostream>
#include <cmath>
#include <chrono>
#include <unistd.h>

extern "C" unsigned int prime(unsigned int n)
{

    // n is required to be grater than 2
    if (n == 2)
    {
        return 2;
    }
    else if (n < 2)
    {
        return 0;
    }

    // length of sieve array
    unsigned int N = (unsigned int)((n - 1) / 2);

    // max value to divide
    unsigned int Nmax = (unsigned int)std::sqrt(n);

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    unsigned int *arr = new unsigned int[N];
    for (int i = 0; i < N; i++)
    {
        arr[i] = 1;
    }

    int x = 0;
    int y = 0;

    for (int i = 0; i < N; i++)
    {
        x = 2 * (i + 1) + 1;

        // no need to check the value grater than sqrt(n)
        if (x > Nmax)
        {
            break;
        }

        for (int j = i + 1; j < N; j++)
        {
            if (!arr[j])
            {
                continue;
            }
            y = 2 * (j + 1) + 1;
            if (y % x == 0)
            {
                arr[j] = 0;
            }
        }
    }

    // check max prime below n
    unsigned int max_val = 2;
    for (int i = N - 1; i >= 0; i--)
    {
        if (arr[i])
        {
            max_val = 2 * (i + 1) + 1;
            break;
        }
    }
    return max_val;
}

// Comment out main function when building to .wasm
// Uncomment main function when building to .exe
/*
int main(int argc, char const *argv[])
{

    if (argc <= 1)
    {
        printf("no arguments found");
        return 1;
    }

    int n = atoi(argv[1]);
    printf("given number = %d\n", n);

    // get start time
    auto start = std::chrono::steady_clock::now();

    // calculate prime
    unsigned int result = prime(n);

    // get end time
    auto end = std::chrono::steady_clock::now();

    std::cout << "max prime = " << result << std::endl;
    std::cout << "duration [ms] = "
              << std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count()
              << std::endl;

    return 0;
}
*/
