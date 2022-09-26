const intersectNoRepeatTwice = (...arr) => {
  // return arr.reduce((a, b) => a.filter((c) => b.includes(c)));
  return Array.from(
    new Set(arr.reduce((a, b) => a.filter((c) => b.includes(c))))
  );
};

console.log(intersectNoRepeatTwice([2, 1], [2, 3]));
console.log(intersectNoRepeatTwice([1, 2, 2], [1, 2, 2]));
console.log(intersectNoRepeatTwice([1, 2, 2], [1, 2, 2], [1, 2]));
