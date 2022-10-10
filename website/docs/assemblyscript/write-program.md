---
sidebar_position: 1
---

# Write Program

## Write

In AssemblyScript, [**Sieve of Eratosthenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) can be written as

```typescript reference
https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/assemblyscript/assembly/prime.ts
```

## Build for Test

Build AssemblyScript to 'Glue JavaScript' and WebAssembly.  
`asc` command is used here to build which is installed by [assemblyscript](https://github.com/AssemblyScript/assemblyscript).

```bash title="build with asc command"
asc assembly/prime.ts --target release
```

Other asc command options can be found at [Using the compiler](https://www.assemblyscript.org/compiler.html).

Or, you can use `npm`.  
`asbuild:release` which runs the same command above defined in `package.json`.

```bash title="build with npm command"
npm run asbuild:release
```

This generates glue JavaScript and wasm.

- prime.wasm
- prime.js

## Run and Test

Now, run the test written in `tests/index.js`.

```bash title="run tests"
node tests
```

or, alternatively

```bash title="run tests"
npm run test
```

The test would show 

```bash title="output"
(Use `node --trace-warnings ...` to show where the warning was created)
test ok
max prime = 9973
duration [ms] = 2.88
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
