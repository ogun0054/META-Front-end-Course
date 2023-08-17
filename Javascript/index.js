/*Operators 
  Operators:  An operator is used to manipulate individual data items and return a result.
  e.g Assignment operator (=)
  Arithmetic Operators
  - Addition (+)
  - Subtraction (-)
  - Division (/)
  - Multiplication (*)
  - Modulus (%)
  - Additional assignment (+=)

*/

// Assignment Operation
let person = "AbduLlah";

// Addition Operation
let addition = 2 + 7;

// Subtraction Operation
let sub = 10 - 7;

// Division Operation
let div = 100 / 20;

// Multiplication Operation
let multiple = 16 * 4;

// Modulus Operator

let module = 9 % 2;

console.log(" Arithmetic Operations " + addition, sub, div, multiple, module);

/*
 Comparison Operators

 - Greater than ( > )
 - Less than ( < )
 - Equal to ( == )
 - Not equal to ( != )
 - strict equality (===)
 - strict non-equality(!==)

*/

let greater = 10 > 5;
let less = 5 < 10;
let equal = 50 == 50;
let notEqual = 50 != 60;

console.log("Comparison Operators   " + greater, less, equal, notEqual);

/*
Logical Operators
Logical Operators : Boolean ( True / False)

- And (&&) : Checks for both conditions to be true, e.g (a>5 && a<10);  &(ampersand symbol)
- OR (||) : Checks for at least one conditions to be true e.g (a>5 || a >10)
- NOT (!) : Returns false if the result is true e.g !( a>5 )

** Operators are used to control the flow of a program that meets certain criteria.
*/

/*
Numbers : The number of data type is a foundational part of JavaScript as a programming language because
it represents both integer and decimal point numbers.
*/

/*
String: Strings are used to represent and work with
 a sequence of characters while programming in JavaScript.

 ** A string in JavaScript is a collection of characters enclosed by single quotes(''), double quotes("")
 */

let greeting = "Hello \n there!";
console.log(greeting);

/*
Boolean: The Boolean data type is used to check if a statement is true or false.
 */

let gre = 1 < 2;
console.log(gre);

// AND Operator

let timeNow = Date.now();
console.log(timeNow);

let currentTime = 15;
console.log(currentTime > 12 && currentTime < 17);

// Challenge

/*
/////////////////////////////////////////////////
Task 1: Using the logical && operator
You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

Create a variable named  score and set it to  8

Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator

The expected output in the console should be: "Mid-level skills: true".
///////////////////////////////////////////////////////////////////////////////////

*/

// Solution
let score = 8;
console.log("Mid-level-skills:" + !(score < 0 && score < 10));

/*
/////////////////////////////////////////////////
Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.

You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:

Declare the variable timeRemaining, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.

Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0

Note that the expected output in the console should be: "Game over: true".
///////////////////////////////////////////////////////////////////////////////////

*/

//Solution

let timeRemaining = 0;
let energy = 10;
console.log("Game over : " + (timeRemaining == 0 || energy == 0));

/*
////////////////////////////////////////////////////////////////////////////////
Task 3: Using the modulus operator, %, to test if a given number is odd
You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

To achieve this task, you need to declare six variables, as follows:

The first variable, named num1,  should be assigned a number value of 2.

The second variable, named num2, should be assigned a number value of 5.

The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.

The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.

The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.

The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.

Run console log two times after you've set the variables:

The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1

The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2

Note: The output to the console should be as follows:

Is 2 an even number? true

Is 5 an even number? false
/////////////////////////////////////////////////////////////////////////////////

*/
// Solution

let num1 = 2;
let num2 = 5;
let test1 = num1 % 2;
let test2 = num2 % 2;
let result1 = test1 == 0;
let result2 = test2 == 0;

console.log("Is ", num1, "an even number?", result1);
console.log("Is ", num2, "an even number?", result2);

/*
/////////////////////////////////////////////////////////
Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.

Note: This task should be completed on a single line of code. The output in the console should be 15.
/////////////////////////////////////////////////////////

*/

// Solution
console.log(5 + 10);

/*
////////////////////////////////////////////////////////////////////
Task 5: Concatenate numbers and strings using the + operator
Code three variables:

The first variable should be a string with the following value: "Now in ". Name the variable now.

The second variable should be a number with the value: 3. Name the variable three.

The third variable should a string with the following value: "D!". Name the variable d.

Console log the following code: now + three + d.

Note: The expected output should be: "Now in 3D!".
////////////////////////////////////////////////////////////////////////////

*/
// Solution
let now = "Now in ";
let three = 3;
let d = "D!";
console.log(now + three + d);

/*
///////////////////////////////////////////////////////////////////////////////
Task 6: Use the += operator to accumulate values in a variable
Code a new variable and name it counter, assigning it to the value of 0.

On the next line, use the += operator to increase the value of counter by 5.

On the next line, use the += operator to increase the value of counter by 3.

On the fourth line, console log the value of the counter variable.

Note: The output value should be 8.
///////////////////////////////////////////////////////////////////////////////

*/

//Solution
let counter = 0;
counter += 5;
counter += 3;
console.log(counter);

console.log("Number " + 8);

//Additional Resources

//Addition (+)
/*
The + operation is overloaded foe two distinct operations:
1- numeric addition
2- string concatenation
 */

//BigInt

let bigIntNum = 9007199254740991n;
let stringVar = 20;

// console.log(bigIntNum + stringVar);

/*conditional
if statement
if else statement
switch statement
*/

//If else condition Example

// let studentName = prompt("What is your name?");
// let result = prompt("What is your scoreSherif");

// if (result > 40) {
//   let testResult = `${studentName}!,Congratulations, you pass the test.`;
//   console.log(testResult);
// } else {
//   console.log(`${studentName}!, You need to try next time.`);
// }

// let visitingPlace = prompt(
//   "what's your favorite place to visit soon? \n Choose from the following (Makkah, Medina, Aqsa, London, Canada, USA)"
// );

// If statement

// if (visitingPlace == "Makkah") {
//   console.log("Nice, probably you are going for Umrah or Hajj.");
// } else if (visitingPlace == "Medina") {
//   console.log("Cole!, you are going to visit the prophet's Masjid.");
// } else if (visitingPlace == "Aqsa") {
//   console.log("You are traveling to Masjidul-Aqsa");
// } else if (visitingPlace == "London") {
//   console.log("You are visiting your family");
// } else if (visitingPlace == "Canada") {
//   console.log("You are going fo studies");
// } else if (visitingPlace == "USA") {
//   console.log("You won a Scholarship.");
// } else {
//   console.log("You are not traveling");
// }

// Switch

//switch (visitingPlace) {
//   case "Makkah":
//     console.log("Nice, probably you are going for Umrah or Hajj.");
//     break;
//   case "Medina":
//     console.log("Cole!, you are going to visit the prophet's Masjid.");
//     break;
//   case "Aqsa":
//     console.log("You are traveling to Masjidul-Aqsa");
//     break;
//   case "London":
//     console.log("You are visiting your family");
//     break;
//   case "Canada":
//     console.log("You are going fo studies");
//     break;
//   case "USA":
//     console.log("You won a Scholarship.");
//     break;
//   default:
//     console.log("You are not traveling");
// }

// Loop
/*
Types of loop in Javascript
1. For
2. While
3. Nested
*/

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//While Loop
let i = 1;
while (i < 4) {
  i++;
  console.log(i);
}

console.log("///////////////");
for (let i = 10; i > 3; i--) {
  console.log(i);
}
console.log("Happy life!");

/*
// Loop Examples
1.Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
 */
// Solution

for (let i = 1; i < 6; i++) {
  console.log(i);
}
console.log("Counting completed!");

/*
Task 2 
Write a "for" loop that will perform exactly the same repetitive code as this:

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
 */

// Solution

for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Counting finished!");

/*
Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')
 */

// Solution

let f = 1;
while (f < 6) {
  console.log(i);
  f++;
}
console.log("Counting completed!");

/*
Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
 */

// Solution

let j = 5;
while (j > 0) {
  console.log(j);
  j--;
}
console.log("Countdown finished!");

/*
Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
 */

//Solution

let year = 2018;
while (year < 2023) {
  console.log(year);
  year++;
}

//Nested Loop
// Single loop
// for (let firstNum = 0; firstNum < 2; firstNum++) {
//   for (let secondNum = 0; secondNum < 10; secondNum++) {
//     console.log(firstNum + " , " + secondNum);
//   }
// }

//single loop
// for (let secondNum = 0; secondNum < 10; secondNum++) {
//   console.log(secondNum);
// }

//nested loops - one inside another
for (let firstNum = 0; firstNum < 2; firstNum++) {
  for (let secondNum = 0; secondNum < 10; secondNum++) {
    console.log(
      firstNum + " time " + secondNum + " equals " + firstNum * secondNum
    );
  }
}

//nested loops - one inside another
console.log("-----------------------Divide------------------");
// for (let d = 100; d > 10; d -= 10) {
//   for (let f = 10; f > 4; f = d - 5) {
//     console.log(d + " divided by " + j + " equals " + d / f);
//   }
// }
