const myPromise = new Promise((resolve,reject)=>{
    const isOrderReady = true
    if(isOrderReady){
        resolve("Its ready")
    }
    else{
        reject('Sorry')
    }
});
console.log(myPromise)