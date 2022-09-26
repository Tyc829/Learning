var a = 1;
setTimeout(function () {
  console.log(a++);
}, 0);
new Promise(function executor(resolve) {
  console.log(a++);
  for (var i = 0; i < 1000; i++) {
    resolve(a++);
  }
  console.log(a++);
}).then(function (a) {
  console.log(a++);
});
console.log(a++);
