//1
const yearsCheckerForm = document.querySelector("form");

yearsCheckerForm.addEventListener("submit",handleBonusCheckerForm);

function handleBonusCheckerForm(event) {
    event.preventDefault();
    const years = document.querySelector("input[name=experience]").value;

    if(years >= 20 ) {
        alert("Jūsų bonusas $200!");
    }else if (years >= 10 ) {
        alert("Jūsų bonusas $100!");
    }else {
        alert("Jūsų bonusas $50!");
    }
   
}
// console.log(yearsCheckerForm);

// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const years = document.getElementById('years').value;

//   let bonus = 50;
//   if (years >= 10) {
//     bonus += 50;
//   }
//   if (years >= 20) {
//     bonus += 100;
//   }

//   document.getElementById('output').innerText = `Jūsų premija: ${bonus}`;
// })

