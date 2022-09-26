let str = "Ni Hao Wo Shi Ni Die";
function turn(str) {
  let arr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      newStr += arr[i].replace(arr[i][0], arr[i][0].toLocaleLowerCase());
    } else {
      newStr += arr[i].replace(arr[i][0], "_" + arr[i][0].toLocaleLowerCase());
    }
  }
  return newStr;
}
let str1 = turn(str);
console.log(str1);
