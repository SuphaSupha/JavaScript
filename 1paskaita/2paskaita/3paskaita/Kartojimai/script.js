//if else 
//1
// const legalAge = 20;
// const clientAge = 20;

// if (clientAge >= legalAge) {
//     console.log("Legalus amzius");
// } else {
//     console.log("per jaunas");
// }

//2
// const myName = "Edvinas";

// if(myName.length > 6) {
//     console.log("Ilgas vardas");
// }else {
//     console.log("Trumpas vardas")
// }

//3
// const myAge = 29;

// if(myAge >= 100 || myAge < 0) {
//     console.log("invalid age");
// }else if  ( myAge < 18 && myAge > 1) {
//     console.log("child")
// }else {
//     console.log("legal age")
// };

//4

// const car = "VW";

// if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
//     console.log("VWGROUP");
// } else if ( car === "BMW" || car === "Mini" || car === "Rolls-Royce"){
//     console.log("BMWGROUP");
// }else { 
//     console.log("Other");
// }

//switch
//1

// const  car = "Lada";

// switch (car) {
//     case "VW":
//     case "Audi":
//     case "Bentley":
//     case "Bugatti":
//     case "Lamborghini":
//     case "Porsche":
//     console.log("VW group");
//         break;
//     case "BMW":
//     case "Mini":
//     case "Rolls-Royce":
//     console.log("BMW group");
//         break;
//     default:
//        console.log("Others")
// }

//2 
// const userInput = "Bananas";

// switch (userInput) {
//     case "Kriaušė":
//     case "Obuolys":
//     case "Bananas":
//     case "Apelsinas":
//     case "Ananasas":
//     console.log("Vaisius");
//         break;
//     case "Bulvė":
//     case "Morka":
//     case "Ridikėlis":
//     case "Brokėlis":
//     case "Ropė":
//     console.log("Daržovė")
//         break;
//     default:
//     console.log("Kita")
// }

//3
// const weekDay = 6;

// switch (weekDay) {
//     case 0:
//         console.log("Pirmadienis")
//         break;
//     case 1:
//         console.log("Antradienis")
//         break;
//     case 2:
//         console.log("Treciadienis")
//         break;
//     case 3:
//         console.log("Ketvirtadienis")
//         break;
//     case 4:
//         console.log("Penktadienis")
//         break;
//     case 5:
//         console.log("Sestadienis")
//         break;
//     case 6:
//         console.log("Sekmadienis")
//         break;
// }

//Ternary operator
//1
// const myName = "Edvinas";

// const nameLength = myName.length > 5 ? "Ilgas vardas" : "Trumpas vardas";

// console.log(nameLength);

//2/3
// const clientAge = 20;
// const legalAge = 18;

// const result = clientAge > 120 || clientAge < 0 ? "Invalid Age" : legalAge < clientAge ? "Can drive" : "Can't drive";
// console.log(result);

//4
// const phone = "iPhone";
// const isIphoneUser = "iPhone";

// const result =  phone === isIphoneUser;
// console.log(result);

//For ciklai 
//1/2/3
// const myName = "Edvinas";
// const repeat = 10;

// for (let name = 0; name < repeat; name++) {
//     const result = `${name}.${myName}`;
//     console.log(result);
// };

//4 
// for( let number = 10; number > 0 ; number--) {
//     console.log(number);
// };

//while and do while
//1
// let number = 0;

// while (number < 3) {
//     console.log("Edvinas");
//     number++
// }

//2
// let combo = "Edvinas";
// let times = 5;

// while (times > 0){
//     console.log(combo*times)
//     times--
// }


