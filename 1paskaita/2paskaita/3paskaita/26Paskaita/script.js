const createData = (info) => {
  //   const img = info.image;
  //   const picture = document.createElement("img");
  //   picture.src = img;
  //   picture.alt = "Butas";
  const coin = info.price;
  const price = document.createElement("h3");
  price.textContent = coin;
  const region = info.city;
  const city = document.createElement("p");
  city.textContent = region;
  const text = info.description;
  const description = document.createElement("p");
  description.textContent = text;
  const card = document.createElement("div");
  card.append(price, city, description);

  return card;
};

const renderCarcas = (user) => {
  const cards = document.createElement("div");
  cards.style.width = "33%";
  cards.style.height = "400px";

  document.body.append(cards);

  user.forEach((info) => cards.append(createData(info)));
};

fetch("https://robust-safe-crafter.glitch.me/")
  .then((resp) => resp.json())
  .then((response) => {
    createData(response);
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
