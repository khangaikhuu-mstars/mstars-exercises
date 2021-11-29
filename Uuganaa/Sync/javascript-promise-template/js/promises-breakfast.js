const isOrderReady = true
const myPromise = new Promise((resolve, reject) => {
    if (isOrderReady) {
        resolve("Hey your order is already done. Come and Get it")
    } else {
        reject("We cant. Your order rejected ")
    }
    // setTimeout(() => {}, 8000)

});
console.log(myPromise);