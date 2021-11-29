const myPromise = new Promise((resolve, reject)=>{
const isOrderReady = false;    
    if(isOrderReady){
        resolve("Hey, Your order is already. Come and get it")
    }else {
        reject("Hey, Your order is rejected. Come and get it")}

});
console.log(myPromise);