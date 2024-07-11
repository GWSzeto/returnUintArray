### Steps to reproduce
```
anvil # in a new terminal
forge build
forge script script/Counter.s.sol:CounterScript --fork-url http://localhost:8545 --broadcast
bun i
bun index.ts
# get results [0n, 1n, 2n] (I think...)
```
