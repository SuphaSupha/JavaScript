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

// const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> {resolve("17c, Vilnius")}, 4000);
// });

// const renderWeather = (response) => {
//     const weather = document.getElementById("weather");
//     weather.textContent = `Dabar yra ${response}`;
// }

// const showError = (err) => {
//     const error = document.getElementById("error");
//     error.textContent = err;
//     error.style.color = "red";
// }
// const showThanksMessage = () => {
//     const header = document.getElementById("header");
//     header.textContent = "Aciu uz apsilankima";
// }
// //async
// const getWeather = async () => {
    

//     try {const response = await promise;
//     renderWeather(response);

//     } catch (error) {
//         showError(error);
//     } finally {
//         showThanksMessage();
//     }
// }

// getWeather();

// promise.then((response) => {
//     renderWeather(response);
//     //Apsirasyti apvaizdavima
// }).catch((error) => {
//     showError(error);
// }).finally(() => {
//     showThanksMessage();
// });

//1/2
// const pazadas = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 5000)
//   })
//   pazadas.then(() => console.log("Veikia"));
//   console.log("Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas");

// const promise = new Promise ((resolve, reject) => {
//     const random = Math.floor(Math.random() * 5) + 1;
    
//     setTimeout(() => {
//         if(random ===1){
//             reject();
//         }
//         else {
//             resolve();
//         }
//     }, 2500)
//     })
//     promise
//         .then(() => console.log("Veikia"))
//         .then((message) => console.log(message))
//         .catch(() => console.log("ops, atmesta"))
//         .finally(() => console.log("geros dienos!"));

const pazadas = new Promise((resolve, reject) => {
const random = Math.floor(Math.random() * 5) + 1;
      
    setTimeout(() => {
        if(random === 1){
            reject();
          }
          else{
            resolve();
          }
        }, 5000)
      })
      
      pazadas
        .then(() => alert("Veikia"))
        .catch(() => alert("Oops, pažadas buvo atmestas"))