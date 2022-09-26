function fib(n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
let count = fib(10);
let delay = 0;
for (let i = 0; i < 10; i++) {
  let delay = fib(i);
  setTimeout(() => {
    console.log(i, delay);
  }, delay * 1000);
}
