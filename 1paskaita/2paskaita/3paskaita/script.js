// const number = 8;

// switch (number) {
// case 1:
// console.log("Pirmadienis");
// break;
// case 2:
// console.log("Antadienis");
// break;
// case 3:
// console.log("Treciadienis");
// break;
// case 4:
// console.log("Ketvirtadienis");
// break;
// case 5:
// console.log("Penktadienis");
// break;
// case 6:
// case 7:
// console.log("savaitgalis")
// break;
// default:
// console.log("bogai irasyta savaites diena")
// break;
// }

const age = 15; 
const legalAge = 18;
const drinkingAge = 21;
const celciusDegrees = 40;


let result = "pilnametis"

if (age < legalAge) {
    result = "nepilnametis"
}


const resultTernary = age < legalAge ? "nepilnametis" : "pilnametis";
const drink = age >= drinkingAge ? "Bear" : "Milk "
const weather = celciusDegrees <= 0 ? "cold" : celciusDegrees <= 25 ? "warm" : "hot"
// console.log(weather);
// console.log(result);
// console.log(drink)
// console.log(resultTernary);

const myName = "Edvinas"
const surname = "Vaiciunas"

// Naudoti tamplate string tik tada kai dedame kintamuosius i vidu.

console.log(myName + " " + surname);
console.log(`${myName} ${surname}`)

// const fullNameOld = myName + " " + surname;
// const fullNameNew = `${myName} ${surnamu}`