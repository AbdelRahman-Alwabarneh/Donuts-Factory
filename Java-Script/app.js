let fullName = prompt("Enter your name");

let gender = prompt("Enter your gender (male or female)").toLowerCase();

function gender1() {
  while (gender !== "male" && gender !== "female") {
    gender = prompt("Enter your gender (male or female)");
  }
  if (gender === "male") {
    alert("Welcome Mr " + fullName);
  } else if (gender === "female") {
    alert("Welcome Ms " + fullName);
  }
}
gender1();

let order = prompt(
  "What would you like to order \n(You can order one type) \nDonut , Coffee , Ice cream , Bakery"
).toLowerCase();
let ordername = prompt(
  "Chocolate donut , Latte coffee , Chocolate ice cream , Chocolate cakes"
).toLowerCase();

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
const orders = [fullName, gender, order, ordername];

for (let i = 0; i <= orders.length; i++) {
  console.log(orders[i]);
}

let cont = document.getElementById("orders");
let parag = document.createElement("p");
let orderlist = document.createElement("ol");
parag.innerText = fullName;
let li1 = orderlist.createElement("li");
li1.innerText = gender;

cont.appendChild(parag);
orderlist.appendChild(li1);
