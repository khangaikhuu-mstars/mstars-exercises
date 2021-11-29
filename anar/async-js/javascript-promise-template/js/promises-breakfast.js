const isOrderReady = false;

const myPromise = new Promise(function(resolve, reject){
    if(isOrderReady){
            reject("Order canceled. Please reorder.")
    } else  resolve("Hey, your order is ready !")
}) 

console.log(myPromise)