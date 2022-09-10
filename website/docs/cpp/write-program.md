---
sidebar_position: 1
---

# Write Program

## Write

In C++, the Sieve of Eratosthenes can be written as

```cpp reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/cpp/src/prime.cpp
```
`extern "C"` is required.

## Build for Test

Build C++ program to executable file `main.exe`.  
`g++` is used here.

```bash title="build with optimization level -O3"
g++ src/main.cpp src/prime.cpp -O3 -o main
```

g++ command line arguments can be found at [3 GCC Command Options](https://gcc.gnu.org/onlinedocs/gcc/Invoking-GCC.html#Invoking-GCC).

## Run and Test

Now, lets's run `main.exe` and test the function.

```bash title="invoke main function"
main.exe 100000
```

```bash title="output"
given number = 100000
max prime = 99991
duration [ms] = 33
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
