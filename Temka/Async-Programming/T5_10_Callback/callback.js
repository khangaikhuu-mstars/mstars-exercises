// Callback гэдэг нь event loop нь queue дотор байгаа зүйлсийг ажиллуулах буюу дуудах үе юм.
// Энэ нь Javascript Engine нь хэрвээ энэ функц ажлаа хийж дуусвал дараа нь энийг дууд гэсэн утгатай юм
// Энэ нь async функцыг дуудахад ашиглахад хэрэглэдэг бөгөөд үүнийг хэрэглэснээрээ тухайн функц нь эмх замбараагүй дуудагдахаас үр дүнгээ эмх замбараагүй гаргахыг хянан зохицуулж байгаа юм.

function printAfter3Seconds(){
  console.log('after 3 seconds I was called');
}

setTimeout(printAfter3Seconds, 3000);

function sum(val1, val2, callback) {
  var sum = val1 + val2;
  if (callback){
    callback(sum)
  }
}

function myCallback(response) {
  console.log('Sum result:', response);
}

sum(5, 6, myCallback);

