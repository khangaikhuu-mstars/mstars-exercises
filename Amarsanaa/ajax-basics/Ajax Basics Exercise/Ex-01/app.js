// 1. Create new XMLHttpRequest
let xhr = new XMLHttpRequest();

// 2. Create a callback function
xhr.onreadystatechange = function () {
  console.log(xhr.status);
  if (xhr.status === 200) {
    console.log("The Request is ok");
    document.getElementById("ajax").innerHTML = xhr.responseText;
  }
};

// 3. Open a request
xhr.open("GET", "sidebar.html");

// 4. Send a request
xhr.send();
