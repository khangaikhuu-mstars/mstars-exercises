const myPromise = new Promise(function(resolve, reject){
            if(isOrderReady) {
                 reject("hey,your order is already done. come and get it")
            } else {
                reject("hey,your order is rejected.")
            }
});
console.log(myPromise);