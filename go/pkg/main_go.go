// build for browsers. Use ${GOROOT}/misc/wasm/wasm_exec.js
// "-ldflags" can be found by `go build -ldflags --help`
// set environmental variables of `GOOS=js GOARCH=wasm`
// $ go build -o prime.wasm -tags=release -ldflags="-s -w" src/main_go.go src/prime.go

package main

import "syscall/js"

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
