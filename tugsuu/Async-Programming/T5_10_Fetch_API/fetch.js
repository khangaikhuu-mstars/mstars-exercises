// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'pets.json');

// xhr.onload = function() {
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


const promise = new Promise(function (resolve, reject) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'pets.json')
  xhr.onload = function () {
    if (xhr.status === 200) {
      return resolve(xhr.responseText)
    } else {
      return reject('Something went wrong')
    }
  }
  xhr.send()
})

promise.then((data) => {
  var json = JSON.parse(data)
  
  json.map(obj => {

    document.getElementById('promise').innerHTML += `${obj.name} ${obj.type} ${obj.breed}`
  })

}).catch((error) => {
  document.getElementById('promise').innerHTML += error
})

// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch('pets.json')
  .then(response =>
    response.json())
  .then(data => { 

    data.map(i => {

      document.getElementById('fetch').innerHTML += `${i.name} ${i.type} ${i.breed}`
    })

  })
  .catch(error => document.getElementById('fetch').innerHTML = error)