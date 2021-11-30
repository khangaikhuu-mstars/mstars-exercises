// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

divPromise = document.getElementById('promise');
divFetch = document.getElementById('fetch');

const promise = new Promise((resolve, reject) => {
 
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'pets.json');
 
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
      return resolve(xhr.responseText);
    } else {
      return reject("Something went wrong");
    }
  }
  xhr.send();
});

promise
  .then(data => {
    console.log(data);
    divPromise.innerHTML = data;
  })
  .catch(data => {
    console.log(data);
    divPromise.innerHTML = data;
  })
  .finally(() => {
    console.log('promise function ends');
  })


// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу


// console.log(typeof fetch('pets.json'));

fetch('pets.json')
  .then(response => {
    console.log(response.json())
    divFetch.innerHTML += response.map(i => {
      console.log(i)
    });
  })
  .catch(data => {
    divFetch.innerHTML = data
    console.log('no response !' + data)
  });