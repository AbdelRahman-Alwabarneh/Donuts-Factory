//Q1: Evaluate each of the following Javascript expressions and show the value

// let q1 = -5 * 3;
// let q2 = "JavaScript" + 50;
// let q3 = 17 % 5;
// let q4 = 5 % 17;
// let q5 = 5 / 10;
// let q6 = 4 === "4";
// let q7 = 4 != 5;
// let q8 = 7 <= 8;
// let q9 = "Hello" + 5;
// let x = 8.3;
// let q10 = Math.ceil(x) - Math.floor(x);
// let y = 3;
// let q11 = Math.pow(y, 2);
// console.log(
//   q1 +
//     "\n" +
//     q2 +
//     "\n" +
//     q3 +
//     "\n" +
//     q4 +
//     "\n" +
//     q5 +
//     "\n" +
//     q6 +
//     "\n" +
//     q7 +
//     "\n" +
//     q8 +
//     "\n" +
//     q9 +
//     "\n" +
//     q10 +
//     "\n" +
//     q11
// );

//Q2 : Read a number (using prompt) and display it using alert
// let Q2 = prompt("Enter the number");
// let = alert("You wrote the number " + Q2);

//Q3 : Read in two numbers and display them in ascending order.
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// if (num1 < num2) {
//   alert("Arrange the numbers in ascending order: " + num1 + "," + num2);
// } else {
//   alert("Arrange the numbers in ascending order: " + num2 + "," + num1);
// }

//Q4: Read in two numbers and display the larger
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// if (num1 > num2) {
//   alert("The largest number is: " + num1);
// } else if (num1 < num2) {
//   alert("The largest number is: " + num2);
// } else {
//   ("The numbers are equal");
// }

//Q5: Read two numbers and display their sum.
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// alert(num1 + num2);

//Q6: If you have a “Number” variable,  Your task is to print:
// let num = prompt("Enter the number:");
// switch (parseInt(num)) {
//   case 1:
//     alert("The number equals : ONE ");
//     break;
//   case 2:
//     alert("The number equals : TWO ");
//     break;
//   case 3:r
//     alert("The number equals : THREE ");
//     break;
//   case 4:
//     alert("The number equals : FOUR ");
//     break;
//   case 5:
//     alert("The number equals : FIVE ");
//     break;
//   case 6:
//     alert("The number equals : SIX ");
//     break;
//   case 7:
//     alert("The number equals : SEVEN ");
//     break;
//   case 8:
//     alert("The number equals : EIGHT ");
//     break;
//   case 9:
//     alert("The number equals : NINE ");
//     break;
//   default:
// alert("PLEASE TRY AGAIN");
// }

let nam1e = prompt("Enter your name");
let age = prompt("Enter your age");
let gender = prompt("Are you male or female?");
while (gender !== "male" && gender !== "female") {
  gender = prompt("Are you male or female?");
}

function your_information() {
  let inform2ation = "\n" + nam1e + "\n" + age + "\n" + gender;
  return inform2ation;
}

alert("your information:" + your_information());
