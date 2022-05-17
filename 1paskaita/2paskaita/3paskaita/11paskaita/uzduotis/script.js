//1

// const car = {
//     brand: "Mini",
//     color: "red", 
//     doors: 5,
// };
// console.log(car.doors);
//2
const personForm = document.querySelector("#person-form");
personForm.addEventListener("submit", handlePersonForm);

function handlePersonForm(event) {
    event.preventDefault();

    const myName = document.querySelector("input[name='my-name']");
    const mySurname = document.querySelector("input[name='surname']");

    const name = myName.value;
    const surname = mySurname.value;

    const form = {
        name: name, 
        surname: surname,
    };
    console.log(form);
    
    
}