function getJSON(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.map(p => console.log(p));
      document.querySelector("p").innerHTML = data
    }
  };
  xhr.send(null);
}

getJSON('https://jsonplaceholder.typicode.com/photos');
alert('Welcome to this page!'); 
// document.querySelector("p").innerHTML = data