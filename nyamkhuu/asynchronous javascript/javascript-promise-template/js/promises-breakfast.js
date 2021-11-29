const  isOrderReady = false

const myPromise = new Promise(function(resolve, reject){

if (isOrderReady){

    resolve("Hey, Your order is already done");
}else {
    reject("Order is rejected")
}

});


    //     setTimeout(()=>{
// }, 3000);


console.log(myPromise);