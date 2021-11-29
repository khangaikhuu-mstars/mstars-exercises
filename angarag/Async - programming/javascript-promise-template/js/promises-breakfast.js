const myPromise = new Promise((resolve, reject) =>{
    isOrderReady = true
    if(isOrderReady){
        resolve("Your order is ready. Come and get your love")
    }else {
        reject("Your order aint ready. Try again bih")
    }


})
console.log(myPromise)