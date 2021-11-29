const isOrderReady = false;
const myPromise = new Promise((resolve, reject) => {
    if(isOrderReady) {
        resolve("Hey your order is already done. Come and get it")
    } else{
        reject("Hey, order is rejected. Please reorder.")
    }
});

console.log(myPromise)