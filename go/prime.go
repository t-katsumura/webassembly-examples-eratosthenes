//go:build js && wasm
// +build js,wasm

// Build for browsers (tinygo requires binaryen)
// Use ${GOROOT}/misc/wasm/wasm_exec.js or ${TINYGOROOT}/targets/wasm_exec.js
// "-ldflags" can be found by `go build -ldflags --help`
// GOOS=js GOARCH=wasm go build -o prime.wasm -tags=release -ldflags="-s -w"
// tinygo build -opt=2 -wasm-abi=generic -target=wasm -tags=release -o prime.wasm prime.go
// Build for standalone (tinygo requires binaryen)
// tinygo build -opt=2 -wasm-abi=generic -target=wasi -tags=release -o prime.wasm prime.go

package main

import (
	"math"
	"syscall/js"
)

// int = 4 byte / 32 bit integer
// requires "export" directive for compiler
//export prime
func prime(n int) int {
	// n is required to be grater than 2
	if n == 2 {
		return 2
	} else if n < 2 {
		return 0
	}

	// length of sieve array
	N := (n - 1) / 2

	// max value to divide
	Nmax := int(math.Sqrt(float64(n)))

	// sieve array correspond to [3, 5, 7, 9, ..., ]
	arr := make([]bool, N)
	for i, _ := range arr {
		arr[i] = true
	}

	var x, y int
	for i := 0; i < N; i++ {
		x = 2*(i+1) + 1

		// no need to check the value grater than sqrt(n)
		if x > Nmax {
			break
		}

		for j := i + 1; j < N; j++ {
			if !arr[j] {
				continue
			}
			y = 2*(j+1) + 1
			if y%x == 0 {
				arr[j] = false
			}
		}
	}

	// check max prime below n
	max_value := 2
	for i := N - 1; i >= 0; i-- {
		if arr[i] {
			max_value = 2*(i+1) + 1
			break
		}
	}

	return max_value
}

// main function to build for browsers with go
func getPrime(this js.Value, p []js.Value) interface{} {
	if len(p) > 0 && p[0].Type() == js.TypeNumber {
		return prime(p[0].Int())
	}
	return 0
}

func main() {
	// c := make(chan struct{}, 0) // this does not work
	js.Global().Set("prime", js.FuncOf(getPrime))
	<-make(chan struct{}, 0)
	// <-c // this does not work
}

// main function to build for browsers with tinygo
// main function to build for standalone with tinygo
/*
func main() {
	<-make(chan struct{}, 0)
}
*/

// main function for running as go
/*
func main() {

	if len(os.Args) < 2 {
		fmt.Println("no arguments found")
		return
	}

	n, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("{} is not a number", os.Args[1])
		return
	}

	start := time.Now().UnixNano()
	max_prime := prime(n)
	end := time.Now().UnixNano()

	fmt.Println("given number =", n)
	fmt.Println("max prime =", max_prime)
	fmt.Println("duration [ns] =", end-start)
}
*/
