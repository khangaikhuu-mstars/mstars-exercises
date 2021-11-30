// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'pets.json');

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     document.getElementById("ajax").innerHTML = xhr.responseText;
//   } else {
//     document.getElementById("ajax").innerHTML = "Something went wrong";
//   }
// }

// xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

// const promise = new Promise(function (resolve, reject) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'pets.json');
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       resolve(xhr.responseText)


//     } else {
//       reject('wrong')
//       console.log('wrong')

//     }

//   }
//   xhr.send();
// })


// promise.then((data) => {
//   const dog = JSON.parse(data)
// console.log(dog)

// for(i = 0; i < dog.length; i++){
//   document.getElementById('promise').innerHTML +=`<h2> This is ${dog[i].name} </h2>`
//   document.getElementById('promise').innerHTML += ` <p>this is a ${dog[i].type}</p> `
//   document.getElementById('promise').innerHTML += ` <p>${dog[i].breed} </p> `
// }

// })






// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу
fetch("pets.json")
.then(response => response.json())

.then((data) =>{
  const dog = data
  console.log(dog)
  document.getElementById('fetch').innerHTML = ` <h1>Fetch</h1> `
  for(i = 0; i < dog.length; i ++){
    document.getElementById('fetch').innerHTML += ` <h2>name: ${dog[i].name} </h2> `
  }
})
