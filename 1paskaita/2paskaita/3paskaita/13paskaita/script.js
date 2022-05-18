// zinoti primityvius duomenu tipus  ir ju apibrezima 
// Boolean object 
// Number
// string

//Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
// There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

//Boolean object
const name = "Edvinas";
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue = null; 

const IsHotString = Boolean(isHot).toString();

// console.log(isHot + isHot);
// console.log(IsHotString + IsHotString);

//Number
const count = "15";
const countNumber = Number(count);


//inTeger -sveikasis skaicius
// console.log(Number.isInteger(5));

// console.log(count + count);
// console.log(countNumber + countNumber);

//skaiciu paverciam i stringa
const myNumber = 5.752
// console.log(Number(8.72).toString());
// console.log(myNumber.toString());


// //uzapvalinaskaicius po kablelio
// console.log(myNumber.toFixed(1));

// const salary = 10.7451;
// console.log(salary.toFixed(2));

//string

const sentence = "My name is Edvinas and i am happy";

// surando stringe kito stringo dali(case-sesative H h)
// console.log(sentence.includes("happy"));
// console.log(sentence.slice(11, 18));// pradzia ir pabaiga
// console.log(sentence.slice(19));// nuo pradzios 
// console.log(sentence.slice(-5));// nuo galo 
// console.log(sentence.trim());// Pasalina nereikalingus tarpus 

// const upperCased = sentence.toUpperCase();//pakeicia i didziasias -KSAJDH
// console.log(upperCased);
// const lowerCased = sentence.toLocaleLowerCase();//pakeicia i mazaasias -sajah
// console.log(lowerCased);

// patikrina stringai vienodi
// function areSameString(firstString, secondString) {
//     return firstString.toUpperCase() === secondString.toUpperCase();
// }
// // console.log(areSameString("Rokas", "rokas"));

// //pakartoja stringa tiek kiek nurodai 
// const resultCount = 5;
// const dog = "rikis";

// const result = dog.repeat(resultCount);/
// console.log(result);


// const tagInput = "Prekyba marketingas vadyba pardavimai medicina"
// const tags = tagInput.split(" ");
// console.log(tags);
// const namesInput = "cuba, danija, olandija, latvija, estija, suomija";
// const names = namesInput.split(", ");
// console.log(names);