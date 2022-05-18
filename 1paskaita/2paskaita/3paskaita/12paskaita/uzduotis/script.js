const body = document.createElement("section");
body.style.background = "grey";
body.style.width = "100%";
body.style.height = "700px";

const card = document.createElement("div");
card.style.background = "#f3f3f3";
card.style.width = "80%";
card.style.height = "80%";
card.style.position = "absolute";
card.style.left = "126px";
card.style.top = "70px";
card.style.borderRadius = "24px";

const image = document.createElement("img");
image.src = "https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg";
image.alt = "Person";
image.style.maxWidth = "25%";
image.style.margin = "auto";
image.style.display = "block";

const title = document.createElement("h2");
title.textContent = "Edvinas Vaičiūnas";
title.style.textAlign = "center";
title.style.fontSize = "32px";

const infos = document.createElement("p");
infos.style.textAlign = "center";
infos.style.color = "gray";
infos.style.fontSize = "24px";

const infoList = ["Founder & 1/3 of @paravelinc", "Austin, TX"];

for (let i = 0; i < infoList.length; i++) {
    const infoDescription = infoList[i];
    const info = document.createElement("p");
    info.textContent = infoDescription;
    infos.append(info);
}

card.append(image, title, infos);
body.append(card);
document.body.append(body);