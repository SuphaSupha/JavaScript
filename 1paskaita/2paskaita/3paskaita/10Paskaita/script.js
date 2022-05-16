// // objekto savybes (property) yra reikšmes 
// // objekto metodas (method) yra funkcijos atitikmuo
// console.log(document.ATTRIBUTE_NODE)
// document.getElementById

// const user = { 
//     name: "Edvinas",
//     passwword: "Edvinas123",
//     email: "Edvinas@gmail.com",
//     login: hello;
// }
//1
const nameInput = document.querySelector("#name");
console.log(nameInput.textContent);
console.log(nameInput.innerHTML);
console.log(nameInput.innerText);


nameInput.addEventListener("click",handleClickOnName);

function handleClickOnName() {
    nameInput.style.color = "red";
    nameInput.style.background = "blue";
    nameInput.style.textAlign = "right";
    nameInput.style.fontSize = "72px";
}
//2
const jumpButton = document.querySelector("#jump");

jumpButton.addEventListener("click",handleJump)
jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
let inTop = true;

function handleJump() {
    if( inTop){
        jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px;";
        jumpButton.textContent = "Jump to top";
        inTop = false;
    }
    else {jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
        jumpButton.textContent = "Jump to top";
        inTop = true;
    }
    // inTop = !inTop;  
}

const backwardsButton = document.getElementById("backwards");
backwardsButton.addEventListener("click", handleGoBackwards);
let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;";
const topRight = "position: absolute; top: 10px; left: 10px;";
const bottomRight = "position: absolute; top: 10px; left: 10px;";
const bottomLeft = "position: absolute; top: 10px; left: 10px;";

backwardsButton.style.cssText = topLeft;

function handleGoBackwards() {
    if(position === 0) {
        backwardsButton.style.cssText = bottomLeft;
    }
    else if (position === 1) {
        backwardsButton.style.cssText = bottomRight;
    }
    else if (position === 2) {
        backwardsButton.style.cssText = topRight;
    }else {
        backwardsButton.style.cssText = topLeft;
        position = -1;
    }
    position++;
}