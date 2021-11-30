var xhr = new XMLHttpRequest();
xhr.open('GET', 'pets.json');

xhr.onload = function() {
  if (xhr.status === 200) {
    document.getElementById("ajax").innerHTML = xhr.responseText;
  } else {
    document.getElementById("ajax").innerHTML = "Something went wrong";
  }
}

//xhr.send();
// өгөгдсөн нь дээрх AJAX функц. Үүнийг 
// 1. Promise лүү дээрхийг хөрвүүлэн хувиргаж үр дүнг нь элемент id ="promise" дээр хэвлэнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

let myPromise = new Promise(function(resolve,reject){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'pets.json');
  xhr.onload = function(){
    if(xhr.status === 200){
      return resolve(xhr.responseText)
    }
    else{
      return reject(xhr.responseText)
    }
  }
  xhr.send()

})

myPromise.then(data => {
  list = JSON.parse(data)
  document.getElementById("promise").innerHTML = "<h3>By Promise</h3>"
  list.forEach(element => {
    document.getElementById("promise").innerHTML +="<ul>"
    document.getElementById("promise").innerHTML += `<li>name: ${element.name}</li>`
    document.getElementById("promise").innerHTML += `<li>type: ${element.type}</li>`
    document.getElementById("promise").innerHTML += `<li>breed: ${element.breed}</li>`
    document.getElementById("promise").innerHTML +="</ul>"
    
  })
})



// өгөгдсөн Ajax функцыг fetch лүү хөрвүүлэн үр дүнг нь элемент id="fetch" дээр хэвлэнэ үү.
// хэрвээ тусламж хэрэгтэй бол fetch_example.js файлнаас яаж fetch хэрэглэж байгааг харна уу.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу

fetch('pets.json')
  .then(response => {
    console.log(response.json())
    if(response.status) {
      return response.json()
    } else {
      return "not done";
    }
   
  })
  .then(data => {
    console.log(data)
    document.getElementById("fetch").innerHTML = "<h3>By Fetch</h3>"
    data.forEach(element =>{
      document.getElementById("fetch").innerHTML +="<ul>"
      document.getElementById("fetch").innerHTML += `<li>${element.name}</li>`
      document.getElementById("fetch").innerHTML += `<li>${element.type}</li>`
      document.getElementById("fetch").innerHTML += `<li>${element.breed}</li>`
      document.getElementById("fetch").innerHTML +="</ul>"
    })
  })
  .catch(error =>{
    document.getElementById("fetch").innerHTML = `<h3 style="color:red;">Fetch deer Aldaa garsaan catch bariad avsan</h3>`
  })

  fetch("pets.json").
  then(response => response.json)
 





