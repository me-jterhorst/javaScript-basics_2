const greet = (username = "Mr. Nobody") => `Hello ${username}`;

let borislav = greet("Borislav");
let michael = greet("Michael");
let jakob = greet("Jakob");

alert(borislav);
alert(michael);
alert(jakob);

greet();
