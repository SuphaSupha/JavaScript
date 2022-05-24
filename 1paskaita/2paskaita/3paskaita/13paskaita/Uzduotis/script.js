//1uzduotis

// const legalAge = true;

// console.log(legalAge);
// console.log(legalAge.toString());

//2.1 /2.2 uzduotis

// const milkPrice = 2;

// if( Number.isInteger(milkPrice)) {
//     alert("Centu nereikia")
// }else {
//     alert("truksta centu")
// }
// alert(milkPrice.toFixed(2));

//2.2

// const priceForm = document.querySelector("form");
// priceForm.addEventListener("submit",handlePriceForm);

// function handlePriceForm(event) {
//     event.preventDefault();

//     const price = Number(document.querySelector("#price").value);
//     const quantity = Number(document.querySelector("#quantity").value);

//     const total = price * quantity;

//     const priceDisplay = document.createElement("h2");
//     priceDisplay.textContent = total.toFixed(2);
//     document.body.append(priceDisplay);
// }

//3.1

// const nameForm = document.querySelector("form");
// nameForm.addEventListener("submit", handleNameForm);

// function handleNameForm(event) {
//     event.preventDefault();
    
//     const myName = document.querySelector("#myname").value;
//     const number = Number(document.querySelector("#quantity").value)
//     const total = myName.repeat(number);

//     if (Number.isInteger(number)) {
//         const h2 = document.createElement("h2");
//         h2.textContent = total;
//         document.body.append(h2);
//     } else { 
//         alert("Skaicius yra nesveikas")
//     }
// };

//3.2 
const nameForm = document.querySelector("form");
nameForm.addEventListener("submit", handleNameForm);

function handleNameForm(event) {
    event.preventDefault();

    const myName = document.querySelector("#myname").value.trim();

    console.log("lenght:" + myName.length);
}

//3.3


