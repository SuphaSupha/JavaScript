const createData = (info) => {
    const infoBrand = info.brand;
    const brand = document.createElement("th");
    brand.textContent = infoBrand;

    const infoModel = info.model;
    const model = document.createElement("th");
    model.textContent = infoModel;

    const thInfo = document.createElement("tr");
    thInfo.append(brand,model);

    return thInfo
}

const renderTb = (user) => {
    const thBrand = document.createElement("th");
    const thModel = document.createElement("th");
    const lableBrand = document.createElement("lable");
    const lableModel = document.createElement("lable");
    const lableBody = document.createElement("div");
    const inputBody = document.createElement("div");
    const button = document.createElement("button");

    button.textContent = "ADD!";
    thBrand.textContent = "Brand";
    thModel.textContent = "Model"; 
    
    lableBrand.textContent =  "Add brand....                                ";
    lableModel.textContent = "Add model....";

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const thRow = document.createElement("tr");

    
    thRow.append(thBrand,thModel);
    thead.append(thRow);
    table.append(thead);

    const form = document.createElement("Form");
    const inputBrand = document.createElement("input");
    inputBrand.style.width = "76px";
    inputBrand.className = "car-brand";
    const inputModel = document.createElement("input");
    inputModel.style.width = "76px";
    inputModel.className = "car-model";
    button.className = "add-button";


    lableBody.append(lableBrand,lableModel)
    inputBody.append(inputBrand,inputModel,button);
    form.append(lableBody,inputBody);

    const tablebody = document.createElement("tbody");
    
    user.forEach((info) => tablebody.append(createData(info)));
    
    table.append(tablebody);
    document.body.prepend(form)
    document.body.append(table)
};
fetch("https://olive-bead-glazer.glitch.me")
    .then((resp) => resp.json())
    .then((response) => {
        renderTb(response);
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

const handleAdd = (e) => {
    const addBrand = document.querySelector(".car-brand");
    const addModel = document.querySelector(".car-model");
    const brandModel = {brand: addBrand.value, model: addModel.value};
    

    const params = {
        method: "POST",
        body: JSON.stringify(brandModel),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    }


fetch("https://olive-bead-glazer.glitch.me",params)
    .then((resp) => resp.json())
    .then((response) => {
        renderTb(response);
        addBrand.value = "";
        addModel.value = "";
        
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    })

}

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click",handleAdd)