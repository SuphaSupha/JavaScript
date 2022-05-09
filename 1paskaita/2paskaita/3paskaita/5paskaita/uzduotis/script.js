// document.body.innerHTML = "Edvinas";
// console.log("ksakas")
// const nameNode = document.getElementById("name");
// nameNode.textContent = "Romas";

// const lastItem = document.querySelector("li:last-child");
// lastItem.textContent = "Sautuvas";

// const spanItem = document.querySelector(".bluetext > span");
// spanItem.textContent = "blue";

const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;


const imageSrc = "https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png";

const divElement = document.querySelector("div");

const imgElement = document.createElement("img");

imgElement.src = imageSrc;

divElement.appendChild(imgElement);
