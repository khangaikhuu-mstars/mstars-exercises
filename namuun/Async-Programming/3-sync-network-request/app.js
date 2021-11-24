function getJSON(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.map(p => console.log(p));
    }
  };
  xhr.send(null);
}

getJSON('https://jsonplaceholder.typicode.com/photos');
alert('Welcome to this page!');