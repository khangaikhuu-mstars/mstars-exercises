const myPromise = new Promise((resolve, reject) => {
    if(isOrderReady){
        resolve("Hey, your order is already done. Come and get it!");      
    } else {
        reject("Hey! Your order is rejecte. Please reorder.")
    }

});

console.log(myPromise)