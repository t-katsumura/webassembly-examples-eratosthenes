// build with command
// $ gcc src/main.c src/prime.c -O3 -o main

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "prime.h"

int main(int argc, char const *argv[])
{

    if (argc <= 1)
    {
        printf("no arguments found");
        return 1;
    }

    int n = atoi(argv[1]);
    printf("given number = %d\n", n);

    unsigned int result;
    clock_t t;

    // get start time
    t = clock();

    // calculate prime
    result = prime(n);

    // get diff between end-time and start-time
    t = clock() - t;

    printf("max prime = %d\n", result);
    printf("duration [ms] = %f\n", ((float)t / (CLOCKS_PER_SEC / 1000)));

    return 0;
}
