const ageFahim = 2023 - 1999;
console.log(ageFahim);

const ageSarah = 2023 - 2018;
console.log(ageFahim, ageSarah);

const now = 2023;
const ageFahim2 = now - 1999;
console.log(ageFahim2);

const ageSarah2 = now - 2018;
console.log(ageFahim2, ageSarah2);

console.log(ageFahim2 * 2, ageFahim2 / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Fahim";
const lastName = "Amin";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Assignment operator
let x = 10 + 5;
x += 10; // x = x + 10 = 15 + 10 = 25
x *= 4; // x  = x * 4 = 24 * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operator
console.log(ageFahim > ageSarah);
console.log(ageFahim < ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);
