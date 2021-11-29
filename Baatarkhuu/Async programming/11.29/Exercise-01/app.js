// const myPromise = new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "sidebar.html");
  
//     xhr.onreadystatechange = function () {
//       if (!xhr.status == 200) {
//         document.getElementById("ajax").innerHTML = xhr.responseText;
//         return resolve("It is working");
//       }else {
//           return reject('Reject is working');
//       }
//     };
  

//   xhr.send();
// });
// myPromise.then((data) => {
//     console.log(data)
// }).catch((error) => console.log(error))
// console.log(myPromise);
 
const btn = document.getElementById("button")
const myPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "sidebar.html");
    
      xhr.onreadystatechange = function () {
        if (xhr.status == 200) {

          return resolve("It is working");
        }else {
            return reject('Not found');
        }
      };
    
  
    xhr.send();
  });
  myPromise.then((data) => {
     document.getElementById('ajax').innerHTML = `<div><h1>${data}<h1></div>`
  }).catch((error) => document.getElementById("ajax").innerHTML = `<div><h1>${error}<h1></div>`)
  .finally(() => {btn.style.display = "none"});
   