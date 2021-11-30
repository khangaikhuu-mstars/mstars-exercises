const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    try {
      resolve(fn())
    } catch (e) {
      reject(e)
    }
  }, 1000)
});


promise
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally((last) => console.log(last));