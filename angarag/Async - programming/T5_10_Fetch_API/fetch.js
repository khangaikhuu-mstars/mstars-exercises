var xhr = new XMLHttpRequest();
xhr.open('GET', 'pets.json');



xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

const myPromise = new Promise((resolve, reject) => {
  xhr.onload = function () {
    if (xhr.status === 200) {
      return resolve(xhr.responseText)
    } else {
      return reject('You failed')
    }
  }
})

myPromise.then((data) => {
  const finalData = JSON.parse(data)
  finalData.map((i) => {
    console.log(finalData)
    document.getElementById('promise').innerHTML += `<h1>Mni amitang ${i.name} gedeg.</h1><h2>Ter bol ${i.type}.</h2><h3>Ter ${i.breed} ${i.type} </h3>`

  })
}).catch((error) => {
  document.getElementById('promise').innerHTML = error
})





// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch('pets.json')
  .then((angarag) => angarag.json())
  .then((data) => {
    data.map((d) => document.getElementById('fetch').innerHTML += `<h1>My pets name is ${d.name}</h1><h2>He is a good ${d.type}</h2><h3>He is from ${d.breed}</h3>`)
  })