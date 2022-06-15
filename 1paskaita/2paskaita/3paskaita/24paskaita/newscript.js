

const createUserRow = (user) => {
    const userId = user.id;
    const id = document.createElement("th")
    id.textContent = userId
    
    const userName = user.name.split('  ');
    const thName = document.createElement("th")
    thName.textContent = userName;

    const userCity = user.city;
    const thCity = document.createElement("th")
    thCity.textContent = userCity;

    const userColor = user.fav_color;
    const thColor = document.createElement("th")
    thColor.textContent = userColor;

    const thUser = document.createElement("tr");
    thUser.append(id ,thName, thCity, thColor );

    return thUser;
}

const renderTable = (users) => {
     const thId = document.createElement("th");
     const thCity = document.createElement("th");
     const thName = document.createElement("th");
     const thColor = document.createElement("th");

     thId.textContent = "Id";
     thCity.textContent = "City";
     thName.textContent = "Name";
     thColor.textContent = "Fav Color";

     const thRow= document.createElement("tr");
     const tHead = document.createElement("thead")
     const table = document.createElement("table");

     thRow.append(thId,thName, thCity,thColor);
     tHead.append(thRow);
     table.append(tHead);
     
     


     const tableBody = document.createElement("tbody")
     
     users.forEach((user) => tableBody.append(createUserRow(user))); 
     
     table.append(tableBody);
     
     document.body.append(table);
};

fetch ("https://magnetic-melon-yam.glitch.me")
    .then(resp => resp.json())
    .then(response => {
       
        renderTable(response);

        console.log(response);
    })
    .catch(error => {
        console.error(error);
    })
