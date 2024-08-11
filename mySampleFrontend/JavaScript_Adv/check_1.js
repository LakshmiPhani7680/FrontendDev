function arrChunk(arr, size) {
  let output = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let chunkArr = [];
    for (let j = 0; j < size; j++) {
      chunkArr[j] = arr[i];
    }
    output[i] = chunkArr;
  }
  return output;
}
let array = [1, 2, 3, 4, 5];
console.log(makeChunk(array, 3));

function makeChunk(arr, size) {
  let chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}
