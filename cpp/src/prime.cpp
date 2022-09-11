// build for browsers
// $ em++ src/prime.cpp -o prime.js -O3 -flto -sWASM=1 -sEXIT_RUNTIME=1 -sINVOKE_RUN=0 -sEXPORTED_FUNCTIONS=_prime -sMODULARIZE=1
// build for standalone
// $ em++ src/prime.cpp -o prime_standalone.wasm -O3 -flto -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry

#include <cmath>
#include <vector>

extern "C" int prime(int n)
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
    int N = (int)((n - 1) / 2);

    // max value to divide
    int Nmax = (int)std::sqrt(n);

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    std::vector<bool> vec(N, true);

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
            if (!vec[j])
            {
                continue;
            }
            y = 2 * (j + 1) + 1;
            if (y % x == 0)
            {
                vec[j] = false;
            }
        }
    }

    // check max prime below n
    int max_val = 2;
    for (int i = N - 1; i >= 0; i--)
    {
        if (vec[i])
        {
            max_val = 2 * (i + 1) + 1;
            break;
        }
    }
    return max_val;
}
