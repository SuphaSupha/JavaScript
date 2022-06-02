//1
// class Cat {
//     constructor(name, weight){
//         this.name = name;
//         this.weight = weight;
//     }
//     isFat() {
//         if(this.weight > 5) {
//             return `${this.name} storas`;
//         }else {
//             return `${this.name} plonas`;
//         }
//     }
// }

// const cat = new Cat("Kleopatras", 7);
// console.log(cat.isFat());

//1.
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	compareAge() {
// 		if(this.age > 18){
//         return `${this.name} tinkamo amžiaus`;
//     }else {
//         return `${this.name} per jaunas`;
//     }
// 	} 
// }
// const person = new Person("Petras", 16);
// console.log(person.compareAge());


//2
// const randomArray = [1,2,"sa", "s", 5] 

// const remuveNumbersFromArray = (array) => array.filter((x) => isNaN(x));

// const removedNumbers = remuveNumbersFromArray(randomArray);
// console.log(removedNumbers);

//! pavercia bulean
//!true => false
//!!true => true 
//!false => true 
//!!false => false

//2. 
// const arrayOfNumbers = [2, 45, "s", 5, "w"]

// const removeNumbersFromArray =  (array) => array.filter((x) => !isNaN(x));

// const removedNumbers = removeNumbersFromArray(arrayOfNumbers);

// console.log(removedNumbers);


//3
// let test = "Edvinas 123 Vaiciunas"; 
// const newTest = test.split("").map((char) => (isNaN(char) ? char + char : char)).join("");
// console.log(newTest);

//3.
// const testString = "Rokas !@#$%^ Tomas 123"
// ats: "Rokas !!@@##$$%%^^ Tomas 112233"

// const testString = "Rokas !@#$%^ Tomas 123";

// const newTest = testString.split("").map((char)=> (!isNaN(char) ? char + char : char)).join("");
// console.log(newTest);
// const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();
// const newTest = testString.split("").map((char)=>(isLetter(char) || char === "" ? char : char + char)).join("");

// console.log(newTest);

const testString = "Rokas !@#$%^ Tomas 123";



// ats: "Rokas !!@@##$$%%^^ Tomas 112233"



const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();



const newTest = testString

.split("")

.map((char) => (isLetter(char) || char === " " ? char : char + char))

.join("");



console.log(newTest);


//4
//patikrinti ar susideda is 5 skaiciu 
//patikrinti ar susideda is 2 raidziu ir 3 skaiciu
//patikrinti ar turi tarpa 
// const checkPostCode = (postCode) => {
//     const letters = removeLettersFromArray(postCode.split(""));
//     const numbers = removeNumbersFromArray(postCode.split(""));
    
//     if(postCode.includes(" ")) {
//         return false;
//     }
//     else if (letters.length === 5) {
//     return true;
//     } else if (letters.length === 3 && numbers.length === 2) {
//     return true;
//     } else {
//     return false;
//     }
    
//     };
    
//     const code = "123ab"; // true
    
//     console.log(checkPostCode(code));