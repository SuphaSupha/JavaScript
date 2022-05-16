const exampleForm = document.getElementById("example");


exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
    event.preventDefault();

    const nameInput = document.querySelector("input[name = name]")
    const surnameInput = document.querySelector("input[name = surname]");
    const result = document.getElementById("Example-result");
    const header = document.querySelector("h1");
    const body = document.querySelector("body");

    body.style.backgroundColor = "Yellow";
    header.textContent = "";

    const fullName = `${nameInput.value} ${surnameInput.value}`;
    result.textContent = `Sveikinam ${fullName}, jūs priimtas!`;
   

    console.log(surnameInput.value);
    console.log(nameInput.value);
    console.log("Example form submited");
    
    
    nameInput.value = "";
    surnameInput.value = "";
}


const registerForm = document.getElementById("reg-form");

registerForm.addEventListener("submit",handleSubmitExampleForm)

function handleSubmitExampleForm(event) {
    event.preventDefault();

    const username = document.querySelector("input[name = username]");
    const password = document.querySelector("input[name = password]");
    const email = document.querySelector("input[name = email]");
    const result = document.querySelector("#reg-result");

    result.textContent = `${username.value}, ${email.value} registered`

    username.value = "";
    password.value = "";
    email.value = "";
}

const additionalForm = document.getElementById("add-form");

additionalForm.addEventListener("submit", handleSubmitAdditionalForm);

function handleSubmitAdditionalForm(event) {

event.preventDefault();

const gender = document.querySelector('input[name="gender"]:checked');

console.log(gender.value);

const fruits = document.querySelectorAll("input[name='fruit']:checked");

for (let i = 0; i < fruits.length; i++) {

const fruit = fruits[i];

console.log(fruit.value);

}

}