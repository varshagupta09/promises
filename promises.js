// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 1");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise 1 completed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise 2 completed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 3");
//     resolve({ name: "Varsha", email: "vrsa8896@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Varsha GUpta", email: "varsh@gil.com" });
//     } else {
//       reject("ERROR : Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("resolved or rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ name: "JavaScript", email: "varsh123@gil.com" });
//     } else {
//       reject("ERROR : JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();


async function getALlUser(){
 try {
    const response = await fetch ('https://api.github.com/users/varshagupta09')
    const data = await response.json();
    console.log(data);
 } catch (error) {
    console.log("E:", error);
 }
}

getALlUser()

