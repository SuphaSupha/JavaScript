// document.getElementById("id"); // vienaskaita grazina {}

// document.getElementsByClassName("klase"); // daugiskaita grazina []

// document.getElementsByName("name"); // daugiskaita grazina []

// document.getElementsByTagName("div"); // daugiskaita grazina []

// document.getElementById("pirmas"); // p

// const items = document.getElementsByClassName("item"); // [p , p]

// // items[0];

// // items[items.length - 1];

// document.getElementsByName("mano-input"); // []

// document.getElementsByTagName("p");

// document.querySelector("div"); // vienaskaita grazina pagal elementa {}

// document.querySelector(".card"); // vienaskaita grazina pagal klase {}

// document.querySelector("#price"); // vienaskaita grazina pagal id {}

// document.querySelector(".card div"); // vienaskaita

// const allParagraphs = document.querySelectorAll("p"); // daugiskaita []

// const first = allParagraphs[0];

// const last = allParagraphs[allParagraphs.length - 1];

// first.style.background = "red";

// const help = document.getElementById("help");

// help.textContent = "Rokas yra geras zmogus";

// help.style.background = "red";
//1
// const myName = document.querySelector("h2");
// myName.textContent = "Edvinas";
// myName.style.color = "green";
//2
// const body = document.querySelector("body");
// body.style.backgroundColor = "#4267B2";
//3
// const header = document.querySelector(".header");
// header.textContent = "Laba diena, geros dienos";
// header.setAttribute("align", "center");
// header.style.textAlign = "center";

//4
// const card = document.createElement("div");
// card.style.backgroundColor = "black";
// card.style.height = "100px";
// card.style.width = "100px";
// document.body.prepend(card);

// //5
// const cardOne = document.createElement("div");
// const cardTwo = document.createElement("div");
// const cardThree = document.createElement("div");
// cardOne.style.backgroundColor = "yellow";
// cardOne.style.height = "50px";
// cardOne.style.width = "50px";
// cardTwo.style.backgroundColor = "green";
// cardTwo.style.height = "100px";
// cardTwo.style.width = "100px";
// cardThree.style.backgroundColor = "red";
// cardThree.style.height = "150px";
// cardThree.style.width = "150px";
// document.body.prepend(cardOne, cardTwo, cardThree);

//6
// const fruits = ["Banana", "Apple", "Pear"];

// for (let i = 0; i < fruits.length; i++) {
//   return list.textContent[i];
// }

// const unorderedList = document.createElement("ul");
// const list = document.createElement("li");

// unorderedList.append(list);
// document.body.append(unorderedList);
//11
// const listData = ["Banana", "Apple", "Pear"];

// const listContainer = document.createElement("div");
// const listElement = document.createElement("ul");

// const numberOfListItems = listData.length;

// document.querySelector("body").append(listContainer);
// listContainer.append(listElement);

// for (i = 0; i < numberOfListItems; ++i) {
//   listItem = document.createElement("li");
//   listItem.textContent = listData[i];
//   listElement.append(listItem);
// }

// body.style.display = "flex";
// body.style.justifyContent = "center";
// body.style.alignItems = "center";
// body.style.height = "80vh";
// body.style.width = "100%";

// greetingEl.style.display = "flex";

// greetingEl.style.justifyContent = "center";

// greetingEl.style.alignItems = "center";

// greetingEl.style.height = "80vh";

//1
// document.querySelector("h2").addEventListener("click", (event) => {
//   event.target.style.color = "green";
//   event.target.style.textAlign = "center";
//   event.target.style.fontSize = "48px";
// });

//events
// const button = document.querySelector("#my-button");

// let count = 0;

// button.addEventListener("click", (event) => {
//   count++;
//   const countEl = document.querySelector("#count");
//   countEl.textContent = count;
//   console.log(`presed button ${count}`);
//   if (count === 5) {
//     const resultEl = document.querySelector("#result");
//     resultEl.textContent = "You just reach your limit";
//   } else {
//     alert("press more");
//   }
// });

//1
// const button = document.querySelector("#my-button");

// button.addEventListener("click", () => {
//   const string = document.querySelector("p");
//   string.style.color = "purple";
//   string.textContent = "Edvinas";
// });

// //2
// const buttonOne = document.querySelector("#plus");
// const buttonTwo = document.querySelector("#minus");
// const buttonReset = document.querySelector("#reset");
// let count = 0;

// buttonOne.addEventListener("click", () => {
//   count += 500;
//   const countEl = document.querySelector("#result");
//   countEl.textContent = count;
// });
// buttonTwo.addEventListener("click", () => {
//   count -= 500;
//   const countEl = document.querySelector("#result");
//   countEl.textContent = count;
// });
// buttonReset.addEventListener("click", () => {
//   const countEl = document.querySelector("#result");
//   countEl.textContent = 0;
// });

// const plus500button = document.getElementById("plus500");

// plus500button.addEventListener("click", () => renderResultNumber("+"));

// const minus500button = document.getElementById("minus500");

// minus500button.addEventListener("click", () => renderResultNumber("-"));

// const resetButton = document.getElementById("reset500");

// resetButton.addEventListener("click", () => renderResultNumber());

// function renderResultNumber(action) {
//   if (action === "+") {
//     number500Count += 500;
//   } else if (action === "-") {
//     number500Count -= 500;
//   } else {
//     number500Count = 0;
//   }

//   document.getElementById("result500-number").textContent = number500Count;
// }

// const registerForm = document.querySelector("#register");
// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const userName = document.querySelector("input[name='username']");
//   const email = document.querySelector("input[name='email']");
//   const age = document.querySelector("input[name='age']");
//   const password = document.querySelector("input[name='password']");

//   const result = document.createElement("h2");
//   result.textContent = `${userName.value}, ${email.value}, ${age.value}, ${password.value}`;
//   document.body.append(result);
// });

// const registerForm = document.querySelector("#register");
// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const userName = document.querySelector("input[name='username']");
//   const surname = document.querySelector("input[name='surname']");
//   const age = document.querySelector("input[name='age']");
//   const compEl = document.createElement("h2");

//   if (age.value >= 18 && age < 100) {
//     result = "Pilnametis ";
//   } else if (age.value > 0) {
//     result = "nepilnametis";
//   } else {
//     result = "netinkamas amžius";
//   }

//   compEl.textContent = `${userName.value}, ${surname.value}, ${result}`;
//   document.body.append(compEl);
// });

//events
//1/2
// const alertOnClick = document.querySelector("#button");
// alertOnClick.addEventListener("click", () => {
//   alert("Edvinas");
// });

//3
// const alertOnClick = document.querySelector("#button");
// alertOnClick.addEventListener("click", () => {
//   const stringH2 = document.createElement("h2");
//   stringH2.textContent = "Edvinas";
//   document.body.append(stringH2);
// });
//4
// let count = 0;

// const myButton = document.querySelector("#plus");
// myButton.addEventListener("click", () => {
//   count++;
//   const text = document.querySelector("#result");
//   text.textContent = count;
// });

//5
// const preventCopying = document.querySelector("#string");
// preventCopying.addEventListener("copy", (event) => {
//   event.preventDefault();
//   alert("ho ho ho");
// });

//6

// const randomNum = document.querySelector("#randomNumber");
// randomNum.addEventListener("click", () => {
//   const number = document.createElement("h1");
//   number.textContent = Math.floor(Math.random() * 100 + 1);
//   document.body.append(number);
// });

//7
// const legalAge = document.querySelector("#legalAge");
// legalAge.addEventListener("click", () => {
//   const stringOne = document.createElement("h2s");
//   stringOne.textContent = "Alus";
//   document.body.append(stringOne);
// });
// const underAge = document.querySelector("#underAge");
// underAge.addEventListener("click", () => {
//   alert("nepilnametis - nieko neturim");
// });

//8
//9
// const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   //   const newButton = document.querySelector("#button");
//   button.textContent = "Neklausote manęs";
// });

//forms
//1

// const hendleForm = document.querySelector("#reg-form");
// hendleForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const newString = document.querySelector("input[name='username']");

//   alert(newString.value);
// });

//2
// const age = document.querySelector("#reg-form");
// age.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const newAge = document.querySelector("input[name='age']");
//   const result = document.querySelector("#result");
//   result.textContent = newAge.value;
// });

//3
// const regForm = document.querySelector("#reg-form");
// regForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const userName = document.querySelector("input[name='username']");
//   const age = document.querySelector("input[name='age']");

//   const result = document.querySelector("#result");
//   if (age.value > 18) {
//     result.textContent = `Vairuoti gali: ${userName.value}`;
//   } else {
//     result.textContent = `Dar mokysis vairuotis:${userName.value}`;
//   }
// });

//4
// const ageForm = document.querySelector("#reg-form");
// ageForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const age = document.querySelector("input[name='age']");
//   const price = 6;

//   const result = document.querySelector("#result");
//   if (age.value > 16 && age.value < 60) {
//     result.textContent = price;
//   } else if (age.value < 16) {
//     result.textContent = price * 0.5;
//   } else {
//     result.textContent = price / 1.5;
//   }
// });

//5

// const armyConscript = document.querySelector("#reg-form");
// armyConscript.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const age = document.querySelector("input[name='age']");
//   const convicted = document.querySelector("input[type=radio]");
//   const isConvicted = convicted.checked;

//   const result = document.querySelector("#result");

//   if (age.value > 18 && age.value <30 && !isConvicted) {
//     result.textContent = "I kariuomene eini";
//   } else {
//     result.textContent = "kariuomene ne tau";
//   }
// });

//7form
//1
// const expForm = document.querySelector("#reg-form");
// expForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const exp = document.querySelector("input[name='exp']");

//   const result = document.querySelector("#result");

//   if (exp.value >= 20) {
//     result.textContent = "$200";
//   } else if (exp.value >= 10) {
//     result.textContent = "$100";
//   } else {
//     result.textContent = "$50";
//   }
// });

//2
// const yearForm = document.querySelector("#reg-form");
// yearForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const year = document.querySelector("input[name='year']");

//   const result = document.querySelector("#result");

//   if ((year.value % 4 == 0 && year.value % 100 != 0) || year.value % 400 == 0) {
//     result.textContent = `Kelemieji metai`;
//   } else {
//     result.textContent = `Nekelemieji metai`;
//   }
// });

//3
// const tempForm = document.querySelector("#reg-form");
// tempForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const tempInCel = document.querySelector("input[name='temp']");
//   const result = document.querySelector("#result");
//   const changedTemp = (tempInCel.value * 9) / 5 + 32;
//   result.textContent = `F${changedTemp}`;
// });

//4
// const regForm = document.querySelector("#reg-form");
// regForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const email = document.querySelector("input[name='email']");
//   const checkbox = document.querySelector("input[type='radio']");
//   const isChecked = checkbox.checked;
//   const result = document.querySelector("#result");

//   result.textContent = isChecked
//     ? `El. paštas ${email.value} sėkmingai užregistruotas`
//     : "Registracija nesėkminga";
// });

//5
// const liForm = document.querySelector("#reg-form");
// liForm.addEventListener("submit", (evnt) => {
//   evnt.preventDefault();
//   const name = document.querySelector("input[name='username']");
//   const count = document.querySelector("input[name='count']");

//   for (let i = 0; i < count.value; i++) {
//     const newItem = document.createElement("li");
//     newItem.textContent = name.value;
//     document.body.append(newItem);
//   }
// });

//6
