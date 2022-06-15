//GET - Gauna esamus įrašus
//POST - sukuria nauja įrašą 
//PUT  - Modifikuoja esantį įrašą
//DELETE - ištrina esama įraša
//1
        
const renderComment = (comment) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `[${comment.email}] {${comment.name}} ${comment.body}`;
    document.body.prepend(paragraph);
    };
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((resp) => resp.json())
    .then((response) => {
    const firstItem = response[0];
    renderComment(firstItem);
    })
    .catch((error) => {
    console.error(error, ": Failed to load comments");
    });

//2


// fetch("https://jsonplaceholder.typicode.com/user?fields=city")
//     .then(resp => resp.json())
//     .then(Response => {
        
//         console.log(Response);
//     })
//     // atvaizduoti pirmo elemento duomenis
//     // optional: atvaizduoti html
//     .catch(error => {
//         console.error(error);
//     });
// const renderUser = (user) => {
//         const addressCity = user.address.city;
//         const companyName = user.company.name;
//         const email = user.email;

//         const tdAddressCity = document.createElement("td");
//         const tdCompanyName = document.createElement("td");
//         const tdEmail = document.createElement("td");

//         tdAddressCity.textContent = addressCity;
//         tdCompanyName.textContent = companyName;
//         tdEmail.textContent = email;

//         const trUser = document.createElement("tr");
//         trUser.append(tdAddressCity, tdCompanyName, tdEmail);

//         document.getElementById("users").append(trUser);
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp) => resp.json())
//     .then((response) => {
//         renderUser(response[0]);
        
//         response.forEach((user) => renderUser(user));
//     })
//     // atvaizduoti pirmo objekto adress, company ir name. Juos sudeti i atskirus kintamuosius
//     // optional: atvaizduoti html
//     .catch(error => {
//         console.error(error);
//     });

    // const renderUserCard = (user) => {
    //     const photo = document.createElement("img");
    //     const userName = document.createElement("h3");
    //     const email = document.createElement("p");
    //     const city = document.createElement("p");

    //     photo.src = "https://i.bleacherreport.net/images/team_logos/328x328/the_rock.png?canvas=492,328";
    //     photo.alt = `${user.name} photo`;
    //     userName.textContent = user.username;
    //     email.textContent = user.email;
    //     city.textContent = user.address.street;

    //     // pakeisti street spalva i zalia 
    //     // pakeisti email spalva i pilka

    //     const card = document.createElement("div");
    //     card.className = "card";

    //     card.append(photo, userName,email,city);

    //     document.querySelector(".cards").append(card)
    // }

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(resp => resp.json())
//     .then(response => {
//         renderUserCard(response)
//     })
//     // atvaizduoti userio name, username, email ir city ekrane(Html)
//     // optional: ideti random nuotrauka i img taga
//     .catch((error) => {
//         console.error(error, "Failed to load user")
//     })

//1
const renderUserCard = (user) => {
    // const image = document.createElement("img");
    // image.src = user;
    // image.alt = user;

    const name = document.createElement("h3");
    name.textContent = user.name.first;

    const card = document.createElement("div");
    card.className = "card";
    card.append(name);
    document.querySelector(".cards").append(card)
}

fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(response => {
        renderUserCard(response[0])
    })
    .catch(error => {
        console.error(error, "Failed to load");
    })

// const renderUserCard = (user) => {
//     const img = document.createElement('img');
//     img.src = user.picture.large;
//     img.alt = `${user.name.first} profile picture`;
  
//     const intro = document.createElement('h4')
//     intro.style.color = "green";
//     intro.textContent = `${user.name.first} ${user.name.last}, ${user.dob.age}`;
  
//     const contacts = document.createElement('h5');
//     contacts.style.color = "grey";
//     contacts.textContent = user.email;
  
//     const card = document.createElement('div');
//     card.className = "card";
//     card.append(img, intro, contacts);
//     document.querySelector(".cards").append(card);
//   };

// const fetchRandomUser = async () => {
//     try {
//       const response = await fetch('https://randomuser.me/api/');
//       if (response.ok) {
//         const data = await response.json();
//         renderUserCard(data.results[0]);
//       }
//     } catch(error) {
//       console.error(error);
//     }
//   };
  
//   fetchRandomUser();

//2

// const checkIfPersonVIP = (guests, guestName) => {
//     const guest = guests.find(guest => guest.name === guestName); 
//     document.body.textContent = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;

// }

//   const fetchPartyGuest = async () => {
//     try {
//         const response = await fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party");
//         if (response.ok) {
//             const guest = await response.json(); 
//             checkIfPersonVIP(guest, "Kristupas Lapeika");
//         }
//     }   catch(error) {
//         console.error(error, "Faled to load");
//     }
// };

//     fetchPartyGuest();

//3
const renderUser = (user) => {
    const guestName = user.name;
    const tdguestName = document.createElement("td");
    tdguestName.textContent = guestName;

    const attending = document.createElement("td");
    attending.textContent = user.attending ? "+" : "-";

    const plusOne = document.createElement("td");
    plusOne.textContent = user.plusOne ? "+" : "-";

    const trUser = document.createElement("tr");
    trUser.append(tdguestName, attending, plusOne);

    document.getElementById("users").append(trUser);
}

fetch("https://boiling-reaches-93648.herokuapp.com/week-3/wedding")
.then((resp) => resp.json())
.then((response) => {
    renderUser(response[0]);
    response.forEach((user) => renderUser(user));
})
// atvaizduoti pirmo objekto adress, company ir name. Juos sudeti i atskirus kintamuosius
// optional: atvaizduoti html
.catch(error => {
    console.error(error);
});


