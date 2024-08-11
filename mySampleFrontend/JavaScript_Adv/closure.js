function makeMultiplier(factor) {
  // This is a closure because it retains access to `factor`
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2); // `double` is a function with access to `factor` = 2
console.log(double(5)); // Outputs: 10

// const triple = makeMultiplier(3); // `triple` is a function with access to `factor` = 3
console.log(makeMultiplier(3)(5)); // Outputs: 15
function withLogging(fn) {
  // `withLogging` is a higher-order function
  return function (...args) {
    console.log("Arguments:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

withLogging(add)(2, 3);
// addWithLogging(2, 3);
// Outputs:
// Arguments: [2, 3]
// Result: 5
