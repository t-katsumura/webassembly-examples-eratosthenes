// build with command
// $ go build -tags=release -ldflags="-s -w" src/main.go src/prime.go

package main

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

// main function for running as go
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
