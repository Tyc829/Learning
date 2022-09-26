const PEDDING = Symbol();
const FULFILLED = Symbol();
const REFJECTED = Symbol();

const myPromise = function (fn) {
  this.state = PEDDING;
  this.value = "";

  const resolve = (value) => {
    this.state = FULFILLED;
    this.value = value;
  };
  const reject = (error) => {
    this.state = REFJECTED;
    this.value = error;
  };

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }

  this.then = (onFulFilled, onRejected) => {
    if (this.state == FULFILLED) {
      onFulFilled(this.value);
    }
    if (this.state == REFJECTED) {
      onRejected(this.value);
    }
  };
};

let p = new myPromise((resolve, reject) => {
  resolve(123);
}).then((value) => {
  console.log(value);
});
