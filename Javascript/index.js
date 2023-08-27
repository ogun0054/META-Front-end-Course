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

// console.log(" Arithmetic Operations " + addition, sub, div, multiple, module);

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

// console.log("Comparison Operators   " + greater, less, equal, notEqual);

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
// console.log(greeting);

/*
Boolean: The Boolean data type is used to check if a statement is true or false.
 */

let gre = 1 < 2;
// console.log(gre);

// AND Operator

let timeNow = Date.now();
// console.log(timeNow);

let currentTime = 15;
// console.log(currentTime > 12 && currentTime < 17);

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
// console.log("Mid-level-skills:" + !(score < 0 && score < 10));

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
// console.log("Game over : " + (timeRemaining == 0 || energy == 0));

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

// console.log("Is ", num1, "an even number?", result1);
// console.log("Is ", num2, "an even number?", result2);

/*
/////////////////////////////////////////////////////////
Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.

Note: This task should be completed on a single line of code. The output in the console should be 15.
/////////////////////////////////////////////////////////

*/

// Solution
// console.log(5 + 10);

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
// console.log(now + three + d);

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
// console.log(counter);

// console.log("Number " + 8);

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
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//While Loop
// let i = 1;
// while (i < 4) {
//   i++;
//   console.log(i);
// }

// console.log("///////////////");
// for (let i = 10; i > 3; i--) {
//   console.log(i);
// }
// console.log("Happy life!");

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

// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }
// console.log("Counting completed!");

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

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }
// console.log("Counting finished!");

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

// let f = 1;
// while (f < 6) {
//   console.log(i);
//   f++;
// }
// console.log("Counting completed!");

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

// let j = 5;
// while (j > 0) {
//   console.log(j);
//   j--;
// }
// console.log("Countdown finished!");

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

// let year = 2018;
// while (year < 2023) {
//   console.log(year);
//   year++;
// }

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
// for (let firstNum = 0; firstNum < 2; firstNum++) {
//   for (let secondNum = 0; secondNum < 10; secondNum++) {
//     console.log(
//       firstNum + " time " + secondNum + " equals " + firstNum * secondNum
//     );
//   }
// }

//nested loops - one inside another
// console.log("-----------------------Divide------------------");
// for (let d = 100; d > 10; d -= 10) {
//   for (let f = 10; f > 4; f = d - 5) {
//     console.log(d + " divided by " + j + " equals " + d / f);
//   }
// }
// for (i = 0; i < 2; i++) {
//   console.log("Hello");
// }

// var x = 0;
// while (x < 3) {
//   console.log("Hello");
//   x++;
// }

// for (x = 0; x < 2; x++) {
//   for (var y = 0; y < 3; y++) {
//     console.log("Hello");
//   }
// }

// let x = 7;
// if (x <= 5) {
//   console.log("Hello");
// } else if (x <= 10) {
//   console.log("Goodnight");
// } else {
//   console.log("Goodbye");
// }

let x = 3;

// switch (x) {
//   case 1:
//     console.log("Hello");
//     break;
//   case 2:
//     console.log("Goodnight");
//     break;
//   case 3:
//     console.log("Goodbye");
//     break;
// }

// if (x == 2 || x == 3) {
//   console.log("Hello");
// } else {
//   console.log("Goodbye");
// }

// try {
//   console.log("hello);
// } catch (e) {
//   console.log("caught");
// }

// var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
// console.log(burger[2]);

// try {
//   throw new Error();
//   console.log("Hello");
// } catch (err) {
//   console.log("Goodbye");
// }

// function add(a, b) {
//   console.log(a + b);
// }

// add(3, "4");

// var str = "Hello";
// console.log(str.match("jello"));

// try {
//   Number(5).toPrecision(300);
// } catch (e) {
//   console.log("There was an error");
// }

// function

//Array
/*
Array 
* Values in an array are all part of a group
* Values are set in a specific sequence
* Values can be accessed with their index numbers

 */

// let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
// function listArrayItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "red") {
//       console.log(i * 100, "tomato!");
//     } else {
//       console.log(i * 100, arr[i]);
//     }
//   }
// }

// listArrayItems(colors);

// console.log(items.length);

/*
//////////////////////////////////
Exercise: Practicing with functions
///////////////////////////////////
 */

// Task 1 : Write a function named letterFinder that accepts two parameters: word and match.
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

// letterFinder("book", "o");

/*
//Object : Objects can be described as collections of related properties where each property is represented as a key value pair.
 */
// Math object cheat sheet
/*
 The PI number: Math.PI which is approximately 3.14159

The Euler's constant: Math.E which is approximately 2.718

The natural logarithm of 2: Math.LN2 which is approximately 0.693

Rounding methods
These include: 

 Math.ceil() - rounds up to the closest integer 

 Math.floor() - rounds down to the closest integer 

 Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

 Math.trunc() - trims the decimal, leaving only the integer

 Arithmetic and calculus methods
Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

Math.sqrt(16) - calculates the square root of 16, the result is 4 

Math.cbrt(8) - finds the cube root of 8, the result is 2 

Math.abs(-10) - returns the absolute value, the result is 10 

Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

 Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.
 */

//Math.random()

// Generate a decimal number between 0 and 0.99
let randomNum = Math.random();
// console.log(randomNum);
// console.log(randomNum * 100);

// Ceil Method
/*
A part of the Math object rounds a decimal up to the nearest integer.
 */

let rounded = Math.ceil(2.99);
// console.log(rounded);

//Stings

// let veggies = ["onion", "parsley", "carrot"];

// console.log(veggies);

// for (let i = 0; i < veggies.length; i++) {
//   console.log(veggies[i], i);
// }

let longestWord = "Pneumonoultramicroscopicsilicovolcanoconiosis";

// console.log(longestWord.length);
for (let i = 0; i < longestWord.length; i++) {
  // console.log(longestWord[i]);
}

//String Cheat Sheet

let greet = "Hello, ";
let place = "World";

//1 .length()
// console.log(greet.length);

//2 .charAt()

// console.log(greet.charAt(0));

//3 .concat()
let worldConcat = "Wo";
worldConcat = worldConcat.concat("rl").concat("d");
// console.log(worldConcat);

//4 indexOf

// console.log(greet.indexOf("l"));

//5 lastIndexOf

//6 Split

let splitStr = "b-o-o-k";

// console.log(splitStr.split("-"));
// console.log(splitStr.split("-").length);

//7 toUpperCase()

// console.log(greet.toUpperCase());

//8. toLowerCase()

let myCountry = "NIGERIA";

// console.log(myCountry.toLocaleLowerCase());

// Oject Methods

// Add new object

// let car = {};
// car.color = "red";

// Adding a method to the car object so that it can be called car.turnKey()
// If the function is a property of an object, it is then referred to as a method.

let car = {};
car.mileage = 98765;
car.color = "red";
// console.log(car);

car.turnKey = function () {
  // console.log("engine running");
};

car.lightsOn = function () {
  // console.log("The lights are on.");
};

// console.log(car);
// console.log(car.turnKey);
// car.lightsOn();

// Typeof Operator
/*
he type of operator accepts and evaluates a parameter
and returns the name of the data type represented as a string
 */
// Examples

// let test = typeof "What is This";
// console.log(test);
// let test = typeof 10;
// console.log(test);
// let test = typeof 3.14;
// console.log(test);
// let test = typeof true;
// console.log(test);
// let test = typeof false;
// console.log(test);
// let test = typeof (1 < 2);
// console.log(test);
// let test = typeof [1, 2, 3];
// console.log(test);
// let test = typeof ({firstName: 1});
// console.log(test);
let test = typeof function abc() {
  // console.log("abc");
};
// console.log(test);

// Type of Errors in JavaScript
//Type, syntax, reference error.

//Error Handling : pro , try , catch.

// try {
//   console.log(c + d);
// } catch (err) {}

// try {
//   throw new Error();
// } catch (err) {
//   console.log(err);
// }

// console.log(a + b);
// console.log("This line is never reached");

// throw new ReferenceError();

// try {
//   console.log(a + d);
//   throw new ReferenceError();
// } catch (err) {
//   console.log(err);
//   console.log("There was an error");
//   // console.log("The error was saved in the error log");
// }

// console.log("My program does not stop");

// Syntax, logical and runtime errors

/*
Here are some of the most common errors in JavaScript: 

ReferenceError 

SyntaxError 

TypeError 

RangeError

There are some other errors in JavaScript. These other errors include: 

AggregateError 

Error 

InternalError 

URIError
 */

// let letters = "abc";

// console.log(letters.match(/d/));

/*
Exercise: Error prevention
Instructions
Task 1: Code a function declaration
You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.

Task 2: Invoke the addTwoNums function with a number and a string
You need to invoke the addTwoNums using the following arguments: 5 and "5".

Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

Task 4: If the passed-in arguments are not numbers, throw an error
If either of the arguments passed to the addTwoNums are not numbers, you'll throw an error.

Specifically, code a conditional with the following logic:

if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the first argument is not a number'.

else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the second argument is not a number'.

else, console log a + b  

Once you've completed this task, all the code inside the try block will be inside these conditional statements.

Task 5: Update the catch block
Inside the catch block, update the code from console.log(err) to console.log("Error!", err).

Task 6: Invoke the addTwoNums function
Invoke the addTwoNums function using 5 and "5" as arguments.

Task 7: Add another console log under the addTwoNums function invocation
Add another line of code that console logs the string "It still works".


*/

// function addTwoNums(a, b) {
//   try {
//     if (typeof a != "number") {
//       throw new ReferenceError("the first argument is not a number");
//     } else if (typeof b != "number") {
//       throw new ReferenceError("the second argument is not a number");
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log("Error!", err);
//   }
// }
// addTwoNums(5, "5");
// console.log("It still works");

//Solution: Defensive programming

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
  var condition2 = typeof match == "string" && match.length == 1; //if the match is a string and the length is equal to 1
  if (condition1 && condition2) {
    //if both condition matches
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //check if the character at this i position in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    //if the requirements don't match
    console.log("Please pass correct arguments to the function");
  }
}
// letterFinder([], []);
// letterFinder("cat", "c");

// Objective-Oriented programming
// Revision on Functional Programming
// Calculating shoe price
let shoes = 100;
let stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

// console.log(totalPrice(shoes, stateTax));

// Objective-Oriented programming version

let purchase1 = {
  shoes: 120,
  stateTax: 1.2,
  totalPrice: function () {
    return purchase1.shoes * purchase1.stateTax;
  },
};

// console.log(purchase1.totalPrice());

// let purchase2 = {
//   shoes: 100,
//   stateTax: 1.2,
//   totalPrice: function () {
//     return (calculation = purchase2.shoes * purchase2.stateTax);
//     console.log("Total price:", calculation);
//   },
// };

// console.log(purchase2.totalPrice());

// this keyword
let purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    return (calculation = this.shoes * this.stateTax);
    console.log("Total price:", calculation);
  },
};

console.log(purchase2.totalPrice());

// Classes in JavaScript
// Syntax

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("turbo is on");
  }
}

// let car1 = car1.turboOn();
// console.log(car1.turboOn());

/*
The Principles of OOP
-The four fundamental OOP principles are
- inheritance
- encapsulation
- abstraction
- polymorphism

/////////////////////////////
OOP Principles: Inheritance
Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

There is a base class of a "thing".

There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

All of this might sound a bit "computer-science", so here's a more practical example:

There is a base class of "Animal".

There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.


*/

// Example
let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

let eagle1 = Object.create(bird);
console.log(eagle1.canFly);
console.log(eagle1.hasWings);
console.log(eagle1.hasFeathers);

let eagle2 = Object.create(bird);
console.log("eagles2 has wings:", eagle1.hasFeathers);

let penguin1 = Object.create(bird);
penguin1.canFly = false;

console.log("Penguin can fly? :", penguin1);

// Assignment

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker();
  intern.name = "Bob";
  intern.age = 21;
  intern.energy = 110;
  intern.xp = 0;
  intern.hourlyWage = 10;
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker();
  manager.name = "Alice";
  manager.age = 30;
  manager.energy = 120;
  manager.xp = 100;
  manager.hourlyWage = 30;
  manager.doSomethingFun();
  return manager;
}
console.log(intern());
console.log(manager());

// Using Constructor Function

function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const ismail = new Human("Ismail", "Adeshola");
console.log(ismail.firstName);
console.log(ismail.lastName);
