const fib = (n, memo={}) => {
    if (n < 2) return n;
    memo[n] = memo[n] || fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
console.log('fib 2 => ', fib(2))
console.log('fib 6 => ', fib(6))
console.log('fib 10 => ', fib(10))
console.log('fib 60 => ', fib(60))
console.log('fib 1000 => ', fib(1000))