// !!! Patikrinti rašybos klaidas
// 1. Patikrinti ar failas yra įkeltas į atitinkamą folderį
// 2. Patikrinti ar esu tinkamam folderyje - komanda ls (:C/Users/Rokas/JS-VIGI26/2_paskaita)
// 3. Patikrinti ar išsaugojau failą(-us) - baltas taškas prie failo pavadinimo
// 4. Patikrinti ar įrašiau console.log()
// 5. Patikrinti ar tinkamai paleidau failą "node script.js"
// 6. Patikrinti terminalo išmetamą žinutę
// "cd 1_paskaita" - eina į folderį
// "cd .." - grįžta atgal per vieną folderį
// "ls" - išveda visus folderio failus

// const money = 111.50;
// const price = 105.50; 
// const curency = "$" 

// if (money > price) {
//     const change = money - price;
//     const curency = "$"
// console.log("You paid extra, here's your change." + curency + change); // A
// } else if (money === price) {
// console.log("You paid the exact amount, have a nice day!"); // B
// } else {
//         const missingMoney = price - money;
// console.log("That's not enough, you still owe me money." + missingMoney + curency); // C
// }
// // console.log(diferences);

// const runner = "Kendyll";
// const position = 10;
// let medal = "pat on the back"; 

// if (position === 1) {
//     medal = "gold";
// }
// else if (position === 2) {
//     medal = "silver";
// }
// else if ( position === 3) {
//     medal = "bronze";
// }


// console.log(runner + " received a " + medal + " medal.");
// const number = 1

// if (number % 2) {
//     console.log(number + " skaicius yra nelyginis")
// }
// else {
//     console.log(number + " skaicius yra lyginis")
// }

//Roko uzduotis
const people = 3;
let groupName = "Didele grupe";

if (people === 0) {
    groupName = "Ne grupe";
}
else if (people === 1) {
    groupName = "Solo";
}
else if ( people === 2) {
    groupName = "Duetas";
}
else if ( people === 3) {
    groupName = "Trio";
}
else if ( people === 4) {
    groupName = "Kvartetas";
}

// console.log( groupName)

//1.

const clientAge = 10 ;
let legalAge = "nelegalus amzius"

if (clientAge >= 20) {
    legalAge = "Legalus amžius";
}
// console.log(legalAge);

//2.
const name = 'John';
if (name.length > 6) {
  console.log('Ilgas vardas');
}

//3. 
const age = 29;
let number = "Invalid age";

if (age === 0 && age <= 100) {
    number = "Invalid age";
}
else if (age <=18) {
    number = "Child";
}
else if ( age <= 100 ) {
    number = "Adult";
}
// console.log(number);

//4. 
const car = "Mini";
let group = "Without group";

if ( car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
   group =  "VW Group";
}
else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
    group = "BMW Group"
}


// console.log(group)