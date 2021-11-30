// Ajax call for pets.json file
var xhr = new XMLHttpRequest();
xhr.open("GET", "pets.json");

xhr.onload = function () {
  console.log(xhr.responseText);
};

xhr.send();

// fetch API call for pets.json file
fetch("pets.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
