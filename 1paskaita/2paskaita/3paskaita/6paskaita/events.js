const namebutton = document.getElementById("btn");
namebutton.addEventListener("click", clickButtonLister );

function clickButtonLister() {
    console.log("edvinas")
}

const backgroundButton = document.getElementById("back");
backgroundButton.addEventListener("click", onClickBackgroundButton);

function onClickBackgroundButton(){
    document.body.style.backgroundColor = "blue";
}

const loginButton = document.getElementById("login");
loginButton.addEventListener("click",loginHandler);

function loginHandler(){
    const h1Node= document.querySelector("h1");
    h1Node.textContent = "hello, Edvinas!";
    loginButton.textContent = "log out";
}
