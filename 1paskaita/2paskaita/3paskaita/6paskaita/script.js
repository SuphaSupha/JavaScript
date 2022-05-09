// const myName = "Edvinas";
// // const nameLenght = myName.length;
// // const firstChar = myName[0];
// // const lastChar = myName[myName.lenght - 1];
// // const middlechar = myName[Math.floor(myName.length / 2)];
// // // console.log(middlechar);
// // // console.log(firstChar);
// // // console.log(lastChar);

// // for (let i = 0; i < myName.length; i++){
// //     const char = myName [i];
// //     console.log(`${i + 1}. ${char}`);
// // }

// const firstChar = myName.charAt(0);
// const lastchar = myName.charAt(myName.length - 1);
// console.log(firstChar);
// console.log(lastchar);
// const chars = ["r","s", "w", "s"];
// const fruits = ["Apple", "Banana", "Pear"];
// console.log(fruits.length);
// console.log(fruits[1]);

// for (let i = 0; i < fruits.length; i++){
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas"];

// for(let i = 0; i < students.length; i++); {
//     const student = students[i];
//     if(student.length > 5) {
//         console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     } else if ()
// }
// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

//     for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     if (student.length > 5) {
//     console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     } else if (student.length < 5) {
//     console.log(`Vardas ${student} turi maziau nei 5 raides`);
//     } else {
//     console.log(`Vardas ${student} turi lygiai 5 raides`);
//     }
// }

// const basket = [7, 10, 0.5, 23, 41];
// let total = 0;

// for(let i = 0; i < basket.length; i++){
//     const number = basket[i];
//     total += number; 
// }
//  console.log(total);


//1. Void funkcijos rusis
// function logger(value) {
//     console.log(value);
// }
// logger(10);

//2. return funkcijos rusis 

// function square(number){
//     return number * number;
// }

// const squeredNumber = square(13);
// console.log(squeredNumber);


//
function printAllArrayItems(array) {
    for ( let i = 0; i < array.length; i++){
    const item = array[i];
    console.log(item);
}
}
const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

printAllArrayItems(students);
//
function repeatString(string, count){
    let finalString = "";

    for( let i = 0; i < count; i++){
        finalString += string;
    }
    return finalString;
}

const repeatedString = repeatString("Edvinas", 5);
console.log(repeatedString);
//
function addition(a, b) {
    return a + b; 
}
console.log(addition(5, 4));
//
// function subtraction(a, b);

// console.log(subtraction(10,5));
