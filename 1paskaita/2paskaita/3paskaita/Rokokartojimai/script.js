//funkcijos

// const userName = "Edvinai";
// const goodBye = `Viso gero ${userName}, lauksime sugrįžtant!`;

// console.log(goodBye);
// const salary = 5000;
// const char = "$";
// const allOfIt = `${char}${salary}`;

// console.log(allOfIt);

//if
// const price = 10;

// if (price > 10) {
//   console.log("perku");
// } else {
//   console.log("neperku");
// }

// let result = "";
// if (price > 10) {
//   result = "Perku";
// } else {
//   result = " neperku";
// }
// console.log(result);

// let result1 = "neperku";
// if (price > 10) {
//   result1 = "perku";
// }
// console.log(result1);

const hours = 6;

if (hours >= 0 && hours < 6) {
  result = "Naktis";
} else if (hours >= 6 && hours < 12) {
  result = "Rytas";
} else if (hours >= 12 && hours < 18) {
  result = "diena";
} else if (hours >= 18 && hours <= 24) {
  result = "vakaras";
} else {
  result = "blogas laikas";
}

console.log(result);

//ternary
//1
// const price = 10;

// const order = price < 10 ? "Neperku" : "perku";

// console.log(order);

// //2
// const hours = 26;

// const timeOfTheDay =
//   hours >= 0 && hours < 6
//     ? "Naktis"
//     : hours >= 6 && hours < 12
//     ? "Rytas"
//     : hours >= 12 && hours < 18
//     ? "Diena"
//     : hours >= 18 && hours <= 24
//     ? "Vakaras"
//     : "Blogas laikas";
// console.log(timeOfTheDay);

// //3.1

// const myName = "Edvinas";
// console.log(myName[0], myName[myName.length - 1]);

// //3.2

// const count = myName.length;
// console.log(count);

// //3.3/4

// for (let i = 0; i < myName.length; i++) {
//   const num = i + 1;

//   console.log(`${num} raide yra ${myName[i]}`);
// }

//funcijos
//turi return

// function squere(num1) {
//   return num1 * num1;
// }
// const squered = squere(5);
// console.log(squered);

//1
// function cube(number) {
//   return number * number * number;
// }
// const cubed = cube(5);
// console.log(cubed);

// //2
// function multiplication(num1, num2) {
//   return num1 * num2;
// }
// const multiplied = multiplication(3, 3);
// console.log(multiplied);

// //3
// function adding(num1, num2) {
//   return num1 + num2;
// }
// const added = adding(5, 6);
// console.log(added);

// //4
// function subtraction(num1, num2) {
//   return num1 - num2;
// }
// const subtracted = subtraction(3, 2);
// console.log(subtracted);

// //5
// function divide(num1, num2) {
//   return num1 / num2;
// }
// const divided = divide(16, 3);
// console.log(divided);

// //6
// function length(string) {
//   return string.length;
// }
// console.log(length("Edvinas"));
// //7
// function compareNumber(num1, num2) {
//   return num1 > num2;
// }

// console.log(compareNumber(-3, -2));

// //8
// function firstAndLastChar(string) {
//   return string[0] + string[string.length - 1];
// }
// console.log(firstAndLastChar("Edvinas"));

// //neturi return
// function showMessage(message) {
//   console.log(message);
// }
// showMessage("MoonCake");

//uzduotis
//1
// function showMessage(message) {
//   console.log(message);
// }
// showMessage("Edvinas");

// //2
// function randomNumber() {
//   return Math.floor(Math.random() * 5 + 1);
// }
// console.log(randomNumber());
//3

// function stingLength(string1, string2) {
//   return string1.length + string2.length;
// }

// console.log(stingLength("Edvinas", "Vaičiūnas"));

// 4

// const abcArray = ["A", "B", "C", "D", "E", "F"];

// function showChar(char) {
//   return char[5];
// }
// console.log(showChar(abcArray));

// function getLetterByIndex(index) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return alphabet[index];
// }
// console.log(getLetterByIndex(2));

//5
// function math(n1, n2, operators) {
//   switch (operators) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 * n2;
//   }
// }
// console.log(math(1, 2, "multi"));

// //6
// function randomNum() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// function squere(num1) {
//   return num1 * num1;
// }

// console.log(squere(3), randomNum());

//Dom uzduotis
// //1
// const headline = document.createElement("h2");
// headline.textContent = "Laba Diena";
// document.body.prepend(headline);

// //2
// const header = document.querySelector(".header");
// header.textContent = "Edvinas";

// //3
// const listItem = document.querySelector("li:last-child");
// listItem.textContent = "Sūris";

// //4
// const blueText = document.querySelector(".bluetext>span");
// blueText.textContent = "blue";

//5
// const bmwGroup = document.querySelector("li:first-child");
// const vwGroup = document.querySelector("li:nth-child(2)");

// const firstGroup = vwGroup.textContent;
// const secondGroup = bmwGroup.textContent;

// bmwGroup.textContent = firstGroup;
// vwGroup.textContent = secondGroup;
