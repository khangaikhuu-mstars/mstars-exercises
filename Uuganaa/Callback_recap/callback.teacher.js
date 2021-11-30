// Өгөгдсөн нь доорх nested callback setTimeout функцүүд болно.
// Үүнийг callback hell гэж нэрлэж болох бөгөөд энэ давхарлан дуудсан функцүүд яг юу хийгээд байгааг мэдэхэд их төвөгтэй болно. Үүнийг ойлгомжтой болгохын тулд доорх даалгавруудыг хийнэ үү
// setTimeout(function() {
//     console.log('3...')
//     setTimeout(function() {
//       console.log('2...')
//       setTimeout(function() {
//         console.log('1...')
//         setTimeout(function() {
//           console.log('DONE!')
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 0);

// Даалгавар 1
// Энэхүү функцүүдийг хооронд нь ингэж давхардуулахгүйгээр 
// setTimeout функц болгоныг нь тусад нь функц болгоод 
// тэгээд callback функцээр дуудан харуулна уу.
// жишээ нь
// function countThree() {
//   console.log('3...');
//   setTimeout(countTwo, 1000);
// }

// гэх мэтээр үргэлжлүүлэн бичнэ үү.
// энэ мөрнөөс доош өөрийн хариултыг оруулна уу.

const myPromise = new Promise(function (resolve, reject) {


  function countSix() {
    console.log('6...');
    setTimeout(countFive, 1000);

  }

  function countFive() {
    console.log('5...');
    setTimeout(countFour, 1000);

  }

  function countFour() {
    console.log('4...');
    setTimeout(countThree, 1000);

  }

  function countThree() {
    console.log('3...');
    setTimeout(countTwo, 1000);

  }

  function countTwo() {
    console.log('2...')
    setTimeout(countOne, 1000);

  }

  function countOne() {
    console.log('1...')
    setTimeout(DONE, 1000);

  }

  function DONE() {
    console.log("done")
  }
  countSix()
})
// myPromise.then((data) => {
//   const data1 = (data)
//   const data2 = data1.data
//   for (i = 0; i < data2.length; i++) {
//     document.getElementById("button").innerHTML += `<li>${data2[i].name}</li>`

//   }
// }).catch((error) => {
//   document.getElementById("button").innerHTML = error
// }).finally((event) => {
//   btn.style.display = "none"
// })