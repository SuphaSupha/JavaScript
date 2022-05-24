const person = {
    name: "Edvinas",
    surname: "Vaiciunas",
    age: 29,
};

// const ageProperty = "age";

// console.log(person["age"]);

const people = [
    {id: 1, name: "Edvinas", surname: "Vaiciunas", age: 29,},
    {id: 2, name: "Jonas", surname: "Jonaitis", age: 14,},
    { id: 3,name: "Antanas",surname: "Antanaitis",age: 33,},
]
//forEach 
// const firstItem = people[0];
// console.log(firstItem.name);
// const lastItem = people[people.length - 1];
// console.log(lastItem.name);
people.push({id:4, name: "Gokas", surname: "Songokas", age: 99});
people.shift(); 
// console.log(people);

// people.forEach( (person) => {
//     // console.log(person);
//     const fullName = `${person.name} ${person.surname}`;
//     console.log(fullName);
// });

//Map 
// const peopleWithFullName = people.map( (person) => {
//     const fullName = `${person.name} ${person.surname}`;
    
//     return {...person,
//         name: capitalize(person.name), 
//         surname: capitalize(person.surname),
//         fullName: fullName, canDrive: person.age >= 18 ? true : false,}; 
// })

// function capitalize (value) {
//     return value.charAt(0).toUpperCase() +value.slice(1).toLowerCase();
// }

// console.log(peopleWithFullName);

const veggies = [
    {name: "Apple", category: "tree", price: 1},
    {name: "Pear", category: "tree", price: 2},
    {name: "Blackberries", category: "bush", price: 5},
    {name: "Blueberries", category: "bush", price: 7},
    {name: "Carrot", category: "dirt", price: 0.25},
    {name: "Potato", category: "dirt", price: 0.3},
];

// const cheapVeggies = veggies.filter((veggie) => veggie.price <= 1);
// const expensive = veggies.filter((veggie) => veggie.price > 1).map((v) => v.name);

// console.log(expensive);
// console.log(cheapVeggies);

// const sorted = veggies.sort((a,b) => (b.name > a.name ? -1 : 1));
// console.log(veggies);

function prices(array) {
const sorted = array.sort((a,b) => a.price - b.price );
const cheapest = sorted[0];
const expensive = sorted[sorted.length - 1]
return { cheapest: cheapest.name, expensive: expensive.name};
}
const veggiesPrice = prices(veggies);
console.log(veggiesPrice.cheapest);
