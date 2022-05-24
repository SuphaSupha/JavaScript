// splice - iterpe elementa i array viduri ar pasirinkta vieta (taip pat ir istrinti)

// const sentence = ["I", "study", "Javascript",  "right", "now"];

// // console.log(sentence.splice(2, 5)); // istrina elementus kurie uz zimos ribos 
// // sentence.splice(4, 2); //pirmas 
// // sentence.splice(2, 1, "TypeScript");
// sentence.splice(1,4, "studied", "TypeScript", "before" )
// console.log(sentence);

//slice - 
// const sliced = sentence.slice(-3);
// console.log(sliced);

// const numbers = [7, 8, 1, 0.5, 8, 6, 10, 20 , 30, 40];

// // const total =numbers.reduce((previouseValue, currentValue) => {
// //     // console.log(currentValue);
// //     return previouseValue + currentValue
// // });


// // console.log(total);

// const sorted = numbers.sort((a, b) => a - b);
// // const sorteded = numbers.sort((a,b) => b - a);
// // console.log(sorteded)
// console.log(sorted);
// const genres = ["Jazz", "Blues"];
// console.log(genres);
// //1
// genres.push("Rock and Roll");
// console.log(genres);
// //2
// genres.splice(1,1, "classic");
// console.log(genres);
// //3
// const firstElement = genres.shift();
// console.log(firstElement);
// console.log(genres);
// //4
// genres.unshift("Rap","Reggae");
// console.log(genres);

// const arr = [11, -2, 34, 45, 19, 6];

// function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => (num > ? total + num) , 0);
//     return sum;
// }

// const sum = getMaxSubSum(arr);
// console.log(sum);

// const phones = ["iPhone 7", "Samsung 9", "OnePlus"];

// phones.sort((a,b) => {
//   if(a.includes(" ") && !b.includes(" ")){
//     return -1;
//   } else {
//     return 1;
//   }
  
// })

// const genres = ["Jazz", "Blues"];
// genres.push("Rock and roll");
// genres.splice(1, 1, "Classics");
// genres.shift(1);
// // genres.unshift("Rap", "Reggae");
// // genres.shift(1);
// // console.log(genres);

//sort
//1/2
// const friends = ["Klaidas","Rigis","Jule","Dominykas","Jonas"]

// friends.sort((a,b) => b - a);

// console.log(friends);

//3

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];

// numbers.sort((a,b) => a - b );
// console.log(numbers);

// //4
// const numbers = [10, 5, 20, 4];
// numbers.sort((a,b) => b - a);
// console.log(numbers[0])

//reduce 
//1
// const favNumbers = [13, 19, 7, 11, 21];

// const sum = favNumbers.reduce((a,v) => a + v );
// console.log(sum);

//2

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

// const threeLetters = cars.reduce((a,v) => v.length === 3 ? a + 1: a, 0);

// console.log(threeLetters);

//3

const numbers = [10, 13, 55, 77, 11];

const bigestNum = numbers.reduce((a,v) => a > v ? a : v);

console.log(bigestNum);
