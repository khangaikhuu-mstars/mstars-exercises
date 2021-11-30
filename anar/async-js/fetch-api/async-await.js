const ajax = document.getElementById("ajax");


let xhr = new XMLHttpRequest();
xhr.open('GET', 'pets.json');

xhr.onload = function() {
  if (xhr.status === 200) {
    document.getElementById("ajax").innerHTML = xhr.responseText;
  } else {
    document.getElementById("ajax").innerHTML = "Something went wrong";
  }
}

xhr.send();

// Дээрх Ajax функцын жишээ өгөгдсөн бөгөөд энэхүү функцыг
// 1. fetch функц рүү хөрвүүлнэ үү



// 2. хэрвээ fetch функц рүү хөрвүүлсэн бол async/await ашиглан шинээр async функц шинээр тодорхойлоод fetch ашиглан pets.json аваад тэр утгаа буцаадаг болгоно уу

async function fetchJson() {
    const data = await fetch('pets.json');
    return data.json();
}

fetchJson()
    .then(data =>{
        console.log('Async function starts here');
        ajax.innerHTML += data.map(i => {
            console.log(i);
        })
    })
    .catch(() => console.log("Error occured !"))
    .finally(() => console.log("It's done"));
    
// 3. Дараа нь тухайн функцээ дуудан түүний үр дүн болон алдааг handle буюу боловсруулаад хамгийн сүүлд нь "It is done" гэсэн мессеж консоль дээр хэвлэнэ үү. async үргэлж Promise буцаадагийг санаарай
