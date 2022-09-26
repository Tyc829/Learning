const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(2);
    reject(2);
  }, 2000);
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

async function execute() {
  await promise1.then((v) => console.log(v));
  await promise2.catch((v) => console.log(v));
  // await promise3.then((v) => console.log(v));
}
execute();
