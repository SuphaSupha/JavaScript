// const cookie = {
//   timeSpent: "2h",
//   loggedIn: "2022/06/01T18:00:00",
//   theme: "dark",
// };

// document.cookie = "timeSpent=2h";
// document.cookie = "loggedIn=2022/06/01T18:00:00";
// document.cookie = "theme=dark";

// localStorage.setItem("name", "Rokas");
// localStorage.setItem("surname", "Andreikenas");

// const result = document.getElementById("full-name");
// const fullName = localStorage.getItem("fullName");
// result.textContent = fullName;

// const button = document.getElementById("save");

// button.addEventListener("click", () => {
//   const name = document.querySelector("input[name='name']");
//   const surname = document.querySelector("input[name='surname']");

//   const fullName = `${name.value} ${surname.value}`;
//   const result = document.getElementById("full-name");
//   result.textContent = fullName;

//   localStorage.setItem("fullName", fullName);
// });

//1 
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
//   const form = document.querySelector('form');
//   const output = document.getElementById('output');
//   const name = getCookie('name');


// if (getCookie(name)) {
//     form.classList.add('hidden');
//     output.classList.remove('hidden');
//   } else {
//     form.classList.remove('hidden');
//     output.classList.add('hidden');
//   }
  
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = document.querySelector('input[name="name"]').value;
//     setCookie('name', name, 1);
//     document.getElementById('name').innerText = name;
//     form.classList.add('hidden');
//     output.classList.remove('hidden');
//   });
  
//   document.getElementById('erase').addEventListener('click', (event) => {
//     document.cookie = '';
//     document.getElementById('name').innerText = '';
//     output.classList.add('hidden');
//     form.classList.remove('hidden');
//   });

//if else 
//1
// const legalAge = 20;
// const clientAge = 20;

// if (clientAge >= legalAge) {
//     console.log("Legalus amzius");
// } else {
//     console.log("per jaunas");
// }

//2
// const myName = "Edvinas";

// if(myName.length > 6) {
//     console.log("Ilgas vardas");
// }else {
//     console.log("Trumpas vardas")
// }

//3
// const myAge = 29;

// if(myAge >= 100 || myAge < 0) {
//     console.log("invalid age");
// }else if  ( myAge < 18 && myAge > 1) {
//     console.log("child")
// }else {
//     console.log("legal age")
// };

//4

const car = "VW";



// if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
//     console.log("VWGROUP");
// } else if ( car === "BMW" || car === "Mini" || car === "Rolls-Royce"){
//     console.log("BMWGROUP");
// }else { 
//     console.log("Other");
// }



//stringify 
// Set to local storage stringified value

const stringified = JSON.stringify(profileInfo);

localStorage.setItem("profile", stringified);



// Parse stringified value from local storage

localStorage.getItem("profile");

const parsed = JSON.parse(stringified);

















  