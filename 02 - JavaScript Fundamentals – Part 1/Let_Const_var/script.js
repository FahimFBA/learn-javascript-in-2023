let age = 30;
age = 40;
console.log(age);
age = 49;
console.log(age);
age = 50;
console.log(age);
age = 55;
console.log(age);

// let: for mutating variable

const birthYear = 1999; // immutable variable
// birthYear = 2000;
// throw an type error
console.log(birthYear);

// const job; missing initial value, it is a must thing to have in const

var job = "programmer"; // mutable
job = "teacher";
console.log(job);

// let is blocks scoped
// var is function scoped

// NEVER USE VAR

lastName = "Amin";
console.log(lastName);
