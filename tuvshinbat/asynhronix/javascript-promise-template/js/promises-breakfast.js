const isOrderReady = false;
const  myPromise = new Promise((resolve, reject) =>{
  if(isOrderReady){
      resolve("hey, yourr order is alreadydone . Come and git it")
  } else
  {
      reject(" hey, yourr order is alreadydone. Please reoder.")
  }
})
console.log(myPromise)