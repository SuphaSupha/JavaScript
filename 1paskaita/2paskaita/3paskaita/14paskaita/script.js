// .pop() -  pasalina paskutini masyvo elementa ir ji grazina
// const fruits = ["Apple", "Orange", "Pear"];
// const lastElement = fruits.pop();
// console.log(lastElement);
// console.log(fruits);

//.shift() - pasalina pirmaji masyvo elementa is ji grazina 
// const firstElement = fruits.shift();
// console.log(firstElement);
// console.log(fruits);

// .push() - prideda nauja elementa i masyvo gala
// fruits.push("Banana");
// console.log(fruits);

// .unshift - prideda elementa prie masyvo pradzios 
// fruits.unshift("Pineapple");
// console.log(fruits);

// const upperCasedFruits = []

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     const upperCased = fruit.toUpperCase();
//     upperCasedFruits.push(upperCased);
// }

// console.log(fruits);
// console.log(upperCasedFruits);

//callback funkcija

// function log(name) {
//     console.log(name)
// }
// function showAlert(callback) {
//     // alert("Edvinas");
//     callback("Edvinas");
// }
// // log("Edvinas");
// showAlert(log);

//.forEach() - ciklas kuris praeina per masyvo elementus
const names = ["bob", "hellen", "robert"]

// names.forEach(showName);
// function showName(name) {
//     console.log(name);
// }
// //nauddoti sita
// names.forEach((name, index) => {
//     console.log(index + name);
// })

//.map() - ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva

// const modifiedNames = names.map((name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// });

// console.log(names);
// console.log(modifiedNames);

//filter() - ciklas kuris praeina per visus masyvo elementus ir gazina nauja masyva jeigu reiksme yra true
// const ages = [12, 15, 30, 35, 38, 56, 88, 99];
// const moreThenTwenty = ages.filter((age) =>{
//     return age > 20;
// });

// const lessThenTwenty = ages.filter((age) => age < 20);

// console.log(moreThenTwenty);
// console.log(lessThenTwenty);

//.find() - suranda pirma elementa kuris atitinka kriteriju ir yra true
const cars = ["BMW", "vW", "MINI", "AUDI", "MERCEDES", "LADA"];

// const found = cars.find(car => car.charAt(0) === "L");
// console.log(found);

//.some() -patikrina ar nors vienas elementas atitinka kriteriju ir grazina true / folse
// const hasShortName = cars.some(car => car.length < 3);
// console.log(hasShortName);

//.every() - patikrina ar kiekvienas elementas atitinka kriteriju ir grazina true arba false

const isEveryUppercased = cars.every(car => car.charAt(0).toUpperCase());
console.log(isEveryUppercased);