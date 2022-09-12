from math import sqrt


def prime(n: int) -> int:
    # n is required to be grater than 2
    if n == 2:
        return 2
    elif n < 2:
        return 0

    # length of sieve array
    N = int((n-1)/2)

    # max value to divide
    Nmax = int(sqrt(n))

    # sieve array correspond to [3, 5, 7, 9, ..., ]
    arr = [True] * N

    for i in range(N):
        x = 2*(i+1) + 1

        # no need to check the value grater than sqrt(n)
        if x > Nmax:
            break

        for j in range(i+1, N):
            if not arr[j]:
                continue
            y = 2*(j+1) + 1
            if y % x == 0:
                arr[j] = False

    # check max prime below n
    max_val = 2
    for i in reversed(range(N)):
        if arr[i]:
            max_val = 2*(i+1) + 1
            break
    return max_val
