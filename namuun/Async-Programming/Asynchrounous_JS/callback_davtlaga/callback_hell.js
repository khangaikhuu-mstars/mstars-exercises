// Өгөгдсөн нь доорх nested callback setTimeout функцүүд болно.
// Үүнийг callback hell гэж нэрлэж болох бөгөөд энэ давхарлан дуудсан функцүүд яг юу хийгээд байгааг мэдэхэд их төвөгтэй болно. Үүнийг ойлгомжтой болгохын тулд доорх даалгавруудыг хийнэ үү

setTimeout(function() {
  console.log('6...')
  setTimeout(function() {
    console.log('5...')
    setTimeout(function() {
      console.log('4...')
      setTimeout(function() {
        console.log('3...')
        setTimeout(function() {
          console.log('2...')
          setTimeout(function() {
            console.log('1...')
            setTimeout(function() {
              console.log('DONE!')
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 0);

// Даалгавар 1
// Энэхүү функцүүдийг хооронд нь ингэж давхардуулахгүйгээр 
// setTimeout функц болгоныг нь тусад нь функц болгоод 
// тэгээд callback функцээр дуудан харуулна уу.
// жишээ нь

// function countThree() {
//   console.log('3...');
//   setTimeout(countTwo, 1000);
// }

// function countTwo() {
//   console.log('2...');
//   setTimeout(countOne, 1000);
// }

// function countOne() {
//   console.log('1...');
//   setTimeout(sayDone, 1000);
// }

// function sayDone() {
//   console.log('DONE!');
// }

// countThree()

// // Promise //

// function PromisifyingTimeout(fn, time) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       try {
//       	resolve(fn())
//       } catch(e) {
//       	reject(e)
//       }
//     }, time)
//   })
// }

// function countThree() {
//   console.log('3...');
// }

// function countTwo() {
//   console.log('2...');
// }

// function countOne() {
//   console.log('1...');
// }

// function sayDone() {
//   console.log('DONE');
// }

// PromisifyingTimeout(countThree, 1000)
//     .then(function () {
//       return PromisifyingTimeout (countTwo, 1000)
//     })
//     .then(function () {
//       return PromisifyingTimeout (countOne, 1000)
//     })
//     .finally(function () {
//       return PromisifyingTimeout (sayDone, 1000)
//     })