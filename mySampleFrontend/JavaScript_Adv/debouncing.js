function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedFunction = debounce(() => console.log("Debounced!"), 1000);
debouncedFunction(); // Will log 'Debounced!' after 1 second
