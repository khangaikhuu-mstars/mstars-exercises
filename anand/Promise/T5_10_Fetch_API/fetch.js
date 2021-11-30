// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу
// const promise = new Promise(function (resolve, reject) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'pets.json');

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       return resolve(xhr.responseText)
//     } else {
//       return reject("Something went wrong")
//     }
//   }

//   xhr.send();
// })

//   promise.then((data)=>{
//     const data1 = JSON.parse(data)
//     for(i=0;i<data1.length;i++){
//       document.getElementById('promise').innerHTML = `My ${data1[i].name} is cuteaf. Breed is ${data1[i].breed}`
//     }
//   })
fetch(`pets.json`)
  .then(response => response.json())
  .then(data => data.map(obj => {
    document.getElementById('fetch').innerHTML = `${obj.name}`
  }));







// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу