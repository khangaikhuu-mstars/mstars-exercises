
let isOrderReady = false

const myPromise = new Promise(function(resolve, reject){
   
    if(isOrderReady){
        resolve ("Hey, your order is already done. Come and get it.")
    }else{
        reject ("Hey your order is rejected. Please order.")
    }
   
})


console.log(myPromise)