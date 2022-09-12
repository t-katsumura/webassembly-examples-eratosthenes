import sys
import time

from prime import prime

if __name__ == '__main__':

    args = sys.argv
    if len(args) < 2:
        print("no arguments found")
        sys.exit(1)

    n = int(args[1])

    start = time.time()
    max_prime = prime(n)
    end = time.time()

    print("given number =", n)
    print("max prime =", max_prime)
    print("duration [ms] = ", 1000*(end-start))
