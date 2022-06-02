// class Item { 
//     constructor(name, price, count) { 
//         this.name = name;
//         this.price = price;
//         this.count = count;
//     }
//     addToList = () => {
//         const list = document.getElementById("list");
//         const newItem = document.createElement("li");
//         newItem.textContent = `${this.name} x ${this.count} = ${this.count * this.price}`
//         list.append(newItem);
//     }
// }

// const submitItemForm = (event) => {
//     event.preventDefault();
//     const itemName = document.querySelector("input[name='item']");
//     const price = document.querySelector("input[name='price']");
//     const count = document.querySelector("input[name='count']");
//     const item = new Item(itemName.value, Number(price.value), Number(price.value));
//     item.addToList();
    

// };

// const itemForm = document.getElementById("form-item");
// itemForm.addEventListener("submit", submitItemForm);


class Car {
    constructor(brand, model, mileage, price, image){
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.price = price; 
        this.image = image; 
    }
        addToP = () => {
            const cars = document.getElementById("cars");
            const newCar = document.createElement("p");
            const img = document.createElement('img');
            img.src = this.image;
            newCar.textContent = `${this.brand}`
            cars.append(newCar,img);
        }
}

const submitCarForm = (event) => {
    event.preventDefault();
    const brandName = document.querySelector("input[name='brand']");
    const modelName = document.querySelector("input[name='model']");
    const mileageName = document.querySelector("input[name='mileage']");
    const priceName = document.querySelector("input[name='price']");
    const imageName = document.querySelector("input[name='url']");
    
    const car = new Car(brandName.value, modelName.value, Number(mileageName.value), Number(priceName.value), imageName.value);
    car.addToP();

}

const carForm = document.getElementById("car-form");
carForm.addEventListener("submit", submitCarForm);
