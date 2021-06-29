function logClass(studentList) {
  if (studentList.length === 0) {
    return console.log(`This class is empty`);
  }
  console.log(studentList);
}

let bootcamp = [
  "Namir",
  "Martin",
  "Adriana",
  "Benedikt",
  "Borislav",
  "Christian",
  "Debora",
  "Jakob",
  "John",
  "Michael",
  "Michail",
  "Neele",
  "Paraskevi",
  "Patrik",
];

logClass(bootcamp);

logClass(["[Mark", "Hendrik", "Nadine"]);
logClass("Heike");
logClass("");
