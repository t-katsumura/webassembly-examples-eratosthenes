---
sidebar_position: 1
---

# Write Program

## Write

In Go, [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) can be written as

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/src/prime.go#L4-L63
```

## Build for Test

Build Go program to executable file.  
This command generates `main.exe`.

```bash title="build with go"
go build -tags=release -ldflags="-s -w" src/main.go src/prime.go
```

Here, `-tags=release` and `-ldflags` are for optimizing.  
Go command line options can be found at [here](https://pkg.go.dev/cmd/go).

## Run and Test

Now, run the executable file.  
And, invoke and test the function.

```bash title="invoke main function"
main.exe 100000
```

```bash title="output"
given number = 100000
max prime = 99991
duration [ns] = 63042700
```

Or, `go` command can directly invoke the program and results in same output.

```bash title="directly invoke main function"
go run -tags=release -ldflags="-s -w" src/main.go src/prime.go 100000
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
