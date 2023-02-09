// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using
the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).


1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has 
a higher BMI than John.

TEST DATA 1:
Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.

TEST DATA 2:
Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// // 1. Store Mark's and John's mass and height in variables

// const MassOfMark = 78;
// const HeightOfMark = 1.69;

// const MassOfJohn = 92;
// const HeightOfJohn = 1.95;

// // 2. Calculate both their BMIs using the formula (you can even implement both versions)

// const BMIMark = MassOfMark / HeightOfMark ** 2;
// const BMIJohn = MassOfJohn / (HeightOfJohn * HeightOfJohn);

// // 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(BMIMark2, BMIJohn2, markHigherBMI2);
