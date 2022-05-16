// empty object
const emptyObject = {};

const user = {
    name:"SuphaSupha",
    password: "123456789", // -> sha256 -> jhasdjhaskjf121545sfas
    mail: "sdaskfas@askdaks.lt",
    age: 29,
    gender: "male",
};
// console.log(user.password); naudoti pirma!
// console.log(user["mail"]);

function getItem(key) {
    //user["gender"]
    return user[key];
}

// console.log(getItem("gender"));

const candle =  {
    color: "green", 
    taste: "apple", 
    height: 8, 
    radius: 8,
    turnLight: () => {
        console.log(`${candle.color} candle spreading ${candle.taste} smell`);
    },
    calculateLightTime: () => {
        const metric = candle.height * candle.radius;
        if(metric > 60) {
            return 180
        }else if (metric > 30){
            return 90
        }else {
            return 45
        }
    }
};
// const minutes = candle.calculateLightTime();
// console.log(minutes);
const cat = {
    name: "Kleopatras", 
    age: 15, 
    color: "black",
    weight: 7, 
    eat: () => {
        console.log(`${cat.name} is eating...`)
    },
    sleep: () => {console.log("Cat is sleeping...")},
    description: () => { 
        console.log(`${cat.name} is a ${cat.color} cat, and ${cat.age} years of age`)
    },
}
// console.log(`${cat.name} is a ${cat.color} cat, and ${cat.age} years of age`)

// cat.sleep();
const codeClass = {
    type: "remote", 
    subject: "Front-end + Node.js", 
    lecturer: {
        name: "Rokas",
        surname: "Andreikenas",
        age: 23,
        expiriance: 3,
    },
    students: ["Edvinas", "Liudmila", "Rima", "Karolis"
    ]
};
// console.log(codeClass.lecturer.name);
const lecturerFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surname}`;
// console.log(codeClass.students[2]); // [2] targetini
const studentCount = codeClass.students.length;
// console.log(studentCount);

codeClass.type = "onsite";// keisti 

const names = ["Edvinas", "Liudmila", "Rima", "Karolis"];
names[0] = "rokas";
// console.log(names);

//1codeUzduotis 

const treeForm = document.querySelector("#tree-form");
treeForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const treeName = document.querySelector("input[name='tree-name']");
    const treeAge = document.querySelector("input[name='tree-age']");

    const name = treeName.value;
    const age = Number(treeAge.value)

    const tree = {
        name: name,
        age: age,
        isOld: age > 100 ? true : false,  
    };
    console.log(tree);

}
// console.log(tree); console neveiks uz funkcijos ribu
