let arr = [];
let num;
let question;

function calculateSummation(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
}

function askForNumbers() {
  return (question = prompt("Add a number"));
}

function checkForAbort() {
  return question !== "" && question !== null
    ? arr.push(Number(question))
    : alert(calculateSummation(arr));
}

while (question !== "" && question !== null) {
  askForNumbers();
  checkForAbort();
}
