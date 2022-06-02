// funkcijos ir metodai\\
//1
// function minutesToSeconds(minutes) {
//     const seconds = minutes * 60;
//     return `${seconds} "seconds`;
// }
// console.log(minutesToSeconds(3));

// const arrowMinutesToSeconds = (minutes) => `${minutes * 60} seconds`;

// console.log(arrowMinutesToSeconds(3));
//2 
// const arrowYearsToDays = (years) => years * 365;

// console.log(arrowYearsToDays(29));

//3 
// const squere = (number) => number * number;
// console.log(squere(2));
// const pow = (number, count) => number ** count;
// console.log(pow(4,2));

//4
// const triangleArea = (x,y) => (x * y) / 2;
// console.log(triangleArea(5,4));

//5
// const lastChar = (string) =>string[string.length -1];
// console.log(lastChar("Edvinas"));


// 
// const reverseString = (string) => {
//     const splitted = string.split("");
//     const reversed = splitted.reverse();
//     const joined = reversed.join("");
//     const lowerCased = joined.toLowerCase();

//     return lowerCased;
//     reverseString("Edvinas");
// }   

// const reverseString1 = (s) => s.split("").reverse().join("").toLowerCase();
// console.log(reverseString1("Edvinas"))

//6 
const biggestNegativeNumber = (array) => array.sort((a,b) => a - b, 0)[0];
const arr = [-10, -4, -8];
console.log(biggestNegativeNumber(arr));