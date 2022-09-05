// Build for browsers
// emcc prime.c -o prime.js -O2 -sWASM=1 -sEXIT_RUNTIME=1 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=512mb
// Build for standalone
// emcc prime.c -o prime.js -O3 -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry

#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <sys/time.h>

// Calculate the max prime below n
// int = 4 byte / 32 bit integer
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

    unsigned int sec;
    int nsec;
    double m_sec;
    struct timespec start_time, end_time;
    unsigned int result;

    // get start time
    clock_gettime(CLOCK_REALTIME, &start_time);

    // calculate prime
    result = prime(n);

    // get end time
    clock_gettime(CLOCK_REALTIME, &end_time);

    sec = end_time.tv_sec - start_time.tv_sec;
    nsec = end_time.tv_nsec - start_time.tv_nsec;
    m_sec = (double)sec * 1000 + (double)nsec / (1000 * 1000);

    printf("max prime = %d\n", result);
    printf("duration [ms] = %f\n", m_sec);

    return 0;
}
*/
