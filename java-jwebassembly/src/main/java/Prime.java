// build for browsers (checked with Gradle 7.5.1, JVM 1.8.0_345 (Temurin 25.345-b01))
// $ gradle wasm

import java.util.Arrays;
import de.inetsoftware.jwebassembly.api.annotation.Export;

public class Prime {

    @Export
    public static int prime(int n) {
        // n is required to be grater than 2
        if (n == 2) {
            return 2;
        } else if (n < 2) {
            return 0;
        }

        // length of sieve array (ignore even number)
        int N = (int) Math.floor((n - 1.0) / 2.0);

        // max value to check division
        int sqrtn = (int) Math.floor(Math.sqrt(n));

        // sieve array correspond to [3, 5, 7, 9, ..., ]
        boolean[] arr = new boolean[N];
        Arrays.fill(arr, true);

        int x, y;
        for (int i = 0; i < N; i++) {
            x = 2 * (i + 1) + 1;

            // theoretically, no need to check the value grater than sqrt(n)
            if (x > sqrtn) {
                break;
            }

            for (int j = i + 1; j < N; j++) {
                if (!arr[j]) {
                    continue;
                }
                y = 2 * (j + 1) + 1;
                if (y % x == 0) {
                    arr[j] = false;
                }
            }
        }

        // check max prime below n
        int max_val = 2;
        for (int i = N - 1; i >= 0; i--) {
            if (arr[i]) {
                max_val = 2 * (i + 1) + 1;
                break;
            }
        }
        return max_val;
    }

    @Export
    public static void main(String[] args) {
    }
}
