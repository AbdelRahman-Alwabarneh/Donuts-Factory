// let fullName = prompt("Enter your name");

// let gender = prompt("Enter your gender (male or female)").toLowerCase();

// function gender1() {
//   while (gender !== "male" && gender !== "female") {
//     gender = prompt("Enter your gender (male or female)");
//   }
//   if (gender === "male") {
//     alert("Welcome Mr " + fullName);
//   } else if (gender === "female") {
//     alert("Welcome Ms " + fullName);
//   }
// }
// gender1();

// let order = prompt(
//   "What would you like to order \n(You can order one type) \nDonut , Coffee , Ice cream , Bakery"
// ).toLowerCase();
// let ordername = prompt(
//   "Chocolate donut , Latte coffee , Chocolate ice cream , Chocolate cakes"
// ).toLowerCase();

// if (
//   order === "donut" ||
//   order === "coffee" ||
//   order === "ice cream" ||
//   order === "bakery"
// ) {
//   let = alert("Your order is being prepared");
//   let = console.log("Welcome " + fullName + " Your order is being prepared");
// } else {
//   alert("Your order is not available");
//   let = console.log("Welcome " + fullName + " Your order is not available");
// }
// const orders = [fullName, gender, order, ordername];

// for (let i = 0; i <= orders.length; i++) {
//   console.log(orders[i]);
// }

// let paragHero = document.getElementById("hero1");
// let cont = document.getElementById("orders");
// let parag = document.createElement("p");
// let orderlist = document.createElement("ol");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");

// paragHero.innerText = "We are honored to serve you 24 hours a week";
// paragHero.style.fontSize = "25px";
// paragHero.style.fontWeight = "bold";
// parag.innerText = fullName;

// li1.innerText = "Gender: " + gender;
// li2.innerText = "Order: " + order;
// li3.innerText = "Order Name: " + ordername;
// cont.style.textAlign = "center";
// cont.style.paddingTop = "30px";
// cont.style.fontWeight = "500";
// cont.style.color = "black";
// cont.style.fontSize = "25px";
// orderlist.style.display = "inline-block";
// orderlist.style.textAlign = "left";
// cont.appendChild(parag);
// cont.appendChild(orderlist);
// orderlist.appendChild(li1);
// orderlist.appendChild(li2);
// orderlist.appendChild(li3);
let form = document.getElementById("form");
function submit(event) {
  event.preventDefault();
  let User_Information = document.getElementById("User_information");
  let form = event.target;
  let Username1 = form.Username.value;
  let age1 = form.Age.value;
  let gendermale1 = form.radio.value;
  let OrderType1 = form.OrderType.value;
  let drink1 = form.drink.value;
  User_Information.innerHTML =
    "Username : " +
    Username1 +
    "<br> <br>" +
    "Age : " +
    age1 +
    "<br> <br>" +
    "Gender : " +
    gendermale1 +
    "<br> <br>" +
    "Order Type : " +
    OrderType1 +
    "<br> <br>" +
    "want the drink : " +
    drink1;
}

form.addEventListener("submit", submit);
