//go:build js && wasm
// +build js,wasm

package main

import (
	"fmt"
	"math"
)

// requires "export" directive for compiler
//export prime
func prime(n int) int {
	// n is required to be grater than 2
	if n == 2 {
		return 2
	} else if n < 2 {
		return 0
	}

	// length of sieve array (ignore even number)
	N := (n - 1) / 2

	// max value to check division
	sqrtn := int(math.Sqrt(float64(n)))

	// sieve array correspond to [3, 5, 7, 9, ..., ]
	arr := make([]bool, N)
	for i, _ := range arr {
		arr[i] = true
	}

	var x, y int
	for i := 0; i < N; i++ {
		x = 2*(i+1) + 1

		// theoretically, no need to check the value grater than sqrt(n)
		if x > sqrtn {
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

// tiynygo command cannot get multiple file from command line argument
// that's why this file is in this directory
//
// build for browsers (tinygo requires binaryen). Use ${TINYGOROOT}/targets/wasm_exec.js
// $ tinygo build -opt=2 -wasm-abi=generic -target=wasm -tags=release -o prime.wasm prime.go
// build for standalone (tinygo requires binaryen)
// $ tinygo build -opt=2 -wasm-abi=generic -target=wasi -tags=release -o prime_standalone.wasm prime.go
//
// main function to build for browsers with tinygo
// main function to build for standalone with tinygo
/*
func main() {
	<-make(chan struct{}, 0)
}
*/

// Uncomment this function when building WebAssembly for WAVM runtime
/*
//export print_prime
func print_prime(n int) {
	fmt.Println(prime(n))
}
*/
