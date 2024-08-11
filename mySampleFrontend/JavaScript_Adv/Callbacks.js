function InvokeCallBack(callback) {
  setInterval(() => 1, 1000);
  setTimeout(callback, 2000);
}

function displayHello() {
  console.log("Hello");
}

InvokeCallBack(displayHello);
