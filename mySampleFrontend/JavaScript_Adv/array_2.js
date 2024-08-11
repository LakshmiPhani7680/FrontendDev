let numArr = [2, 4, 6, 8];
let result = numArr.map((num) => num / 2);
console.log(result);
//[ 1, 2, 3, 4 ]
let myArray = ["Android", "iOS", "Windows"];
console.log(myArray.join(""));
// Android,iOS,Windows
console.log(myArray.join("-"));
// Android-iOS-Windows
const numArr2 = [1, 2, 3, 4];
// 1 + 2 + 3 + 4
console.log(
  numArr2.reduce((accumulator, currentVal) => accumulator * currentVal)
);
// 10
// 5 + 1 + 2 + 3 + 4
console.log(
  numArr2.reduce((accumulator, currentVal) => accumulator * currentVal, 5)
);
// 15
let myArr = [];
for (i = 0; i < 3; i++) {
  myArr.push(function () {
    console.log(i);
  });
}
for (j = 0; j < 3; j++) {
  myArr[j]();
  //   console.log(myArr[j]());
}
