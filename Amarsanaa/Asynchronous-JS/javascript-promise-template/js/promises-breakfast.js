const isOrderReady = false;

const myPromise = new Promise((resolve, reject) => {
  if (isOrderReady) {
    resolve("Hey, Your order is already done. Come and Get it.");
  } else {
    reject("Hey, Your order is rejected. Please reorder.");
  }
});

console.log(myPromise);
