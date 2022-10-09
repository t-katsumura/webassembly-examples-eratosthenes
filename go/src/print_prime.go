//go:build js && wasm
// +build js,wasm

// build for standalone (tinygo requires binaryen)
// $ tinygo build -opt=2 -wasm-abi=generic -target=wasi -tags=release -o print_prime_standalone.wasm print_prime.go prime.go

package main

import (
	"fmt"
)

// requires "export" directive for compiler
//export print_prime
func print_prime(n int) void {
	fmt.Println(prime(n))
}
