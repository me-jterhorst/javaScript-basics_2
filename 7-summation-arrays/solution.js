let arrOne = [1, 2, 3, 4];
let arrTwo = [5, 6, 7, 8];
let arrThree = [1, 2, 9, 7];
let arrFour = [];

function calculateSummation(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
}

console.log(calculateSummation(arrFour));
console.log(calculateSummation(arrTwo));
