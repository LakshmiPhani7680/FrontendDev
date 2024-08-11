let name = {
  firstName: "Phani",
  lastName: "Putrevu",
};
function getFullName(gender, hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      gender +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  );
}
let bindMyName = getFullName.bind(name, "Male", "Kak", "AP");
// console.log(bindMyName);
bindMyName("India");

Function.prototype.myBind = function (...args) {
  let context = this,
    params = args.slice(1);
  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};
let bindMyName2 = getFullName.myBind(name, "Male", "kak", "AP");
// console.log(bindMyName);
bindMyName2("India");
