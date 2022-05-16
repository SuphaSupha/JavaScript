//1 
const nameInput = document.querySelector("#name");
nameInput.addEventListener("click", handleClickOnName);
function handleClickOnName() {
    nameInput.style.color = "blue";
    nameInput.style.textAlign = "center";
    nameInput.style.fontSize = "72px";
}

// //2
// const jumpBtn =document.querySelector("#jump");
// jumpBtn.addEventListener("click", handleJump);
// let inTop = true;


// function handleJump () {
//     if (inTop) { 
//         jumpBtn.style.cssText = "position: absolute; bottom: 30px; right: 30px;";
//         inTop = false
//     }else {
//         jumpBtn.style.cssText = "position: absolute; top: 30px left: 30px;";
//         inTop = true;
//     }
// }
//3
const clockBtn =document.querySelector("#clock");
clockBtn.addEventListener("click", handleClock);
let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;";
const topRight = "position: absolute; top: 10px; left: 10px;";
const bottomRight = "position: absolute; top: 10px; left: 10px;";
const bottomLeft = "position: absolute; top: 10px; left: 10px;";

clockBtn.style.cssText = topLeft;

function handleClock () {
    if (position === 0) { 
        clockBtn.style.cssText = topRight;
    }else if (position === 1) {
        clockBtn.style.cssText = bottomRight;
    }else if (position === 2) {
        clockBtn.style.cssText = bottomLeft;
    }else {
        clockBtn.style.cssText = topLeft;
        position = -1;
    }
    position++;
}

// //4
// const formStyle = document.querySelector("#form");
// formStyle.addEventListener("input", handleStyle);
// function handleStyle(event) {
//     const myName = event.target.value;
// }
// if ( myName.length >= 2) {
//     formStyle.style.backgroundColor = "red";
// }
