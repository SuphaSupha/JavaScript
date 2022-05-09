// // const number = 8;

// // switch (number) {
// // case 1:
// // console.log("Pirmadienis");
// // break;
// // case 2:
// // console.log("Antadienis");
// // break;
// // case 3:
// // console.log("Treciadienis");
// // break;
// // case 4:
// // console.log("Ketvirtadienis");
// // break;
// // case 5:
// // console.log("Penktadienis");
// // break;
// // case 6:
// // case 7:
// // console.log("savaitgalis")
// // break;
// // default:
// // console.log("bogai irasyta savaites diena")
// // break;
// // }

// const age = 15; 
// const legalAge = 18;
// const drinkingAge = 21;
// const celciusDegrees = 40;


// let result = "pilnametis"

// if (age < legalAge) {
//     result = "nepilnametis"
// }


// const resultTernary = age < legalAge ? "nepilnametis" : "pilnametis";
// const drink = age >= drinkingAge ? "Bear" : "Milk "
// const weather = celciusDegrees <= 0 ? "cold" : celciusDegrees <= 25 ? "warm" : "hot"
// // console.log(weather);
// // console.log(result);
// // console.log(drink)
// // console.log(resultTernary);

// const myName = "Edvinas"
// const surname = "Vaiciunas"

// // Naudoti tamplate string tik tada kai dedame kintamuosius i vidu.

// console.log(myName + " " + surname);
// console.log(`${myName} ${surname}`)

// // const fullNameOld = myName + " " + surname;
// // const fullNameNew = `${myName} ${surnamu}`


// 1uzduotis
const years = 2021; 
const myAge = 29;

// console.log(years - myAge)

// 2uzduotis 
// const car = "Mazda";


// switch (car) {
//     case "VW":
//     case "Audi":
//     case "Bentley":
//     case "Bugatti":
//     case "Lamborghini":
//     case "Porsche":
//         console.log("VW group")
//         break;
//     case "BMW":
//     case "Mini":
//     case "Rolls-Royce":
//         console.log("BMW group")
//         break
//     default:
//         console.log("unknown brand")
//         break;
// }

// 3Uzduotis 
// const userInput = "Pomidoras"

// switch (userInput) {
//     case "Bananas":
//     case "Obuolys":
//     case "Kiwi":
//     case "Apelsinas":
//     case "Ananasas":
//         console.log("Vaisius")
//         break;
//     case "Bulve":
//     case "Morka":
//     case "Ridikelis":
//     case "Kopustas":
//     case "Pupele":
//         console.log("Darzove")
//         break
//     default:
//         console.log("Unknown")
//         break;
// }
// 5uzduotis 
// const myName = "Edvinas"

// const resultTernary = myName.length >= 5 ? "Ilgas vardas" : "trumapas vardas";

// console.log(resultTernary)

// // 5.1 
// const clientAge = 18;
// const ligalAge = 18;

// const result = clientAge >= ligalAge  ? "Can drive" : "Can't drive" : clientAge > 0 || clientAge < 120 ? "invalid"; 

// console.log(result);

// //5.2


//6uzduotis

const myName = ".Edvinas";
const count = 11;



for (let i = 1;  i < count; i++) {
    // console.log(myName)
    console.log(`${i}${myName}`)
}