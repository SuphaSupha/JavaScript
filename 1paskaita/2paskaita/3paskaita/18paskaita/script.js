// objektinis programavimas

//1  new object method
// konstruktoriaus funkcija is didziosios raides 
// function Book(name, author, year) {
//     this.name = name;
//     this.author = author;
//     this.yearyear = year; 
//     this.getInfo = () => {
//         return `${this.name} aprase ${this.author}`;
//     }   
//     this.getYears = () => {
//         const today = new Date()
//         return today.getFullYear() - this.yearyear;
//     }
// }

// const harryPotterBook = new Book("Harry potter", "J.K.Rowling", 1997);
// const randomBook = new Book("Random Writer", "very random", 2022);
// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());
// console.log(randomBook.getInfo());


// class Book {
//     constructor(name, author, year) {
//         this.name = name;
//         this.author = author;
//         this.yearyear = year;
//         }
//         getInfo = () => {
//             return `${this.name} aprase ${this.author}`;
//         };
//         getYears = () => {
//             const today = new Date();
//             return today.getFullYear() - this.yearyear;
//         };
// }
// const harryPotterBook = new Book("Harry potter", "J.K.Rowling", 1997);
// const randomBook = new Book("Random Writer", "very random", 2022);
// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());
// console.log(randomBook.getInfo());


// class Employee { 
//     constructor(position, wage, experience) {
//         this.position = position;
//         this.wage = wage;
//         this.experience = experience;
//     }
//     getBonus = () => {
//         if(this.experience < 5 ) {
//             return this.wage
//         }else if ( this.experience < 10) {
//             return this.wage * 2;
//         }else {
//             return this.wage * 3;
//         }
//     }
// }

// const softwareDeveloper = new Employee("Front-end engineer",4000 ,2);
// const salesManager = new Employee("Sales Manager", 6000, 7);
// console.log(softwareDeveloper.getBonus(),salesManager.getBonus());


//1Susikurkite konstruktorių car, kuris priims brand, model, engine ir 
//1turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
//2Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'.
//2 basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia 
//2yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

//1/2
class Cars {
    constructor(brand, model, engine, price) {
        this.brand = brand;
        this.model = model; 
        this.engine = engine; 
        this.price = price;
    }
    getPrice = () => {
        if(this.engine === "electric") {
            return this.price+ 10000 ;
        }else if(this.engine === "diesel") {
            return this.price + 5000;
        }else {
            return this.price;
        }
    }
    // // turnOn = () => {
    // //     return `${this.model} of brand ${this.brand} gous VROOOM!`
    // }
}

const bmw = new Cars("BMW", "E28", "petrol", 20000);
const vw = new Cars("VW", "Golf", "electric", 15000)
const mini = new Cars("Audi", "mini", "diesel", 12000)
console.log(mini.getPrice());

//2