---
sidebar_position: 1
---

# Write Program

## Write

Go program becomes like this.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/4a867b918e191abd059d9a31addabfe7db02875c/go/prime.go#L22-L72
```

## Build for Test

Build Go program to executable file `prime.exe`.  

Uncomment `main()` function in the program before build.

```go reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/4a867b918e191abd059d9a31addabfe7db02875c/go/prime.go#L99-L119
```

Then build the program.  
These commands generate `prime.exe`.

```bash title="build without optimization"
go build prime.go
```

```bash title="build with optimization"
go build -tags=release -ldflags="-s -w" prime.go
```

Go command line arguments can be found at [here](https://pkg.go.dev/cmd/go).

## Run and Test

```bash title="invoke prime function"
prime.exe 100000
```

```bash title="output"
given number = 100000
max prime = 99991
duration [ns] = 63042700
```


Or, `go` command can directly invoke the program and results in same output.

```bash title="directly invoke prime function"
go run prime.go 100000

or

go run -tags=release -ldflags="-s -w" prime.go 100000
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
