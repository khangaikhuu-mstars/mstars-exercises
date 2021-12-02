function test(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'sidebar.html');
  xhr.onload = function() {
    callback(xhr.responseText);
  }
 xhr.send();
}

function print(data) {
  console.log(data);
}

test(print);




