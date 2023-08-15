var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age > 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

/*
Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

*/

let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Start A new week");
    break;

  case "Tuesday":
    console.log("Write an Article on Hashnode");
    break;

  case "Wednesday":
    console.log("Start a project");
    break;

  case "Thursday":
    console.log("Do research");
    break;

  case "Friday":
    console.log("We go for Juma'ah ");
    break;

  case "Saturday":
    console.log("Go for Owanbe");
    break;

  case "Sunday":
    console.log("It's a resting day");
    break;

  default:
    console.log("No day Selected!");
}
