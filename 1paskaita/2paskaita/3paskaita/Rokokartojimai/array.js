// //"rokas" => ["r","o","k","a","s"]
// //array.length
// //first item - [0]
// //last item -[array.lenght - 1]

// //array.forEach(callback)
// //(callback) (item) => {}

// //array.forEach((item, index) => {});
// const names = ["Rokas", "Tomas", "Giedrius", "Martyna"];

// function addNewStudent(studentNames) {
//   names.push(studentNames);
// }

// addNewStudent("Antanas");
// // console.log(names);

// function removeStudent() {
//   names.shift();
// }
// removeStudent();
// // console.log(names);
// //array.push() -  istume i gala
// //array.pop() - ismeta is galo
// //array.unshift() - istumia i prieki
// //array.shift() -ismeta is priekio

// const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

// function modColor(colorArray) {
//   colorArray.pop();
//   colorArray.shift();
//   colorArray.shift();
//   colorArray.shift();
//   colorArray.shift();
//   colorArray.shift();
//   colorArray.unshift("green");
// }

// modColor(colors);
// console.log(colors);

// function addColor(colorArray) {
//   colorArray.push("purple");
//   colorArray.shift();
//   colorArray.unshift("black");
//   colorArray.unshift("white");
//   colorArray.unshift("green");
//   colorArray.unshift("blue");
//   colorArray.unshift("red");
// }

// addColor(colors);
// console.log(colors);

// function reverseColorArray(colorArray) {
//   colorArray.reverse();
// }
// reverseColorArray(colors);
// console.log(colors);

// colors.forEach((color) => {
//   console.log(color);
// });

// function doubleArrayItem(array) {
//   return array.map((item) => item + item);
// }

// const doubleItems = doubleArrayItem(colors);
// console.log(doubleItems);

// const colorsExmp = [
//   "red",
//   "blue",
//   "green",
//   "white",
//   "black",
//   "yellow",
//   "purple",
// ];

// function greenAndWhite(colorsArray) {
//   const sliced = colorsArray.splice(0, 2);
//   const sliced2 = colorsArray.slice(-3);
//   const combine = sliced.concat(sliced2);
//   return combine;
// }

// const removedGreenAndWhite = greenAndWhite(colorsExmp);
// console.log(removedGreenAndWhite);

// function addOrange(colorArray) {
//   colorArray.splice(2, 1, "orange");
// }

// addOrange(removedGreenAndWhite);
// console.log(removedGreenAndWhite);

// const hasEchar = removedGreenAndWhite.filter((color) => color.includes("e"));
// const shortThan4Chars = removedGreenAndWhite.filter(
//   (color) => color.length < 4
// );
// //some = true or false
// const hasZchar = removedGreenAndWhite.some((color) => color.includes("z"));
// const hasBrownValue = removedGreenAndWhite.some((color) => color === "brown");
// const hasALetterCount = removedGreenAndWhite.filter((color) =>
//   color.includes("a")
// );
// const aLetterCount = hasALetterCount.length;
// console.log(aLetterCount);
// console.log(hasBrownValue);
// console.log(`shorter than 4 char-${shortThan4Chars}`);
// console.log(`hasEchar-${hasEchar}`);
// console.log(`hasZChar ${hasZchar}`);

// function deleteColor() {
//   colorsExmp.splice(2, 1);
//   colorsExmp.splice(2, 1);
// }
// //concat - sujunge du arejus
// deleteColor();
// console.log(colorsExmp);

// function addNewColor() {
//   colorsExmp.splice(2, 1, "orange");
// }
// addNewColor();
// console.log(colorsExmp);

//Roko pvz
const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

function removeGreenAndWhite(colorArray) {
  const sliced = colorArray.slice(0, 2);

  const sliced2 = colorArray.slice(-3);

  const combine = sliced.concat(sliced2);

  return combine;
}

const modifiedColors = removeGreenAndWhite(colors);

function addOrange(colorArray) {
  colorArray.splice(2, 1, "orange");
}

addOrange(modifiedColors);

const hasEchar = modifiedColors.filter((color) => color.includes("e"));

// "red".includes("e") => true

// "blue".includes("e") => true

console.log("hasEchar", hasEchar);

const shorterThan4Chars = modifiedColors.filter((color) => color.length < 4);

// "red".length < 4 => 3 < 4 => true

// "blue".length < 4 => 4 < 4 => false

// "orange".length < 4 => 6 < 4 => false

console.log("shorter than 4 chars", shorterThan4Chars);

const hasZChar = modifiedColors.some((color) => color.includes("z"));

console.log("has Z char", hasZChar);

// "red".includes("z") => false

// "blue".includes("z") => false

const hasBrownValue = modifiedColors.some((color) => color === "brown");

console.log("has brown", hasBrownValue);

const hasALetter = modifiedColors.filter((color) => color.includes("a"));

const aLetterCount = hasALetter.length;

console.log("has A letter", aLetterCount);
