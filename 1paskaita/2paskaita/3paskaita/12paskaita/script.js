// Pasikatoti masyvo struktura[lauztiniai skliaustai indikuoja kad tai masyvas,array]
//Išmokti sukurti elementa JavaScript faile
//Susipažinti teoriskai su Append/prepend metodais ir juos panaudoti

//array 
const array = ["rokas", "tomas", "Karolis"];
const number = [1, 2, 3, 5];
const users = [
    { name: "Rokas", age: 12 },
    { name: "Tomas", age: 25 }, 
];
//Matrica
const lists = [
    [1,8,8],
    [8,9,5],
    [7,5,7],
];

// const divs = [<div>rokas</div>, <div>skdaks</div>]

const fruits = document.getElementsByTagName("li");
const fruits2 = document.querySelectorAll("li");
// console.log(fruits);
// console.log(fruits2);

// newElement creation
const newFruit = document.createElement("li");
newFruit.textContent = "Orange";
const fruitsList = document.getElementById("fruits");

// fruitsList.append(newFruit);

const newNew = document.createElement("li");
newNew.textContent = "pinepal";
const fruitsLists = document.getElementById("fruits");

// fruitsList.prepend(newNew);

const extraList = document.createElement("ol");

extraList.append(newFruit);
extraList.append(newNew);

document.body.append(extraList);

// uzduotis automobilio aprasymas\\ 

const card = document.createElement("div");
card.style.background = "#f3f3f3";
card.style.display = "flex";
card.style.flexDirection = "row-reverse";


const image = document.createElement("img");
image.src = "https://g2.dcdn.lt/images/pix/430x260/PHEew4iARZE/nissan-leaf-90235123.jpg";
image.alt = "Auto";
image.style.width = "40%"; 

const info = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "Ferrari f8 tributo";

const description = document.createElement("p");
description.textContent = "Very nice car omg...";

const benefits = document.createElement("ul");
const first = document.createElement("li");
const second = document.createElement("li");
const third = document.createElement("li");

const benefitList = ["Color", "Price", "Speed", "Emotion"];

for (let i = 0; i < benefitList.length; i++) {
    const benefitDescription = benefitList[i];
    const benefit = document.createElement("li");
    benefit.textContent = benefitDescription;
    benefits.append(benefit);
}

benefits.append(first,second,third)
info.append(title, description,benefits);
card.append(image, info);
document.body.append(card);


