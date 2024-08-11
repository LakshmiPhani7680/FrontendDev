let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}';
let obj = JSON.parse(stringJSON);
console.log(obj);
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' }
let dataJSON = { firstName: "Sam", lastName: "Fernandes" };
let obj2 = JSON.stringify(dataJSON);
console.log(obj2);
//OUTPUT: {"firstName":"Sam","lastName":"Fernandes"}
let obj3 = { name: "Alice", age: 25 };
let jsonString2 = JSON.stringify(obj);
let jsonString = JSON.stringify(obj, null, 2); // Indent with 2 spaces
console.log(jsonString);
console.log(jsonString2);
let jsonString3 = JSON.stringify(
  obj3,
  (key, val) => {
    if (key == "age") return undefined;
    return val;
  },
  2
);
console.log(jsonString3);
/*
{
  "name": "Alice",
  "age": 25
}
*/
