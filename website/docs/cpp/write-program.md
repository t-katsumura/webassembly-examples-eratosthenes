---
sidebar_position: 1
---

# Write Program

## Write

C++ program becomes like this.

```cpp reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/cpp/prime.cpp#L11-L75
```

## Build for Test

Build C++ program to executable file `prime.exe`.  
`g++` is used here to build.

Uncomment `main()` function in the program before build.

```cpp reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/cpp/prime.cpp#L80-L107
```

Then build the program.  
These commands generate `prime.exe`.

```bash title="build without optimization"
g++ prime.cpp -o prime.exe
```

```bash title="build with optimization"
g++ -O3 prime.cpp -o prime.exe
```

g++ command line arguments can be found at [3 GCC Command Options](https://gcc.gnu.org/onlinedocs/gcc/Invoking-GCC.html#Invoking-GCC).

## Run and Test

```bash title="invoke prime function"
prime.exe 100000
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
