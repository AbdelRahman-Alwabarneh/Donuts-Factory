let fullName = prompt("Enter your name");

let gender = prompt("Enter your gender (male or female)");
gender = gender.toLowerCase();

if (gender === "male") {
  alert("Welcome Mr " + fullName);
} else if (gender === "female") {
  alert("Welcome Ms " + fullName);
} else {
  alert("Welcome " + fullName);
}
let order = prompt(
  "What would you like to order \n(You can order one type) \nDonut , Coffee , Ice cream , Bakery"
);
order = order.toLowerCase();
if (
  order === "donut" ||
  order === "coffee" ||
  order === "ice cream" ||
  order === "bakery"
) {
  let = alert("Your order is being prepared");
  let = console.log("Welcome " + fullName + " Your order is being prepared");
} else {
  alert("Your order is not available");
  let = console.log("Welcome " + fullName + " Your order is not available");
}
