const isOrderReady = true;
const myPromise  = new Promise((resolve, reject)=>{
    if(!isOrderReady){
        resolve("Hey your order is already done. Come and get it")
    }else {
        reject("Hey, order is rejected. Please order")
    }

})

console.log(myPromise)