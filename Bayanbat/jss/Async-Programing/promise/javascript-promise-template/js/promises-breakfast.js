const isOrderReady = true
const myPromise = new Promise((resolve , reject)=>{
    if(isOrderReady){
        resolve("Done!");
    }else{
        reject("Hey you suck!")
    }
    
});
console.log(myPromise)