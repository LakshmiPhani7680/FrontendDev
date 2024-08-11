// let count = 0;
// function getRandom() {
//   count++;
//   if (count > 4) {
//     clearInterval(timeOutId);
//   }
//   return Math.floor(Math.random() * 100);
// }

// let timeOutId = setInterval(() => {
//   console.log(getRandom());
// }, 3000);
// console.log(timeOutId);

function getRandom() {
  return Math.floor(Math.random() * 100);
}
console.log("I am before");
function monitorStockPrice() {
  return new Promise((resolve, reject) => {
    let count = 0;
    let timeOutId = setInterval(() => {
      console.log(getRandom());
      count++;
      if (count > 4) {
        clearInterval(timeOutId);
        resolve("Result stopped after 15 seconds");
      }
    }, 3000);
  });
}
console.log("Am I?");
monitorStockPrice().then((res) => {
  console.log(res);
});
console.log("am I too?");
