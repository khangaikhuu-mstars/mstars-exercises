var xhr = new XMLHttpRequest();
xhr.open('GET', 'pets.json');

xhr.onload = function () {
  if (xhr.status === 200) {
    document.getElementById("ajax").innerHTML = xhr.responseText;
  } else {
    document.getElementById("ajax").innerHTML = "Something went wrong";
  }
}

xhr.send();

// Дээрх Ajax функцын жишээ өгөгдсөн бөгөөд энэхүү функцыг
// 1. fetch функц рүү хөрвүүлнэ үү

fetch('pets.json')
  .then(response => response.json())
  .then(data => {
    data.map((i) => {
      document.getElementById("ajax").innerHTML += `<li>${i.name} ${i.type} ${i.breed}</li>`;
    })
  }).catch(error => {
    document.getElementById('ajax').innerHTML += 'Something went wrong'
  })
// 2. хэрвээ fetch функц рүү хөрвүүлсэн бол async/await ашиглан шинээр async функц шинээр тодорхойлоод fetch ашиглан pets.json аваад тэр утгаа буцаадаг болгоно уу

async function asyncFetch() {
  const d = await fetch('pets.json')
  const response = await d.json();
  return response
}
// 3. Дараа нь тухайн функцээ дуудан түүний үр дүн болон алдааг handle буюу боловсруулаад хамгийн сүүлд нь "It is done" гэсэн мессеж консоль дээр хэвлэнэ үү. async үргэлж Promise буцаадагийг санаарай.

asyncFetch().then((data) => {
  data.map((j) => {
    console.log(j.name)
  })
}).catch((fail)=>{
  console.log('Not a found page')
})
.finally(() => {
  console.log('It is done')
})