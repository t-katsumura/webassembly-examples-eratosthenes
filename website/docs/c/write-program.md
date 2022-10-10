---
sidebar_position: 1
---

# Write Program

## Write

In C, [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) can be written as

```c reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/c/src/prime.c
```

## Build for Test

Build C program to executable file `main.exe`.  
`gcc` is used here to build for test.

```bash title="build with optimization level O3"
gcc src/main.c src/prime.c -O3 -o main
```

gcc command line options can be found at [3 GCC Command Options](https://gcc.gnu.org/onlinedocs/gcc/Invoking-GCC.html#Invoking-GCC).

## Run and Test

After building C program, test the code with

```bash title="invoke and test prime function"
main.exe 100000
```

This should shows

```bash title="output"
given number = 100000
max prime = 99991
duration [ms] = 33.996600
```

The following table shows the calculated prime for given "N".

| given N | prime |
| ------- | ----- |
| 2       | 2     |
| 3       | 3     |
| 10      | 7     |
| 100     | 97    |
| 1000    | 997   |
| 10000   | 9973  |
| 100000  | 99991 |
