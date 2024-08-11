let colors = new Array(2);
console.log(colors.length); //2
//Assign values to an empty array using indexes
colors[0] = "Red";
colors[1] = "Green";
colors[2] = "Greens";
console.log(colors.length);
console.log(colors); //['Red','Green']
colors = new Array("Red", "Orange", "Green");
console.log(colors);
let numArr = [10, 5, 20];
//spread turns array into the list of arguments
console.log(Math.max(...numArr)); // 20
let arr1 = [3, 5, 1];
let arr2 = [8, 2, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr); // [3,5,1,8,2,6]
// [RN1] we have an array with the employee name and id
let empArr = ["Shaan", 104567];
// destructuring assignment
// sets empName = empArr[0]
// and empId = empArr[1]
let [empName, empId] = empArr;
console.log(empName); // Shaan
console.log(empId); // 104567
// iterates over array elements
for (let color of colors) {
  console.log(color);
}
let myArray = ["Android", "iOS", "Windows"];
myArray.push("Linux"); //["Android","iOS","Windows","Linux"]
console.log(myArray);
console.log(myArray.pop()); // Windows
console.log(myArray);
console.log(myArray.shift()); //Android
console.log(myArray); //["iOS", "Windows"]
myArray.unshift("Linux");
console.log(myArray);
//["Linux","Android","iOS","Windows"]
myArray.splice(1, 0, "Linux");
console.log(myArray);
// ["Android","Linux", "iOS", "Windows"]
console.log(myArray.slice(1, 3));
// ["iOS", "Windows"]
let myArray1 = ["Android", "iOS"];
let myArray2 = ["Samsung", "Apple"];
console.log(myArray1.concat(myArray2));
//["Android", "iOS", "Samsung", "Apple"]
let mathWord = [20, 30, 10, 40, 50];
mathWord.reverse();
console.log(mathWord);
// [50,40,10,30,20]
console.log(myArray.indexOf("iOS")); // 1
console.log(myArray.indexOf("Samsung"));
//-1
let cake = ["Vanila", "Choco", "Plum"];
console.log(cake.includes("Plum"));
// true
console.log(cake.includes("Caramel"));
// false
let result = myArray.find((element) => element.length > 5);
console.log(result); //Android
let resultIndex = myArray.findIndex((element) => element.length > 5);
console.log(result); //0
let resultFilter = myArray.filter((element) => element.length > 5);
console.log(result);
//["Android","Windows"]
let numArray = [-3, -4, -6, -10];
let getPositiveNumbers1 = numArray.some((element) => element > 0);
console.log(getPositiveNumbers1);
//false
let numArray2 = [-3, 4, -6, -10];
let getPositiveNumbers = numArray2.some((element) => element > 0);
console.log(getPositiveNumbers);
//true
