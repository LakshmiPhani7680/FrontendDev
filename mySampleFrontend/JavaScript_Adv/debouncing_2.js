// Example debounced function
function logMessage(message) {
  console.log(message);
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    // console.log(func);
    // console.log(args);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      //   console.log(func.apply(this, args));
      func.apply(this, args);
    }, delay);
  };
}

// Create a debounced version of logMessage
const debouncedLog = debounce((message) => {
  logMessage(message);
}, 300);

// Simulate typing in an input field
debouncedLog("Hello"); // Will not log immediately
debouncedLog("Phani checking");
debouncedLog("Hello again"); // Will not log immediately
// Only after 300ms of no new input, the final 'Hello again' will be logged
