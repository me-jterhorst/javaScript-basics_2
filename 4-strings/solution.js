function isEmptyString(a) {
  if (a === "") {
    return true;
  }

  return false;
}

function isIncluded(a, b) {
  if (a.includes(b)) {
    return true;
  }
  return false;
}

function firstCharacter(a) {
  return a[0];
}

function lastCharacter(a) {
  return a[a.length - 1];
}

function capitalize(a) {
  return a[0].toUpperCase() + a.substring(1);
}

console.log(isEmptyString("")); // true
console.log(isEmptyString("some string")); // false
console.log(isIncluded("bus", "us")); // true
console.log(isIncluded("house", "cat")); // false
console.log(firstCharacter("house")); // "h"
console.log(lastCharacter("house")); // "e"
console.log(capitalize("house")); // "House"
