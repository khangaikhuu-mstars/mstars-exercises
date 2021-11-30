// Доорх Promise функц өгөгдсөн бөгөөд
// үүнийг ашиглан callback_hell.js дээрх давхардсан setTimeout
// функцыг хувирган бичнэ үү.
//
function PromisifyingTimeout(fn, time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      try {
      	resolve(fn())
      } catch(e) {
      	reject(e)
      }
    }, time)
  })
}

function countThree() {
  console.log('3...');
}
// гэх мэтээр үргэлжлүүлэн бусад хэрэгтэй функцүүдийг бичнэ үү

// Даалгаврыг эндээс эхлэн хийнэ үү

function countTwo() {
  console.log('2...');
}

function countOne() {
  console.log('1...');
}

function sayDone() {
  console.log('DONE');
}

PromisifyingTimeout(countThree, 1000)
    .then(function () {
      return PromisifyingTimeout (countTwo, 1000)
    })
    .then(function () {
      return PromisifyingTimeout (countOne, 1000)
    })
    .finally(function () {
      return PromisifyingTimeout (sayDone, 1000)
    })