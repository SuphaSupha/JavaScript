const handleSubmitCar = (event) => {
  event.preventDefault();

  const brand = document.querySelector("input[name='brand']");
  const model = document.querySelector("input[name='model']");

  const car = { brand: brand.value, model: model.value };

  const params = {
    method: "POST",
    body: JSON.stringify(car),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  fetch("https://olive-bead-glazer.glitch.me/", params)
    .then((resp) => resp.json())
    .then((response) => {
      const header = document.createElement("h1");
      header.textContent = "Sėkmingai užpildyta";
      document.body.prepend(header);
      //viskas gerai
      //iskviesk funcija kuri parodys sekmes pranesima
      console.log(response);
    })
    .catch((error) => {
      const header = document.createElement("h1");
      header.textContent = "Ivyko klaida";
      document.body.prepend(header);
      //kazkas blogai
      //iskviesk funcija kuri parodys nesekmes pranesima
      console.error(error);
    });
};

const carForm = document.getElementById("car-form");
carForm.addEventListener("submit", handleSubmitCar);
