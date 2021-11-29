// const myPromise= new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Hey, your order is already done. Come and get it.")
//     }, 3000);
// });

// console.log(myPromise);


// const myPromise= new Promise(function(resolve, reject){
//     setTimeout(() => {
//         reject("Hey, your order is already done. Come and get it.")
//     }, 3000);
// });

// console.log(myPromise);


const isOrderReady = true;

const myPromise= new Promise(function(resolve, reject){
    if(isOrderReady){
        resolve("Hey, your order is already done. Come and get it");
    } else {
        reject("Hey, your order is rejected. Please reorder.")
    }
});

console.log(myPromise);