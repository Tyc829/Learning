// new做了什么
// 首先创建一个空对象
// 将空对象的隐式原型指向构造函数的原型
// 改变this指向
// 判断类型
function myNew(fn, ...args) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  let res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

let p1 = myNew(Person, "yzh", "18", "nan");
let p2 = new Person("yzh", "18", "nan");
console.log(p1);
console.log(p2);
