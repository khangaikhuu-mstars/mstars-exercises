const isOrderReady = true;
const myPromise = new Promise((resolve, reject) => {
    if(isOrderReady) {
        reject("Hey, your order is already done. Come and Get it");
    } else {
        reject("Hey, your order is rejected. Please reorder")
    }
    });
console.log(myPromise);