//Promises
// const resolvedPromises =  new Promise((resolve, reject) => {
//     resolve("17c, Vilnius")
// });

// resolvedPromises.then(response => {
//     console.log(`Dabar yra ${response}`);
// })


// const rejectedPromise = new Promise((resolve, reject)=> {
//     reject("Tinklas yra perkrautas, gizkite veliau");
// });

// rejectedPromise.then((response) => {
//     console.log(`Dabar yra ${response}`)
// }).catch((error) => {
//     console.error(error);
// }).finally(() => {
//     console.log("Kreipimasis i oro tarnyba")
// });

const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {resolve("17c, Vilnius")}, 4000);
    ;
});

const renderWeather = (response) => {
    const weather = document.getElementById("weather");
    weather.textContent = `Dabar yra ${response}`;
}

const showError = (err) => {
    const error = document.getElementById("error");
    error.textContent = err;
    error.style.color = "red";
}
const showThanksMessage = () => {
    const header = document.getElementById("header");
    header.textContent = "Aciu uz apsilankima";
}
//async
const getWeather = async () => {
    

    try {const response = await promise;
    renderWeather(response);

    } catch (error) {
        showError(error);
    } finally {
        showThanksMessage();
    }
}

getWeather();

// promise.then((response) => {
//     renderWeather(response);
//     //Apsirasyti apvaizdavima
// }).catch((error) => {
//     showError(error);
// }).finally(() => {
//     showThanksMessage();
// });