const exec = (item, delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(item), delay));
};

async function runParallel() {
  const [result1, result2, result3] = await Promise.all([
    exec("x", 100),
    exec("y", 500),
    exec("z", 100),
  ]);
  return `parallel is done: ${result1} ${result2} ${result3}`;
}
runParallel().then((data) => {
  console.log(data);
});
