// Coding Challenge #1

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. 
The message is either "Mark's BMI is higher than John's!" or "John's 
BMI is higher than Mark's!"
2. Use a template literal to include the 
BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})!`);
}

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

if (BMIMark2 > BMIJohn2) {
  console.log(`Mark2's (${BMIMark2}) BMI is higher than John's (${BMIJohn2})!`);
} else {
  console.log(`John2's (${BMIJohn2}) BMI is higher than Mark's (${BMIMark2})!`);
}
