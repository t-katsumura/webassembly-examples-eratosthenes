// build for browsers
// $ emcc src/prime.c -o prime.js -O3 -flto -sWASM=1 -sEXIT_RUNTIME=1 -sINVOKE_RUN=0 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=32mb -sALLOW_MEMORY_GROWTH=1 -sMODULARIZE=1
// build for standalone
// $ emcc src/prime.c -o prime-standalone.wasm -O3 -flto -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry

#include <math.h>
#include <stdlib.h>

int prime(int n)
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
    int Nmax = (int)sqrt(n);

    // sieve array correspond to [3, 5, 7, 9, ..., ]
    // here, 0 = false, 1 = true
    int *arr;
    arr = (int *)malloc(N * sizeof(int));
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
    int max_val = 2;
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
