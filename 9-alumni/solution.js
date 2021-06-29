let jakob = {
  name: "Jakob",
  surname: "ter Horst",
  age: 30,
  previousExperience: ["Freelancer", "Media Designer", "Junior Art Director"],
  education: ["Schoul", "Unifersiti"],
  isLearningJavaScript: true,
};
let john = {
  name: "John",
  surname: "Goehner",
  age: 28,
  previousExperience: ["Freelancer", "Stuff", "Junior Art Director"],
  education: ["Schoul", "Unifersiti"],
  isLearningJavaScript: true,
};
let patrik = {
  name: "Patrik",
  surname: "Glademan",
  age: 25,
  previousExperience: ["Freelancer", "Media Designer", "Junior Art Director"],
  education: ["Schoul", "Unifersiti"],
  isLearningJavaScript: true,
};

function displayStudent(student) {
  console.log("--");
  console.log(student.name);
  console.log(student.surname);
  console.log(student.age);
  console.log(student.previousExperience);
  console.log(student.education);
  console.log(student.isLearningJavaScript);
  console.log("--");
}

displayStudent(jakob);
displayStudent(john);
displayStudent(patrik);
